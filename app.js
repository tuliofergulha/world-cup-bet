/* ══════════════════════════════════════════
   Copa 2026 — Painel de Análise
   App v2
   ══════════════════════════════════════════ */

const CATS = {
  conservadora: ["c", "Alta Confianca"],
  intermediaria: ["i", "Valor"],
  loucura: ["l", "Especulativa"]
};
const CAT_ICONS = { c: "🟢", i: "🟡", l: "🟣" };

const FLAGS = {
  "México":"🇲🇽","África do Sul":"🇿🇦","Coreia do Sul":"🇰🇷","Tchéquia":"🇨🇿",
  "Canadá":"🇨🇦","Bósnia e Herz.":"🇧🇦","Suíça":"🇨🇭","Catar":"🇶🇦",
  "Brasil":"🇧🇷","Marrocos":"🇲🇦","Escócia":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","Haiti":"🇭🇹",
  "EUA":"🇺🇸","Paraguai":"🇵🇾","Turquia":"🇹🇷","Austrália":"🇦🇺",
  "Alemanha":"🇩🇪","Equador":"🇪🇨","Holanda":"🇳🇱","Japão":"🇯🇵",
  "Bélgica":"🇧🇪","Espanha":"🇪🇸","França":"🇫🇷","Argentina":"🇦🇷",
  "Portugal":"🇵🇹","Colômbia":"🇨🇴","Inglaterra":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Croácia":"🇭🇷",
  "Uruguai":"🇺🇾","Senegal":"🇸🇳","Noruega":"🇳🇴","Irã":"🇮🇷","Egito":"🇪🇬",
  "Costa do Marfim":"🇨🇮","Curaçao":"🇨🇼","Suécia":"🇸🇪","Tunísia":"🇹🇳",
  "Nova Zelândia":"🇳🇿","Arábia Saudita":"🇸🇦","Cabo Verde":"🇨🇻",
  "Iraque":"🇮🇶","Áustria":"🇦🇹","Argélia":"🇩🇿","Jordânia":"🇯🇴",
  "RD Congo":"🇨🇩","Uzbequistão":"🇺🇿","Panamá":"🇵🇦","Gana":"🇬🇭"
};
const flag = t => FLAGS[t] ?? "🏳";

const GROUP_TEAMS = {
  A: ["México", "Coreia do Sul", "Tchéquia", "África do Sul"],
  B: ["Suíça", "Canadá", "Bósnia e Herz.", "Catar"],
  C: ["Brasil", "Marrocos", "Escócia", "Haiti"],
  D: ["Turquia", "Paraguai", "EUA", "Austrália"],
  E: ["Equador", "Alemanha", "Costa do Marfim", "Curaçao"],
  F: ["Holanda", "Japão", "Suécia", "Tunísia"],
  G: ["Bélgica", "Irã", "Egito", "Nova Zelândia"],
  H: ["Espanha", "Uruguai", "Arábia Saudita", "Cabo Verde"],
  I: ["França", "Noruega", "Senegal", "Iraque"],
  J: ["Argentina", "Áustria", "Argélia", "Jordânia"],
  K: ["Portugal", "Colômbia", "RD Congo", "Uzbequistão"],
  L: ["Inglaterra", "Croácia", "Panamá", "Gana"]
};

// ── State ──
let state = {
  tab: "jogos",
  search: "",
  filterGrupo: "",
  filterCat: "",
  filterStatus: "",
  theme: localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
};

// ── Theme ──
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("theme", state.theme);
  const icon = state.theme === "dark" ? "☀️" : "🌙";
  const btn = document.getElementById("theme-btn");
  const btnM = document.getElementById("theme-btn-mobile");
  if (btn) btn.textContent = icon;
  if (btnM) btnM.textContent = icon;
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
}

