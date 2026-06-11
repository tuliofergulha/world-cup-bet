// Copa 2026 — Central de Apostas. Atualizado diariamente pelo briefing das 8h.
// status: "pendente" | "ganhou" | "perdeu" | "anulada"
// Mercados: resultado (1X2/handicap/dupla chance), escanteios, cartões, goleadores. Sem placar exato.
const DATA = {
  atualizadoEm: "2026-06-11T22:30:00-03:00",
  unidade: "1u = 1% da banca (sugestão)",
  dias: [
    {
      data: "2026-06-12",
      titulo: "Rodada 2 — Estreias de Canadá, Suíça, EUA e Brasil",
      jogos: [
        { hora: "16h", partida: "Canadá × Bósnia e Herz.", grupo: "B", local: "BMO Field, Toronto" },
        { hora: "16h", partida: "Suíça × Catar", grupo: "B", local: "Levi's Stadium, Santa Clara" },
        { hora: "19h", partida: "Brasil × Marrocos", grupo: "C", local: "MetLife, Nova Jersey (fontes divergem: 12 ou 13/jun — confirmar)" },
        { hora: "22h", partida: "EUA × Paraguai", grupo: "D", local: "SoFi Stadium, Los Angeles" },
        { hora: "23h", partida: "Coreia do Sul × Tchéquia", grupo: "A", local: "—" }
      ],
      contexto: "Abertura: México 2–0 África do Sul (modelo previu o resultado ✓). Desfalques: Alphonso Davies FORA (Canadá); Neymar dúvida, Rodrygo e Estêvão FORA (Brasil); Chris Richards confirmado (EUA).",
      apostas: [
        { cat: "conservadora", mercado: "Canadá vence Bósnia (1X2)", odd: 1.55, stake: 2, status: "pendente",
          justificativa: "Modelo: 77% (odd justa 1.30). Elo 1788×1595, mando em Toronto. Mesmo sem Davies, elenco muito superior (David, Buchanan)." },
        { cat: "conservadora", mercado: "Suíça −1.5 gols (handicap) vs Catar", odd: 1.70, stake: 2, status: "pendente",
          justificativa: "Modelo: 91% vitória, λ 2.0×0.2. Catar tem o pior Elo do torneio (1421). Klement dá Suíça 90% de avanço — 'runaway favorite'." },
        { cat: "conservadora", mercado: "Brasil vence Marrocos (1X2)", odd: 1.80, stake: 1, status: "pendente",
          justificativa: "Modelo: 60%. Stake reduzido: Marrocos é 7º da FIFA e Brasil estreia sem Rodrygo/Estêvão, Neymar em dúvida." },
        { cat: "conservadora", mercado: "Mais de 8.5 escanteios — Suíça × Catar", odd: 1.70, stake: 1, status: "pendente",
          justificativa: "Proxy do λ: domínio total esperado (91%) contra bloco baixo gera volume de escanteios. Suíça média alta de cruzamentos/chute bloqueado." },
        { cat: "intermediaria", mercado: "Empate — Coreia do Sul × Tchéquia", odd: 3.20, stake: 1, status: "pendente",
          justificativa: "Jogo mais equilibrado da rodada (39/26/34). Klement também vê quase empate técnico no avanço (72%×52%)." },
        { cat: "intermediaria", mercado: "Empate — EUA × Paraguai", odd: 3.40, stake: 1, status: "pendente",
          justificativa: "Modelo vê coin-flip (38/26/36); mercado superprecifica o mando dos EUA. Melhor valor do dia." },
        { cat: "intermediaria", mercado: "Mais de 5.5 cartões — EUA × Paraguai", odd: 3.25, stake: 0.5, status: "pendente",
          justificativa: "Estreia tensa de anfitrião + Paraguai entre as mais faltosas das Eliminatórias. Jogo equilibrado tende a ficar truncado no 2º tempo." },
        { cat: "intermediaria", mercado: "Jonathan David marca o 1º gol — Canadá × Bósnia", odd: 4.50, stake: 0.5, status: "pendente",
          justificativa: "Camisa 9 e cobrador de pênaltis do time com maior λ ofensivo do dia em casa. Sem Davies, ataque passa ainda mais por ele." },
        { cat: "loucura", mercado: "Dupla: Empate Coreia×Tchéquia + Empate EUA×Paraguai", odd: 10.9, stake: 0.25, status: "pendente",
          justificativa: "'Dia dos empates': os dois jogos mais equilibrados da rodada segundo o modelo. Se o modelo acertar, paga ~11x." },
        { cat: "loucura", mercado: "Marrocos vence Brasil sem sofrer gol", odd: 11.0, stake: 0.25, status: "pendente",
          justificativa: "Especulativa: defesa semifinalista de 2022 contra ataque brasileiro desfalcado em estreia. Hedge parcial da conservadora no Brasil." }
      ]
    }
  ]
};
