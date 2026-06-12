// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-12T08:00:00-03:00",

  estatisticas: {
    totalJogos: 2,
    totalGols: 5,
    mediaPorJogo: "2.5",
    cartoesAmarelos: 6,
    escanteiosMed: "9.5"
  },

  dias: [
    {
      data: "2026-06-11",
      titulo: "Dia 1 — Abertura",
      contexto: "Abertura precisa: modelo cravou México 2×0 África do Sul (λ 2.76×0.18, 90% vitória). À noite, Coreia virou de 0-1 para 2-1 contra a Tchéquia (Hwang 67', Oh 80') — o favorito marginal do modelo venceu, mas pelo caminho mais dramático possível. Ambas marcaram ✓, over 2.5 ✓.",
      jogos: [
        {
          hora: "16h",
          mandante: "México",
          visitante: "África do Sul",
          grupo: "A",
          local: "Estádio Azteca, Cidade do México",
          placar: "2 × 0",
          stats: "Modelo previu exatamente 2×0 (90% vitória, λ 2.76×0.18) ✓ · Primeiro teste do Elo-Poisson: aprovado",
          numeros: [
            { v: "90%", l: "Prob. México" },
            { v: "2.76", l: "λ México" },
            { v: "0.18", l: "λ África do Sul" },
            { v: "2×0", l: "Placar final" }
          ],
          dicas: []
        },
        {
          hora: "23h",
          mandante: "Coreia do Sul",
          visitante: "Tchéquia",
          grupo: "A",
          local: "Estadio Akron, Guadalajara",
          placar: "2 × 1",
          stats: "Coreia virou de 0-1 para 2-1 (Krejci 59', Hwang 67', Oh 80') · Modelo equilibrado (39/26/34, λ 1.37×1.26) acertou o jogo travado, mas errou o vencedor · Ambas marcaram ✓ · Over 2.5 ✓ — ENCERRADO",
          numeros: [
            { v: "39%", l: "Prob. Coreia" },
            { v: "26%", l: "Empate" },
            { v: "34%", l: "Prob. Tchéquia" },
            { v: "3", l: "Gols totais" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.75,
              justificativa: "λ moderados dos dois lados (1.37×1.26): Poisson indica ~53% de ambas marcarem. Son para Coreia, Schick para Tchéquia — dois atacantes de referência sem bloco ultra-defensivo na estreia. ✓ Acertou." },
            { cat: "intermediaria", mercado: "Empate", odd: 3.20,
              justificativa: "Jogo mais equilibrado da 1ª rodada (modelo: 39/26/34). Com λ quase iguais, nenhum time dominava. ✗ Coreia venceu na virada." },
            { cat: "intermediaria", mercado: "Tchéquia vence", odd: 3.10,
              justificativa: "Modelo dava 34.4% para a Tchéquia. Mercado pagava 3.10 (~32% implícito) — valor marginal. ✗ Coreia virou no 2T." },
            { cat: "loucura", mercado: "Tchéquia vence + over 2.5 gols", odd: 8.0,
              justificativa: "Tchéquia vence (34%) num jogo com total esperado de 2.63 gols. Pernas correlacionadas. ✗ Coreia venceu." }
          ]
        }
      ]
    },
    {
      data: "2026-06-12",
      titulo: "Dia 2 — Canadá e EUA estreiam",
      contexto: "Canadá e EUA estreiam em casa. Alphonso Davies é dúvida (lesão), mas Bombito confirmou estar 100%. No Paraguai, Julio Enciso saiu de maca contra a Nicarágua (05/jun) e é dúvida — deve ficar de fora. EUA vem de 3-2 vs Senegal e 1-2 vs Alemanha nos amistosos.",
      jogos: [
        {
          hora: "16h",
          mandante: "Canadá",
          visitante: "Bósnia e Herz.",
          grupo: "B",
          local: "BMO Field, Toronto",
          placar: null,
          stats: "1ª vez que essas seleções se enfrentam · Canadá invicto nos últimos 8 jogos (Jesse Marsch) · Apenas 1 derrota em 28 jogos no BMO Field (W18 D9) · Bósnia eliminou a Itália nos pênaltis nas Eliminatórias e joga sua 2ª Copa da história · Dzeko (40 anos, 146 jogos, 72 gols pela seleção) lidera o ataque com Demirovic · Bósnia empatou 0-0 com Macedônia do Norte e 1-1 com Panamá nos amistosos pré-Copa",
          numeros: [
            { v: "77%", l: "Prob. Canadá" },
            { v: "2.24", l: "λ Canadá" },
            { v: "0.52", l: "λ Bósnia" },
            { v: "22%", l: "Prob. Bósnia" },
            { v: "39", l: "Gols J. David seleção" },
            { v: "<10.5", l: "Escanteios tend. (8/8 Bósnia)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá vence", odd: 1.45,
              justificativa: "Modelo dá 77% pro Canadá. Invicto em 8 jogos, jogando em casa no BMO Field (W18 D9 L1 nos últimos 28). Bósnia empatou os dois amistosos pré-Copa (0-0 e 1-1) — falta de ritmo ofensivo." },
            { cat: "conservadora", mercado: "Jonathan David marca a qualquer momento", odd: 2.10,
              justificativa: "39 gols pela seleção, cobrador de pênaltis, camisa 9 titular. Na Juventus 25/26: 6 gols em 35 jogos (0.30/90min), mas pela seleção é outro nível de protagonismo. Se o Canadá vence, David tende a estar no placar." },
            { cat: "intermediaria", mercado: "Under 2.5 gols", odd: 2.30,
              justificativa: "O placar mais provável segundo simulações é 1-0. Bósnia deve jogar fechada (λ 0.52) com Dzeko como referência isolada. Estreias de Copa são historicamente travadas. 8 dos últimos 8 jogos da Bósnia tiveram under 10.5 escanteios — perfil de jogo controlado." },
            { cat: "intermediaria", mercado: "Canadá vence a zero", odd: 2.50,
              justificativa: "λ Bósnia de 0.52 dá ~60% de clean sheet pro Canadá. Bósnia não marcou contra Macedônia do Norte no último amistoso. Dzeko tem 40 anos e joga a 2. Bundesliga — ritmo é diferente." },
            { cat: "loucura", mercado: "Canadá −2.5 handicap", odd: 5.50,
              justificativa: "Roteiro goleada: Canadá precisa de saldo de gols para desempate contra a Suíça no grupo. Se o 1º gol sair cedo, Bósnia terá que se abrir contra um time muito superior tecnicamente." }
          ]
        },
        {
          hora: "22h",
          mandante: "EUA",
          visitante: "Paraguai",
          grupo: "D",
          local: "SoFi Stadium, Los Angeles",
          placar: null,
          stats: "10º confronto histórico (EUA lidera com 5 vitórias) · Último encontro: amistoso nov/2025, EUA 2-1 · 1ª vez na Copa desde 1930 (Patenaude fez o 1º hat-trick da história das Copas) · Paraguai: 14 gols sofridos em 18 jogos nas Eliminatórias CONMEBOL (0.78/jogo) · Invictos em 8 jogos (incl. vitórias vs Brasil, Argentina e Uruguai) · Julio Enciso é dúvida (lesão muscular 05/jun) · EUA: Pochettino monta ataque com Pulisic-Balogun-Weah · Paraguai joga em bloco baixo 4-4-2, absorve pressão e contra-ataca",
          numeros: [
            { v: "38%", l: "Prob. EUA" },
            { v: "26%", l: "Empate" },
            { v: "36%", l: "Prob. Paraguai" },
            { v: "0.78", l: "Gols sofridos/jogo PAR" },
            { v: "9", l: "Amarelos D. Gómez PL" },
            { v: ">9.5", l: "Escanteios esperados" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Under 2.5 gols", odd: 1.85,
              justificativa: "Paraguai sofreu apenas 14 gols em 18 jogos nas Eliminatórias CONMEBOL (0.78/jogo). Bloco baixo 4-4-2 com Gustavo Gómez e Alderete — defesa compacta. Alfaro é especialista em jogos fechados. Estreias de Copa são historicamente travadas." },
            { cat: "conservadora", mercado: "Over 9.5 escanteios no jogo", odd: 1.80,
              justificativa: "Paraguai limpa cruzamentos pela linha de fundo em vez de arriscar no centro. EUA vai dominar pelos lados com Robinson/Dest — volume de cruzamento alto contra bloco baixo gera escanteios naturalmente." },
            { cat: "intermediaria", mercado: "Diego Gómez recebe cartão amarelo", odd: 2.80,
              justificativa: "9 amarelos e 48 faltas em 2.137 min pelo Brighton na PL 25/26 (2.06 faltas/90min). Vai marcar Pulisic no meio — perfil de cartão clássico em jogo de estreia de Copa com tensão alta." },
            { cat: "intermediaria", mercado: "Empate", odd: 3.40,
              justificativa: "Modelo vê coin-flip (38/26/36). Mercado superprecifica o mando dos EUA. Paraguai invicto em 8 jogos, venceu Brasil e Argentina nas Eliminatórias. Se empatar, quase certamente 0-0 ou 1-1 (perfil under do Paraguai)." },
            { cat: "intermediaria", mercado: "Paraguai classificação (dupla hipótese)", odd: 3.00,
              justificativa: "Paraguai invicto em 8, venceu as 3 maiores seleções da América do Sul. Enciso é dúvida mas tem Almiron, Sanabria e D. Gómez. Valor alto se o mercado subestimar o Alfaro-ball." },
            { cat: "loucura", mercado: "Empate + under 2.5 + over 4.5 cartões", odd: 10.0,
              justificativa: "'Jogo feio completo': Paraguai 13.7 faltas/jogo nas Eliminatórias, bloco baixo, sem gols e muita pancada. Se o roteiro truncado se confirma, as três pernas andam juntas." }
          ]
        }
      ]
    }
  ]
};