// ── Scorecard ──
function computeScorecard() {
  const byCat = {
    conservadora: { total: 0, hits: 0, misses: 0, pending: 0, stakeWin: 0, stakeLoss: 0 },
    intermediaria: { total: 0, hits: 0, misses: 0, pending: 0, stakeWin: 0, stakeLoss: 0 },
    loucura: { total: 0, hits: 0, misses: 0, pending: 0, stakeWin: 0, stakeLoss: 0 }
  };
  let resultadosTotal = 0, resultadosHit = 0;

  DATA.dias.forEach(d => {
    d.jogos.forEach(g => {
      if (g.placar) {
        resultadosTotal++;
        const statsLower = (g.stats || "").toLowerCase();
        if (statsLower.includes("✓") || statsLower.includes("acertou") || statsLower.includes("cravou") || statsLower.includes("aprovado"))
          resultadosHit++;
      }
      const dicas = g.dicas || g.apostas || [];
      dicas.forEach(tip => {
        const cat = byCat[tip.cat];
        if (!cat) return;
        cat.total++;
        const txt = (tip.justificativa || "").toLowerCase();
        const isHit = txt.includes("✓") || txt.includes("acertou");
        const isMiss = txt.includes("✗") || txt.includes("errou");
        if (isHit) {
          cat.hits++;
          if (tip.odd) cat.stakeWin += (tip.odd - 1);
        } else if (isMiss) {
          cat.misses++;
          if (tip.odd) cat.stakeLoss += 1;
        } else {
          cat.pending++;
        }
      });
    });
  });

  const allResolved = Object.values(byCat).reduce((s, c) => s + c.hits + c.misses, 0);
  const allHits = Object.values(byCat).reduce((s, c) => s + c.hits, 0);
  const allTotal = Object.values(byCat).reduce((s, c) => s + c.total, 0);
  const allPending = Object.values(byCat).reduce((s, c) => s + c.pending, 0);

  return { byCat, allResolved, allHits, allTotal, allPending, resultadosTotal, resultadosHit };
}

function catRoi(cat) {
  const resolved = cat.hits + cat.misses;
  if (!resolved) return 0;
  return (cat.stakeWin - cat.stakeLoss) / resolved * 100;
}

function renderScorecard() {
  const el = document.getElementById("scorecard");
  const sc = computeScorecard();
  if (sc.allResolved === 0 && sc.resultadosTotal === 0) {
    el.innerHTML = "";
    el.style.display = "none";
    return;
  }
  el.style.display = "";

  const catNames = { conservadora: "Alta Confianca", intermediaria: "Valor", loucura: "Especulativa" };
  const catColors = { conservadora: "var(--green)", intermediaria: "var(--amber)", loucura: "var(--purple)" };
  const catIcons = { conservadora: "🟢", intermediaria: "🟡", loucura: "🟣" };

  let html = "";

  if (sc.resultadosTotal > 0) {
    const resPct = Math.round(sc.resultadosHit / sc.resultadosTotal * 100);
    html += `<div class="sc-item">
      <div class="sc-value ${resPct >= 50 ? 'positive' : 'negative'}">${resPct}%</div>
      <div class="sc-label">Modelo: resultado <span style="font-weight:400">(${sc.resultadosHit}/${sc.resultadosTotal})</span></div>
    </div>`;
  }

  for (const [key, cat] of Object.entries(sc.byCat)) {
    const resolved = cat.hits + cat.misses;
    if (!resolved) continue;
    const pct = Math.round(cat.hits / resolved * 100);
    html += `<div class="sc-item">
      <div class="sc-value" style="color:${catColors[key]}">${pct}%</div>
      <div class="sc-label">${catIcons[key]} ${catNames[key]} <span style="font-weight:400">(${cat.hits}/${resolved})</span></div>
    </div>`;
  }

  if (sc.allPending > 0) {
    html += `<div class="sc-item">
      <div class="sc-value neutral">${sc.allPending}</div>
      <div class="sc-label">Pendentes</div>
    </div>`;
  }

  el.innerHTML = html;
}

// ── Standings ──
function computeStandings() {
  const groups = {};
  DATA.dias.forEach(d => {
    d.jogos.forEach(g => {
      if (!g.placar) return;
      const grp = g.grupo;
      if (!groups[grp]) groups[grp] = {};
      [g.mandante, g.visitante].forEach(t => {
        if (!groups[grp][t]) groups[grp][t] = { team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 };
      });
      const parts = g.placar.replace(/\s/g, "").split("×");
      if (parts.length !== 2) return;
      const gm = parseInt(parts[0]), gv = parseInt(parts[1]);
      if (isNaN(gm) || isNaN(gv)) return;
      const home = groups[grp][g.mandante], away = groups[grp][g.visitante];
      home.gf += gm; home.ga += gv;
      away.gf += gv; away.ga += gm;
      if (gm > gv) { home.w++; home.p += 3; away.l++; }
      else if (gm < gv) { away.w++; away.p += 3; home.l++; }
      else { home.d++; home.p += 1; away.d++; away.p += 1; }
    });
  });
  return groups;
}

