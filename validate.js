#!/usr/bin/env node
/**
 * validate.js — Validações pré-commit do data.js.
 *
 * Roda no fim da routine, antes do `git add data.js && git commit`.
 * Se sair com código != 0, NÃO commitar.
 *
 * Checa: sintaxe, nomes de times válidos, formato de placar, dicas com
 * resultado nos jogos encerrados, dias sem duplicata, datas válidas.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DATA_PATH = path.join(ROOT, 'data.js');
const APP_PATH = path.join(ROOT, 'app.js');

const errors = [];
const warnings = [];

function loadData() {
  const src = fs.readFileSync(DATA_PATH, 'utf8');
  const sandbox = {};
  const fn = new Function('sandbox', src.replace('const DATA', 'sandbox.DATA') + '; return sandbox.DATA;');
  return fn(sandbox);
}

function extractGroupTeams() {
  const src = fs.readFileSync(APP_PATH, 'utf8');
  const match = src.match(/const GROUP_TEAMS = (\{[\s\S]*?^\});/m);
  if (!match) throw new Error('GROUP_TEAMS não encontrado em app.js');
  return new Function('return ' + match[1])();
}

let DATA;
try { DATA = loadData(); } catch (e) {
  console.error('✗ data.js inválido:', e.message);
  process.exit(1);
}

const GROUP_TEAMS = extractGroupTeams();
const validTeams = new Set();
Object.values(GROUP_TEAMS).forEach(arr => arr.forEach(t => validTeams.add(t)));

// 1. atualizadoEm é ISO válido
if (!DATA.atualizadoEm || isNaN(Date.parse(DATA.atualizadoEm))) {
  errors.push('atualizadoEm ausente ou inválido');
}

// 2. dias
if (!Array.isArray(DATA.dias) || !DATA.dias.length) {
  errors.push('DATA.dias vazio ou inválido');
}

const datas = new Set();
DATA.dias.forEach((d, di) => {
  const tag = `dia[${di}] (${d.data || '?'})`;

  if (!d.data || !/^\d{4}-\d{2}-\d{2}$/.test(d.data)) errors.push(`${tag}: data ausente ou formato != YYYY-MM-DD`);
  if (datas.has(d.data)) errors.push(`${tag}: data duplicada`);
  datas.add(d.data);
  if (!d.titulo) errors.push(`${tag}: sem título`);

  if (!Array.isArray(d.jogos)) { errors.push(`${tag}: jogos não é array`); return; }

  d.jogos.forEach((g, gi) => {
    const gtag = `${tag} jogo[${gi}] ${g.mandante || '?'} × ${g.visitante || '?'}`;

    if (g.mandante && !validTeams.has(g.mandante)) errors.push(`${gtag}: mandante "${g.mandante}" não está em GROUP_TEAMS`);
    if (g.visitante && !validTeams.has(g.visitante)) errors.push(`${gtag}: visitante "${g.visitante}" não está em GROUP_TEAMS`);

    if (!g.hora || !/^\d{1,2}h\d*$/.test(g.hora)) errors.push(`${gtag}: hora "${g.hora}" inválida (esperado "16h" ou "16h30")`);

    if (g.grupo && !GROUP_TEAMS[g.grupo]) warnings.push(`${gtag}: grupo "${g.grupo}" desconhecido (ok se for mata-mata)`);

    const placar = g.placar;
    if (placar !== null && placar !== undefined) {
      if (!/^\d+ × \d+$/.test(placar)) {
        errors.push(`${gtag}: placar "${placar}" precisa estar no formato "X × Y" com espaços e ×`);
      }
    }

    const dicas = g.dicas || g.apostas || [];
    if (!Array.isArray(dicas)) errors.push(`${gtag}: dicas não é array`);

    const isFinished = !!placar;
    const cats = { conservadora: 0, intermediaria: 0, loucura: 0 };
    dicas.forEach((tip, ti) => {
      const ttag = `${gtag} dica[${ti}]`;
      if (!tip.cat || !(tip.cat in cats)) errors.push(`${ttag}: cat "${tip.cat}" inválida (esperado conservadora/intermediaria/loucura)`);
      else cats[tip.cat]++;
      if (!tip.mercado) errors.push(`${ttag}: sem mercado`);
      if (!tip.justificativa) errors.push(`${ttag}: sem justificativa`);

      if (isFinished) {
        if (!tip.resultado) errors.push(`${ttag}: jogo encerrado mas dica sem campo "resultado" (use "hit", "miss" ou "void")`);
        else if (!['hit', 'miss', 'void'].includes(tip.resultado)) errors.push(`${ttag}: resultado "${tip.resultado}" inválido (use "hit", "miss" ou "void")`);
      } else if (tip.resultado) {
        warnings.push(`${ttag}: jogo não encerrado mas dica já tem resultado "${tip.resultado}"`);
      }
    });

    if (!isFinished && dicas.length > 0) {
      // Para jogos futuros, exigir >= 3 por categoria
      Object.entries(cats).forEach(([c, n]) => {
        if (n < 3) warnings.push(`${gtag}: só ${n} dica(s) na categoria ${c} (alvo: ≥3)`);
      });
    }
  });
});

// 3. Mensagem final
if (warnings.length) {
  console.log('⚠ Avisos:');
  warnings.forEach(w => console.log('  ' + w));
}
if (errors.length) {
  console.log('\n✗ Erros:');
  errors.forEach(e => console.log('  ' + e));
  console.log(`\n${errors.length} erro(s). NÃO commitar.`);
  process.exit(1);
}
console.log(`✓ data.js válido (${DATA.dias.length} dia(s), ${DATA.dias.reduce((s, d) => s + d.jogos.length, 0)} jogo(s)).`);
