// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-12T08:00:00-03:00",

  // Campos não-deriváveis do placar — preenchidos pela routine. Totais (jogos/gols/média)
  // são auto-calculados pelo app a partir dos placares.
  estatisticasManuais: {
    cartoesAmarelos: 6,
    escanteiosMed: "9.5"
  },

  dias: [
    {
      data: "2026-06-11",
      titulo: "Dia 1 — Abertura",
      contexto: "Abertura precisa: modelo cravou México 2×0 África do Sul (λ 2.76×0.18, 90% vitória). À noite, Coreia virou de 0-1 para 2-1 contra a Tchéquia (Hwang 67', Oh 80') — o favorito marginal do modelo venceu, mas pelo caminho mais dramático possível.",
      jogos: [
        {
          hora: "16h",
          mandante: "México",
          visitante: "África do Sul",
          grupo: "A",
          local: "Estádio Azteca, Cidade do México",
          placar: "2 × 0",
          stats: "Modelo previu exatamente 2×0 (90% vitória, λ 2.76×0.18). Primeiro teste do Elo-Poisson: aprovado.",
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
          stats: "Coreia virou de 0-1 para 2-1 (Krejci 59', Hwang 67', Oh 80'). Modelo equilibrado (39/26/34, λ 1.37×1.26): acertou o jogo travado, errou o vencedor.",
          numeros: [
            { v: "39%", l: "Prob. Coreia" },
            { v: "26%", l: "Empate" },
            { v: "34%", l: "Prob. Tchéquia" },
            { v: "3", l: "Gols totais" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.75, resultado: "hit",
              justificativa: "λ moderados dos dois lados (1.37×1.26): Poisson indica ~53% de ambas marcarem. Son para Coreia, Schick para Tchéquia — dois atacantes de referência sem bloco ultra-defensivo na estreia." },
            { cat: "intermediaria", mercado: "Empate", odd: 3.20, resultado: "miss",
              justificativa: "Jogo mais equilibrado da 1ª rodada (modelo: 39/26/34). Com λ quase iguais, nenhum time dominava. Coreia venceu na virada." },
            { cat: "intermediaria", mercado: "Tchéquia vence", odd: 3.10, resultado: "miss",
              justificativa: "Modelo dava 34.4% para a Tchéquia. Mercado pagava 3.10 (~32% implícito) — valor marginal. Coreia virou no 2T." },
            { cat: "loucura", mercado: "Tchéquia vence + over 2.5 gols", odd: 8.0, resultado: "miss",
              justificativa: "Tchéquia vence (34%) num jogo com total esperado de 2.63 gols. Pernas correlacionadas." }
          ]
        }
      ]
    },
    {
      data: "2026-06-12",
      titulo: "Dia 2 — Canadá e EUA estreiam",
      contexto: "Canadá e EUA estreiam em casa. Alphonso Davies é dúvida (lesão), mas Bombito confirmou estar 100%. No Paraguai, Julio Enciso saiu de maca contra a Nicarágua (05/jun) e deve ficar de fora. EUA vem de 3-2 vs Senegal e 1-2 vs Alemanha nos amistosos. Árbitros: Facundo Tello (ARG, 4.7 amarelos/jogo!) no Canadá×Bósnia e Danny Makkelie (NED, 3.4 amarelos/jogo) no EUA×Paraguai.",
      jogos: [
        {
          hora: "16h",
          mandante: "Canadá",
          visitante: "Bósnia e Herz.",
          grupo: "B",
          local: "BMO Field, Toronto",
          placar: null,
          stats: "1ª vez que essas seleções se enfrentam · Canadá invicto nos últimos 8 jogos (Jesse Marsch) · Apenas 1 derrota em 28 jogos no BMO Field (W18 D9) · Bósnia eliminou a Itália nos pênaltis nas Eliminatórias — 2ª Copa da história · Dzeko (40 anos, 146 caps, 72 gols pela seleção, 6 gols pelo Schalke 25/26 — todos em casa) · Bósnia empatou 0-0 com N. Macedônia e 1-1 com Panamá nos amistosos · Árbitro Tello: 4.7 amarelos/jogo de média",
          numeros: [
            { v: "77%", l: "Prob. Canadá" },
            { v: "2.24", l: "λ Canadá" },
            { v: "0.52", l: "λ Bósnia" },
            { v: "39", l: "Gols J. David seleção" },
            { v: "30", l: "Gols C. Larin seleção" },
            { v: "4.7", l: "Amarelos/jogo árbitro" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá vence", odd: 1.45,
              justificativa: "Modelo dá 77% pro Canadá. Invicto em 8 jogos, jogando em casa no BMO Field (W18 D9 L1 nos últimos 28). Bósnia empatou os dois amistosos pré-Copa (0-0 e 1-1) — falta de ritmo ofensivo." },
            { cat: "conservadora", mercado: "Jonathan David marca a qualquer momento", odd: 2.10,
              justificativa: "39 gols pela seleção, cobrador de pênaltis, camisa 9 titular. Na Juventus 25/26: 6 gols em 35 jogos, mas pela seleção é outra história — é o cara. λ Canadá de 2.24 concentrado nele." },
            { cat: "conservadora", mercado: "Under 2.5 gols", odd: 2.30,
              justificativa: "Placar mais provável nas simulações: 1-0. Bósnia joga fechada (λ 0.52) com Dzeko isolado. 8/8 últimos jogos da Bósnia tiveram under 10.5 escanteios — perfil de jogo controlado e travado. Estreias de Copa são historicamente baixas em gols." },
            { cat: "intermediaria", mercado: "Canadá vence a zero", odd: 2.50,
              justificativa: "λ Bósnia de 0.52 dá ~60% de clean sheet pro Canadá. Bósnia não marcou contra N. Macedônia no último amistoso. Dzeko tem 40 anos e joga a 2. Bundesliga — seus 6 gols no Schalke foram TODOS em casa." },
            { cat: "intermediaria", mercado: "Over 4.5 cartões no jogo", odd: 2.20,
              justificativa: "Árbitro Facundo Tello é um dos mais cartoleiros do mundo: 4.7 amarelos/jogo de média. Famoso por dar 10 vermelhos numa final Boca×Racing em 2022. Bósnia média 2.3 amarelos/jogo nas Eliminatórias. Estreia de Copa = tensão + faltas táticas." },
            { cat: "intermediaria", mercado: "Cyle Larin marca a qualquer momento", odd: 3.50,
              justificativa: "30 gols pela seleção (2º maior artilheiro do Canadá). No Southampton 25/26: 7 gols em 15 jogos no Championship (0.87 G+A/90min). Com Davies fora, Larin ganha mais protagonismo ofensivo ao lado de David." },
            { cat: "loucura", mercado: "Canadá vence + J. David marca + under 2.5", odd: 5.50,
              justificativa: "Combo correlacionado: se o Canadá vence por 1-0 ou 2-0 (cenário mais provável), David tende a estar no placar (39 gols, pênaltis) e o jogo é naturalmente under. As três pernas andam juntas." },
            { cat: "loucura", mercado: "Canadá −2.5 handicap", odd: 5.50,
              justificativa: "Roteiro goleada: Canadá precisa de saldo de gols para desempate contra a Suíça no grupo. Se o 1º gol sair cedo, Bósnia terá que se abrir contra um time muito superior. Canadá tem profundidade no banco." },
            { cat: "loucura", mercado: "Canadá vence + over 4.5 cartões + under 8.5 escanteios", odd: 8.00,
              justificativa: "'Vitória controlada com pancada': Canadá domina (77%), Tello distribui cartões (4.7/jogo), mas Bósnia fechada não gera escanteios (8/8 jogos under 10.5). Jogo travado no meio com muita falta e poucos cruzamentos." }
          ]
        },
        {
          hora: "22h",
          mandante: "EUA",
          visitante: "Paraguai",
          grupo: "D",
          local: "SoFi Stadium, Los Angeles",
          placar: null,
          stats: "10º confronto histórico (EUA 5W) · Último: amistoso nov/2025, EUA 2-1 · Na Copa: 1930 foi a última vez (Patenaude fez o 1º hat-trick da história) · Paraguai: 14 gols marcados e 10 sofridos em 18 jogos nas Eliminatórias (0.78 sofridos/jogo) — invictos em 8 incl. vitórias vs Brasil, Argentina e Uruguai · Enciso dúvida (lesão muscular) · EUA: Pulisic (8 gols, 3.01 chutes/90min no Milan), Balogun (13 gols, 77 chutes no Monaco) · D. Gómez: 9 amarelos + 48 faltas em 2.137min na PL · Makkelie apita: 3.4 amarelos/jogo",
          numeros: [
            { v: "38%", l: "Prob. EUA" },
            { v: "26%", l: "Empate" },
            { v: "36%", l: "Prob. Paraguai" },
            { v: "13.7", l: "Faltas/jogo Paraguai" },
            { v: "13+4", l: "G+A Balogun 25/26" },
            { v: "3.4", l: "Amarelos/jogo árbitro" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Under 2.5 gols", odd: 1.85,
              justificativa: "Paraguai sofreu apenas 10 gols em 18 jogos nas Eliminatórias CONMEBOL (0.56/jogo). Bloco baixo 4-4-2 de Alfaro — especialista em jogos fechados. Venceu Brasil e Argentina jogando assim. Estreias de Copa são historicamente travadas." },
            { cat: "conservadora", mercado: "Over 9.5 escanteios no jogo", odd: 1.80,
              justificativa: "Paraguai limpa cruzamentos pela linha de fundo em vez de arriscar no centro. EUA vai dominar pelos lados com Robinson/Dest — Pulisic corta pra dentro, gera cruzamento, gera escanteio. Volume alto contra bloco baixo." },
            { cat: "conservadora", mercado: "Diego Gómez recebe cartão amarelo", odd: 2.80,
              justificativa: "9 amarelos e 48 faltas em 2.137 min pelo Brighton na PL 25/26 (2.06 faltas/90min). Vai marcar Pulisic no meio — perfil de cartão clássico. Makkelie dá 3.4 amarelos/jogo. Paraguai comete 13.7 faltas/jogo." },
            { cat: "intermediaria", mercado: "Empate", odd: 3.40,
              justificativa: "Modelo vê coin-flip (38/26/36). Paraguai invicto em 8 jogos, venceu as 3 maiores da América do Sul. Mercado superprecifica o mando dos EUA. Se empatar, quase certamente 0-0 ou 1-1." },
            { cat: "intermediaria", mercado: "Pulisic marca a qualquer momento", odd: 3.20,
              justificativa: "8 gols e 54 chutes em 30 jogos no Milan 25/26 (3.01 chutes/90min, 0.45 gols/90min). Principal arma ofensiva dos EUA. Se o EUA marca, Pulisic é o candidato nº1 — protagonista absoluto." },
            { cat: "intermediaria", mercado: "Paraguai não perde (dupla hipótese)", odd: 2.40,
              justificativa: "Modelo dá 62% de não-vitória dos EUA (26% empate + 36% Paraguai). Invictos em 8, venceram Brasil e Argentina. Sem Enciso dói, mas Alfaro monta times resilientes — Sanabria (4 gols nas Eliminatórias) e Almiron estão confirmados." },
            { cat: "loucura", mercado: "Empate + under 2.5 gols + over 4.5 cartões", odd: 10.0,
              justificativa: "'Jogo feio completo': Paraguai 13.7 faltas/jogo nas Eliminatórias + Makkelie 3.4 amarelos/jogo + bloco baixo sem gols. Se o roteiro truncado se confirma, as três pernas são 100% correlacionadas." },
            { cat: "loucura", mercado: "Under 2.5 gols + over 9.5 escanteios + D. Gómez cartão", odd: 8.00,
              justificativa: "'Paraguai sendo Paraguai': jogo travado (under) com EUA forçando pelos lados (escanteios) e Gómez fazendo falta no Pulisic (cartão). Combo que descreve exatamente o script tático esperado — pernas super correlacionadas." },
            { cat: "loucura", mercado: "Paraguai vence + under 2.5 gols", odd: 7.50,
              justificativa: "Se o Paraguai vencer, vai ser 1-0 no contra-ataque — esse é o DNA do Alfaro-ball. Venceram Brasil 1-0 e Argentina 1-0 nas Eliminatórias exatamente assim. EUA jogou mal nos amistosos (7-2 vs Bélgica/Portugal em março)." }
          ]
        }
      ]
    }
  ]
};