function renderStandings() {
  const el = document.getElementById("standings");
  const results = computeStandings();

  const sortedGroupKeys = Object.keys(GROUP_TEAMS).sort();

  el.innerHTML = '<div class="standings-grid">' + sortedGroupKeys.map(grp => {
    const teams = GROUP_TEAMS[grp].map(t => {
      if (results[grp] && results[grp][t]) return results[grp][t];
      return { team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 };
    }).sort((a, b) => b.p - a.p || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf);

    return `<div class="group-table">
      <div class="group-table-header">Grupo ${grp}</div>
      <table>
        <thead><tr><th>Time</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GM</th><th>GS</th><th>SG</th><th>Pts</th></tr></thead>
        <tbody>${teams.map((t, i) => {
          const j = t.w + t.d + t.l;
          const sg = t.gf - t.ga;
          return `<tr class="${i < 2 && j > 0 ? 'qualified' : ''}">
            <td>${flag(t.team)} ${t.team}</td>
            <td>${j}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td>
            <td>${t.gf}</td><td>${t.ga}</td>
            <td>${sg > 0 ? '+' + sg : sg}</td>
            <td class="pts">${t.p}</td>
          </tr>`;
        }).join("")}</tbody>
      </table>
    </div>`;
  }).join("") + '</div>';
}

// ── Tip badge ──
function tipBadge(tip) {
  const txt = (tip.justificativa || "").toLowerCase();
  if (txt.includes("✓") || txt.includes("acertou")) return '<span class="badge badge-hit">Acertou</span>';
  if (txt.includes("✗") || txt.includes("errou")) return '<span class="badge badge-miss">Errou</span>';
  if (tip._gameFinished) return '<span class="badge badge-pending">—</span>';
  return '<span class="badge badge-pending">Pendente</span>';
}

// ── Countdown ──
function getCountdown(dateStr, timeStr) {
  const match = timeStr.match(/(\d+)h(\d*)/);
  if (!match) return null;
  const h = parseInt(match[1]), m = parseInt(match[2] || "0");
  const gameDate = new Date(dateStr + "T" + String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":00-03:00");
  const now = new Date();
  const diff = gameDate - now;
  if (diff <= 0) return null;
  const hours = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    return days + "d " + (hours % 24) + "h";
  }
  return hours + "h" + String(mins).padStart(2, "0") + "m";
}

function getNextGame() {
  let next = null;
  DATA.dias.forEach(d => {
    d.jogos.forEach(g => {
      if (g.placar) return;
      const cd = getCountdown(d.data, g.hora);
      if (cd) {
        if (!next) next = { game: g, day: d, cd };
        else {
          const match1 = g.hora.match(/(\d+)h(\d*)/);
          const match2 = next.game.hora.match(/(\d+)h(\d*)/);
          if (match1 && match2) {
            const t1 = parseInt(match1[1]) * 60 + parseInt(match1[2] || 0);
            const t2 = parseInt(match2[1]) * 60 + parseInt(match2[2] || 0);
            if (d.data + t1 < next.day.data + t2) next = { game: g, day: d, cd };
          }
        }
      }
    });
  });
  return next;
}

