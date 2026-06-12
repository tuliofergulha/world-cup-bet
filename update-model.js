#!/usr/bin/env node
/**
 * update-model.js — Re-rating dinâmico do Elo após jogos disputados.
 *
 * Lê data.js (jogos com placar) e modelo.json (ratings + previsões).
 * Para cada jogo encerrado que ainda não foi processado, atualiza o Elo
 * dos dois times (fórmula clássica, K=30 para Copa) e recalcula λs e
 * probabilidades pM/pE/pV para todos os jogos futuros.
 *
 * Uso:  node update-model.js
 * Idempotente: marca jogos processados em `modelo.json.processados[]`.
 *
 * Mapeamento Elo→λ (regressão sobre o modelo inicial — R²~0.98):
 *   λ_mandante = exp(0.325 + 0.00158 * (eM - eV))
 *   λ_visitante = exp(0.456 + 0.00416 * (eV - eM))
 *   onde eM e eV já incluem +100 de bônus de sede quando aplicável.
 *
 * Probabilidades vêm da convolução Poisson dos dois λs até gols=10.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const MODELO_PATH = path.join(ROOT, 'modelo.json');
const DATA_PATH = path.join(ROOT, 'data.js');

const K = 30;             // K-factor (Copa do Mundo, FIFA usa 60 para finais — 30 é conservador)
const HOST_BONUS = 100;   // bônus de sede em pontos Elo
const A_HOME = 0.325, B_HOME = 0.00158;
const A_AWAY = 0.456, B_AWAY = 0.00416;
const MAX_GOALS = 10;

function poissonPMF(lambda, k) {
  let p = Math.exp(-lambda);
  for (let i = 1; i <= k; i++) p *= lambda / i;
  return p;
}

function scoreProbs(lM, lV) {
  let pM = 0, pE = 0, pV = 0;
  const pmfM = [], pmfV = [];
  for (let i = 0; i <= MAX_GOALS; i++) { pmfM.push(poissonPMF(lM, i)); pmfV.push(poissonPMF(lV, i)); }
  for (let i = 0; i <= MAX_GOALS; i++) {
    for (let j = 0; j <= MAX_GOALS; j++) {
      const p = pmfM[i] * pmfV[j];
      if (i > j) pM += p;
      else if (i < j) pV += p;
      else pE += p;
    }
  }
  return { pM, pE, pV };
}

function lambdaPair(eM, eV, sedeM, sedeV) {
  const aM = eM + (sedeM ? HOST_BONUS : 0);
  const aV = eV + (sedeV ? HOST_BONUS : 0);
  const d = aM - aV;
  return { lM: Math.exp(A_HOME + B_HOME * d), lV: Math.exp(A_AWAY - B_AWAY * d) };
}

function expectedScore(eM, eV) {
  return 1 / (1 + Math.pow(10, (eV - eM) / 400));
}

function parsePlacar(s) {
  if (!s) return null;
  const parts = s.replace(/\s/g, '').split('×');
  if (parts.length !== 2) return null;
  const gm = parseInt(parts[0]), gv = parseInt(parts[1]);
  if (isNaN(gm) || isNaN(gv)) return null;
  return { gm, gv };
}

function loadData() {
  const src = fs.readFileSync(DATA_PATH, 'utf8');
  const sandbox = {};
  const fn = new Function('sandbox', src.replace('const DATA', 'sandbox.DATA') + '; return sandbox.DATA;');
  return fn(sandbox);
}

function main() {
  const modelo = JSON.parse(fs.readFileSync(MODELO_PATH, 'utf8'));
  const data = loadData();
  if (!modelo.processados) modelo.processados = [];
  const processados = new Set(modelo.processados);

  const elo = modelo.elo;
  const jogosFinalizados = [];
  data.dias.forEach(d => d.jogos.forEach(g => {
    const p = parsePlacar(g.placar);
    if (p) jogosFinalizados.push({ data: d.data, hora: g.hora, m: g.mandante, v: g.visitante, ...p });
  }));
  jogosFinalizados.sort((a, b) => (a.data + a.hora).localeCompare(b.data + b.hora));

  // Index para snapshot das probs pré-jogo (Brier score precisa disso).
  const jogoIdx = new Map();
  modelo.jogos.forEach((jg, i) => jogoIdx.set(`${jg.m}|${jg.v}`, i));

  let updated = 0;
  for (const j of jogosFinalizados) {
    const key = `${j.data}|${j.m}|${j.v}`;
    if (processados.has(key)) continue;
    if (!elo[j.m] || !elo[j.v]) {
      console.warn(`[skip] time desconhecido no modelo: ${j.m} ou ${j.v}`);
      continue;
    }
    // ANTES de re-ratear, salva snapshot das probs pré-jogo no jogo correspondente.
    const mi = jogoIdx.get(`${j.m}|${j.v}`);
    if (mi != null) {
      const jg = modelo.jogos[mi];
      if (jg.pM_pre == null) {
        jg.pM_pre = jg.pM; jg.pE_pre = jg.pE; jg.pV_pre = jg.pV;
        jg.lM_pre = jg.lM; jg.lV_pre = jg.lV;
      }
    }
    const eM = elo[j.m].elo, eV = elo[j.v].elo;
    const aM = eM + (elo[j.m].sede ? HOST_BONUS : 0);
    const aV = eV + (elo[j.v].sede ? HOST_BONUS : 0);
    const expM = expectedScore(aM, aV);
    const expV = 1 - expM;
    const sM = j.gm > j.gv ? 1 : j.gm === j.gv ? 0.5 : 0;
    const sV = 1 - sM;
    // margin-of-victory multiplier (FIFA-ish): 1 + ln(|diff|+1)
    const diff = Math.abs(j.gm - j.gv);
    const mov = 1 + Math.log(diff + 1);
    const deltaM = K * mov * (sM - expM);
    const deltaV = K * mov * (sV - expV);
    elo[j.m].elo = Math.round((eM + deltaM) * 10) / 10;
    elo[j.v].elo = Math.round((eV + deltaV) * 10) / 10;
    processados.add(key);
    updated++;
    console.log(`✓ ${j.data} ${j.m} ${j.gm}×${j.gv} ${j.v}  Δ ${deltaM >= 0 ? '+' : ''}${deltaM.toFixed(1)} / ${deltaV >= 0 ? '+' : ''}${deltaV.toFixed(1)}`);
  }

  // Recalcula λs e probs de TODOS os jogos (não só os futuros) — barato.
  for (const jg of modelo.jogos) {
    const { lM, lV } = lambdaPair(elo[jg.m].elo, elo[jg.v].elo, elo[jg.m].sede, elo[jg.v].sede);
    const probs = scoreProbs(lM, lV);
    jg.lM = Math.round(lM * 100) / 100;
    jg.lV = Math.round(lV * 100) / 100;
    jg.pM = Math.round(probs.pM * 1000) / 1000;
    jg.pE = Math.round(probs.pE * 1000) / 1000;
    jg.pV = Math.round(probs.pV * 1000) / 1000;
  }

  modelo.processados = [...processados];
  modelo.atualizadoEm = new Date().toISOString();
  fs.writeFileSync(MODELO_PATH, JSON.stringify(modelo, null, 1));
  console.log(`\nProcessados ${updated} novo(s) jogo(s). modelo.json atualizado.`);
}

main();
