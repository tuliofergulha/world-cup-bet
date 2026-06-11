// Copa 2026 — Central de Apostas. Atualizado diariamente pelo briefing das 8h.
// status: "pendente" | "ganhou" | "perdeu" | "anulada"
// Estilo bet365: simples + "Criar Aposta" (combos correlacionados). Sem placar exato.
const DATA = {
  atualizadoEm: "2026-06-11T23:30:00-03:00",
  unidade: "1u = 1% da banca (sugestão)",
  dias: [
    {
      data: "2026-06-12",
      titulo: "Dia 2 — 1ª rodada: estreias de Canadá, Suíça e EUA",
      jogos: [
        { hora: "16h", partida: "Canadá × Bósnia e Herz.", grupo: "B", local: "BMO Field, Toronto",
          stats: "Modelo: 77% Canadá, λ 2.0×0.7 · Sem Alphonso Davies · J. David: camisa 9 e pênaltis · Bósnia (Elo 1595) deve jogar fechada" },
        { hora: "16h", partida: "Suíça × Catar", grupo: "B", local: "Levi's Stadium, Santa Clara",
          stats: "Modelo: 91% Suíça, λ 2.0×0.2 · Embolo: artilheiro suíço das Eliminatórias (6 gols) · Catar: pior Elo do torneio (1421)" },
        { hora: "22h", partida: "EUA × Paraguai", grupo: "D", local: "SoFi Stadium, Los Angeles",
          stats: "Paraguai: 10 gols sofridos em 18 jogos — Eliminatória mais 'under' do CONMEBOL · 13.7 faltas/jogo (2ª mais faltosa) · D. Gómez: 9 amarelos e 48 faltas na PL 25/26 · EUA: posse + jogo pelos lados (Robinson/Dest) contra bloco baixo" },
        { hora: "23h", partida: "Coreia do Sul × Tchéquia", grupo: "A", local: "(horário a confirmar)",
          stats: "Modelo: 39/26/34 — jogo mais equilibrado do dia · Klement: Coreia 72% × Tchéquia 52% de avanço (quase empate técnico)" }
      ],
      contexto: "Abertura: México 2–0 África do Sul — modelo previu exatamente isso ✓. Brasil × Marrocos NÃO é hoje (fontes: 13 ou 14/jun — entra no próximo briefing). Desfalques: Davies fora (Canadá); Chris Richards confirmado (EUA).",
      apostas: [
        { cat: "conservadora", mercado: "Criar Aposta (EUA × Paraguai): Menos de 2.5 gols + EUA mais de 8.5 escanteios", odd: 2.10, stake: 2, status: "pendente",
          justificativa: "Combo correlacionado: Paraguai sofreu 0.56 gol/jogo nas Eliminatórias (10 em 18) e joga em bloco baixo 4-4-2 → EUA forçado a cruzar dos lados → escanteios + poucos gols. Estreias de Copa são historicamente travadas." },
        { cat: "conservadora", mercado: "Criar Aposta (Canadá × Bósnia): Canadá vence + Jonathan David marca", odd: 2.50, stake: 1.5, status: "pendente",
          justificativa: "Modelo dá 77% pro Canadá (λ 2.0). David é o camisa 9, cobrador de pênaltis e referência absoluta sem Davies. Se o Canadá vence em casa, a probabilidade de David participar do placar é alta — pernas correlacionadas." },
        { cat: "conservadora", mercado: "Breel Embolo marca a qualquer momento (Suíça × Catar)", odd: 1.90, stake: 1.5, status: "pendente",
          justificativa: "Artilheiro da Suíça nas Eliminatórias (6 gols) contra o pior Elo do torneio. λ suíço de 2.0 gols concentrado no centroavante titular." },
        { cat: "conservadora", mercado: "Mais de 8.5 escanteios — Suíça × Catar", odd: 1.70, stake: 1, status: "pendente",
          justificativa: "91% de domínio esperado contra bloco baixo extremo = volume de cruzamento, chute bloqueado e linha de fundo. Proxy direto do λ 2.0×0.2." },
        { cat: "intermediaria", mercado: "Empate — Coreia do Sul × Tchéquia", odd: 3.20, stake: 1, status: "pendente",
          justificativa: "Jogo mais equilibrado do dia (modelo: 39/26/34; Klement: 72%×52% de avanço). Nenhum dos dois precisa se expor na estreia." },
        { cat: "intermediaria", mercado: "Diego Gómez recebe cartão (EUA × Paraguai)", odd: 3.00, stake: 1, status: "pendente",
          justificativa: "9 amarelos e 48 faltas em 2.136 min pelo Brighton na PL 25/26. Vai ser o destruidor escalado em cima do Pulisic num jogo de estreia tenso — perfil perfeito de cartão." },
        { cat: "intermediaria", mercado: "Criar Aposta (EUA × Paraguai): Empate + menos de 2.5 gols", odd: 4.50, stake: 0.75, status: "pendente",
          justificativa: "Modelo vê coin-flip (38/26/36) e o mercado superprecifica o mando dos EUA. Se empatar, quase certamente é 0-0 ou 1-1 (perfil under do Paraguai) — as duas pernas andam juntas." },
        { cat: "intermediaria", mercado: "Criar Aposta (Suíça × Catar): Suíça vence sem sofrer gol + Embolo marca", odd: 3.20, stake: 0.75, status: "pendente",
          justificativa: "Versão turbinada da tese suíça: 91% de vitória, Catar com λ 0.2 (clean sheet ~80%), Embolo finaliza o combo." },
        { cat: "loucura", mercado: "Criar Aposta (EUA × Paraguai): Empate + menos de 2.5 gols + mais de 5.5 cartões", odd: 12.0, stake: 0.25, status: "pendente",
          justificativa: "O 'jogo feio completo': truncado, faltoso (Paraguai 13.7 faltas/jogo) e sem vencedor. Três pernas 100% correlacionadas — se o roteiro do bloco baixo se confirmar, tudo bate junto." },
        { cat: "loucura", mercado: "Criar Aposta (Canadá × Bósnia): Canadá vence por 3+ (handicap −2.5) + J. David marca 2 ou mais", odd: 11.0, stake: 0.25, status: "pendente",
          justificativa: "Roteiro goleada: Canadá precisa inflar o saldo (desempate com a Suíça no grupo) contra o pior time do grupo. Se sair cedo o 1º, David é quem mais finaliza na área." }
      ]
    }
  ]
};