// ── Render game ──
function renderGame(g, dayData) {
  const dicas = g.dicas || g.apostas || [];
  const hasTips = dicas.length > 0;
  const isFinished = !!g.placar;

  const sep = g.placar
    ? `<span class="g-score">${g.placar}</span>`
    : `<span class="g-sep">vs</span>`;
  const matchup = `
    <span class="g-team">${flag(g.mandante)} ${g.mandante}</span>
    ${sep}
    <span class="g-team">${flag(g.visitante)} ${g.visitante}</span>`;

  let countdownHtml = "";
  if (!isFinished && dayData) {
    const cd = getCountdown(dayData.data, g.hora);
    if (cd) countdownHtml = `<span class="g-countdown">em ${cd}</span>`;
  }

  let numsHtml = "";
  if (g.numeros && g.numeros.length) {
    numsHtml = `<div class="g-nums">` +
      g.numeros.map(n => `<div class="num-pill"><span class="np-v">${n.v}</span><span class="np-l">${n.l}</span></div>`).join("") +
      "</div>";
  }

  let tipsHtml = "";
  if (hasTips) {
    const grouped = Object.entries(CATS).map(([key, [cls, label]]) => {
      const items = dicas.filter(b => b.cat === key);
      if (!items.length) return "";
      return `<div class="cat ${cls}"><div class="cat-header">${CAT_ICONS[cls]} ${label} <span style="color:var(--muted);font-weight:400">(${items.length})</span></div>` +
        items.map(b => {
          const tipData = { ...b, _gameFinished: isFinished };
          return `<div class="tip">
            <div class="tip-top">
              <span class="m">${b.mercado}</span>
              <span style="display:flex;align-items:center;gap:6px">
                ${tipBadge(tipData)}
                ${b.odd ? `<span class="o">@${typeof b.odd === "number" ? b.odd.toFixed(2) : b.odd}</span>` : ""}
              </span>
            </div>
            <div class="j">${b.justificativa}</div>
          </div>`;
        }).join("") + "</div>";
    }).join("");
    if (grouped.trim()) {
      tipsHtml = `<div class="tips-section">
        <div class="tips-title">💡 Dicas & Analise</div>
        ${grouped}
      </div>`;
    }
  }

  const hasBody = g.stats || numsHtml || tipsHtml;
  const cardClass = `game-card${hasTips ? " has-tips" : ""}${isFinished ? " finished" : ""}`;

  return `<div class="${cardClass}" data-mandante="${g.mandante}" data-visitante="${g.visitante}" data-grupo="${g.grupo}">
    <div class="g-hdr">
      <div class="g-matchup">${matchup}</div>
      <div class="g-meta">
        <span class="g-time">${g.hora}</span>
        ${countdownHtml}
        <span class="g-dot">·</span>
        <span>Grupo ${g.grupo}</span>
        <span class="g-dot">·</span>
        <span>${g.local}</span>
      </div>
    </div>
    ${hasBody ? `<div class="g-body">
      ${g.stats ? `<div class="g-stats">📊 ${g.stats}</div>` : ""}
      ${numsHtml}
      ${tipsHtml}
    </div>` : ""}
  </div>`;
}

// ── Filtering ──
function matchesFilters(game, dayData) {
  if (state.filterGrupo && game.grupo !== state.filterGrupo) return false;

  if (state.search) {
    const q = state.search.toLowerCase();
    const haystack = [game.mandante, game.visitante, game.local, game.grupo, game.stats || ""].join(" ").toLowerCase();
    const dicas = game.dicas || game.apostas || [];
    const dicasText = dicas.map(d => d.mercado + " " + d.justificativa).join(" ").toLowerCase();
    if (!haystack.includes(q) && !dicasText.includes(q)) return false;
  }

  if (state.filterStatus === "finished" && !game.placar) return false;
  if (state.filterStatus === "upcoming" && game.placar) return false;

  if (state.filterCat) {
    const dicas = game.dicas || game.apostas || [];
    if (!dicas.some(d => d.cat === state.filterCat)) return false;
  }

  return true;
}

// ── Render days ──
function renderDays() {
  const root = document.getElementById("days-content");
  const sorted = [...DATA.dias].sort((a, b) => b.data.localeCompare(a.data));
  let html = "";
  let anyVisible = false;

  sorted.forEach((d, idx) => {
    const filteredGames = d.jogos.filter(g => matchesFilters(g, d));
    if (!filteredGames.length) return;
    anyVisible = true;

    const dt = new Date(d.data + "T12:00:00")
      .toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });

    const isOpen = idx === 0 || state.search || state.filterGrupo || state.filterCat || state.filterStatus;
    const gameCount = filteredGames.length;
    const finishedCount = filteredGames.filter(g => g.placar).length;
    let badgeText = gameCount + " jogo" + (gameCount > 1 ? "s" : "");
    if (finishedCount > 0 && finishedCount < gameCount) badgeText = finishedCount + "/" + gameCount + " encerrados";
    else if (finishedCount === gameCount) badgeText = "Encerrado";

    html += `<div class="day ${isOpen ? 'open' : ''}" data-day="${d.data}">
      <div class="day-h" onclick="toggleDay(this)">
        <h2><span class="chev">▶</span> ${d.titulo}</h2>
        <span style="display:flex;align-items:center;gap:8px">
          <span class="d-badge">${badgeText}</span>
          <span class="d-date">${dt}</span>
        </span>
      </div>
      <div class="day-body ${isOpen ? '' : 'hidden'}">
        ${d.contexto ? `<div class="ctx">${d.contexto}</div>` : ""}
        ${filteredGames.map(g => renderGame(g, d)).join("")}
      </div>
    </div>`;
  });

  if (!anyVisible) {
    html = '<div class="no-results"><div class="nr-icon">🔍</div><div class="nr-text">Nenhum jogo encontrado com esses filtros</div></div>';
  }

  root.innerHTML = html;
}

function toggleDay(el) {
  const day = el.parentElement;
  day.classList.toggle("open");
  day.querySelector(".day-body").classList.toggle("hidden");
}

// ── Tournament stats ──
function renderTourneyStats() {
  const ts = DATA.estatisticas || {};
  const el = document.getElementById("tourney-stats");
  const items = [
    ts.totalJogos ? { i: "📅", v: ts.totalJogos, l: "Jogos disputados" } : null,
    ts.totalGols ? { i: "⚽", v: ts.totalGols, l: "Gols no torneio" } : null,
    ts.mediaPorJogo ? { i: "📊", v: ts.mediaPorJogo, l: "Media gols/jogo" } : null,
    ts.cartoesAmarelos ? { i: "🟨", v: ts.cartoesAmarelos, l: "Cartoes amarelos" } : null,
    ts.escanteiosMed ? { i: "🚩", v: ts.escanteiosMed, l: "Media escanteios" } : null,
  ].filter(Boolean);
  if (!items.length) { el.style.display = "none"; return; }
  el.innerHTML = items.map(x =>
    `<div class="ts"><span class="ti">${x.i}</span><div><div class="tv">${x.v}</div><div class="tl">${x.l}</div></div></div>`
  ).join("");
}

// ── Sticky bar ──
function updateStickyBar() {
  const bar = document.getElementById("sticky-bar");
  const next = getNextGame();
  if (!next) { bar.classList.remove("visible"); return; }
  bar.classList.add("visible");
  bar.innerHTML = `
    <div class="sticky-next">
      <span style="color:var(--muted);font-size:.75rem">Proximo:</span>
      <span class="teams">${flag(next.game.mandante)} ${next.game.mandante} vs ${flag(next.game.visitante)} ${next.game.visitante}</span>
    </div>
    <span class="sticky-countdown">⏱ ${next.cd}</span>`;
}

// ── Tabs ──
function switchTab(tab) {
  state.tab = tab;
  document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  document.querySelectorAll(".bnav-item").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + tab));

  const isJogos = tab === "jogos";
  document.getElementById("scorecard").style.display = isJogos ? "" : "none";
  document.getElementById("tourney-stats").style.display = isJogos ? "" : "none";

  if (tab === "grupos") renderStandings();
  if (tab === "performance") renderPerformancePanel();

  window.scrollTo({ top: 0, behavior: "instant" });
}

// ── Performance panel ──
function renderPerformancePanel() {
  const el = document.getElementById("perf-content");
  const sc = computeScorecard();
  if (sc.allResolved === 0 && sc.resultadosTotal === 0) {
    el.innerHTML = '<div class="no-results"><div class="nr-icon">📈</div><div class="nr-text">Sem dicas resolvidas ainda — volte apos os primeiros jogos</div></div>';
    return;
  }

  const catMeta = {
    conservadora: { icon: "🟢", label: "Alta Confianca", color: "var(--green)", desc: "Apostas seguras, alta probabilidade" },
    intermediaria: { icon: "🟡", label: "Valor", color: "var(--amber)", desc: "Risco moderado, odds com valor" },
    loucura: { icon: "🟣", label: "Especulativa", color: "var(--purple)", desc: "Alto risco, alta recompensa" }
  };

  let resultadoHtml = "";
  if (sc.resultadosTotal > 0) {
    const resPct = Math.round(sc.resultadosHit / sc.resultadosTotal * 100);
    resultadoHtml = `
      <div class="perf-section">
        <h3 class="perf-section-title">🎯 Acerto de Resultado (Modelo)</h3>
        <p class="perf-section-desc">O modelo previu corretamente o vencedor/empate?</p>
        <div class="scorecard">
          <div class="sc-item">
            <div class="sc-value ${resPct >= 50 ? 'positive' : 'negative'}">${resPct}%</div>
            <div class="sc-label">Taxa de acerto</div>
          </div>
          <div class="sc-item">
            <div class="sc-value positive">${sc.resultadosHit}</div>
            <div class="sc-label">Acertos</div>
          </div>
          <div class="sc-item">
            <div class="sc-value negative">${sc.resultadosTotal - sc.resultadosHit}</div>
            <div class="sc-label">Erros</div>
          </div>
          <div class="sc-item">
            <div class="sc-value">${sc.resultadosTotal}</div>
            <div class="sc-label">Jogos encerrados</div>
          </div>
        </div>
      </div>`;
  }

  let catSections = Object.entries(catMeta).map(([key, meta]) => {
    const cat = sc.byCat[key];
    const resolved = cat.hits + cat.misses;
    const roi = catRoi(cat);
    const pct = resolved > 0 ? Math.round(cat.hits / resolved * 100) : null;

    let statusLine = "";
    if (resolved === 0 && cat.total > 0) statusLine = `<p class="perf-section-desc">${cat.pending} dica${cat.pending > 1 ? 's' : ''} pendente${cat.pending > 1 ? 's' : ''}</p>`;
    else if (cat.total === 0) return "";

    return `<div class="perf-section">
      <h3 class="perf-section-title" style="color:${meta.color}">${meta.icon} ${meta.label}</h3>
      <p class="perf-section-desc">${meta.desc}</p>
      ${statusLine}
      ${resolved > 0 ? `<div class="scorecard">
        <div class="sc-item">
          <div class="sc-value" style="color:${meta.color}">${pct}%</div>
          <div class="sc-label">Taxa de acerto</div>
        </div>
        <div class="sc-item">
          <div class="sc-value positive">${cat.hits}</div>
          <div class="sc-label">Acertos</div>
        </div>
        <div class="sc-item">
          <div class="sc-value negative">${cat.misses}</div>
          <div class="sc-label">Erros</div>
        </div>
        <div class="sc-item">
          <div class="sc-value ${roi >= 0 ? 'positive' : 'negative'}">${roi >= 0 ? '+' : ''}${roi.toFixed(1)}%</div>
          <div class="sc-label">ROI (flat stake)</div>
        </div>
        ${cat.pending > 0 ? `<div class="sc-item"><div class="sc-value neutral">${cat.pending}</div><div class="sc-label">Pendentes</div></div>` : ""}
      </div>
      <div class="perf-bar">
        <div class="perf-bar-fill perf-bar-hit" style="width:${Math.round(cat.hits / cat.total * 100)}%"></div>
        <div class="perf-bar-fill perf-bar-miss" style="width:${Math.round(cat.misses / cat.total * 100)}%"></div>
      </div>` : ""}
    </div>`;
  }).join("");

  el.innerHTML = resultadoHtml + catSections;
}

// ── Filters UI ──
function buildFilters() {
  const grupos = new Set();
  DATA.dias.forEach(d => d.jogos.forEach(g => grupos.add(g.grupo)));
  const sorted = [...grupos].sort();

  const grupoSelect = document.getElementById("filter-grupo");
  grupoSelect.innerHTML = '<option value="">Todos os grupos</option>' +
    sorted.map(g => `<option value="${g}">Grupo ${g}</option>`).join("");

  document.getElementById("search-input").addEventListener("input", e => {
    state.search = e.target.value;
    renderDays();
  });

  grupoSelect.addEventListener("change", e => {
    state.filterGrupo = e.target.value;
    renderDays();
  });

  document.querySelectorAll(".chip[data-cat]").forEach(chip => {
    chip.addEventListener("click", () => {
      const val = chip.dataset.cat;
      state.filterCat = state.filterCat === val ? "" : val;
      document.querySelectorAll(".chip[data-cat]").forEach(c => c.classList.toggle("active", c.dataset.cat === state.filterCat));
      renderDays();
    });
  });

  document.querySelectorAll(".chip[data-status]").forEach(chip => {
    chip.addEventListener("click", () => {
      const val = chip.dataset.status;
      state.filterStatus = state.filterStatus === val ? "" : val;
      document.querySelectorAll(".chip[data-status]").forEach(c => c.classList.toggle("active", c.dataset.status === state.filterStatus));
      renderDays();
    });
  });
}

// ── Init ──
function init() {
  applyTheme();

  document.getElementById("updated").textContent =
    "Atualizado em " + new Date(DATA.atualizadoEm).toLocaleString("pt-BR");

  renderTourneyStats();
  renderScorecard();
  renderDays();
  buildFilters();
  updateStickyBar();

  document.querySelectorAll(".nav-tab").forEach(t => {
    t.addEventListener("click", () => switchTab(t.dataset.tab));
  });
  document.querySelectorAll(".bnav-item").forEach(t => {
    t.addEventListener("click", () => switchTab(t.dataset.tab));
  });

  setInterval(() => {
    updateStickyBar();
    if (state.tab === "jogos") {
      document.querySelectorAll(".g-countdown").forEach(el => {
        // Lightweight update — full re-render every 5 min
      });
    }
  }, 60000);
}

document.addEventListener("DOMContentLoaded", init);
