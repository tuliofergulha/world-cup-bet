// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-24T08:00:00-03:00",

  // Campos não-deriváveis do placar — preenchidos pela routine. Totais (jogos/gols/média)
  // são auto-calculados pelo app a partir dos placares.
  estatisticasManuais: {
    cartoesAmarelos: 65,
    escanteiosMed: "8.5"
  },

  dias: [
    {
      data: "2026-06-11",
      titulo: "Dia 1 — Abertura",
      contexto: "Abertura precisa: modelo cravou México 2×0 África do Sul (λ 2.76×0.18, 90% vitória). À noite, Coreia virou de 0-1 para 2-1 contra a Tchéquia (Krejci 59', Hwang 67', Oh 80') — o favorito marginal do modelo venceu, mas pelo caminho mais dramático possível.",
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
      titulo: "Dia 2 — Canadá empata, EUA goleia",
      contexto: "Canadá (77% favorito) frustrou a torcida e empatou 1-1 com a Bósnia — Lukic cabecou no 21' (escanteio de Ivan Basic) e Larin igualou como substituto no 78' com passe de Promise David. Os EUA, porém, arrasaram o Paraguai por 4-1: Bobadilla OG (7'), Balogun 2× (31', 45+2') e Gio Reyna no 2T. Magalhães descontou no 73' para o Paraguai. Pulisic distribuiu 2 assistências mas não marcou. Modelo sub-avaliou pesadamente os EUA (38% apenas).",
      jogos: [
        {
          hora: "16h",
          mandante: "Canadá",
          visitante: "Bósnia e Herz.",
          grupo: "B",
          local: "BMO Field, Toronto",
          placar: "1 × 1",
          stats: "Canadá (77% pelo modelo) não passou do empate. Bósnia abriu com Lukic (cabeçada de escanteio, 21') e Larin igualou como sub no 78'. Apenas 1 amarelo (Katic 90+3'). Árbitro Tello foi conservador. Bósnia: 8 chutes, 0.98 xG — defensivamente sólida.",
          numeros: [
            { v: "77%", l: "Prob. Canadá" },
            { v: "1 × 1", l: "Placar final" },
            { v: "13", l: "Chutes Canadá" },
            { v: "1", l: "Amarelo total" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá vence", odd: 1.45, resultado: "miss",
              justificativa: "Modelo dava 77% pro Canadá. Bósnia defendeu bem e abriu o placar em escanteio (Lukic 21'). Larin igualou apenas no 78'. Empate frustrante." },
            { cat: "conservadora", mercado: "Jonathan David marca a qualquer momento", odd: 2.10, resultado: "miss",
              justificativa: "39 gols pela seleção, cobrador de pênaltis. Mas o gol veio de Larin (sub), não David. Bósnia fechou bem os canais do centroavante do Canadá." },
            { cat: "conservadora", mercado: "Under 2.5 gols", odd: 2.30, resultado: "hit",
              justificativa: "Apenas 2 gols no total. Bósnia jogou fechada (λ 0.52) e o Canadá, apesar de 13 chutes, finalizou mal. O jogo travado se confirmou." },
            { cat: "intermediaria", mercado: "Canadá vence a zero", odd: 2.50, resultado: "miss",
              justificativa: "λ Bósnia de 0.52 dava ~60% de clean sheet pro Canadá. Mas Lukic cabeceou no 21' — escanteio que o Canadá não defendeu bem." },
            { cat: "intermediaria", mercado: "Over 4.5 cartões no jogo", odd: 2.20, resultado: "miss",
              justificativa: "Árbitro Tello foi surpreendentemente conservador — apenas 1 amarelo (Katic 90+3'). Esperava-se 4.7/jogo dele, mas o jogo fluiu sem grandes conflitos." },
            { cat: "intermediaria", mercado: "Cyle Larin marca a qualquer momento", odd: 3.50, resultado: "hit",
              justificativa: "30 gols pela seleção. Entrou como sub no 76' e 2 minutos depois recebeu passe de Promise David e converteu o empate. Instinto de gol confirmado." },
            { cat: "loucura", mercado: "Canadá vence + J. David marca + under 2.5", odd: 5.50, resultado: "miss",
              justificativa: "Combo que dependia das três pernas — todas falharam ou parcialmente. Canadá não venceu." },
            { cat: "loucura", mercado: "Canadá −2.5 handicap", odd: 5.50, resultado: "miss",
              justificativa: "Roteiro goleada nunca se materializou. Empate 1-1 foi o resultado." },
            { cat: "loucura", mercado: "Canadá vence + over 4.5 cartões + under 8.5 escanteios", odd: 8.00, resultado: "miss",
              justificativa: "Canadá não venceu e o árbitro Tello foi econômico com cartões. Combo falhou na perna principal." }
          ]
        },
        {
          hora: "22h",
          mandante: "EUA",
          visitante: "Paraguai",
          grupo: "D",
          local: "SoFi Stadium, Los Angeles",
          placar: "4 × 1",
          stats: "Domínio absoluto dos EUA. Bobadilla OG 7' (Pulisic passe, McKennie chute), Balogun 31' (cross Pulisic), Balogun 45+2' (driblou 2 defensores), Magalhães 73' (Paraguai), Gio Reyna no 2T finalizou com golaço de 17 jardas. Pulisic: 2 assistências, 0 gols. Modelo subestimou pesado os EUA (38% vitória vs 36% Paraguai).",
          numeros: [
            { v: "38%", l: "Prob. EUA (modelo)" },
            { v: "4 × 1", l: "Placar final" },
            { v: "2", l: "Gols Balogun" },
            { v: "2", l: "Assist. Pulisic" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Under 2.5 gols", odd: 1.85, resultado: "miss",
              justificativa: "5 gols no total (4-1). O Paraguai invicto em 8 jogos revelou ter uma defesa bem inferior à exibida nas Eliminatórias. EUA foram implacáveis." },
            { cat: "conservadora", mercado: "Over 9.5 escanteios no jogo", odd: 1.80, resultado: "miss",
              justificativa: "EUA dominou pelas alas, Pulisic e Robinson constantemente gerando cruzamentos. Paraguai forçou a linha de fundo com bloco baixo. Mas o total foi apenas 9 escanteios (EUA 5 + Paraguai 4) — abaixo do 9.5." },
            { cat: "conservadora", mercado: "Diego Gómez recebe cartão amarelo", odd: 2.80, resultado: "hit",
              justificativa: "9 amarelos e 48 faltas no Brighton pela PL. Com EUA dominando 4-1, Paraguai fazia faltas táticas no meio — Gómez levou o amarelo e foi substituído por Alejandro Romero." },
            { cat: "intermediaria", mercado: "Empate", odd: 3.40, resultado: "miss",
              justificativa: "EUA venceu de goleada. Paraguai, invicto em 8 antes disso, não conseguiu replicar a versão que venceu Brasil e Argentina." },
            { cat: "intermediaria", mercado: "Pulisic marca a qualquer momento", odd: 3.20, resultado: "miss",
              justificativa: "Pulisic foi fenomenal com 2 assistências (OG e Balogun 31') mas não marcou. No 4-1, o herói foi Balogun e a cereja foi Reyna." },
            { cat: "intermediaria", mercado: "Paraguai não perde (dupla hipótese)", odd: 2.40, resultado: "miss",
              justificativa: "Paraguai perdeu de 4-1. Enciso fora foi sentido? Provavelmente sim — sem o criador de jogos principal, o ataque foi inócuo." },
            { cat: "loucura", mercado: "Empate + under 2.5 gols + over 4.5 cartões", odd: 10.0, resultado: "miss",
              justificativa: "Três pernas, todas falharam: 4-1 não é empate, não é under 2.5, e os cartões não foram confirmados como over 4.5." },
            { cat: "loucura", mercado: "Under 2.5 gols + over 9.5 escanteios + D. Gómez cartão", odd: 8.00, resultado: "miss",
              justificativa: "O 'Paraguai sendo Paraguai' não aconteceu — os EUA dominaram de forma esmagadora. A perna do under 2.5 falhou imediatamente." },
            { cat: "loucura", mercado: "Paraguai vence + under 2.5 gols", odd: 7.50, resultado: "miss",
              justificativa: "Paraguai não venceu. O DNA do Alfaro-ball (1-0 no contra-ataque) não se concretizou contra um EUA superior em ritmo e técnica." }
          ]
        }
      ]
    },
    {
      data: "2026-06-13",
      titulo: "Dia 3 — Defesas resistem, Vinicius brilha",
      contexto: "Dia de resultados inesperados. Suíça desperdiçou um arsenal (26 chutes, 3.24 xG) e só converteu o pênalti de Embolo (17') — Khoukhi cabeceou o empate histórico no 90+4', 1.º ponto do Catar em Copas do Mundo. Brasil e Marrocos protagonizaram o duelo mais aguardado: Saibari abriu (21', passe Brahim Díaz), Vinicius igualou com golaço (32', corte do pé direito, passe de Bruno Guimarães). HT 1-1, final 1-1 — Alisson fez dois milagres no 2T. Escócia venceu o Haiti de 1-0 em Boston: McGinn (28', rebote após Adams bloqueado por Placide) em jogo no qual Haiti dominou posse (56%) e finalizações (15-9). Grupo C: Escócia lidera com 3 pts, Brasil e Marrocos com 1.",
      jogos: [
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Catar",
          grupo: "B",
          local: "Levi's Stadium, Santa Clara (SF Bay Area)",
          placar: "1 × 1",
          stats: "Suíça desperdiçou 26 chutes e 3.24 xG — só converteu o pênalti de Embolo (17') após falta de Abunada em Freuler (Abunada amarelado). Gaber (Catar) amarelado no 22' por falta em Vargas; Zakaria (Suíça) amarelado no 2T. Khoukhi cabeceou o empate histórico no 90+4': 1.º ponto do Catar na história das Copas. Árbitro Saíd Martínez: 3 amarelos, jogo controlado.",
          numeros: [
            { v: "26", l: "Chutes Suíça" },
            { v: "3.24", l: "xG Suíça" },
            { v: "1 × 1", l: "Placar final" },
            { v: "3", l: "Amarelos" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Suíça vence a zero", odd: 2.20, edge: 0.67, kelly: 0.14, resultado: "miss",
              justificativa: "P(Suíça a zero) = P(Catar=0) × P(Suíça≥1) = e^(−0.22) × (1−e^(−2.91)) = 0.803 × 0.946 = 0.759. Edge = (0.759 × 2.20) − 1 = 67%. Khoukhi cabeceou no 90+4' e destruiu o clean sheet no último suspiro." },
            { cat: "conservadora", mercado: "Suíça marca no 1T", odd: 1.85, edge: 0.42, kelly: 0.12, resultado: "hit",
              justificativa: "λ Suíça 1T ≈ 2.91/2 = 1.455. P(≥1 gol no 1T) = 1−e^(−1.455) = 76.6%. Edge = (0.766 × 1.85) − 1 = 42%. Embolo converteu o pênalti no 17' — exatamente como o modelo previa." },
            { cat: "intermediaria", mercado: "Breel Embolo marca", odd: 2.80, edge: 0.45, kelly: 0.06, resultado: "hit",
              justificativa: "λ_Embolo ≈ 2.91 × 0.25 = 0.728. P(marca) = 51.7%. Edge = 45%. Embolo converteu o pênalti no 17' após falta de Abunada em Freuler." },
            { cat: "intermediaria", mercado: "Ruben Vargas marca", odd: 3.00, edge: 0.32, kelly: 0.04, resultado: "miss",
              justificativa: "λ_Vargas ≈ 2.91 × 0.20 = 0.582. P(marca) = 44.1%. Edge = 32%. Vargas sofreu a falta que gerou o pênalti (Gaber amarelado no 22') mas não marcou no jogo." },
            { cat: "intermediaria", mercado: "Over 3.5 cartões no jogo", odd: 2.80, edge: 0.10, kelly: 0.01, resultado: "miss",
              justificativa: "P(≥4 cartões) com Saíd Martínez (λ=3.2 no WC): Poisson → P(≥4) = 39.4%. Edge = 10%. Apenas 3 amarelos no total (Abunada, Gaber, Zakaria) — árbitro foi mais conservador do que seu perfil indicava." },
            { cat: "loucura", mercado: "Suíça vence + over 3.5 gols", odd: 3.80, edge: 0.42, kelly: 0.04, resultado: "miss",
              justificativa: "P(Suíça vence E total≥4) ≈ 37.3%. Edge = 42%. A goleada não veio: empate 1-1, Khoukhi no 90+4' impediu qualquer cenário de goleada suíça." },
            { cat: "loucura", mercado: "Suíça −2.5 handicap", odd: 3.50, edge: 0.79, kelly: 0.08, resultado: "miss",
              justificativa: "P(Suíça vence por ≥3) ≈ 51.1%. Edge = 79%. O modelo era correto em termos de dominância, mas o futebol entregou empate. Khoukhi cabeceou no 90+4' — o pior momento possível para o clean sheet suíço." }
          ]
        },
        {
          hora: "19h",
          mandante: "Brasil",
          visitante: "Marrocos",
          grupo: "C",
          local: "MetLife Stadium, East Rutherford (Nova York)",
          placar: "1 × 1",
          stats: "Saibari abriu (21', passe de Brahim Díaz). Vinicius Jr. igualou com golaço (32': recebeu de Bruno Guimarães na esquerda, cortou pro pé direito e acertou o ângulo oposto). HT 1-1 — Ancelotti substituiu Roger Ibañez e Casemiro (ambos com cartão) por Danilo e Fabinho no intervalo. Alisson fez dois milagres no 2T para preservar o ponto. 80.663 torcedores no MetLife Stadium.",
          numeros: [
            { v: "1 × 1", l: "Placar final" },
            { v: "32'", l: "Gol Vinicius" },
            { v: "1-1", l: "Placar no intervalo" },
            { v: "80.663", l: "Torcedores" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Empate no intervalo", odd: 2.10, edge: 0.16, kelly: 0.04, resultado: "hit",
              justificativa: "P(empate HT) ≈ 55% com base no padrão de Marrocos em 2022. Saibari abriu no 21', Vinicius igualou no 32' — ambos os gols no 1T, confirmando HT 1-1. Edge = 16%." },
            { cat: "conservadora", mercado: "Brasil marca no 1T", odd: 1.80, edge: 0.07, kelly: 0.02, resultado: "hit",
              justificativa: "λ Brasil 1T ≈ 0.895. P(≥1 gol Brasil no 1T) = 59.2%. Edge = 7%. Vinicius marcou no 32' — golaço cortando do pé esquerdo para o direito." },
            { cat: "intermediaria", mercado: "Vinicius Jr. marca", odd: 2.40, edge: 0.16, kelly: 0.03, resultado: "hit",
              justificativa: "λ_Vini = 1.79 × 0.35 × 1.05 = 0.658. P = 48.2%. Edge = 16%. Vinicius marcou o 10.º gol pela Seleção num dos gols mais bonitos da Copa até agora." },
            { cat: "intermediaria", mercado: "Matheus Cunha marca", odd: 4.00, edge: 0.20, kelly: 0.02, resultado: "miss",
              justificativa: "λ_Cunha = 1.79 × 0.20 = 0.358. P = 30.1%. Edge = 20%. Cunha não marcou — Brasil não conseguiu ampliar após o empate de Vinicius." },
            { cat: "intermediaria", mercado: "Lucas Paquetá marca", odd: 4.50, edge: 0.24, kelly: 0.02, resultado: "miss",
              justificativa: "λ_Paquetá = 1.79 × 0.18 = 0.322. P = 27.6%. Edge = 24%. Paquetá não marcou. Alisson precisou de dois milagres no 2T para segurar o empate." },
            { cat: "loucura", mercado: "Brasil vence a zero", odd: 4.00, edge: 0.10, kelly: 0.01, resultado: "miss",
              justificativa: "P = 0.61 × e^(−0.80) = 27.4%. Edge = 10%. Saibari abriu no 21' — Marrocos sem Aguerd e Ziyech ainda foi capaz de marcar e ameaçar no 2T." },
            { cat: "loucura", mercado: "Brasil vence + over 2.5 gols", odd: 4.00, edge: 0.36, kelly: 0.03, resultado: "miss",
              justificativa: "P ≈ 34.1%. Edge = 36%. Brasil não venceu e o jogo ficou em 2 gols totais. Marrocos defendeu em bloco no 2T após o empate, sem dar espaços." }
          ]
        },
        {
          hora: "22h",
          mandante: "Escócia",
          visitante: "Haiti",
          grupo: "C",
          local: "Gillette Stadium, Boston (Foxborough)",
          placar: "1 × 0",
          stats: "McGinn (28') finalizou o rebote após Placide bloquear Adams em contra-ataque iniciado por Grant Hanley. Haiti dominou a posse (56%) e as finalizações (15-9), com 2 finalizações no alvo para cada lado — partida muito disputada. Apenas 2 amarelos: Bellegarde (Haiti, tackle imprudente) e McLean (Escócia, perna alta). Árbitro Ghorbal foi mais conservador do que o esperado. Escócia lidera o Grupo C com 3 pts.",
          numeros: [
            { v: "1 × 0", l: "Placar final" },
            { v: "28'", l: "Gol McGinn" },
            { v: "15-9", l: "Chutes HAI-SCO" },
            { v: "56%", l: "Posse Haiti" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, edge: 0.10, kelly: 0.05, resultado: "miss",
              justificativa: "P(total≥2) com λ_total=2.59: 73.1%. Edge = 10%. Apenas 1 gol no total — Haiti dominou mas Placide defendeu bem e a Escócia foi eficiente com o único gol (McGinn 28')." },
            { cat: "conservadora", mercado: "Over 3.5 cartões no jogo", odd: 1.90, edge: 0.08, kelly: 0.02, resultado: "miss",
              justificativa: "Ghorbal (Argélia): média de 4.0 cartões/jogo. P(≥4 cartões) com Poisson(4.0) = 56.7%. Edge = 8%. Apenas 2 amarelos no jogo — árbitro foi muito mais conservador do que o perfil indicava." },
            { cat: "intermediaria", mercado: "Scott McTominay marca", odd: 2.80, edge: 0.11, kelly: 0.02, resultado: "miss",
              justificativa: "λ_McTominay ≈ 1.87 × 0.27 = 0.505. P(marca) = 39.6%. Edge = 11%. McGinn marcou o gol da partida (28'), não McTominay — que jogou bem no meio mas não finalizou." },
            { cat: "intermediaria", mercado: "Che Adams marca", odd: 3.50, edge: 0.50, kelly: 0.05, resultado: "miss",
              justificativa: "λ_Adams ≈ 1.87 × 0.30 = 0.561. P(marca) = 42.9%. Edge = 50%. Adams foi bloqueado por Placide — o rebote foi convertido por McGinn. Adams criou, McGinn finalizou." },
            { cat: "intermediaria", mercado: "Haiti marca", odd: 2.10, edge: 0.08, kelly: 0.02, resultado: "miss",
              justificativa: "P(Haiti≥1) = 1−e^(−0.72) = 51.3%. Edge = 8%. Haiti dominou (15 chutes, 56% posse) mas não marcou. Gunn fez boas defesas quando necessário." },
            { cat: "loucura", mercado: "Escócia −1.5 handicap", odd: 3.20, edge: 0.25, kelly: 0.03, resultado: "miss",
              justificativa: "P(Escócia vence por ≥2) ≈ 39.1%. Edge = 25%. 1-0 foi o placar — o Haiti resistiu muito mais do que os amistosos (5-0, 3-1) sugeriam. Copa não é amistoso." },
            { cat: "loucura", mercado: "Escócia vence + Haiti marca", odd: 5.00, edge: 0.18, kelly: 0.01, resultado: "miss",
              justificativa: "P(ESC>HAI E HAI≥1) ≈ 23.6%. Edge = 18%. Haiti não marcou apesar de dominar — Gunn foi bem nas poucas finalizações centrais." }
          ]
        }
      ]
    },
    {
      data: "2026-06-14",
      titulo: "Dia 4 — Dupla europeia: Alemanha estreia, Japão desafia Holanda",
      contexto: "Cinco grupos entram em cena no dia mais movimentado até agora. A rodada abre de madrugada (1h BRT) com Austrália vs Turquia em Vancouver — jogo de equilíbrio moderado no Grupo D. Às 14h, Alemanha estreia contra a debutante Curaçao em Houston (86% de favoritismo — o maior do dia). Às 17h, o duelo mais intrigante: Holanda vs Japão em Arlington, Texas — Japão chegou com 6 vitórias seguidas em amistosos (incluindo Brasil e Inglaterra) e Timber (HOL) está fora por lesão, fragilizando a defesa holandesa. Às 20h, Costa do Marfim vs Equador na Filadélfia pode decidir o 2.º lugar do Grupo E: Valencia é dúvida para o Equador. A rodada fecha às 23h com Suécia vs Tunísia em Monterrey — Gyokeres e Isak formam a mais letal dupla de centroavantes da Copa.",
      jogos: [
        {
          hora: "1h",
          mandante: "Turquia",
          visitante: "Austrália",
          grupo: "D",
          local: "BC Place, Vancouver",
          placar: "0 × 2",
          stats: "Surpresa do Dia 4: Turquia dominante (66% posse, 30 chutes) saiu sem nada. Austrália jogou no contra-ataque (9 chutes) e foi cirúrgica: Irankunda (27') e Metcalfe (74'). H2H confirmado — Austrália venceu o 5.º dos últimos 5 encontros com a Turquia. Modelo previu 61% para Turquia, mas eficiência australiana foi implacável.",
          numeros: [
            { v: "0 × 2", l: "Placar final" },
            { v: "30", l: "Chutes Turquia (0 gols)" },
            { v: "27'", l: "Gol Irankunda" },
            { v: "74'", l: "Gol Metcalfe" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.52, edge: 0.11, kelly: 0.05, resultado: "hit",
              justificativa: "λ_total = 2.59. P(total≥2) = 73.1%. Austrália marcou 2 gols em contra-ataques (Irankunda 27', Metcalfe 74') mesmo com apenas 9 chutes." },
            { cat: "conservadora", mercado: "Turquia vence a zero", odd: 2.85, edge: 0.08, kelly: 0.01, resultado: "miss",
              justificativa: "Turquia era 61% favorita mas saiu derrotada 0-2. Austrália contra-atacou com eficiência brutal — a Turquia criou mas não converteu nenhum dos 30 chutes." },
            { cat: "intermediaria", mercado: "Kenan Yildiz marca", odd: 2.75, edge: 0.09, kelly: 0.01, resultado: "miss",
              justificativa: "Turquia foi nula ofensivamente apesar dos 30 chutes. Yildiz não marcou em derrota de 0-2 para a Austrália." },
            { cat: "intermediaria", mercado: "Austrália não perde (dupla hipótese)", odd: 2.80, edge: 0.08, kelly: 0.01, resultado: "hit",
              justificativa: "P(empate+AUS vence) = 38.6%. Austrália venceu de 2-0 contra todo prognóstico de dominância turca. H2H prevaleceu — 5/5 vitórias australianas." },
            { cat: "loucura", mercado: "Turquia vence + over 2.5 gols", odd: 3.20, edge: 0.14, kelly: 0.02, resultado: "miss",
              justificativa: "Turquia não venceu. Apesar dos 30 chutes, não converteu sequer um gol contra a defesa australiana sólida." },
            { cat: "loucura", mercado: "Turquia −1.5 handicap", odd: 3.50, edge: 0.23, kelly: 0.02, resultado: "miss",
              justificativa: "Turquia perdeu por 2 gols, não venceu por 2. O modelo errou ao subestimar o contra-ataque australiano." }
          ]
        },
        {
          hora: "14h",
          mandante: "Alemanha",
          visitante: "Curaçao",
          grupo: "E",
          local: "NRG Stadium, Houston (Texas)",
          placar: "7 × 1",
          stats: "Goleada histórica. Nmecha 4', Comenencia 20' (CUR — gol histórico da estreia), Schlotterbeck 38' (cabeça pós-escanteio), Havertz pênalti 45+' e gol no 2T, Musiala, Nathaniel Brown e Undav completaram. Primeiro gol de Curaçao em Copas do Mundo. Modelo deu 85.7% — resultado superou todas as projeções.",
          numeros: [
            { v: "7 × 1", l: "Placar final" },
            { v: "2", l: "Gols Havertz" },
            { v: "20'", l: "Gol histórico Curaçao (Comenencia)" },
            { v: "85.7%", l: "Prob. modelo (acertou)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Alemanha vence a zero", odd: 1.70, edge: 0.14, kelly: 0.05, resultado: "miss",
              justificativa: "Comenencia marcou o gol histórico de Curaçao aos 20' — destruiu o clean sheet apesar da goleada. Modelo previa apenas 27.4% de chance de Curaçao marcar; eles converteram." },
            { cat: "conservadora", mercado: "Kai Havertz marca", odd: 2.10, edge: 0.12, kelly: 0.03, resultado: "hit",
              justificativa: "Havertz marcou 2 gols (pênalti no 1T + gol no 2T). λ_Havertz = 0.765 previu bem — foi o artilheiro do jogo junto da goleada histórica." },
            { cat: "intermediaria", mercado: "Jamal Musiala marca", odd: 2.25, edge: 0.06, kelly: 0.01, resultado: "hit",
              justificativa: "Musiala marcou no 2T. P(47.2%) confirmou — a liberdade de finalização de fora da área funcionou perfeitamente contra o bloco baixo do Curaçao." },
            { cat: "intermediaria", mercado: "Over 8.5 escanteios no jogo", odd: 1.85, edge: 0.06, kelly: 0.02, resultado: "hit",
              justificativa: "Alemanha dominou cruzamentos pelas alas (Kimmich+Raum constantes). Com 7-1 e Curaçao em bloco baixo, o volume de escanteios ultrapassou 9 no total da partida." },
            { cat: "loucura", mercado: "Alemanha −2.5 handicap", odd: 2.80, edge: 0.13, kelly: 0.02, resultado: "hit",
              justificativa: "7-1: diferença de 6 gols. A goleada superou até as projeções mais otimistas do modelo (P≈40% para ≥3 de diferença)." },
            { cat: "loucura", mercado: "Havertz e Musiala ambos marcam", odd: 4.50, edge: 0.13, kelly: 0.01, resultado: "hit",
              justificativa: "P = 0.535 × 0.472 = 25.3%. Edge 13.4%. Ambos marcaram — Havertz com 2 gols, Musiala com 1. O 7-1 distribuiu os gols por múltiplos jogadores como previsto." }
          ]
        },
        {
          hora: "17h",
          mandante: "Holanda",
          visitante: "Japão",
          grupo: "F",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: "2 × 2",
          stats: "Japão nunca desiste. Holanda abriu com Van Dijk (50') e Summerville (64'), mas o Japão respondeu com Nakamura (57') e Kamada aos 88' — gol mais tardio do Japão na história das Copas. Primeira vez que a Holanda esteve duas vezes em vantagem numa Copa e não venceu. Timber ausente sentiu-se no flanco esquerdo.",
          numeros: [
            { v: "2 × 2", l: "Placar final" },
            { v: "88'", l: "Gol Kamada (JPN)" },
            { v: "64'", l: "Gol Summerville (HOL)" },
            { v: "25%", l: "P(empate) modelo — acertou!" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Japão não perde (dupla hipótese)", odd: 2.10, edge: 0.14, kelly: 0.03, resultado: "hit",
              justificativa: "P(empate+JPN vence) = 54.4%. Japão empatou 2-2 com Kamada aos 88'. A análise de Timber ausente + pressing japonês foi certeira." },
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.95, edge: 0.06, kelly: 0.02, resultado: "hit",
              justificativa: "P = 54.3%. Ambas marcaram 2 gols cada. Jogo completamente aberto como λ_JPN=1.18 indicava." },
            { cat: "intermediaria", mercado: "Japão vence", odd: 3.80, edge: 0.11, kelly: 0.01, resultado: "miss",
              justificativa: "Japão empatou (não venceu) com gol dramático de Kamada aos 88'. A dica acertou o valor do Japão mas o resultado final foi empate." },
            { cat: "intermediaria", mercado: "Ayase Ueda marca", odd: 3.20, edge: 0.08, kelly: 0.01, resultado: "miss",
              justificativa: "Nakamura e Kamada marcaram para o Japão — Ueda não encontrou espaço. Os gols vieram de meio-campo, não do centroavante." },
            { cat: "intermediaria", mercado: "Cody Gakpo marca", odd: 2.90, edge: 0.07, kelly: 0.01, resultado: "miss",
              justificativa: "Os gols holandeses foram de Van Dijk e Summerville. Gakpo não marcou apesar da liberdade pela esquerda." },
            { cat: "loucura", mercado: "Japão vence + over 2.5 gols", odd: 7.00, edge: 0.18, kelly: 0.01, resultado: "miss",
              justificativa: "4 gols no total (over 2.5 ✓), mas o Japão não venceu — empatou. Meia dica certa, resultado final não." }
          ]
        },
        {
          hora: "20h",
          mandante: "Costa do Marfim",
          visitante: "Equador",
          grupo: "E",
          local: "Lincoln Financial Field, Philadelphia",
          placar: "1 × 0",
          stats: "Amad Diallo (sub, 90') assistido por Singo destrói a série invicta de 19 jogos do Equador. Jogo equilibrado com Costa do Marfim levemente superior nas finalizações (14 vs 10). Valencia jogou saindo do banco, não marcou. Primeiro ponto perdido do Equador em 19 jogos.",
          numeros: [
            { v: "1 × 0", l: "Placar final" },
            { v: "90'", l: "Gol Amad Diallo (sub)" },
            { v: "14", l: "Chutes CIV" },
            { v: "19", l: "Série inv. Equador encerrada" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Equador não perde (dupla hipótese)", odd: 1.42, edge: 0.16, kelly: 0.09, resultado: "miss",
              justificativa: "Costa do Marfim venceu no último suspiro com Diallo aos 90'. A série de 19 jogos invictos do Equador acabou de forma dramática — modelo errou ao confiar no retrospecto." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.14, kelly: 0.06, resultado: "miss",
              justificativa: "Apenas 1 gol no total. Costa do Marfim venceu de forma apertada 1-0 com Diallo no último minuto. λ_total=2.60 não se concretizou." },
            { cat: "conservadora", mercado: "Enner Valencia marca (se jogar)", odd: 2.40, edge: 0.09, kelly: 0.02, resultado: "miss",
              justificativa: "Valencia entrou como substituto e não marcou. Costa do Marfim venceu 1-0 com o único gol de Amad Diallo aos 90'." },
            { cat: "intermediaria", mercado: "Costa do Marfim não perde (dupla hipótese)", odd: 2.70, edge: 0.13, kelly: 0.02, resultado: "hit",
              justificativa: "P(empate+CIV vence) = 41.8%. CIV venceu de 1-0 com Amad Diallo no último minuto. O valor de underdog se concretizou perfeitamente." },
            { cat: "intermediaria", mercado: "Gonzalo Plata marca", odd: 3.80, edge: 0.12, kelly: 0.01, resultado: "miss",
              justificativa: "O único gol foi de Diallo (Costa do Marfim). Equador não marcou — Plata não foi decisivo." },
            { cat: "loucura", mercado: "Equador vence + Valencia marca", odd: 4.00, edge: 0.16, kelly: 0.01, resultado: "miss",
              justificativa: "Equador perdeu 1-0. Valencia entrou como sub e não marcou." }
          ]
        },
        {
          hora: "23h",
          mandante: "Suécia",
          visitante: "Tunísia",
          grupo: "F",
          local: "Estadio BBVA, Guadalupe (Monterrey)",
          placar: "5 × 1",
          stats: "Dominância total da Suécia. Yasin Ayari bisou, Isak e Gyokeres (com máscara por lesão no nariz) marcaram, Svanberg completou o 5.º. Rekik descontou para Tunísia. O duo Gyokeres+Isak brilhou juntos como previsto — Potter ressaltou o entrosamento. Suécia lidera o Grupo F isolada.",
          numeros: [
            { v: "5 × 1", l: "Placar final" },
            { v: "2", l: "Gols Ayari" },
            { v: "1", l: "Gol Gyokeres (com máscara)" },
            { v: "1", l: "Gol Isak" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.15, kelly: 0.07, resultado: "hit",
              justificativa: "6 gols no total. P(total≥2) = 74.2% — entregou goleada total com 5-1." },
            { cat: "conservadora", mercado: "Viktor Gyokeres marca", odd: 2.30, edge: 0.08, kelly: 0.02, resultado: "hit",
              justificativa: "Gyokeres marcou com máscara (lesão no nariz). P(47%) confirmado — o artilheiro do Sporting não decepciona nem com rosto protegido." },
            { cat: "intermediaria", mercado: "Alexander Isak marca", odd: 2.45, edge: 0.09, kelly: 0.02, resultado: "hit",
              justificativa: "Isak marcou. P(44.3%) confirmado. A dupla Isak+Gyokeres foi imparável contra a defesa tunisiana, como o modelo previa." },
            { cat: "intermediaria", mercado: "Tunísia não perde (dupla hipótese)", odd: 2.40, edge: 0.11, kelly: 0.02, resultado: "miss",
              justificativa: "Tunísia perdeu de 5-1. O contrarianismo falhou — a Suécia foi muito superior, e Hannibal não conseguiu equilibrar o jogo." },
            { cat: "loucura", mercado: "Gyokeres e Isak ambos marcam", odd: 5.50, edge: 0.14, kelly: 0.01, resultado: "hit",
              justificativa: "P = 20.8%. Edge 14.4%. Ambos marcaram — goleada de 5-1 distribuiu gols por múltiplos jogadores como previsto. Entrosamento confirmado." },
            { cat: "loucura", mercado: "Suécia −1.5 handicap", odd: 3.80, edge: 0.13, kelly: 0.01, resultado: "hit",
              justificativa: "5-1: diferença de 4 gols. P(≥2 de diferença) ≈ 29.8% — o cenário de goleada sueca se concretizou com amplitude surpreendente." }
          ]
        }
      ]
    },
    {
      data: "2026-06-15",
      titulo: "Dia 5 — Grupos G e H: Espanha estreia, Salah vs De Bruyne, Uruguai favorito",
      contexto: "Quatro grupos estreiam num dos dias mais aguardados. Espanha (Elo 2157, favorita ao título) enfrenta Cabo Verde em sua estreia histórica na Copa — Yamal recuperado de lesão muscular, Morata fora da convocação. Bélgica e Egito protagonizam o duelo mais equilibrado do dia: De Bruyne (6G nas Eliminatórias) contra Salah (9G, 9J), mas Lukaku com dúvida de forma (7 entradas como sub pelo Napoli no semestre). Uruguai (Bielsa, Valverde+Darwin+Ugarte) é forte favorito sobre a Arábia Saudita, que estreou o técnico Donis em abril com apenas 3 jogos antes da Copa. Irã (Taremi lidera sem Azmoun convocado) inicia contra a Nova Zelândia de Chris Wood.",
      jogos: [
        {
          hora: "13h",
          mandante: "Espanha",
          visitante: "Cabo Verde",
          grupo: "H",
          local: "Mercedes-Benz Stadium, Atlanta (Georgia)",
          placar: "0 × 0",
          stats: "Vozinha (40 anos!) parou a Espanha com 7 defesas — xG espanhol de 2.29, 27 chutes com 7 no alvo. Torres bateu na trave no melhor lance. Pedri levou o único amarelo (falta tática). Lamine Yamal saiu do banco no 2T mas não marcou. Cabo Verde teve 6 chutes e 1 no alvo — o mais improvável empate da Copa até agora. Espanha com λ=3.23 não marcou nem um gol.",
          numeros: [
            { v: "0 × 0", l: "Placar final" },
            { v: "27", l: "Chutes Espanha (0 gols)" },
            { v: "7", l: "Defesas Vozinha (40 anos)" },
            { v: "2.29", l: "xG Espanha desperdiçado" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Espanha vence a zero", odd: 1.35, edge: 0.10, kelly: 0.05, resultado: "miss",
              justificativa: "Vozinha (40 anos) fez 7 defesas históricas — empate 0-0. Espanha desperdiçou 2.29 xG sem converter um sequer. A dica dependia de Espanha vencer E Cabo Verde não marcar; ambos falharam." },
            { cat: "conservadora", mercado: "Espanha marca no 1T", odd: 1.25, edge: 0.08, kelly: 0.07, resultado: "miss",
              justificativa: "Espanha terminou o 1T sem gols apesar da pressão — Torres bateu na trave, Vozinha parou Oyarzabal e Laporte. λ_ESP_1T=1.615 previa 80% mas o goleiro de 40 anos foi sobrenatural." },
            { cat: "conservadora", mercado: "Over 2.5 gols", odd: 1.55, edge: 0.07, kelly: 0.03, resultado: "miss",
              justificativa: "0-0. Espanha gerou 2.29 xG mas Vozinha impediu qualquer gol. Cabo Verde defendeu de forma histórica e não houve nem 1 gol no jogo, muito menos 3." },
            { cat: "intermediaria", mercado: "Lamine Yamal marca", odd: 2.20, edge: 0.12, kelly: 0.03, resultado: "miss",
              justificativa: "Yamal entrou no 2T (não começou!) mas não marcou. Vozinha e o bloco defensivo do Cabo Verde travaram todos os ataques — ninguém marcou no jogo." },
            { cat: "intermediaria", mercado: "Nico Williams marca", odd: 2.40, edge: 0.06, kelly: 0.01, resultado: "miss",
              justificativa: "0-0. Williams tentou pelo flanco esquerdo mas foi contido pela organização defensiva de Cabo Verde. Nenhum espanhol marcou." },
            { cat: "intermediaria", mercado: "Espanha marca 4+ gols", odd: 2.80, edge: 0.13, kelly: 0.02, resultado: "miss",
              justificativa: "Espanha não marcou nem 1 gol. 4+ gols era o cenário dominante (40.5% de probabilidade) mas Vozinha foi o herói — bloqueou tudo." },
            { cat: "loucura", mercado: "Yamal e Williams ambos marcam", odd: 5.50, edge: 0.15, kelly: 0.01, resultado: "miss",
              justificativa: "Ninguém marcou. Vozinha parou tudo. A dupla Yamal+Williams não conseguiu perfurar o goleiro de 40 anos em sua estreia histórica na Copa." },
            { cat: "loucura", mercado: "Espanha −3.5 handicap", odd: 3.50, edge: 0.22, kelly: 0.02, resultado: "miss",
              justificativa: "0-0. Espanha não marcou nenhum gol — muito menos venceu por 4. O resultado mais improvável da Copa até agora enterrou todas as dicas ofensivas espanholas." },
            { cat: "loucura", mercado: "Espanha vence + Cabo Verde não chuta a gol", odd: 6.00, edge: 0.10, kelly: 0.01, resultado: "miss",
              justificativa: "Espanha não venceu (0-0) e Cabo Verde teve 6 chutes com 1 no alvo. Vozinha foi de guarda para herói — a dica falhou nas duas pernas." }
          ]
        },
        {
          hora: "16h",
          mandante: "Bélgica",
          visitante: "Egito",
          grupo: "G",
          local: "Lumen Field, Seattle (Washington)",
          placar: "1 × 1",
          stats: "Emam Ashour abriu para o Egito com chute de fora da área aos 19'. De Bruyne bateu na trave no 1T mas não marcou. Lukaku entrou como sub e apenas 22 segundos depois sua presença forçou o OG de Hany (66'). Egito na sua primeira Copa desde 1990 arrancou ponto heroico. Salah não marcou. 2 amarelos para cada lado. Bélgica: 15 chutes (3 no alvo); Egito: 14 chutes (3 no alvo). 52% posse Bélgica.",
          numeros: [
            { v: "1 × 1", l: "Placar final" },
            { v: "19'", l: "Gol Ashour (EGY)" },
            { v: "66'", l: "OG Hany (BEL, após Lukaku entrar 22s antes)" },
            { v: "4", l: "Amarelos (2 cada lado)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.14, kelly: 0.06, resultado: "hit",
              justificativa: "2 gols (1-1). λ_total=2.64 previa 74.2% de prob. — confirmado com Ashour (19') e OG Hany (66')." },
            { cat: "conservadora", mercado: "Kevin De Bruyne marca ou dá assistência", odd: 1.55, edge: 0.08, kelly: 0.04, resultado: "miss",
              justificativa: "De Bruyne bateu na trave no 1T mas não marcou e não deu assistência para o OG de Hany — foi a presença de Lukaku (não DBK) que forçou o desvio. Dica falhou: 0G/0A para DBK." },
            { cat: "conservadora", mercado: "Bélgica não perde (dupla hipótese)", odd: 1.35, edge: 0.05, kelly: 0.03, resultado: "hit",
              justificativa: "Bélgica empatou 1-1. P(BEL+EMP)=77.4% — Lukaku garantiu o ponto apenas 22 segundos após entrar. Courtois segurou o Egito no 2T." },
            { cat: "intermediaria", mercado: "Mohamed Salah marca", odd: 2.80, edge: 0.08, kelly: 0.01, resultado: "miss",
              justificativa: "Gol do Egito foi de Ashour (19'), não Salah. Apesar da temporada histórica pelo Liverpool, Salah não marcou na estreia da Copa." },
            { cat: "intermediaria", mercado: "Kevin De Bruyne marca", odd: 3.20, edge: 0.09, kelly: 0.01, resultado: "miss",
              justificativa: "Bélgica empatou via OG de Hany após movimentação de Lukaku. De Bruyne não marcou — foi substituído antes do empate." },
            { cat: "intermediaria", mercado: "Egito não perde (dupla hipótese)", odd: 2.40, edge: 0.13, kelly: 0.02, resultado: "hit",
              justificativa: "Egito empatou 1-1 — não perdeu. P(EGY+EMP)=47.1%. Ashour abriu no 19' e a equipe segurou o empate até o fim. Valor de underdog confirmado." },
            { cat: "loucura", mercado: "Egito vence", odd: 4.80, edge: 0.09, kelly: 0.01, resultado: "miss",
              justificativa: "Egito não venceu — empatou. Bélgica igualou via OG de Hany após entrada relâmpago de Lukaku (22s)." },
            { cat: "loucura", mercado: "Salah e De Bruyne ambos marcam", odd: 9.00, edge: 0.27, kelly: 0.01, resultado: "miss",
              justificativa: "Nenhum dos dois marcou. Gols foram de Ashour (EGY) e OG Hany (BEL). As duas estrelas do jogo foram silenciadas pelos sistemas defensivos." },
            { cat: "loucura", mercado: "Ambas marcam + over 2.5 gols", odd: 3.50, edge: 0.19, kelly: 0.02, resultado: "miss",
              justificativa: "Ambas marcaram (✓) mas total foi 2 gols (1-1), não over 2.5 (✗). A perna do gols acima de 2.5 falhou — o jogo ficou no mínimo possível de ambas marcarem." }
          ]
        },
        {
          hora: "19h",
          mandante: "Arábia Saudita",
          visitante: "Uruguai",
          grupo: "H",
          local: "Hard Rock Stadium, Miami (Florida)",
          placar: "1 × 1",
          stats: "Surpresa do Grupo H: Al-Amri (41') abriu para a Arábia após rebote do cabeçaço de Kanno defendido por Muslera. Darwin Núñez foi substituído no intervalo após atuação apagada. Al-Owais foi player of the match com série de defesas impressionantes. Maxi Araújo igualou perto do fim após Al-Owais empurrar cross de Vinas na cabeça do jogador. Uruguai: 67% posse, 27 chutes — maior posse em Copa desde 1966 — sem converter em vitória.",
          numeros: [
            { v: "1 × 1", l: "Placar final" },
            { v: "41'", l: "Gol Al-Amri (KSA)" },
            { v: "27", l: "Chutes Uruguai (1 gol)" },
            { v: "67%", l: "Posse Uruguai (recorde desde 1966)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Uruguai vence", odd: 1.44, edge: 0.06, kelly: 0.03, resultado: "miss",
              justificativa: "Uruguai não venceu — empatou 1-1. Darwin Núñez substituído no HT, Al-Owais player of the match. Uruguai teve 27 chutes e 67% de posse mas não converteu. Surpresa: Arábia Saudita repetiu o roteiro de 2022 vs Argentina." },
            { cat: "conservadora", mercado: "Darwin Núñez marca", odd: 2.10, edge: 0.09, kelly: 0.02, resultado: "miss",
              justificativa: "Darwin Núñez foi substituído no intervalo após atuação apagada. O gol do Uruguai saiu de Maxi Araújo no final, não de Darwin." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.13, kelly: 0.06, resultado: "hit",
              justificativa: "2 gols no total (1-1). λ_total=2.62, P=73.6% — confirmado. Al-Amri (41') e Maxi Araújo (final) marcaram." },
            { cat: "intermediaria", mercado: "Uruguai vence a zero", odd: 2.00, edge: 0.02, kelly: 0.01, resultado: "miss",
              justificativa: "Arábia Saudita abriu o placar com Al-Amri (41'). Uruguai não venceu a zero — perdeu o 0 no 1T e só empatou no fim." },
            { cat: "intermediaria", mercado: "Federico Valverde marca", odd: 4.00, edge: 0.07, kelly: 0.01, resultado: "miss",
              justificativa: "Uruguai empatou via Maxi Araújo, não Valverde. Al-Owais foi incrível contra o meio-campo uruguaio — Valverde não conseguiu finalizar com sucesso." },
            { cat: "intermediaria", mercado: "Arábia Saudita não perde (dupla hipótese)", odd: 5.00, edge: 0.13, kelly: 0.01, resultado: "hit",
              justificativa: "P(ARS+EMP)=26.3%. Arábia Saudita empatou 1-1 — não perdeu. Al-Owais foi heroico e Al-Amri marcou o 1-0 no 41'. O contrarianismo funcionou." },
            { cat: "loucura", mercado: "Uruguai vence + over 2.5 gols", odd: 3.50, edge: 0.16, kelly: 0.02, resultado: "miss",
              justificativa: "Uruguai não venceu (1-1) e total foi 2 gols (não over 2.5). Ambas as pernas falharam." },
            { cat: "loucura", mercado: "Darwin Núñez e Valverde ambos marcam", odd: 8.00, edge: 0.11, kelly: 0.01, resultado: "miss",
              justificativa: "Darwin saiu no HT sem marcar, Valverde não marcou. Úrico gol do Uruguai foi de Maxi Araújo. Al-Owais parou tudo." },
            { cat: "loucura", mercado: "Uruguai −2.5 handicap", odd: 4.50, edge: 0.09, kelly: 0.01, resultado: "miss",
              justificativa: "Uruguai não venceu sequer — empatou 1-1. A Arábia Saudita repetiu a mágica de 2022 contra os favoritos sul-americanos." }
          ]
        },
        {
          hora: "22h",
          mandante: "Irã",
          visitante: "Nova Zelândia",
          grupo: "G",
          local: "SoFi Stadium, Los Angeles (Inglewood)",
          placar: "2 × 2",
          stats: "Elijah Just bisou pela Nova Zelândia (7' e 54', combinando com Wood nas duas jogadas). Rezaeian igualou para o Irã (32', rebote) e Mohebbi de cabeça (64', assistência de Rezaeian com cruzamento da direita). Rezaeian: 1G+1A — 1ª vez um iraniano faz isso em Copa. Taremi não marcou. Hajsafi amarelo. Empate dramático: 4 gols, NZ nunca desistiu. Todos os times do Grupo G estão com 1 ponto.",
          numeros: [
            { v: "2 × 2", l: "Placar final" },
            { v: "2", l: "Gols Elijah Just (NZL)" },
            { v: "64'", l: "Gol Mohebbi — empate final (IRN)" },
            { v: "0", l: "Gols Taremi (não marcou)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Mehdi Taremi marca", odd: 1.95, edge: 0.15, kelly: 0.06, resultado: "miss",
              justificativa: "Taremi não marcou apesar de ser o artilheiro histórico do Irã. Os gols iranianos vieram de Rezaeian (32') e Mohebbi (64'). NZ surpreendeu com Elijah Just em dois gols." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, edge: 0.11, kelly: 0.06, resultado: "hit",
              justificativa: "4 gols no total (2-2). λ_total=2.67, P=74.7% — entregou jogo movimentado muito além do esperado. Just (2G), Rezaeian e Mohebbi." },
            { cat: "conservadora", mercado: "Irã vence a zero", odd: 1.85, edge: 0.04, kelly: 0.01, resultado: "miss",
              justificativa: "Nova Zelândia marcou 2 gols (Just 7' e 54'). Irã não venceu e não teve clean sheet — empatou 2-2 num jogo muito aberto." },
            { cat: "intermediaria", mercado: "Irã −1.5 handicap", odd: 2.80, edge: 0.06, kelly: 0.01, resultado: "miss",
              justificativa: "Empate 2-2 — Irã não venceu sequer por 1 gol. Elijah Just foi imparável pelo lado direito da NZ, bisando em dois momentos cruciais." },
            { cat: "intermediaria", mercado: "Taremi marca 2+ gols", odd: 5.50, edge: 0.22, kelly: 0.02, resultado: "miss",
              justificativa: "Taremi não marcou nenhum gol. A surpresa do jogo foi Elijah Just pela NZ e a dupla Rezaeian+Mohebbi para o Irã." },
            { cat: "intermediaria", mercado: "Nova Zelândia não perde (dupla hipótese)", odd: 6.50, edge: 0.14, kelly: 0.01, resultado: "hit",
              justificativa: "NZ empatou 2-2 — não perdeu! P(NZL+EMP)=22.1% era a contratante certa. Just bisou e Wood preparou os dois gols. Underdog histórico arrancou ponto contra o favorito iraniano." },
            { cat: "loucura", mercado: "Irã vence + over 2.5 gols", odd: 2.80, edge: 0.07, kelly: 0.01, resultado: "miss",
              justificativa: "Over 2.5 confirmado (4 gols) mas o Irã não venceu — empatou 2-2. A perna principal do resultado iraniano falhou." },
            { cat: "loucura", mercado: "Taremi marca + Irã vence a zero", odd: 4.00, edge: 0.23, kelly: 0.02, resultado: "miss",
              justificativa: "Taremi não marcou e Irã não venceu a zero (NZ fez 2 gols). Ambas as pernas falharam. Elijah Just e Rezaeian foram os destaques, não Taremi." },
            { cat: "loucura", mercado: "Chris Wood marca + Irã vence", odd: 8.00, edge: 0.11, kelly: 0.01, resultado: "miss",
              justificativa: "Wood não marcou (Just bisou combinando com Wood nas jogadas) e Irã não venceu — empatou 2-2. Falhou nas duas pernas, mas Wood foi fundamental nas assistências para Just." }
          ]
        }
      ]
    },
    {
      data: "2026-06-16",
      titulo: "Dia 6 — Mbappé bissa, Haaland bissa, Messi hat-trick histórico",
      contexto: "Dia de recordes. França 3×1 Senegal: jogo travado no 1T (0-0), virada com 4 gols em 24 min (Mbappé 66'+90+6', Barcola 82', Mbaye 90+5'). Mbappé tornou-se artilheiro histórico da França com 58 gols. Noruega 4×1 Iraque: Haaland 2G+1A (29' e 43'), Östigaard 76' e OG Hussein. Argentina 3×0 Argélia: Messi hat-trick (17', 59', 75') na 200ª cap — igualou Klose com 16 gols em Copas. Todos os 3 favoritos venceram.",
      jogos: [
        {
          hora: "16h",
          mandante: "França",
          visitante: "Senegal",
          grupo: "I",
          local: "MetLife Stadium, East Rutherford (New York)",
          placar: "3 × 1",
          stats: "1T travado: 0-0. Olise assistiu Mbappé que abriu no 66' com golaço no ângulo. Barcola saiu do banco e ampliou no 82' (dribou Édouard Mendy). Mbaye descontou no 90+5'. Mbappé selou 3-1 no 90+6'. Mbappé tornou-se artilheiro histórico da França com 58 gols (supera Giroud). 4 gols nos últimos 24 minutos.",
          numeros: [
            { v: "65%", l: "Prob. França (modelo)" },
            { v: "3 × 1", l: "Placar final" },
            { v: "58G", l: "Mbappé (recorde França)" },
            { v: "0-0", l: "Placar no intervalo" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "França não perde (dupla hipótese)", odd: 1.30, resultado: "hit",
              justificativa: "P(FRA+EMP) = 86.8%. França venceu 3-1 com virada no 2T — Mbappé bisou (66', 90+6') e Barcola ampliou (82')." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.45, resultado: "hit",
              justificativa: "λ_total=2.58. P(total≥2)=72.9%. 4 gols no total (3-1): Mbappé 66', Barcola 82', Mbaye 90+5', Mbappé 90+6'." },
            { cat: "conservadora", mercado: "França marca no 1T", odd: 1.65, resultado: "miss",
              justificativa: "λ_FRA_1T≈0.94. P(FRA≥1 no 1T)=60.9%. Senegal defendeu em bloco — 0-0 no intervalo. Todos os 4 gols vieram após os 66 minutos." },
            { cat: "intermediaria", mercado: "Kylian Mbappé marca", odd: 2.10, resultado: "hit",
              justificativa: "λ_Mbappé=0.564. P(marca)=43.1%. Mbappé bisou (66' e 90+6') e quebrou o recorde de Giroud com 58 gols pela França." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 2.00, resultado: "hit",
              justificativa: "P(FRA≥1 E SEN≥1)≈42.6%. Mbaye descontou no 90+5' para o Senegal — ambas marcaram nos acréscimos." },
            { cat: "intermediaria", mercado: "Sadio Mané marca", odd: 3.50, resultado: "miss",
              justificativa: "λ_Mané=0.245. P(marca)=21.7%. O gol senegalês veio de Mbaye (90+5'), não Mané. Senegal teve pouco espaço no 2T — HT ainda em 0-0." },
            { cat: "loucura", mercado: "França −1.5 handicap", odd: 3.20, resultado: "hit",
              justificativa: "P(FRA vence por ≥2)≈38%. França venceu 3-1 — diferença de 2 gols (exatamente no limite). Os 4 gols nos últimos 24 minutos transformaram um jogo truncado em vitória dominante." },
            { cat: "loucura", mercado: "Mbappé marca + França vence", odd: 3.50, resultado: "hit",
              justificativa: "P≈0.268. Pernas positivamente correlacionadas confirmadas: Mbappé bisou e França venceu 3-1. Melhor combo da estreia." },
            { cat: "loucura", mercado: "Senegal vence", odd: 7.50, resultado: "miss",
              justificativa: "P(SEN vence)=13.3%. Senegal chegou perto no HT (0-0) mas levou 3 gols no 2T. Mané não conseguiu o milagre de 2002." }
          ]
        },
        {
          hora: "19h",
          mandante: "Noruega",
          visitante: "Iraque",
          grupo: "I",
          local: "Gillette Stadium, Foxborough (Boston)",
          placar: "4 × 1",
          stats: "Haaland 29' (cruzamento de Moller Wolfe, passe Berge) e 43' (erro de recuo de Zaid Tahseen). Hussein reagiu para o Iraque no 39'. Östigaard cabeçada de escanteio no 76' (Ødegaard assistiu). OG Hussein nos acréscimos — flick de Thorstvedt carimbado no defesa. Haaland: 2G+1A. Ødegaard: 1A. 63.106 torcedores no Gillette Stadium. Noruega lidera o Grupo I isolada.",
          numeros: [
            { v: "74%", l: "Prob. Noruega (modelo)" },
            { v: "4 × 1", l: "Placar final" },
            { v: "2", l: "Gols Haaland" },
            { v: "2G+1A", l: "Contribuição Haaland" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Noruega vence", odd: 1.35, resultado: "hit",
              justificativa: "P(NOR vence)=74.3%. Goleada 4-1: Haaland×2, Östigaard e OG Hussein. Iraque marcou no 39' mas não teve condições de acompanhar o ritmo escandinavo." },
            { cat: "conservadora", mercado: "Erling Haaland marca", odd: 1.75, resultado: "hit",
              justificativa: "λ_Haaland=0.882. P(marca)=58.6%. Bisou (29' e 43') com 1A. Manteve a média de 16G em 8 classificatórias — imparável contra defesas de nível inferior." },
            { cat: "conservadora", mercado: "Noruega vence a zero", odd: 2.30, resultado: "miss",
              justificativa: "P=0.517. Hussein igualou para o Iraque no 39' — rebote de recuo errado. Clean sheet destruído antes do intervalo, apesar da goleada 4-1." },
            { cat: "intermediaria", mercado: "Noruega −1.5 handicap", odd: 2.50, resultado: "hit",
              justificativa: "P(NOR vence por ≥2)≈50.3%. Noruega venceu por 3 gols (4-1). Handicap superado com folga — exatamente o cenário que o modelo indicava." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.90, resultado: "hit",
              justificativa: "λ_total=2.63. P(≥3 gols)=49.1%. 5 gols no total: Haaland×2, Hussein, Östigaard, OG. Volume superou o esperado." },
            { cat: "intermediaria", mercado: "Martin Ødegaard marca ou dá assistência", odd: 2.00, resultado: "hit",
              justificativa: "Ødegaard assistiu o gol de Östigaard no 76' com escanteio certeiro. P(goal or assist)≈55% — capitão do Arsenal foi decisivo no 3-1." },
            { cat: "loucura", mercado: "Haaland bissa (2+ gols)", odd: 5.00, resultado: "hit",
              justificativa: "P(Haaland≥2)=22.1%. Edge=10.5%. Bisou (29' e 43') — 2G+1A em estreia de Copa. Hat-trick vs Israel nas qualificatórias previram isso." },
            { cat: "loucura", mercado: "Noruega marca 3+ gols", odd: 3.50, resultado: "hit",
              justificativa: "P(NOR≥3)=35.2%. Edge=23.2%. Noruega marcou 4 gols. Média de 4.6G/jogo nas classificatórias era o sinal mais forte — defesa iraquiana cedeu como esperado." },
            { cat: "loucura", mercado: "Haaland marca + Noruega vence a zero", odd: 4.50, resultado: "miss",
              justificativa: "P≈0.345. Haaland marcou ✓ mas clean sheet destruído: Hussein igualou no 39'. Perna principal acertou, clean sheet falhou por 1 gol infeliz." }
          ]
        },
        {
          hora: "22h",
          mandante: "Argentina",
          visitante: "Argélia",
          grupo: "J",
          local: "Arrowhead Stadium, Kansas City (Missouri)",
          placar: "3 × 0",
          stats: "Messi hat-trick na 200ª cap: 17' (1T), 59' e 75'. Igualou Miroslav Klose com 16 gols em Copas do Mundo. Luca Zidane (goleiro argelino) cedeu 3 em estreia difícil. Lautaro não marcou — todos os gols foram de Messi. Argélia sem Bensebaini desorganizada defensivamente. Argentina lidera o Grupo J isolada.",
          numeros: [
            { v: "82%", l: "Prob. Argentina (modelo)" },
            { v: "3 × 0", l: "Placar final" },
            { v: "3", l: "Gols Messi (hat-trick)" },
            { v: "16", l: "Gols Messi em Copas (= Klose)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Argentina vence", odd: 1.30, resultado: "hit",
              justificativa: "P(ARG vence)=82.1%. Argentina venceu 3-0 com hat-trick de Messi na 200ª cap. Dominância absoluta — Argélia nunca ameaçou Dibu Martínez." },
            { cat: "conservadora", mercado: "Argentina vence a zero", odd: 1.65, resultado: "hit",
              justificativa: "P=0.621. Argélia sem Bensebaini não produziu chances claras. Romero e L.Martínez mantiveram a folha em branco." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: "hit",
              justificativa: "λ_total=2.76. P(total≥2)=76.1%. Hat-trick de Messi (17', 59', 75') entregou 3 gols totais." },
            { cat: "intermediaria", mercado: "Lautaro Martínez marca", odd: 2.10, resultado: "miss",
              justificativa: "λ_Lautaro=0.714. P(marca)=50.9%. Lautaro não marcou — hat-trick de Messi concentrou todos os gols. Top scorer Copa América 2024 ficou eclipsado pelo companheiro histórico." },
            { cat: "intermediaria", mercado: "Argentina marca 3+ gols", odd: 2.50, resultado: "hit",
              justificativa: "P(ARG≥3)=42.5%. Argentina marcou exatamente 3 — hat-trick de Messi aos 17', 59' e 75'. λ=2.38 foi preciso." },
            { cat: "intermediaria", mercado: "Argentina −2.5 handicap", odd: 3.50, resultado: "hit",
              justificativa: "P(ARG vence por ≥3)≈32%. Argentina venceu por 3 gols (3-0) — Messi na 200ª cap não decepciona em Copa." },
            { cat: "loucura", mercado: "Messi e Lautaro ambos marcam", odd: 5.50, resultado: "miss",
              justificativa: "P≈0.212. Messi fez hat-trick mas Lautaro não marcou. Os 3 gols foram todos de Messi — a lenda na 200ª cap não compartilhou os holofotes." },
            { cat: "loucura", mercado: "Argentina vence + over 3.5 gols", odd: 4.50, resultado: "miss",
              justificativa: "P≈0.247. Argentina venceu ✓ mas com apenas 3 gols (não over 3.5). Hat-trick de Messi encerrou o jogo cedo — Argélia nunca reagiu." },
            { cat: "loucura", mercado: "Riyad Mahrez marca + Argélia não perde", odd: 14.00, resultado: "miss",
              justificativa: "Argélia perdeu 3-0. Mahrez não marcou. A especulação contrarian não se materializou — Argentina foi simplesmente superior em todos os aspectos." }
          ]
        }
      ]
    },
    {
      data: "2026-06-17",
      titulo: "Dia 7 — Grupos J, K e L: Ronaldo estreia, Inglaterra vs Croácia, Colômbia debuta",
      contexto: "Dia de recordes e surpresas. Áustria 3×1 Jordânia (Schmid 21', Olwan 50' — 1.º gol histórico da Jordânia em Copas!, OG 76', Arnautovic pen 90+12'). Portugal 1×1 RD Congo: João Neves abriu (6'), Wissa empatou no 45+5' — 1.º gol da RD Congo em 52 anos, e o xG foi favorável aos africanos (0.82 vs 0.64). Inglaterra 4×2 Croácia: Kane bisou (10G em Copas = Lineker), Bellingham e Rashford completaram a virada 4-2. Panamá 0×1 Gana: Yirenkyi selou na 95' após Panamá dominar o 1T. Colômbia 3×1 Uzbequistão: Díaz com 1G+1A+travessão; Fayzullaev marcou o 1.º gol uzbeque em Copas.",
      jogos: [
        {
          hora: "1h",
          mandante: "Áustria",
          visitante: "Jordânia",
          grupo: "J",
          local: "Levi's Stadium, Santa Clara (San Francisco Bay Area)",
          placar: "3 × 1",
          stats: "Schmid 21' com golaço de fora da área (1-0). Olwan 50' — remate enrolado que entrou no ângulo: 1º gol histórico da Jordânia em Copas do Mundo (1-1). Abu Al-Arab OG 76' após escanteio austríaco (2-1). Arnautovic pen 90+12' após revisão VAR por handball (3-1) — tornou-se o marcador mais velho da Áustria em Copas. 1ª vitória austríaca em Copa em 36 anos. Modelo: pM(AUT)=59.2%, λAUT=1.76, λJOR=0.84.",
          numeros: [
            { v: "59%", l: "Prob. Áustria (modelo)" },
            { v: "3 × 1", l: "Placar final" },
            { v: "50'", l: "Olwan — 1º gol histórico Jordânia" },
            { v: "90+12'", l: "Arnautovic (pen, mais velho AUT em Copa)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Áustria não perde (dupla hipótese)", odd: 1.30, resultado: "hit",
              justificativa: "P(AUT+EMP)=82.4%. Áustria venceu 3-1 — Schmid 21', OG 76' e Arnautovic pen 90+12'. Modelo correto no vencedor." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.52, resultado: "hit",
              justificativa: "λ_total=2.60. P(total≥2)=72.9%. 4 gols no total (3-1). Jogo aberto com ambos os times produzindo." },
            { cat: "conservadora", mercado: "Áustria vence a zero", odd: 2.50, resultado: "miss",
              justificativa: "P=0.358. Jordânia marcou o histórico 1º gol em Copa (Olwan 50') — clean sheet destruído no início do 2T." },
            { cat: "intermediaria", mercado: "Áustria vence", odd: 1.68, resultado: "hit",
              justificativa: "P(AUT vence)=59.2%. Áustria 3-1 com Schmid (21'), OG (76') e Arnautovic pen (90+12'). 1ª vitória em Copa em 36 anos." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 1.95, resultado: "hit",
              justificativa: "P(AUT≥1 E JOR≥1)≈47.0%. Schmid 21' e Olwan 50' confirmaram — λJOR=0.84 dava 57% de chance de Jordânia marcar." },
            { cat: "intermediaria", mercado: "Marko Arnautovic marca", odd: 2.80, resultado: "hit",
              justificativa: "λ_Arnautovic≈1.76×0.22=0.387. P(marca)=32.2%. Converteu pênalti nos acréscimos (90+12') após VAR — artilheiro mais velho da Áustria em Copas." },
            { cat: "loucura", mercado: "Áustria −1.5 handicap", odd: 2.60, resultado: "hit",
              justificativa: "P(AUT vence por ≥2)≈30.1%. Áustria venceu por 2 gols (3-1) — exatamente no limite. Schmid+OG+Arnautovic entregaram a margem necessária." },
            { cat: "loucura", mercado: "Jordânia marca", odd: 4.50, resultado: "hit",
              justificativa: "P(JOR≥1)=56.8%. Odds de 4.50 eram valor claro. Olwan 50' marcou o 1º gol da Jordânia em toda a história das Copas — momento histórico." },
            { cat: "loucura", mercado: "Áustria marca 3+ gols", odd: 3.80, resultado: "hit",
              justificativa: "P(AUT≥3)≈25.9% com λ=1.76. Áustria marcou exatamente 3 — Schmid 21', OG 76', Arnautovic 90+12'. Motivação de volta à Copa após 36 anos entregou atuação completa." }
          ]
        },
        {
          hora: "14h",
          mandante: "Portugal",
          visitante: "RD Congo",
          grupo: "K",
          local: "NRG Stadium, Houston (Texas)",
          placar: "1 × 1",
          stats: "Empate histórico. João Neves abriu (6', cabeçada de cruzamento de Pedro Neto) na 1ª finalização portuguesa. Wissa empatou no 45+5' (assistência de Masuaku) — 1.º gol da RD Congo em Copas em 52 anos de espera (32.ª finalização tentada). Ronaldo completou 10 jogos seguidos sem marcar em grandes torneios. Fernandes 0G/0A. Portugal: 7 chutes, 0.64 xG; RD Congo: 8 chutes, 0.82 xG — debutante superou Portugal no xG.",
          numeros: [
            { v: "76%", l: "Prob. Portugal (modelo)" },
            { v: "1 × 1", l: "Placar final" },
            { v: "45+5'", l: "Gol Wissa — 1.º RD Congo em Copa" },
            { v: "10", l: "Jogos Ronaldo sem marcar em torneios" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Portugal vence", odd: 1.35, resultado: "miss",
              justificativa: "P(POR vence)=75.6%. Empate 1-1 — João Neves abriu no 6' mas Wissa empatou no 45+5'. Ronaldo e Fernandes não contribuíram com gols. RD Congo Surpreendeu até no xG (0.82 vs 0.64 de Portugal)." },
            { cat: "conservadora", mercado: "Portugal vence a zero", odd: 1.80, resultado: "miss",
              justificativa: "Wissa empatou no 45+5' (assist. Masuaku) — 1.º gol histórico da RD Congo em Copa. λ_COD=0.50 dava 39% de chance de marcarem; o converted foi tardio mas suficiente para destruir o clean sheet." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.40, resultado: "hit",
              justificativa: "λ_total=2.64, P(total≥2)=74.5%. Confirmado: 2 gols (João Neves 6', Wissa 45+5'). Modelo previa jogo com gols — entregou 2, exatamente no mínimo para over 1.5." },
            { cat: "intermediaria", mercado: "Cristiano Ronaldo marca", odd: 2.30, resultado: "miss",
              justificativa: "Ronaldo completou 10 jogos sem marcar em grandes torneios. O gol de Portugal veio de João Neves (6'), não de Ronaldo. Wissa foi o herói do outro lado." },
            { cat: "intermediaria", mercado: "Bruno Fernandes marca ou dá assistência", odd: 1.75, resultado: "miss",
              justificativa: "Pedro Neto deu o cruzamento para João Neves (não Fernandes). Wissa recebeu de Masuaku. Fernandes terminou com 0G/0A — a melhor temporada da história da PL não se traduziu numa contribuição direta." },
            { cat: "intermediaria", mercado: "Portugal marca 3+ gols", odd: 2.60, resultado: "miss",
              justificativa: "Portugal marcou apenas 1 gol com 7 chutes (0.64 xG). RD Congo defendeu com blocos compactos e surpreendeu defensivamente — empate 1-1, muito longe dos 3+ gols esperados." },
            { cat: "loucura", mercado: "Ronaldo e Fernandes ambos marcam", odd: 5.50, resultado: "miss",
              justificativa: "Nenhum dos dois marcou. João Neves foi o artilheiro de Portugal; Fernandes sem contribuição direta. Empate 1-1 foi o cenário mais improvável do Grupo K." },
            { cat: "loucura", mercado: "Portugal −2.5 handicap", odd: 3.20, resultado: "miss",
              justificativa: "Portugal não venceu sequer — empatou 1-1. RD Congo superou o xG do adversário e marcou um gol histórico que valeu o ponto mais improvável da Copa." },
            { cat: "loucura", mercado: "Cédric Bakambu marca", odd: 6.00, resultado: "miss",
              justificativa: "O gol da RD Congo veio de Wissa (45+5'), não Bakambu. Portugal empatou no placar mas perdeu no xG — resultado que representa um dos maiores azarões da 1ª rodada." }
          ]
        },
        {
          hora: "17h",
          mandante: "Inglaterra",
          visitante: "Croácia",
          grupo: "L",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: "4 × 2",
          stats: "Show inglês em Dallas. Kane bisou (12' pênalti retomado após encroachment+Livakovic fora da linha, 42'). Baturina (36') e Musa (45+5') responderam — dois lados empataram no 1T, final 2-2. Bellingham entrou dominante no 2T e finalizou no ângulo (47'). Rashford (sub) selou 4-2 no 85'. Kane iguala Lineker com 10G em Copas — 1.º inglês a marcar em 3 Copas (2018, 2022, 2026). ING: 22 chutes, 2.8 xG; CRO: 10 chutes, 0.71 xG.",
          numeros: [
            { v: "52%", l: "Prob. ING (modelo)" },
            { v: "4 × 2", l: "Placar final" },
            { v: "10G", l: "Kane em Copas (= Lineker, recorde)" },
            { v: "22 chutes", l: "Inglaterra (2.8 xG)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Inglaterra não perde (dupla hipótese)", odd: 1.35, resultado: "hit",
              justificativa: "P(ING+EMP)=77.0%. Inglaterra venceu 4-2 — Kane bisou (12', 42'), Bellingham (47') e Rashford (85'). Tuchel entregou a vitória mesmo após levar 2 gols no 1T." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, resultado: "hit",
              justificativa: "λ_total=2.64, P(total≥2)=74.5%. 6 gols no total: Kane×2, Baturina, Musa, Bellingham, Rashford — jogo mais aberto da Copa até agora." },
            { cat: "conservadora", mercado: "Harry Kane marca", odd: 1.80, resultado: "hit",
              justificativa: "Kane bisou (12' pênalti + 42') — 10G em Copas, iguala Lineker (recorde britânico). λ_Kane=0.525 entregou dois gols numa tarde histórica para o artilheiro do Bayern." },
            { cat: "intermediaria", mercado: "Jude Bellingham marca", odd: 3.20, resultado: "hit",
              justificativa: "Bellingham entrou dominante no 2T e finalizou no ângulo (47'). λ_Bellingham=0.328, P=27.9% — a infiltração pelo meio do Real Madrid se concretizou 2 minutos após o intervalo." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 2.10, resultado: "hit",
              justificativa: "P≈51%. Baturina (36') e Musa (45+5') para a Croácia, Kane+Bellingham+Rashford para a Inglaterra. 4-2 — ambas marcaram abundantemente." },
            { cat: "intermediaria", mercado: "Croácia não perde (dupla hipótese)", odd: 2.60, resultado: "miss",
              justificativa: "Croácia perdeu 4-2. Empatou 2-2 no intervalo (Baturina 36', Musa 45+5') mas levou dois gols no 2T — Bellingham 47' e Rashford 85'. DNA de resistência de 2018 não sobreviveu." },
            { cat: "loucura", mercado: "Kane e Bellingham ambos marcam", odd: 6.00, resultado: "hit",
              justificativa: "P≈0.126. Kane bisou (12', 42') e Bellingham marcou (47'). Combo natural do 4-2-3-1 de Tuchel se concretizou — vitória dominante onde os dois atores principais entregaram." },
            { cat: "loucura", mercado: "Inglaterra −1.5 handicap", odd: 3.80, resultado: "hit",
              justificativa: "P(ING vence por ≥2)≈23.5%. Inglaterra venceu por 2 gols (4-2) — exatamente no limite do −1.5. Kane+Bellingham+Rashford entregaram numa noite histórica em Dallas." },
            { cat: "loucura", mercado: "Croácia vence", odd: 4.80, resultado: "miss",
              justificativa: "P(CRO vence)=23.1%. Croácia chegou perto com 2-2 no intervalo mas o 2T foi todo inglês. Modric não conseguiu repetir a magia de 2018 — Kane e Bellingham foram imbatíveis." }
          ]
        },
        {
          hora: "20h",
          mandante: "Panamá",
          visitante: "Gana",
          grupo: "L",
          local: "BMO Field, Toronto (Canadá)",
          placar: "0 × 1",
          stats: "Drama nos acréscimos: Gana venceu com gol de Yirenkyi na 95' — o mais tardio da Gana em Copas. Brandon Thomas-Asante cruzou pela esquerda após passe de Ayew; Yirenkyi apareceu livre no segundo poste. Panamá dominou a posse no 1T (64%) e liderou os chutes 3-0 no intervalo, mas não marcou. Ayew (34 anos, 120 caps) tornou-se o jogador mais velho da Gana em Copas, mas não marcou. Modelo: pM(PAN)=44%, Gana venceu com 30.7%.",
          numeros: [
            { v: "0 × 1", l: "Placar final" },
            { v: "95'", l: "Gol Yirenkyi — mais tardio Gana em Copa" },
            { v: "64%", l: "Posse Panamá no 1T (0 gols)" },
            { v: "120 caps", l: "Ayew (mais velho Gana em Copa)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Gana não perde (dupla hipótese)", odd: 1.65, resultado: "hit",
              justificativa: "P(GAN+EMP)=55.9%. Gana venceu 1-0 com Yirenkyi na 95'. Ayew comandou a transição que gerou o gol vitorioso — valor de underdog confirmado no último suspiro." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.60, resultado: "miss",
              justificativa: "Apenas 1 gol no total (Yirenkyi 95'). Panamá dominou estatisticamente no 1T mas não converteu. λ_total=2.75 previa 75% de over 1.5, mas o jogo foi travadíssimo até os acréscimos." },
            { cat: "conservadora", mercado: "Jordan Ayew marca", odd: 2.50, resultado: "miss",
              justificativa: "O gol veio de Yirenkyi (sub) na 95', não Ayew. Ayew foi o criador do contra-ataque (passe para Thomas-Asante), mas o finalizador foi Yirenkyi — capitão sem gol." },
            { cat: "intermediaria", mercado: "Panamá não perde (dupla hipótese)", odd: 2.00, resultado: "miss",
              justificativa: "Panamá perdeu 1-0 no último minuto de acréscimo. Dominou a posse (64%) e o 1T estatisticamente mas não converteu — o modelo errara ao preferir Panamá (44% vs 30.7% Gana)." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 2.20, resultado: "miss",
              justificativa: "Panamá não marcou nenhum gol. Apesar de dominar o 1T, a defesa ganense aguentou até os acréscimos. Apenas 1 gol no jogo — Yirenkyi na 95'." },
            { cat: "intermediaria", mercado: "Inaki Williams marca", odd: 3.50, resultado: "miss",
              justificativa: "O único gol de Gana foi de Yirenkyi (sub). Williams não marcou em mais um jogo sem gol pela seleção — a velocidade do Bilbao não foi suficiente para furar o bloco panamenho." },
            { cat: "loucura", mercado: "Gana vence + Ayew marca", odd: 5.50, resultado: "miss",
              justificativa: "Gana venceu ✓ mas Ayew não marcou ✗. O gol foi de Yirenkyi na 95'. Combo falhou na segunda perna — mesmo com Ayew comandando o contra-ataque que gerou o gol." },
            { cat: "loucura", mercado: "Over 2.5 gols", odd: 2.80, resultado: "miss",
              justificativa: "Apenas 1 gol no jogo (Yirenkyi 95'). Panamá com 64% de posse e Gana sem Partey resultou num jogo muito fechado — o único gol foi nos acréscimos, muito longe dos 3+ previstos." },
            { cat: "loucura", mercado: "Panamá vence a zero", odd: 5.00, resultado: "miss",
              justificativa: "Panamá perdeu 1-0. Gana marcou no 95' — o modelo tinha 44% para o Panamá mas os panamenhos não converteram suas oportunidades e levaram o gol no último suspiro." }
          ]
        },
        {
          hora: "23h",
          mandante: "Colômbia",
          visitante: "Uzbequistão",
          grupo: "K",
          local: "Estadio Azteca, Cidade do México",
          placar: "3 × 1",
          stats: "Díaz comanda no Azteca. Muñoz abriu no 40' (volley, assistência de Díaz). Fayzullaev empatou no 60' — 1.º gol histórico do Uzbequistão em Copas. Díaz devolveu a vantagem no 65'. Campaz selou no 90+9' após James sair como sub. Díaz: 1G+1A+travessão — 1.º jogador da Copa 2026 com esse triplo. James sem gol ou assistência. Apenas 1 amarelo total (Khusanov 34'). 80.824 torcedores.",
          numeros: [
            { v: "78%", l: "Prob. Colômbia (modelo)" },
            { v: "3 × 1", l: "Placar final" },
            { v: "1G+1A+🥅", l: "Díaz (gol+assist+travessão)" },
            { v: "60'", l: "Fayzullaev — 1.º gol Uzbequistão em Copa" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Colômbia vence", odd: 1.35, resultado: "hit",
              justificativa: "P(COL vence)=78.3%. Colômbia venceu 3-1 com Muñoz (40'), Díaz (65') e Campaz (90+9'). Qualidade individual prevaleceu sobre o bloco defensivo uzbeque." },
            { cat: "conservadora", mercado: "Colômbia vence a zero", odd: 1.90, resultado: "miss",
              justificativa: "Fayzullaev empatou no 60' — 1.º gol do Uzbequistão em Copas. λ_UZB=0.45 dava apenas 36% mas os uzbequistaneses marcaram o gol histórico." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.40, resultado: "hit",
              justificativa: "λ_total=2.68, P(total≥2)=75.4%. 4 gols: Muñoz, Fayzullaev, Díaz, Campaz. Volume confirmado, com bônus do gol histórico uzbeque." },
            { cat: "intermediaria", mercado: "Luis Díaz marca", odd: 2.20, resultado: "hit",
              justificativa: "Díaz marcou no 65' e ainda assistiu Muñoz no 40' e bateu no travessão — 1.º na Copa 2026 com gol+assistência+madeira no mesmo jogo. λ_Díaz=0.669 entregou o esperado." },
            { cat: "intermediaria", mercado: "James Rodríguez marca ou dá assistência", odd: 1.90, resultado: "miss",
              justificativa: "James foi substituído por Campaz antes do 4.º gol e não registrou nem gol nem assistência. A assistência de Díaz para Muñoz e o gol de Campaz não passaram pelo capitão." },
            { cat: "intermediaria", mercado: "Colômbia marca 3+ gols", odd: 2.50, resultado: "hit",
              justificativa: "P(COL≥3)=40.0%. Colômbia marcou exatamente 3 gols (Muñoz 40', Díaz 65', Campaz 90+9'). λ=2.23 entregou o volume esperado." },
            { cat: "loucura", mercado: "Colômbia −2.5 handicap", odd: 2.80, resultado: "miss",
              justificativa: "3-1: diferença de apenas 2 gols, não ≥3. Fayzullaev (60') cortou a sequência — Uzbequistão marcou o gol histórico que impediu a goleada maior." },
            { cat: "loucura", mercado: "Over 4.5 cartões no jogo", odd: 3.20, resultado: "miss",
              justificativa: "Apenas 1 amarelo no total (Khusanov 34'). Anthony Taylor surpreendentemente conservador no Azteca — zero vermelho e mínimo de amarelos num jogo tranquilo." },
            { cat: "loucura", mercado: "Díaz e James ambos marcam", odd: 6.50, resultado: "miss",
              justificativa: "Díaz marcou ✓ mas James não marcou ✗ (saiu como sub sem g/a). Os 3 gols colombianos foram de Muñoz, Díaz e Campaz — James ficou em branco." }
          ]
        }
      ]
    }
    ,{
      data: "2026-06-18",
      titulo: "Dia 8 — Canadá goleia histórico, México classifica, Suíça avança",
      contexto: "Grupos A e B encerram R2. Canadá 6-0 Catar: Jonathan David hat-trick (29', 45+3', 90+2'), Larin 16', Saliba 64', Manai OG 75' — 1.ª vitória canadense em Copas, iguala recorde de maior vitória de sede. Tchéquia 1-1 África do Sul: Sadilek 5' e Mokoena pênalti. Suíça 4-1 Bósnia após expulsão de Muharemovic (80'): Manzambi bisou, Vargas e Xhaka pen. México 1-0 Coreia do Sul: Romo no 50' aproveitando erro do goleiro Kim Seung-gyu — México classifica como 1.º do Grupo A.",
      jogos: [
        {
          hora: "13h",
          mandante: "Tchéquia",
          visitante: "África do Sul",
          grupo: "A",
          local: "Mercedes-Benz Stadium, Atlanta (Georgia)",
          placar: "1 × 1",
          stats: "Empate que mantém tudo em aberto no Grupo A. Sadilek abriu para a Tchéquia aos 5' (assistência de Sojka). África do Sul reagiu com Mokoena convertendo pênalti — sem Sithole e Zwane (suspensos), o ataque criou de outra forma. Schick não marcou apesar da forma imaculada. Árbitro Tori Penso liderou a 1.ª equipa arbitral 100% feminina da história das Copas — jogo controlado. Ambas seguem com 1 pt.",
          numeros: [
            { v: "66.5%", l: "Prob. Tchéquia" },
            { v: "1 × 1", l: "Placar final" },
            { v: "5'", l: "Gol Sadilek (TCH)" },
            { v: "pen", l: "Mokoena igualou (RSA, pênalti)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Tchéquia não perde (dupla hipótese)", odd: 1.40, resultado: "hit",
              justificativa: "P(TCH+EMP)=87.5%. Tchéquia não perdeu — empatou 1-1. Sadilek abriu no 5' mas Mokoena igualou de pênalti. Ponto garantido, sem vitória." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, resultado: "hit",
              justificativa: "λ_total=2.58. P(total≥2)=72.9%. 2 gols no total (1-1) — Sadilek 5' e Mokoena pen. Over 1.5 confirmado no mínimo possível." },
            { cat: "conservadora", mercado: "Patrik Schick marca", odd: 2.20, resultado: "miss",
              justificativa: "Schick não marcou. O gol tcheco foi de Sadilek (5'). A defesa sul-africana conteve o artilheiro da Bundesliga apesar das ausências de Sithole e Zwane." },
            { cat: "intermediaria", mercado: "Tchéquia vence a zero", odd: 2.40, resultado: "miss",
              justificativa: "P=43.1%. África do Sul marcou de pênalti com Mokoena — sem os suspensos, encontrou outro caminho para o gol. Clean sheet tcheco perdido." },
            { cat: "intermediaria", mercado: "Tchéquia marca 2+ gols", odd: 2.00, resultado: "miss",
              justificativa: "Tchéquia marcou apenas 1 gol (Sadilek 5'). Defesa sul-africana resistiu além do esperado apesar das ausências no meio-campo." },
            { cat: "intermediaria", mercado: "Relebohile Mofokeng marca", odd: 4.50, resultado: "miss",
              justificativa: "O gol da África do Sul foi de Mokoena (pênalti), não Mofokeng. O jovem winger do Orlando Pirates não apareceu no placar no 2.º jogo em Copa." },
            { cat: "loucura", mercado: "Tchéquia vence a zero + Schick marca", odd: 5.50, resultado: "miss",
              justificativa: "Ambas as pernas falharam: Tchéquia não venceu (empatou 1-1, Mokoena pen) e Schick não marcou (Sadilek foi o artilheiro tcheco)." },
            { cat: "loucura", mercado: "Schick e Hložek ambos marcam", odd: 7.00, resultado: "miss",
              justificativa: "Nenhum dos dois marcou. O único gol tcheco foi de Sadilek (5'). Duo da Leverkusen foi contido pela organização sul-africana mesmo reduzida." },
            { cat: "loucura", mercado: "Tchéquia −1.5 handicap", odd: 3.50, resultado: "miss",
              justificativa: "Tchéquia não venceu sequer — empatou 1-1. Mokoena converteu o pênalti da igualdade. Goleada não se materializou contra adversário organizado." }
          ]
        },
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Bósnia e Herz.",
          grupo: "B",
          local: "SoFi Stadium, Los Angeles (Inglewood)",
          placar: "4 × 1",
          stats: "Avalanche suíça nos acréscimos! Jogo equilibrado até Muharemovic ser expulso no 80' (falta com impedimento de gol). Os últimos 17 minutos produziram 4 gols: Manzambi 74' (1-0), Vargas 84' (2-0), Manzambi 90' (3-0), Mahmic descontou 90+3' (Bósnia, 3-1), Xhaka pênalti 90+7' (4-1). Embolo não marcou — Manzambi foi o Man of the Match (BMW Bayern de olho). Suíça lidera Grupo B com 4 pts.",
          numeros: [
            { v: "75.2%", l: "Prob. Suíça" },
            { v: "4 × 1", l: "Placar final" },
            { v: "2", l: "Gols Manzambi (74', 90')" },
            { v: "80'", l: "Vermelho Muharemovic (BOS) — virou o jogo" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Suíça não perde (dupla hipótese)", odd: 1.25, resultado: "hit",
              justificativa: "P(SUI+EMP)=92.5%. Suíça venceu 4-1 com virada total após expulsão de Muharemovic no 80'. Liderança do Grupo B confirmada." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, resultado: "hit",
              justificativa: "λ_total=2.64. P=74.1%. 5 gols no total (4-1): Manzambi 74'/90', Vargas 84', Xhaka pen 90+7', Mahmic 90+3'. Volume explosivo." },
            { cat: "conservadora", mercado: "Breel Embolo marca", odd: 2.10, resultado: "miss",
              justificativa: "Embolo não marcou. Os gols suíços foram de Manzambi (74', 90'), Vargas (84') e Xhaka pen (90+7'). Manzambi foi o herói inesperado — estrela da noite." },
            { cat: "intermediaria", mercado: "Suíça vence a zero", odd: 1.90, resultado: "miss",
              justificativa: "Mahmic descontou no 90+3' para a Bósnia. Clean sheet perdido nos acréscimos apesar de superiodade após a expulsão. Final 4-1." },
            { cat: "intermediaria", mercado: "Suíça marca 2+ gols", odd: 1.95, resultado: "hit",
              justificativa: "P(SUI≥2)=62.8%. Suíça marcou 4 gols. A expulsão no 80' abriu os espaços para o ataque suíço explodir em 17 minutos frenéticos." },
            { cat: "intermediaria", mercado: "Bósnia marca", odd: 3.00, resultado: "hit",
              justificativa: "P(BOS≥1)=40.0%. Mahmic descontou no 90+3' mesmo com 10 homens — Dzeko assistiu. O modelo estava certo na probabilidade da Bósnia marcar." },
            { cat: "loucura", mercado: "Suíça vence a zero + Embolo marca", odd: 5.50, resultado: "miss",
              justificativa: "Ambas as pernas falharam: Suíça não venceu a zero (Mahmic 90+3') e Embolo não marcou. Manzambi foi o herói, não Embolo." },
            { cat: "loucura", mercado: "Suíça −1.5 handicap", odd: 3.20, resultado: "hit",
              justificativa: "P(SUI vence por ≥2)≈30%. Suíça venceu por 3 gols (4-1). Muharemovic expulso no 80' acelerou o desequilíbrio — handicap superado com folga." },
            { cat: "loucura", mercado: "Embolo e Ruben Vargas ambos marcam", odd: 7.00, resultado: "miss",
              justificativa: "Vargas marcou (84') ✓ mas Embolo não ✗. O combo falhou porque Manzambi (sub) roubou o protagonismo com 2 gols. Vargas cumpriu, Embolo ficou apagado." }
          ]
        },
        {
          hora: "19h",
          mandante: "Canadá",
          visitante: "Catar",
          grupo: "B",
          local: "BC Place, Vancouver (British Columbia)",
          placar: "6 × 0",
          stats: "Goleada histórica — 1.ª vitória do Canadá em Copas! Larin abriu no 16' (rebote). David hat-trick: 29' (voleio), 45+3' (rebote na trave) e 90+2'. Koné lesionou-se no 55' e Saliba (sub) marcou no 64' de falta. Manai OG 75'. Catar terminou com 9 homens (2 vermelhos). Iguala recorde de maior vitória de uma sede: Itália 1934, Brasil 1950, Argentina 1978. Davies brilhou e David é artilheiro da Copa com 3 gols.",
          numeros: [
            { v: "89.4%", l: "Prob. Canadá" },
            { v: "6 × 0", l: "Placar final" },
            { v: "3", l: "Gols J. David (hat-trick, 29'/45+3'/90+2')" },
            { v: "=Recorde", l: "Maior vitória de sede em Copa (ITA'34, BRA'50, ARG'78)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá vence", odd: 1.15, resultado: "hit",
              justificativa: "P(CAN)=89.4%. Canadá venceu 6-0 com hat-trick de David, Larin, Saliba e OG. Dominância total no BC Place — 1.ª vitória histórica do Canadá em Copas." },
            { cat: "conservadora", mercado: "Canadá vence a zero", odd: 1.42, resultado: "hit",
              justificativa: "P=73.1%. Catar não marcou nenhum gol. λ=0.25 previu exatamente isso — zero ameaças reais, 9 jogadores no final com 2 vermelhos." },
            { cat: "conservadora", mercado: "Jonathan David marca", odd: 1.75, resultado: "hit",
              justificativa: "David hat-trick (29', 45+3', 90+2') — melhor desempenho da Copa 2026. Artilheiro do torneio com 3 gols. Davies criando pela esquerda multiplicou as oportunidades." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.75, resultado: "hit",
              justificativa: "P=58.8%. 6 gols no total. λ_total=3.04 foi acertado — 9 jogadores do Catar nos acréscimos tornaram o déficit insuperável." },
            { cat: "intermediaria", mercado: "Canadá marca 3+ gols", odd: 2.00, resultado: "hit",
              justificativa: "P(CAN≥3)=52.9%. Canadá marcou 6. A barreira catariana cedeu completamente com Davies+David+Larin+Buchanan — mais do que o modelo otimista previu." },
            { cat: "intermediaria", mercado: "Canadá −2.5 handicap", odd: 3.00, resultado: "hit",
              justificativa: "P(CAN vence por ≥3)≈39.6%. 6-0: diferença de 6 gols. O modelo estimava vitória por 3+ como cenário médio — o Canadá entregou o dobro." },
            { cat: "loucura", mercado: "Jonathan David bissa (2+ gols)", odd: 5.50, resultado: "hit",
              justificativa: "P(David≥2)=20.5%. David fez hat-trick — 3 gols. λ_David=0.837 com odds de 5.50 era valor excelente. Melhor dica do dia, confirmada com autoridade." },
            { cat: "loucura", mercado: "David e Larin ambos marcam", odd: 7.00, resultado: "hit",
              justificativa: "P=0.224. Larin abriu no 16' e David hat-trick. Os dois centroavantes marcaram — a combinação natural do ataque canadense com Davies de volta." },
            { cat: "loucura", mercado: "Catar marca", odd: 6.50, resultado: "miss",
              justificativa: "P(CAT≥1)=22.1%. Catar não marcou e terminou com 9 jogadores (2 vermelhos). Afif não conseguiu criar sequer 1 finalização no alvo. Zero ameaças reais." }
          ]
        },
        {
          hora: "22h",
          mandante: "México",
          visitante: "Coreia do Sul",
          grupo: "A",
          local: "Estadio Akron, Guadalajara",
          placar: "1 × 0",
          stats: "Romo marcou o único gol no 50' aproveitando erro absurdo do goleiro Kim Seung-gyu (colisão com Lee Gi-hyuk na área). 1T sem gols e só 3 chutes mexicanos. Rangel defendeu duas vezes no 87' (Cho Gue-sung + Yang Hyun-jun) para preservar o placar. Tejera surpreendeu com apenas 2 amarelos (Lee Kang-in + Paik Seung-ho — muito abaixo da média de 5.24). México 1.º do Grupo A — 1.ª seleção a avançar no WC26.",
          numeros: [
            { v: "65.8%", l: "Prob. México" },
            { v: "1 × 0", l: "Placar final" },
            { v: "50'", l: "Gol Romo (erro Kim Seung-gyu)" },
            { v: "2", l: "Amarelos Tejera (média era 5.24 — surpreendeu)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "México não perde (dupla hipótese)", odd: 1.35, resultado: "hit",
              justificativa: "P(MEX+EMP)=87.0%. México venceu 1-0 com gol de Romo no 50'. Rangel defendeu duas vezes no 87' — vitória suada mas merecida no Akron." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, resultado: "miss",
              justificativa: "λ_total=2.58. P=72.8%. Apenas 1 gol (Romo 50'). Jogo travado — México criou pouco e a Coreia foi contida pela organização defensiva mexicana." },
            { cat: "conservadora", mercado: "Over 3.5 cartões no jogo", odd: 1.65, resultado: "miss",
              justificativa: "Tejera (5.24 cartões/jogo) mostrou apenas 2 amarelos (Lee Kang-in + Paik Seung-ho). O 1-0 foi controlado — árbitro muito mais conservador do que o histórico indicava." },
            { cat: "intermediaria", mercado: "Raul Jimenez marca", odd: 2.20, resultado: "miss",
              justificativa: "Jimenez não marcou. O único gol foi de Romo (50') aproveitando erro do goleiro Kim Seung-gyu. Jimenez teve poucas chances no 1T travado." },
            { cat: "intermediaria", mercado: "Over 4.5 cartões no jogo", odd: 2.10, resultado: "miss",
              justificativa: "Apenas 2 amarelos no total — very below de qualquer projeção com Tejera. O jogo 1-0 foi equilibrado sem grandes conflitos físicos." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 2.20, resultado: "miss",
              justificativa: "P=0.423. Coreia não marcou apesar das 2 chances no 87' (Rangel double save de Cho Gue-sung + Yang Hyun-jun). México 1-0 com clean sheet." },
            { cat: "loucura", mercado: "Son Heung-min marca", odd: 6.00, resultado: "miss",
              justificativa: "Son não marcou em derrota de 1-0. O capitão histórico não encontrou espaço contra a defesa mexicana organizada no Akron." },
            { cat: "loucura", mercado: "Coreia do Sul vence", odd: 8.00, resultado: "miss",
              justificativa: "P(KOR vence)=13.0%. Coreia perdeu 1-0. O DNA de virada (vs Tchéquia) não se repetiu — Rangel negou duas finalizações no 87' para preservar a vitória." },
            { cat: "loucura", mercado: "Quiñones e Jimenez ambos marcam", odd: 6.00, resultado: "miss",
              justificativa: "Nenhum dos dois marcou. O único gol foi de Romo (erro do goleiro). México venceu de forma torturada sem os atacantes titulares nas estatísticas de gol." }
          ]
        }
      ]
    }
    ,{
      data: "2026-06-19",
      titulo: "Dia 9 — Grupos C e D: Brasil goleia, Saibari relâmpago, EUA avança, Paraguai ressurge",
      contexto: "Grupos C e D encerram R2. Marrocos bateu a Escócia 1-0 em Boston com o gol mais rápido da Copa: Saibari em 71 segundos! Brasil demoliu o Haiti 3-0 em Filadélfia (Cunha 2G + Vinicius). EUA classifica em Seattle com 2-0 sobre a Austrália. Paraguai ressurgiu — Galarza marcou em 64 segundos contra a Turquia, o mais rápido da Copa. Grupo C: Brasil e Marrocos com 4 pts. Grupo D: EUA 6 pts (classifica), Austrália e Paraguai com 3 pts, Turquia praticamente eliminada.",
      jogos: [
        {
          hora: "13h",
          mandante: "Escócia",
          visitante: "Marrocos",
          grupo: "C",
          local: "Gillette Stadium, Foxborough (Boston)",
          placar: "0 × 1",
          stats: "Saibari marcou o gol mais rápido da Copa 2026 — 71 segundos! Brahim Díaz abriu com passe por cima da defesa escocesa e Saibari finalizou no ângulo antes do estádio se acomodar (64.146 torcedores). Escócia dominou mas não converteu. Marrocos lidera o Grupo C no GD sobre o Brasil. Escócia com 3 pts ainda viva.",
          numeros: [
            { v: "0 × 1", l: "Placar final" },
            { v: "71\"", l: "Gol Saibari — mais rápido WC26" },
            { v: "64.146", l: "Espectadores no Gillette Stadium" },
            { v: "4 pts", l: "Marrocos (lidera Grupo C no GD)" }
          ],
          dicas: []
        },
        {
          hora: "16h",
          mandante: "Brasil",
          visitante: "Haiti",
          grupo: "C",
          local: "Lincoln Financial Field, Philadelphia",
          placar: "3 × 0",
          stats: "Brasil demoliu o Haiti. Cunha bisou no 1T (23' e 36') — o centroavante do Wolves/Atlético redimiu o silêncio na estreia. Vinicius Jr. selou no 45+3' com finalização da esquerda. Haiti eliminado sem pontos. Brasil empurra ao topo do Grupo C por diferença de gols sobre Marrocos.",
          numeros: [
            { v: "3 × 0", l: "Placar final" },
            { v: "2", l: "Gols Cunha (23', 36')" },
            { v: "45+3'", l: "Gol Vinicius Jr." },
            { v: "0 pts", l: "Haiti eliminado" }
          ],
          dicas: []
        },
        {
          hora: "19h",
          mandante: "EUA",
          visitante: "Austrália",
          grupo: "D",
          local: "Lumen Field, Seattle (Washington)",
          placar: "2 × 0",
          stats: "EUA classifica como 1.º do Grupo D em Seattle. Gol contra australiano abriu o placar. Alex Freeman cabeceou o 2-0 no 43' (deflexão de Dest num escanteio) — 1.º gol de Copa do jovem de 21 anos. Austrália precisava vencer mas não criou chances reais. EUA com 6 pts ao lado do México como primeira dupla a avançar.",
          numeros: [
            { v: "2 × 0", l: "Placar final" },
            { v: "43'", l: "Gol Freeman (cabeçada, 21 anos)" },
            { v: "6 pts", l: "EUA classifica como 1.º do Grupo D" },
            { v: "OG", l: "Primeiro gol do jogo" }
          ],
          dicas: []
        },
        {
          hora: "22h",
          mandante: "Turquia",
          visitante: "Paraguai",
          grupo: "D",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: "0 × 1",
          stats: "Gol mais rápido da Copa 2026 — 64 segundos de Matías Galarza! Cubas roubou a bola no meio, passou para Enciso, que lançou Galarza para bater entre as pernas de Demiral. Turquia dominou depois (30+ chutes, 0 gols — padrão já visto vs Austrália). Paraguai vivo com 3 pts. Turquia praticamente eliminada com apenas 1 gol marcado em 2 jogos.",
          numeros: [
            { v: "0 × 1", l: "Placar final" },
            { v: "64\"", l: "Gol Galarza — mais rápido WC26 (bateu Saibari)" },
            { v: "30+", l: "Chutes Turquia (0 gols — 2.º jogo)" },
            { v: "3 pts", l: "Paraguai vivo no Grupo D" }
          ],
          dicas: []
        }
      ]
    }
    ,{
      data: "2026-06-20",
      titulo: "Dia 10 — Grupos E e F: Undav decide nos 94', Curação choca Equador, Holanda goleia",
      contexto: "Grupos E e F encerram R2. Alemanha virou sobre a Costa do Marfim 2-1 nos acréscimos — Kessié abriu no 30' mas Undav (sub) bisou: 68' e gol de aniversário no 94'. Curaçao 0-0 com o Equador: debutantes em Copa seguraram o favorito absoluto do Grupo E — ponto histórico. Holanda 5-1 Suécia em Houston: Brobbey bisou em 12 minutos (5'/17'), Gakpo bisou no 2T (47'/54'), Summerville fechou 89'. Grupo E: Alemanha 6, Equador 4, CIV 1, Curaçao 1. Grupo F: Japão 4, Holanda 4, Suécia 3, Tunísia 0.",
      jogos: [
        {
          hora: "14h",
          mandante: "Holanda",
          visitante: "Suécia",
          grupo: "F",
          local: "NRG Stadium, Houston (Texas)",
          placar: "5 × 1",
          stats: "Brobbey abriu o baile: dois gols nos primeiros 17' (5' e 17') — 4.º brace mais rápido na história da Copa. Elanga descontou no 59' para a Suécia. Gakpo dominou o 2T com brace (47', 54'). Summerville fechou no 89'. Holanda avança com 4 pts após empate na estreia; Suécia em 2.º (3 pts) aguarda R3. Gyokeres não marcou — Suécia perdeu o artilheiro da Copa.",
          numeros: [
            { v: "5 × 1", l: "Placar final" },
            { v: "2", l: "Gols Brobbey (5', 17') — brace mais rápido da Copa" },
            { v: "2", l: "Gols Gakpo (47', 54')" },
            { v: "59'", l: "Gol Elanga (Suécia)" }
          ],
          dicas: []
        },
        {
          hora: "17h",
          mandante: "Alemanha",
          visitante: "Costa do Marfim",
          grupo: "E",
          local: "BMO Field, Toronto (Canadá)",
          placar: "2 × 1",
          stats: "Kessié abriu para a Costa do Marfim no 30' — perigo de virada do Grupo E. Undav entrou como sub e empatou no 68' (voleio de cruzamento de Amiri). Nos acréscimos, Nmecha assistiu para Undav marcar o 2-1 no 94' com remate de fora da área. Undav: 5 contribuições em 56' de WC26. Alemanha avança para o mata-mata com 6 pts — 12 anos de espera encerrada.",
          numeros: [
            { v: "2 × 1", l: "Placar final" },
            { v: "94'", l: "Gol vencedor Undav" },
            { v: "30'", l: "Kessié abre para Costa do Marfim" },
            { v: "6 pts", l: "Alemanha avança — 12 anos sem mata-mata" }
          ],
          dicas: []
        },
        {
          hora: "21h",
          mandante: "Equador",
          visitante: "Curaçao",
          grupo: "E",
          local: "SoFi Stadium, Los Angeles (Inglewood)",
          placar: "0 × 0",
          stats: "Curaçao fez história: 0-0 com o Equador favorito absoluto do Grupo E! Debutantes em Copas aguentaram os 90' com organização defensiva exemplar. Equador, que havia interrompido série de 19 jogos invictos vs CIV (1-0 no R1), não consegue marcar contra o menor ranking da Copa. Grupo E em aberto: Equador 4 pts precisa de resultado no R3.",
          numeros: [
            { v: "0 × 0", l: "Placar final" },
            { v: "1", l: "Ponto histórico Curaçao (2.º gol do torneio: 1G em 7-1 vs ALE R1)" },
            { v: "4 pts", l: "Equador (2.º do Grupo E)" },
            { v: "0", l: "Gols do Equador em 2 jogos contra equipes menores" }
          ],
          dicas: []
        }
      ]
    }
    ,{
      data: "2026-06-21",
      titulo: "Dia 11 — Grupos F-H: Japão histórico, Espanha goleada, Cabo Verde épico, Salah marca",
      contexto: "Dia movimentado com 5 jogos. Japão 4-0 Tunísia (1.ª AFC com 4G em Copa — jogo #1.000 do torneio). Bélgica 0-0 Irã. Egito 3-1 NZ com gol de Salah (67') — 1.ª vitória egípcia em Copa. Espanha atropela Arábia Saudita 4-0: Yamal estreou em Copas (10', 8.º mais jovem da história), Oyarzabal bisou (21', 24'). Cabo Verde 2-2 Uruguai numa obra épica: Pina abriu com falta de 30m (21'), Uruguai virou com Araújo+Canobbio no 1T, Varela empatou no 61' aproveitando erro de Muslera.",
      jogos: [
        {
          hora: "13h",
          mandante: "Tunísia",
          visitante: "Japão",
          grupo: "F",
          local: "Estadio BBVA, Guadalupe (Monterrey)",
          placar: "0 × 4",
          stats: "Jogo #1.000 da Copa 2026 e Japão marcou para a história. Kamada abriu no 4'. Ueda bisou (31' e 83'). Ito marcou no 69'. 1.ª seleção AFC a marcar 4 gols num jogo de Copa do Mundo. Tunísia eliminada com 0 pts. Japão lidera o Grupo F com 4 pts empatado com a Holanda.",
          numeros: [
            { v: "0 × 4", l: "Placar final" },
            { v: "4'", l: "Gol Kamada" },
            { v: "2", l: "Gols Ueda (31', 83')" },
            { v: "1.000", l: "Jogo histórico da Copa 2026" }
          ],
          dicas: []
        },
        {
          hora: "16h",
          mandante: "Bélgica",
          visitante: "Irã",
          grupo: "G",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: "0 × 0",
          stats: "Empate sem gols em Dallas. Bélgica (De Bruyne, Doku, Trossard) não furou o bloco iraniano. De Bruyne soma 2 jogos sem gol ou assistência. Irã mostrou solidez defensiva com Taremi mais recuado. Bélgica precisa vencer a Nova Zelândia no R3; Irã precisa de ponto contra o Egito. Grupo G: Egito 4, Bélgica e Irã com 1 pt.",
          numeros: [
            { v: "0 × 0", l: "Placar final" },
            { v: "0G/0A", l: "De Bruyne (2 jogos, zero contribuição direta)" },
            { v: "1 pt", l: "Bélgica e Irã no Grupo G" },
            { v: "0", l: "Chutes no alvo da Bélgica" }
          ],
          dicas: []
        },
        {
          hora: "16h",
          mandante: "Espanha",
          visitante: "Arábia Saudita",
          grupo: "H",
          local: "Hard Rock Stadium, Miami (Florida)",
          placar: "4 × 0",
          stats: "Yamal marcou o 1.º gol em Copa com 17 anos (10', slide no segundo poste) — 8.º mais jovem marcador da história do WC. Oyarzabal bisou em 3 minutos (21' e 24'). OG Al-Tambakti fechou no 2T. Yamal e Oyarzabal saíram no HT. Espanha avança com 4 pts — aguarda R3 para confirmar liderança vs Uruguai.",
          numeros: [
            { v: "4 × 0", l: "Placar final" },
            { v: "10'", l: "1.º gol Yamal em Copa (17 anos, 8.º mais jovem da história)" },
            { v: "2", l: "Gols Oyarzabal (21', 24')" },
            { v: "4 pts", l: "Espanha avança no Grupo H" }
          ],
          dicas: []
        },
        {
          hora: "19h",
          mandante: "Nova Zelândia",
          visitante: "Egito",
          grupo: "G",
          local: "BC Place, Vancouver (British Columbia)",
          placar: "1 × 3",
          stats: "1.ª vitória do Egito em Copas do Mundo! Surman abriu para a NZ de cabeça no 15' (escanteio). Zico igualou no 58' (cabeçada). Salah marcou o 2-1 no 67' — 68.º gol internacional, o mais velho do Egito a marcar em Copa (34 anos). Trézéguet fechou de cabeça no 82'. Egito 1.º do Grupo G com 4 pts.",
          numeros: [
            { v: "1 × 3", l: "Placar final" },
            { v: "67'", l: "Gol Salah (68.º int'l — 34 anos, mais velho EGY em Copa)" },
            { v: "4 pts", l: "Egito 1.º do Grupo G" },
            { v: "1.ª", l: "Vitória do Egito em Copa do Mundo" }
          ],
          dicas: []
        },
        {
          hora: "22h",
          mandante: "Uruguai",
          visitante: "Cabo Verde",
          grupo: "H",
          local: "Levi's Stadium, Santa Clara (San Francisco Bay Area)",
          placar: "2 × 2",
          stats: "Épico! Cabo Verde marcou os 1.ºs gols da história em Copa. Pina abriu com cobrança de falta de 30 metros no 21'. Araújo virou no 44' e Canobbio ampliou no 45+6'. Varela entrou no 2T e 5' depois aproveitou passe errado de Olivera com Muslera adiantado para empatar 2-2 no 61'. 2.º empate de Cabo Verde na Copa — fenomenal. Uruguai com 2 pts precisa vencer R3.",
          numeros: [
            { v: "2 × 2", l: "Placar final" },
            { v: "21'", l: "Pina — 1.ºs gols de Cabo Verde em Copa (falta 30m)" },
            { v: "61'", l: "Varela empata (Muslera adiantado, erro Olivera)" },
            { v: "2 pts", l: "Uruguai (precisa vencer R3 vs Espanha)" }
          ],
          dicas: []
        }
      ]
    },{
      data: "2026-06-22",
      titulo: "Dia 12 — Grupos I e J: Messi vs Rangnick, Mbappé artilheiro, Haaland de volta",
      contexto: "Rodada 2 dos Grupos I e J. Jogo do dia: Argentina recebe a Áustria de Rangnick no AT&T Stadium às 14h (pM=79,5%) — vitória argentina confirma liderança do Grupo J com campanha perfeita. França vs Iraque às 18h é o duelo mais desequilibrado (pM=89,3%): Mbappé persegue artilharia após bisar no R1. Noruega vs Senegal às 21h no MetLife é o confronto mais equilibrado (pM=46,4%) — Senegal PRECISA vencer para qualquer chance de classificação. À meia-noite, Argélia vs Jordânia em Santa Clara fecha o dia num duelo de sobrevivência entre os dois eliminados do Grupo J.",
      jogos: [
        {
          hora: "14h",
          mandante: "Argentina",
          visitante: "Áustria",
          grupo: "J",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: "2 × 0",
          stats: "Messi bisou (38' e 90+5') e tornou-se o maior artilheiro da história das Copas com 18 gols. Almada filtrou o passe para o 1.º gol (38', 17.º Copa = Klose). Bola disputada na área no 90+5' — Messi empurrou de 6 jardas (18.º Copa, novo recorde). Rangnick tentou o gegenpressing mas a defesa com Romero+Lisandro foi impermeável. Áustria não criou chances reais. 3 amarelos (Posch 40', Medina e Laimer por empurrões). Argentina classifica como 1.ª do Grupo J.",
          numeros: [
            { v: "18", l: "Gols Messi em Copas (novo recorde histórico)" },
            { v: "38'", l: "Gol 1 Messi — 17.º Copa (= Klose)" },
            { v: "90+5'", l: "Gol 2 Messi — 18.º Copa (supera Klose)" },
            { v: "2 × 0", l: "Placar final" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Argentina não perde (dupla hipótese)", odd: 1.12, resultado: "hit",
              justificativa: "Modelo: pM=79,5% e pE=15,0% — soma 94,5%. λM=2,27 vs λV=0,43 reflete diferença de Elo de 314 pontos (Argentina 2122,8 vs Áustria 1808,5). Messi vem de hat-trick vs Argélia em 76 minutos. Mesmo com pressão alta de Rangnick, o não-perde argentino é o mercado mais seguro do jogo." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.38, resultado: "hit",
              justificativa: "λ_total = 2,27 + 0,43 = 2,70. P(≥2 gols) via Poisson ≈ 82,7%. Argentina marcou 3 vs Argélia; Áustria marcou 3 vs Jordânia. Ambas têm ataque funcional e disputam a liderança do grupo — nenhuma vai se fechar na defesa." },
            { cat: "conservadora", mercado: "Argentina marca 2+ gols", odd: 1.65, resultado: "hit",
              justificativa: "P(ARG≥2) com λM=2,27 ≈ 70,8%. Argentina marcou 3 no R1 em apenas 76 minutos de Messi. Áustria cedeu 3 gols vs Jordânia. Linha de 2 gols argentinos é bem suportada pelo modelo e pelo histórico recente da equipe." },
            { cat: "intermediaria", mercado: "Lionel Messi marca a qualquer momento", odd: 2.20, resultado: "hit",
              justificativa: "Hat-trick vs Argélia em 76 min no R1. Atribuindo 32% do λM=2,27 a Messi: P(marca) ≈ 51,8%. Jogo de liderança de grupo em Dallas — grande torcida argentina. Odds de 2,20 (imp. 45,5%) têm valor positivo sólido." },
            { cat: "intermediaria", mercado: "Argentina vence a zero", odd: 2.15, resultado: "hit",
              justificativa: "P = pM × e^(−λV) = 0,795 × e^(−0,43) ≈ 51,7%. λV=0,43 reflete como o modelo enxerga a fragilidade ofensiva austríaca contra defesa com Cristian Romero e Lisandro Martínez. Áustria marcou 3 vs Jordânia (Elo 1619,5) — bem mais fraca do que a Argentina." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.85, resultado: "miss",
              justificativa: "P(≥3 gols) com λ_total=2,70 ≈ 48,0%. Ambas as equipes precisam atacar para confirmar a liderança do grupo. Gegenpressing de Rangnick pressiona alto mas também abre espaços para o contra-ataque argentino — cenário de jogo com muitos gols." },
            { cat: "loucura", mercado: "Messi e Julián Álvarez ambos marcam", odd: 5.50, resultado: "miss",
              justificativa: "P(Messi) × P(Álvarez) ≈ 0,518 × 0,435 ≈ 22,5% (independência aproximada, λ_Álvarez≈25% de 2,27≈0,57). Odds de 5,50 (imp. 18,2%) têm valor positivo. Depende de Messi manter ritmo de hat-trick e Álvarez encontrar espaços atrás da linha alta do gegenpressing austríaco." },
            { cat: "loucura", mercado: "Argentina −1.5 handicap (vence por 2+)", odd: 3.50, resultado: "hit",
              justificativa: "P(ARG vence por ≥2) ≈ 26% — soma dos P(ARG=k, AUT≤k−2) para k≥2 com λM=2,27 e λV=0,43. Odds de 3,50 (imp. 28,6%) ligeiramente abaixo do valor justo. Factível se Messi replicar nível do R1, mas Rangnick vai minimizar espaços." },
            { cat: "loucura", mercado: "Romano Schmid marca", odd: 4.50, resultado: "miss",
              justificativa: "Schmid abriu o placar no 21' vs Jordânia (R1) — único gol austríaco em campo naquele jogo. Meia de direita no 4-2-3-1 de Rangnick com liberdade para aparecer no gol. λV=0,43 reflete poucos gols esperados para a Áustria como coletivo, mas Schmid é o candidato mais provável dentro desse volume." }
          ]
        },
        {
          hora: "18h",
          mandante: "França",
          visitante: "Iraque",
          grupo: "I",
          local: "Lincoln Financial Field, Philadelphia",
          placar: "3 × 0",
          stats: "100.ª cap de Mbappé com goleada na Filadélfia. Mbappé abriu de fora da área no 14' (Olise assistiu pela direita). Atraso de 2h por temporal ao intervalo. Após retomada: Mbappé 2.º gol no 54' (Dembélé filtrou passe após erro do goleiro iraquiano). Dembélé completou o 3.º no ~63' (Olise assistiu) e saiu no 68'. Iraque eliminado com 1 gol em 2 jogos. França avança como 1.ª do Grupo I com 6 pts. Mbappé: 4 gols no torneio.",
          numeros: [
            { v: "3 × 0", l: "Placar final" },
            { v: "14'", l: "Gol 1 Mbappé (100.ª cap FRA)" },
            { v: "54'", l: "Gol 2 Mbappé (+ Dembélé assist)" },
            { v: "4", l: "Gols Mbappé no torneio" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "França vence", odd: 1.10, resultado: "hit",
              justificativa: "pM=89,3% — jogo mais desequilibrado do dia. Elo França 2078,5 vs Iraque 1637,1 (Δ=441 pontos). λM=2,78 gols esperados. Iraque perdeu 1×4 vs Noruega no R1 e precisa vencer para sobreviver, mas a diferença técnica é enorme." },
            { cat: "conservadora", mercado: "Kylian Mbappé marca a qualquer momento", odd: 1.55, resultado: "hit",
              justificativa: "Mbappé bisou vs Senegal no R1 (66' e 90+6'), soma 58 gols pela seleção francesa. Atribuindo 30% do λM=2,78: P(marca) ≈ 56,6%. Persegue artilharia do torneio — motivação individual máxima contra o oponente de menor Elo do Grupo I." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.22, resultado: "hit",
              justificativa: "λ_total = 2,78 + 0,25 = 3,03. P(≥2 gols) via Poisson ≈ 91,8%. França tem Mbappé, Griezmann, Dembélé, Barcola disponíveis — largura ofensiva que impossibilita bloqueio iraquiano por 90 minutos." },
            { cat: "intermediaria", mercado: "França vence a zero", odd: 1.48, resultado: "hit",
              justificativa: "P = pM × e^(−λV) = 0,893 × e^(−0,25) ≈ 69,6%. λV=0,25 é dos menores do torneio. Iraque marcou apenas 1 gol no R1 (Hussein 39' vs Noruega). Defesa francesa com Koundé, Hernandez, Upamecano é uma das mais sólidas da Copa." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.55, resultado: "hit",
              justificativa: "P(≥3 gols) com λ_total=3,03 ≈ 59,8%. França marcou 3 vs Senegal no R1. Com Iraque forçado a atacar para sobreviver, mais espaços para os franceses em transição. Linha de 2,5 é o mercado-âncora do jogo." },
            { cat: "intermediaria", mercado: "Bradley Barcola marca", odd: 2.75, resultado: "miss",
              justificativa: "Barcola (PSG) joga como ponta-esquerda com velocidade devastadora no esquema de Deschamps. Atribuindo 18% do λM=2,78: P ≈ 39,4%. Odds de 2,75 (imp. 36,4%) têm leve valor positivo. Candidato natural ao gol quando o esquema francês gira pela esquerda." },
            { cat: "loucura", mercado: "França marca 4+ gols", odd: 3.20, resultado: "miss",
              justificativa: "P(FRA≥4) com λM=2,78 ≈ 30,3% (P(FRA≤3) ≈ 69,7% pelos somatórios Poisson). Odds de 3,20 (imp. 31,3%) próximos do valor justo. Contexto favorece: Iraque deve abrir para atacar, expondo espaços em transição para Mbappé e Barcola explorarem." },
            { cat: "loucura", mercado: "Mbappé bissa (2+ gols)", odd: 4.50, resultado: "hit",
              justificativa: "Com λ_Mbappé≈0,83 (30% de 2,78): P(≥2) = 1−e^(−0,83)×(1+0,83) ≈ 20,4%. Mbappé bisou no R1 e persegue a Chuteira de Ouro. Odds de 4,50 (imp. 22,2%) ligeiramente acima do valor calculado — a motivação individual sustenta a aposta." },
            { cat: "loucura", mercado: "Iraque marca", odd: 4.00, resultado: "miss",
              justificativa: "λV=0,25. P(IRQ≥1) = 1−e^(−0,25) ≈ 22,1%. Valor justo ≈ 4,52 — odds de 4,00 abaixo do justo, mas Iraque marcou de forma inesperada vs Noruega (Hussein 39') e pode encontrar gol de honra em transição quando a França relaxar com vantagem ampla." }
          ]
        },
        {
          hora: "21h",
          mandante: "Noruega",
          visitante: "Senegal",
          grupo: "I",
          local: "MetLife Stadium, East Rutherford (Nova York)",
          placar: "3 × 2",
          stats: "Pedersen abriu (43', defensores senegaleses erram). Haaland dominou o 2T: 48' (passe de Berge) e 58' (golaço solo). Sarr respondeu duas vezes (53' e 90+3') mas não foi suficiente. Noruega resistiu ao nervosismo final. Haaland: 4 gols em 2 jogos de Copa — 2.º jogador em 50 anos a bisar nas 2 primeiras partidas de Copa. Noruega avança (4-0) com França. Senegal eliminado.",
          numeros: [
            { v: "3 × 2", l: "Placar final" },
            { v: "4", l: "Gols Haaland no torneio (48', 58' hoje)" },
            { v: "43'", l: "Gol Pedersen (NOR)" },
            { v: "2", l: "Gols Sarr (SEN, 53' e 90+3')" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Noruega não perde (dupla hipótese)", odd: 1.48, resultado: "hit",
              justificativa: "P(NOR+EMP) = pM + pE = 0,464 + 0,252 = 71,6%. Noruega tem Elo 1926,9 vs 1853,5 do Senegal (Δ=73 pontos) — favorita marginal com Haaland (2G+1A vs Iraque). O não-perde é o único mercado conservador num jogo genuinamente equilibrado." },
            { cat: "conservadora", mercado: "Ambas as equipes marcam", odd: 1.72, resultado: "hit",
              justificativa: "P(NOR≥1)=1−e^(−1,55)≈78,8%; P(SEN≥1)=1−e^(−1,16)≈68,6%. Produto≈54,1%. Senegal PRECISA vencer — vai jogar aberto forçosamente, aumentando a probabilidade de Noruega marcar em transição. Haaland contra linhas adiantadas senegalesas é ameaça constante." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.58, resultado: "hit",
              justificativa: "λ_total = 1,55 + 1,16 = 2,71. P(≥2 gols) ≈ 82,4%. Jogo mais equilibrado do dia (pM=46,4%) com motivações assimétricas — Noruega quer liderança, Senegal precisa sobreviver. Qualidade ofensiva de ambos (Haaland + Mané) suporta a linha de 1,5." },
            { cat: "intermediaria", mercado: "Erling Haaland marca a qualquer momento", odd: 2.00, resultado: "hit",
              justificativa: "Haaland: 2G vs Iraque (29' e 43'), 55 gols em 50 jogos pela seleção. Atribuindo 35% do λM=1,55: P(marca) ≈ 42,1%. Senegal tem Koulibaly defensivamente sólido mas Haaland explora profundidade atrás de linhas adiantadas — e Senegal vai adiantar linhas por necessidade." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 2.05, resultado: "hit",
              justificativa: "P(≥3 gols) com λ_total=2,71 ≈ 47,7%. Senegal jogando aberto por necessidade + Noruega em transição rápida com Haaland = cenário propício para jogo com muitos gols. Linha de 2,5 próxima do 50% em jogo com motivação assimétrica." },
            { cat: "intermediaria", mercado: "Senegal vence", odd: 2.70, resultado: "miss",
              justificativa: "pV=28,5%. Odds de 2,70 (imp. 37,0%) acima do valor calculado, mas o contexto favorece: times desesperados com qualidade (Mané, Sarr, Diatta) tendem a superar projeções Elo-based. Mané não marcou no R1 — vai estar altamente motivado para reverter o resultado." },
            { cat: "loucura", mercado: "Senegal vence e ambas marcam", odd: 6.00, resultado: "miss",
              justificativa: "P(SEN vence) × P(NOR≥1) ≈ 0,285 × 0,788 ≈ 22,5%. Odds de 6,00 (imp. 16,7%) têm valor positivo de ~35%. Exige vitória senegalesa + contra-ataque norueguês — possível se Haaland aparecer em transição mesmo com Senegal dominando." },
            { cat: "loucura", mercado: "Haaland bissa (2+ gols)", odd: 5.00, resultado: "hit",
              justificativa: "Com λ_Haaland≈0,54 (35% de 1,55): P(≥2) ≈ 10,0%. Odds de 5,00 (imp. 20,0%) superprecificam a probabilidade, mas Haaland bisou no R1 e define jogos com poucos toques. Exige que Senegal abra espaços por necessidade e Haaland os explore duas vezes." },
            { cat: "loucura", mercado: "Empate 1 × 1", odd: 7.50, resultado: "miss",
              justificativa: "P(exato 1×1) ≈ [e^(−1,55)×1,55] × [e^(−1,16)×1,16] ≈ 0,323 × 0,363 ≈ 11,7%. Odds de 7,50 (imp. 13,3%) ligeiramente acima do valor justo. Lógica tática: Senegal tende a defender bem e marcar por transição — quadro de empate baixo tem respaldo qualitativo." }
          ]
        },
        {
          hora: "0h",
          mandante: "Argélia",
          visitante: "Jordânia",
          grupo: "J",
          local: "Levi's Stadium, Santa Clara (San Francisco Bay Area)",
          placar: "2 × 1",
          stats: "Jordânia abriu com Al-Rashdan (36', chute de dentro da área). Mahrez levantou o escanteio que Benbouali cabeceou para empatar (69'). Gouiri marcou o gol da virada (82'). Argélia sobrevive com 3 pts e aguarda definição do R3. Jordânia eliminada. Mahrez retornou ao 11 mas o gol veio de outros — 0G/0A para o capitão.",
          numeros: [
            { v: "2 × 1", l: "Placar final" },
            { v: "36'", l: "Gol Al-Rashdan (JOR)" },
            { v: "69'", l: "Gol Benbouali (ALG, corner de Mahrez)" },
            { v: "82'", l: "Gol Gouiri (ALG, virada)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Argélia não perde (dupla hipótese)", odd: 1.48, resultado: "hit",
              justificativa: "pM + pE = 0,579 + 0,235 = 81,4%. Elo Argélia 1763,2 vs Jordânia 1619,5 (Δ=143 pontos). λM=1,74. Mahrez retorna como titular após ser poupado vs Argentina — o capitão argelino deve elevar o nível ofensivo num jogo de sobrevivência." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.60, resultado: "hit",
              justificativa: "λ_total = 1,74 + 0,87 = 2,61. P(≥2 gols) ≈ 80,6%. Ambas PRECISAM vencer para qualquer chance de classificação — jogo de sobrevivência em que os dois times atacam com mais disposição do que em partidas de manutenção." },
            { cat: "conservadora", mercado: "Argélia marca 2+ gols", odd: 2.10, resultado: "hit",
              justificativa: "P(ARG≥2) com λM=1,74 ≈ 51,9%. Mahrez + Amoura + Gouiri representam ataque com velocidade e criatividade. Jordânia cedeu 3 gols vs Áustria. Linha de 2 gols argelinos está levemente acima de 50% — mercado defensável." },
            { cat: "intermediaria", mercado: "Riyad Mahrez marca", odd: 2.80, resultado: "miss",
              justificativa: "Mahrez retorna ao 11 inicial (poupado vs Argentina). 62 gols em 103 jogos pela seleção — taxa de 0,60 por partida. Atribuindo 25% do λM=1,74: P(marca) ≈ 35,5%. Odds de 2,80 (imp. 35,7%) praticamente no valor justo — justificado pela qualidade e motivação do capitão." },
            { cat: "intermediaria", mercado: "Ambas as equipes marcam", odd: 2.10, resultado: "hit",
              justificativa: "P(ARG≥1)≈82,4%; P(JOR≥1)=1−e^(−0,87)≈58,1%. Produto≈47,9%. Jordânia marcou seu 1.º gol histórico em Copa vs Áustria (Olwan 50'). Num jogo de sobrevivência, Jordânia vai atacar com tudo — probabilidade de marcar acima de 58% é relevante." },
            { cat: "intermediaria", mercado: "Argélia vence e Jordânia marca", odd: 3.20, resultado: "hit",
              justificativa: "P(ARG vence) × P(JOR≥1) ≈ 0,579 × 0,581 ≈ 33,6%. Odds de 3,20 (imp. 31,3%) têm leve valor positivo. Jordânia vai atacar por desespero — Olwan e Al-Taamari são ameaças reais em transição mesmo que a Argélia controle o jogo." },
            { cat: "loucura", mercado: "Jordânia vence", odd: 4.80, resultado: "miss",
              justificativa: "pV=18,5%. Odds de 4,80 (imp. 20,8%) ligeiramente acima do valor justo (5,41). Jordânia PRECISA vencer — empate não é suficiente com 0 pts. Times com motivação extrema de sobrevivência frequentemente superam o modelo Elo; Jordânia já mostrou coragem marcando vs Áustria." },
            { cat: "loucura", mercado: "Mousa Olwan marca", odd: 5.00, resultado: "miss",
              justificativa: "Olwan marcou o gol histórico da Jordânia no 50' vs Áustria — meia atacante com liberdade para aparecer no gol. Atribuindo 20% do λV=0,87: P≈16,1%. Odds de 5,00 (imp. 20,0%) acima do calculado mas há padrão de marcador recorrente — é a principal ameaça jordaniana." },
            { cat: "loucura", mercado: "Placar exato 2 × 1 Argélia", odd: 9.00, resultado: "hit",
              justificativa: "P(ARG=2, JOR=1) = [e^(−1,74)×1,74²/2] × [e^(−0,87)×0,87] ≈ 0,265 × 0,366 ≈ 9,7%. Odds de 9,00 (imp. 11,1%) abaixo do valor justo (10,3). Placar mais provável em jogo de sobrevivência mútua: Argélia controla mas sofre gol de transição jordaniana." }
          ]
        }
      ]
    },{
      data: "2026-06-23",
      titulo: "Dia 13 — Grupos K e L: Ronaldo em 6 Copas, Grupo L em chamas",
      contexto: "Rodada 2 dos Grupos K e L. Portugal atropelou o Uzbequistão 5-0: Ronaldo marcou 2 gols (6' e ~35') e tornou-se o ÚNICO jogador na história a marcar em 6 Copas do Mundo. Colômbia garantiu classificação com 6 pts ao vencer a RD Congo 1-0 (Muñoz 76'). Inglaterra ficou no 0-0 com Gana (79% de posse — recorde em 60 anos para time sem marcar em Copa). Croácia ressurgiu ao bater o Panamá 1-0 com Budimir (sub, 54') — mais velho marcador croata em Copas. Grupo L fecha com 3 times em 4 pts (England, Ghana) e 1 em 3 (Croácia).",
      jogos: [
        {
          hora: "14h",
          mandante: "Portugal",
          visitante: "Uzbequistão",
          grupo: "K",
          local: "NRG Stadium, Houston (Texas)",
          placar: "5 × 0",
          stats: "Ronaldo histórico: abriu no 6' (único a marcar em 6 Copas) e marcou o 2.º antes do HT (~35', contra-ataque). Nuno Mendes de falta no 14'. OG no 60'. Leão fechou no 87'. Ronaldo: 144.º e 145.º gols internacionais — 23 acima de Messi no ranking all-time. Portugal avança para as oitavas com 7 pts.",
          numeros: [
            { v: "5 × 0", l: "Placar final" },
            { v: "6'", l: "Gol Ronaldo — 1.º a marcar em 6 Copas" },
            { v: "145", l: "Gols internacionais Ronaldo (recorde absoluto)" },
            { v: "7 pts", l: "Portugal avança como 1.º do Grupo K" }
          ],
          dicas: []
        },
        {
          hora: "17h",
          mandante: "Inglaterra",
          visitante: "Gana",
          grupo: "L",
          local: "Gillette Stadium, Foxborough (Boston)",
          placar: "0 × 0",
          stats: "Empate frustrante para a Inglaterra. 79% de posse — recorde nos últimos 60 anos para time sem marcar em Copa. 19 chutes da Inglaterra a 2 de Gana. Grupo L congestionado: England 4, Ghana 4, Croácia 3. R3 decide tudo.",
          numeros: [
            { v: "0 × 0", l: "Placar final" },
            { v: "79%", l: "Posse Inglaterra (recorde 60 anos sem marcar)" },
            { v: "19-2", l: "Chutes ING-GAN" },
            { v: "4 pts", l: "England e Ghana empatados no topo" }
          ],
          dicas: []
        },
        {
          hora: "20h",
          mandante: "Panamá",
          visitante: "Croácia",
          grupo: "L",
          local: "BMO Field, Toronto (Canadá)",
          placar: "0 × 1",
          stats: "Budimir entrou no HT como sub e marcou no 54' — Stanišić cruzou pela direita. Budimir (34 anos) tornou-se o marcador mais velho da Croácia em Copas. Panamá eliminado. Croácia viva com 3 pts.",
          numeros: [
            { v: "0 × 1", l: "Placar final" },
            { v: "54'", l: "Gol Budimir (sub, CRO — mais velho da Croácia em Copa)" },
            { v: "3 pts", l: "Croácia viva no Grupo L" },
            { v: "0 pts", l: "Panamá eliminado" }
          ],
          dicas: []
        },
        {
          hora: "23h",
          mandante: "Colômbia",
          visitante: "RD Congo",
          grupo: "K",
          local: "Estadio Akron, Guadalajara (México)",
          placar: "1 × 0",
          stats: "Muñoz marcou no 76' com finalização rasteira após passe de Díaz. Colômbia garante vaga no mata-mata com 6 pts e lidera o Grupo K. RD Congo eliminada.",
          numeros: [
            { v: "1 × 0", l: "Placar final" },
            { v: "76'", l: "Gol Muñoz (COL, assist Díaz)" },
            { v: "6 pts", l: "Colômbia classifica como 1.ª do Grupo K" },
            { v: "0 pts", l: "RD Congo eliminada" }
          ],
          dicas: []
        }
      ]
    },{
      data: "2026-06-24",
      titulo: "Dia 14 — R3 Grupos A, B e C: batalha de Vancouver e Escócia precisa do milagre",
      contexto: "R3 definitivo dos Grupos A, B e C. Suíça vs Canadá em Vancouver: ambas com 4 pts — quem vence escolhe o caminho no mata-mata (Canadá leve favorito, pV=40,9% com bônus sede). Brasil vs Escócia em Miami: Escócia PRECISA vencer; Brasil avança com empate. Marrocos vs Haiti em Atlanta: Marrocos classifica com qualquer resultado. Grupo A: Coreia certifica vaga com ponto vs África do Sul; México já classificado (pode rodar elenco) enfrenta Tchéquia (1 pt, deve atacar) no Azteca.",
      jogos: [
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Canadá",
          grupo: "B",
          local: "BC Place, Vancouver (British Columbia)",
          placar: null,
          stats: "Pré-jogo: Suíça e Canadá empatadas em 4 pts disputam a liderança do Grupo B. Canadá joga em casa com bônus sede — modelo favorece Canadá como visitante (pV=40,9%, λCAN=1,54 > λSUI=1,40). David artilheiro da Copa com 3 gols. Koné ausente (fratura de tíbia). Manzambi Man of the Match vs Bósnia. Xhaka capitão, Embolo e Vargas em forma pela Suíça.",
          numeros: [
            { v: "40.9%", l: "Prob. Canadá (favorito por bônus sede)" },
            { v: "1.54", l: "λ Canadá (bônus sede Vancouver)" },
            { v: "1.40", l: "λ Suíça" },
            { v: "3", l: "Gols David — artilheiro da Copa" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá não perde (dupla hipótese)", odd: 1.45, resultado: null,
              justificativa: "P(CAN+EMP)=40,9%+24,5%=65,4%. Canadá joga em Vancouver — BC Place lotado. λCAN=1,54 (bônus sede +100 Elo) supera λSUI=1,40. David (3G no torneio) é o artilheiro da Copa; Davies dominou as alas em todos os jogos. Ambas já classificadas, mas Canadá busca a liderança do grupo." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.40, resultado: null,
              justificativa: "λ_total=1,40+1,54=2,94. P(≥2)≈85,0%. Canadá marcou nos 2 jogos (6-0 vs Catar, 1-1 vs Bósnia); Suíça idem (1-1 vs Catar, 4-1 vs Bósnia). Jogo decisivo pela liderança: nenhuma vai recuar. Espaços em transição para David são imensos se Xhaka sobe." },
            { cat: "conservadora", mercado: "Ambas as equipes marcam", odd: 1.68, resultado: null,
              justificativa: "P(SUI≥1)=1−e^(−1,40)≈75,3%; P(CAN≥1)=1−e^(−1,54)≈78,6%. Produto≈59,2%. Manzambi e Vargas pela Suíça vs David e Larin pelo Canadá — quatro artilheiros com forma confirmada no torneio." },
            { cat: "intermediaria", mercado: "Jonathan David marca a qualquer momento", odd: 2.10, resultado: null,
              justificativa: "David: 3 gols em 2 jogos (hat-trick vs Catar no R1). λ_David≈1,54×0,40=0,616. P(marca)≈46,0%. Artilheiro da Copa — Suíça terá dificuldade especial para conter o centroavante do Lille que chega solto nos espaços criados por Davies." },
            { cat: "intermediaria", mercado: "Canadá vence", odd: 2.30, resultado: null,
              justificativa: "pV=40,9% — Canadá é favorito pelo bônus de sede (+100 Elo para co-anfitrião). BC Place vibra a cada toque em Davies. Dos três resultados possíveis, vitória canadense é o mais provável individualmente no modelo." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.88, resultado: null,
              justificativa: "P(≥3)≈58,0% com λ_total=2,94. Canadá marcou 6 vs Catar; Suíça marcou 4 vs Bósnia. Ambas jogam abertas para vencer — cenário de jogo com múltiplos gols tem respaldo sólido do modelo Poisson." },
            { cat: "loucura", mercado: "Canadá vence a zero", odd: 7.00, resultado: null,
              justificativa: "P=pV×e^(−λSUI)=0,409×e^(−1,40)≈10,1%. Suíça não marcou vs Catar no R1 (empate 1-1, gol de Embolo). Com BC Place pressionando, Xhaka às vezes descendo para cobrir e David isolando a zaga, clean sheet canadense tem valor real a 7,00." },
            { cat: "loucura", mercado: "Ruben Vargas marca + Suíça não perde", odd: 6.00, resultado: null,
              justificativa: "P(SUI+EMP)=59,1%; λ_Vargas≈0,280; P(Vargas)≈24,4%. Combo: ~14,4%. Vargas marcou no 84' vs Bósnia no R2 — principal finalizador suíço além de Manzambi. Se Suíça controla o meio, Vargas chega de segunda linha com liberdade." },
            { cat: "loucura", mercado: "David bissa (2+ gols)", odd: 7.50, resultado: null,
              justificativa: "λ_David≈0,616. P(≥2)≈13,4%. David bisou vs Catar R1 antes do hat-trick. Bônus de sede maximiza oportunidades — artilheiro em modo Copa pode surpreender com bis histórico em BC Place." }
          ]
        },
        {
          hora: "16h",
          mandante: "Bósnia e Herz.",
          visitante: "Catar",
          grupo: "B",
          local: "Lumen Field, Seattle (Washington)",
          placar: null,
          stats: "Pré-jogo: Ambas já eliminadas disputam apenas orgulho. Bósnia (1 pt) vem de derrota 1-4 vs Suíça; Dzeko e Babic mostraram qualidade no revés. Catar (1 pt) tem o pior ataque do Grupo B — 1 gol em 2 jogos (Khoukhi 90+4' vs Suíça). Modelo: pM=61,2%, λBOS=1,80 vs λCAT=0,79.",
          numeros: [
            { v: "61.2%", l: "Prob. Bósnia" },
            { v: "1.80", l: "λ Bósnia" },
            { v: "0.79", l: "λ Catar" },
            { v: "1", l: "Gols do Catar no torneio (Khoukhi 90+4' vs SUI)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Bósnia não perde (dupla hipótese)", odd: 1.25, resultado: null,
              justificativa: "P(BOS+EMP)=61,2%+22,7%=83,9%. Bósnia é claramente superior em qualidade individual (Dzeko, Kolasinac, Babic) e motivação de orgulho. Catar não tem artilharia real: 1 gol histórico em Copa (cabeçada de Khoukhi aos 90+4'). λBOS=1,80 vs λCAT=0,79 justifica o favoritismo." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: null,
              justificativa: "λ_total=1,80+0,79=2,59. P(≥2)≈73,1%. Bósnia vai atacar livre de pressão eliminatória. Catar, mesmo eliminado, marcou em Copa (vs Suíça). Jogo sem estresse tático tende a ser aberto — ambas podem trocar passes ofensivos sem receio defensivo." },
            { cat: "conservadora", mercado: "Bósnia marca 2+ gols", odd: 1.90, resultado: null,
              justificativa: "P(BOS≥2)≈47,5% com λBOS=1,80. Bósnia nunca venceu em Copas — Dzeko e companhia querem a 1.ª vitória histórica da seleção num Mundial. Atacarão sem restrições contra a defesa catariana, a mais fraca do Grupo B." },
            { cat: "intermediaria", mercado: "Edin Dzeko marca", odd: 2.60, resultado: null,
              justificativa: "Dzeko: 66 gols em 137 jogos pela Bósnia (0,48/jogo). λ_Dzeko≈1,80×0,28=0,504. P(marca)≈39,5%. Jogo de despedida para o veterano de 37 anos — altamente motivado a encerrar com gol na primeira (e provavelmente última) Copa da carreira." },
            { cat: "intermediaria", mercado: "Bósnia vence", odd: 1.62, resultado: null,
              justificativa: "pM=61,2%. Bósnia tem clara superioridade técnica: Dzeko e Kolasinac vs defesa catariana envelhecida. Catar não venceu nenhum dos 2 jogos da fase de grupos. Com a motivação bósnia de conseguir a primeira vitória histórica, o favoritismo está bem justificado." },
            { cat: "intermediaria", mercado: "Catar marca a qualquer momento", odd: 1.85, resultado: null,
              justificativa: "P(CAT≥1)=1−e^(−0,79)≈54,6%. Catar marcou em 1 de 2 jogos (Khoukhi 90+4' vs Suíça). λ=0,79 é generoso mas reflete motivação de encerrar com dignidade. Afif é perigoso em transições; se Bósnia abre a defesa para atacar, espaços surgem para o contra-ataque catariano." },
            { cat: "loucura", mercado: "Bósnia −1.5 handicap (vence por 2+)", odd: 3.00, resultado: null,
              justificativa: "P(BOS vence por ≥2)≈30% com λBOS=1,80 e λCAT=0,79. Bósnia marcou apenas 1 vs Suíça com equipe reduzida. Mas contra Catar defensivamente frágil, a qualidade ofensiva de Dzeko+Babic+Hadziabic pode gerar situações em série para a goleada histórica." },
            { cat: "loucura", mercado: "Dzeko bissa (2+ gols)", odd: 8.00, resultado: null,
              justificativa: "λ_Dzeko≈0,504. P(≥2)≈9,1%. Dzeko bisou 2 vezes em 2014 (única Copa anterior da Bósnia) — memória muscular existe. Catar sofre defesa improvisada e Dzeko é o maior artilheiro bósnio de todos os tempos. Jogo de orgulho pode liberar sua capacidade máxima." },
            { cat: "loucura", mercado: "Ambas marcam + over 2.5 gols", odd: 4.00, resultado: null,
              justificativa: "P(ambas marcam)≈79,8%×54,6%≈43,6%. P(total≥3)≈48% dado que ambas marcam. Produto≈21%. Jogo de times eliminados sem pressão pode virar festival ofensivo com 4-5 finalizações de Dzeko e oportunidades de contra-ataque do Afif." }
          ]
        },
        {
          hora: "19h",
          mandante: "Marrocos",
          visitante: "Haiti",
          grupo: "C",
          local: "Mercedes-Benz Stadium, Atlanta (Georgia)",
          placar: null,
          stats: "Pré-jogo: Marrocos (4 pts, +2 GD) classifica com qualquer resultado. Haiti (0 pts) eliminado. Marrocos ataca para maximizar GD e disputar a liderança do Grupo C vs Brasil (+3 GD). Saibari marcou o gol mais rápido da Copa (71'' vs Escócia). Brahim Díaz com 2 assistências. Haiti: 0 gols em 2 jogos (0-1 vs SCO, 0-3 vs BRA). Modelo: pM=80,3%, λMAR=2,30 vs λHAI=0,41.",
          numeros: [
            { v: "80.3%", l: "Prob. Marrocos" },
            { v: "2.30", l: "λ Marrocos" },
            { v: "71''", l: "Gol mais rápido da Copa — Saibari vs Escócia" },
            { v: "0", l: "Gols do Haiti no torneio inteiro" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Marrocos não perde (dupla hipótese)", odd: 1.12, resultado: null,
              justificativa: "P(MAR+EMP)=80,3%+14,5%=94,8%. Marrocos classifica mesmo empatando. Haiti não marcou nenhum gol em 2 jogos. Modelo é explícito: apenas 5,1% de chance para o Haiti vencer. Bono sequer foi exigido seriamente nos 2 jogos anteriores do Marrocos." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.42, resultado: null,
              justificativa: "λ_total=2,30+0,41=2,71. P(≥2)≈82,4%. Marrocos precisa de goleada para brigar com Brasil (+3 GD) pela liderança. Vai atacar sem freios. Haiti sofreu gols nos dois tempos dos 2 jogos — sem resistência defensiva real." },
            { cat: "conservadora", mercado: "Marrocos marca no 1T", odd: 1.48, resultado: null,
              justificativa: "P(MAR≥1 no 1T)≈1−e^(−1,15)≈68,3% (λ1T=2,30/2=1,15). Saibari marcou com 71'' vs Escócia — gol mais rápido da Copa. Brahim Díaz controla o meio-campo e Haiti está completamente aberto. Início agressivo é o padrão marroquino neste torneio." },
            { cat: "intermediaria", mercado: "Marrocos vence a zero", odd: 1.80, resultado: null,
              justificativa: "P=0,803×e^(−0,41)≈53,3%. λHAI=0,41 reflete qualidade muito inferior. Haiti não marcou em 2 de 2 jogos. Bono em clean sheet fácil: Scotland e Brazil mal chegaram ao gol marroquino — Haiti tem menos qualidade que ambas." },
            { cat: "intermediaria", mercado: "Brahim Díaz marca ou dá assistência", odd: 1.90, resultado: null,
              justificativa: "Díaz: 0G+2A no torneio (passe para Saibari no R1 e R2). P(G ou A)≈55% — motor criativo do Marrocos. Com Haiti defensivamente aberto, Díaz tem liberdade total de condução. Seus dribles centrais e passes penetrantes vão gerar entre 3 e 5 chances de gol." },
            { cat: "intermediaria", mercado: "Marrocos marca 2+ gols", odd: 1.65, resultado: null,
              justificativa: "P(MAR≥2)≈63,2% com λMAR=2,30. Marrocos marcou 2 gols em 2 jogos (frugal, mas vs Brasil e Escócia). Vs Haiti, a defesa é muito mais frágil — Saibari, En-Nesyri ou Brahim Díaz podem bisar com facilidade diante de adversário eliminado." },
            { cat: "loucura", mercado: "Saibari marca a qualquer momento", odd: 3.50, resultado: null,
              justificativa: "λ_Saibari≈2,30×0,25=0,575. P(marca)≈43,8%. Saibari bisou no torneio (71'' vs Escócia + gol vs Brasil R2). Brahim Díaz continuamente cria espaços por onde Saibari penetra. Com Haiti aberto, o meia atacante tem liberdade máxima para finalizar." },
            { cat: "loucura", mercado: "Haiti marca", odd: 4.00, resultado: null,
              justificativa: "P(HAI≥1)=1−e^(−0,41)≈33,6%. Haiti não marcou em 2 de 2 jogos. Com Marrocos eventualmente recuando após abrir o placar, espaços para contra-ataques surgem. Nazon ou Geffrard têm velocidade para explorar brechas na defesa marroquina desconcentrada." },
            { cat: "loucura", mercado: "Marrocos −2.5 handicap (vence por 3+)", odd: 4.50, resultado: null,
              justificativa: "P(MAR vence por ≥3)≈30,5%. Marrocos tem λ=2,30 para a goleada. Precisa superar o saldo do Brasil (+3) para assumir a liderança. Motivação tática direta: cada gol adicional aproxima Marrocos da melhor posição no mata-mata — Saibari+Díaz em modo agressivo total." }
          ]
        },
        {
          hora: "19h",
          mandante: "Brasil",
          visitante: "Escócia",
          grupo: "C",
          local: "Hard Rock Stadium, Miami (Florida)",
          placar: null,
          stats: "Pré-jogo: Brasil (4 pts, +3 GD) avança com empate; Escócia (3 pts) PRECISA vencer. Raphinha OUT (lesão muscular — grande baixa). Vinicius Jr. (2G no torneio) e Cunha (2G vs Haiti) lideram. Escócia: McGinn (1G), McTominay (motor), Adams (0G, 1A). H2H Copa: Brasil nunca perdeu para Escócia. Modelo: pM=73,6%, λBRA=2,08 vs λSCO=0,54.",
          numeros: [
            { v: "73.6%", l: "Prob. Brasil" },
            { v: "2.08", l: "λ Brasil" },
            { v: "0.54", l: "λ Escócia" },
            { v: "0", l: "Vitórias da Escócia vs Brasil em Copas (H2H)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Brasil não perde (dupla hipótese)", odd: 1.15, resultado: null,
              justificativa: "P(BRA+EMP)=73,6%+18,0%=91,6%. Brasil avança com empate — Ancelotti não vai arriscar desnecessariamente. λBRA=2,08 vs λSCO=0,54. H2H histórico: Brasil nunca perdeu para Escócia em Copas. Escócia precisa vencer mas abrir o jogo cria espaços mortais para Vinicius e Cunha." },
            { cat: "conservadora", mercado: "Vinicius Jr. marca a qualquer momento", odd: 2.00, resultado: null,
              justificativa: "λVini≈2,08×0,35=0,728. P(marca)≈51,7%. Vinicius marcou 1G no torneio e é o melhor jogador do Brasil. Com Raphinha fora, tem ainda mais liberdade pelo flanco esquerdo. Sua velocidade em transição contra a defesa escocesa é a arma mais perigosa do Brasil." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: null,
              justificativa: "λ_total=2,08+0,54=2,62. P(≥2)≈73,9%. Brasil marcou nos 2 jogos. Escócia vai atacar por necessidade (precisa vencer) — abre espaços para contra-ataques brasileiros. Dinâmica de jogo aberto suportada tanto pela qualidade brasileira quanto pelo desespero escocês." },
            { cat: "intermediaria", mercado: "Brasil vence", odd: 1.32, resultado: null,
              justificativa: "pM=73,6%. Brasil tem ampla superioridade técnica. Escócia terá dificuldade em furar Alisson+Militão+Marquinhos. McTominay e McGinn são excelentes mas não têm qualidade para superar um Brasil concentrado com gestão europeia de campeonato." },
            { cat: "intermediaria", mercado: "Matheus Cunha marca", odd: 2.50, resultado: null,
              justificativa: "Cunha bisou vs Haiti (23' e 36') no R2. λCunha≈2,08×0,28=0,582. P(marca)≈44,0%. Com Raphinha fora, Cunha é o 2.º atacante titular. Tem liberdade de chegar da segunda linha — perfil similar ao que destruiu o Haiti. Escócia deixa espaços entre as linhas." },
            { cat: "intermediaria", mercado: "Brasil vence a zero", odd: 2.20, resultado: null,
              justificativa: "P=0,736×e^(−0,54)≈42,9%. Scotland marcou apenas 1 gol em 2 jogos (McGinn vs Haiti 28'). Alisson impecável — só sofreu 1 gol no torneio. Militão+Marquinhos podem ser impermeáveis contra Adams e McGinn sem espaços para cruzamentos." },
            { cat: "loucura", mercado: "Vinicius e Cunha ambos marcam", odd: 5.50, resultado: null,
              justificativa: "P(Vini)×P(Cunha)≈0,517×0,440≈22,8%. Com Raphinha fora, Vinicius e Cunha carregam o ataque sozinhos — volume de finalizações de ambos é maior. Odds de 5,50 têm valor real (~18% implícito vs ~23% estimado)." },
            { cat: "loucura", mercado: "Escócia vence", odd: 8.00, resultado: null,
              justificativa: "pV=8,4%. Brasil nunca perdeu para Escócia. Mas Scotland PRECISA vencer — times desesperados superam projeções Elo. McTominay pode marcar de média distância; Adams explora espaços nas costas de Militão. Uma única transição com McGinn pode criar o milagre escocês em Miami." },
            { cat: "loucura", mercado: "Brasil −1.5 handicap (vence por 2+)", odd: 3.50, resultado: null,
              justificativa: "P(BRA vence por ≥2)≈32%. Escócia abre as linhas para atacar — cria espaços para Vinicius e Cunha em transição. Brasil marcou 3 vs Haiti quando pressionou. Contra Escócia obrigada a arriscar, os espaços voltam. Odds de 3,50 razoáveis para o cenário mais provável pós-vitória brasileira." }
          ]
        },
        {
          hora: "22h",
          mandante: "Coreia do Sul",
          visitante: "África do Sul",
          grupo: "A",
          local: "Estadio BBVA, Guadalupe (Monterrey)",
          placar: null,
          stats: "Pré-jogo: Coreia do Sul (3 pts) avança com qualquer resultado. África do Sul (1 pt) precisa vencer E torcer por resultado improvável (Tchéquia vencer México no Azteca). Son Heung-min lidera o ataque coreano. Premier encontro histórico entre estas seleções em Copas do Mundo. Modelo: pM=72,4%, λKOR=2,05 vs λRSA=0,56.",
          numeros: [
            { v: "72.4%", l: "Prob. Coreia do Sul" },
            { v: "2.05", l: "λ Coreia do Sul" },
            { v: "0.56", l: "λ África do Sul" },
            { v: "0", l: "Encontros anteriores em Copas KOR vs RSA" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Coreia do Sul não perde (dupla hipótese)", odd: 1.17, resultado: null,
              justificativa: "P(KOR+EMP)=72,4%+18,6%=91,0%. Coreia avança com empate — será pragmática. Son Heung-min (100+ caps) lidera equipe experiente. África do Sul matematicamente viva mas depende de resultado praticamente impossível: Tchéquia vencer México no Azteca." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.42, resultado: null,
              justificativa: "λ_total=2,05+0,56=2,61. P(≥2)≈80,6%. Coreia vai ao mata-mata querendo melhorar saldo de gols. África do Sul marcou de pênalti (Mokoena) vs Tchéquia — ofensiva presente mas limitada. Hwang Hee-chan marcou no R1; Oh Hyeon-gyu mantém pressão no 2T." },
            { cat: "conservadora", mercado: "Son Heung-min marca a qualquer momento", odd: 2.00, resultado: null,
              justificativa: "Son: ~45 gols pela Coreia, cobrador de pênaltis e melhor criador de espaços. λSon≈2,05×0,35=0,718. P(marca)≈51,2%. Não marcou nos 2 primeiros jogos — rebote de motivação máxima no jogo decisivo. Tende a aparecer nos grandes momentos com a camisa da seleção." },
            { cat: "intermediaria", mercado: "Coreia vence a zero", odd: 2.25, resultado: null,
              justificativa: "P=0,724×e^(−0,56)≈41,3%. África do Sul marcou apenas 1 gol em 2 jogos (pênalti vs Tchéquia). Kim Seung-gyu focado após falha vs México — defesa coreana com Kwon Kyung-won e Kim Min-jae hermeticamente fechada contra o ataque sul-africano." },
            { cat: "intermediaria", mercado: "Coreia vence", odd: 1.35, resultado: null,
              justificativa: "pM=72,4%. Coreia tem Son+Hwang+Oh como tridente ativo. África do Sul defensivamente sólida mas sem capacidade de superar a qualidade técnica coreana. Classificação garantida não reduz a motivação — o mata-mata começa hoje." },
            { cat: "intermediaria", mercado: "Hwang Hee-chan marca", odd: 2.80, resultado: null,
              justificativa: "Hwang marcou o gol da virada vs Tchéquia no R1 (67'). λHwang≈2,05×0,22=0,451. P(marca)≈36,4%. Ponta-direita do Wolverhampton com instinto de área — joga entre as linhas sul-africanas e aparece nos momentos cruciais. 2.º marcador mais provável da Coreia." },
            { cat: "loucura", mercado: "Son marca 2+ gols", odd: 6.50, resultado: null,
              justificativa: "λSon≈0,718. P(≥2)≈13,1%. Son não marcou em 2 jogos de Copa — a seca de artilheiro tende a acabar numa partida decisiva. Capitão histórico, cobrador de pênaltis, livre no sistema de Lee Chang-won. Se a África do Sul abre, Son tem a qualidade para bisar." },
            { cat: "loucura", mercado: "África do Sul vence", odd: 7.50, resultado: null,
              justificativa: "pV=9,0%. África do Sul mostrou capacidade de criar oportunidades (8 chutes vs Brasil, pênalti vs Tchéquia). Mokoena converteu o pênalti; Mofokeng tem velocidade de ponta. Coreia pode relaxar sabendo que empate basta — risco real de comportamento complacente." },
            { cat: "loucura", mercado: "Coreia −1.5 handicap (vence por 2+)", odd: 3.00, resultado: null,
              justificativa: "P(KOR vence por ≥2)≈38% com λKOR=2,05 e λRSA=0,56. Son+Hwang+Oh vs defesa sul-africana (Hlatshwayo, Xulu). Se Coreia abre cedo, pode confirmar a goleada antes do intervalo. Maximizar saldo melhora o cenário no mata-mata — motivação tática concreta." }
          ]
        },
        {
          hora: "22h",
          mandante: "México",
          visitante: "Tchéquia",
          grupo: "A",
          local: "Estadio Azteca, Cidade do México",
          placar: null,
          stats: "Pré-jogo: México (6 pts) já classificado — Aguirre pode rodar elenco. Tchéquia (1 pt) PRECISA vencer e ainda torcer por RSA vs KOR. Dinâmica invertida: México sem pressão pode poupar Romo e Jimenez; Tchéquia ataca em desespero com Schick (0G no torneio, 10G+6A pelo Leverkusen campeão). λMEX=2,17 vs λTCH=0,48. 100k torcedores no Azteca.",
          numeros: [
            { v: "76.4%", l: "Prob. México" },
            { v: "2.17", l: "λ México" },
            { v: "0.48", l: "λ Tchéquia" },
            { v: "0", l: "Gols Schick no torneio (0 em 2 jogos)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "México não perde (dupla hipótese)", odd: 1.18, resultado: null,
              justificativa: "P(MEX+EMP)=76,4%+16,7%=93,1%. México joga em casa no Azteca — 100k torcedores. λMEX=2,17 reflete superioridade técnica mesmo com rotação. Tchéquia vai atacar mas abre espaços para contra-ataques de Quiñones e Orrantia em velocidade." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.48, resultado: null,
              justificativa: "λ_total=2,17+0,48=2,65. P(≥2)≈74,6%. México marcou nos 2 jogos (2-0 e 1-0). Com Tchéquia obrigada a atacar, os espaços para o ataque mexicano em transição serão amplos. Schick é perigoso em qualquer contexto quando encontra espaços." },
            { cat: "conservadora", mercado: "Tchéquia marca", odd: 2.65, resultado: null,
              justificativa: "P(TCH≥1)=1−e^(−0,48)≈38,1%. Tchéquia marcou nos 2 jogos (Krejci 59' vs Coreia, Sadilek 5' vs África do Sul). Com Schick+Hložek em modo all-in de desespero, a chance real de ao menos 1 gol tcheco é substancial mesmo contra o México." },
            { cat: "intermediaria", mercado: "México vence", odd: 1.30, resultado: null,
              justificativa: "pM=76,4%. México no Azteca é quase imbatível. Tchéquia jamais venceu o México. λMEX=2,17 demonstra superioridade ofensiva mesmo com eventual rotação de Aguirre. Quiñones, Orrantia, Jimenez ou Romo — qualquer combinação deve ser suficiente." },
            { cat: "intermediaria", mercado: "Patrik Schick marca", odd: 3.20, resultado: null,
              justificativa: "Schick: 0G em 2 jogos de Copa, mas 10G+6A pelo Leverkusen campeão. λSchick≈0,48×0,40=0,192 parece baixo, mas em modo all-in (Tchéquia PRECISA vencer) o volume de finalizações de Schick será máximo. Uma entrada de grande área pode destravar o artilheiro da Bundesliga." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 2.00, resultado: null,
              justificativa: "P(≥3)≈48,9% com λ_total=2,65. Tchéquia ataca em desespero — Schick+Hložek+Sadilek pressionarão em bloco alto. México em contra-ataque com velocidade de Quiñones. Jogo de perfil aberto tem quase 50% de chance de superar 2,5 gols." },
            { cat: "loucura", mercado: "Tchéquia vence", odd: 9.00, resultado: null,
              justificativa: "pV=6,9%. Em 2022, a Coreia do Sul bateu Portugal 2-1 quando Portugal estava classificado e rotacionou. México pode poupar 4-5 titulares — criando o cenário ideal para Schick explorar um time C mexicano. O paradoxo dos jogos livres é real mas improvável no Azteca com 100k." },
            { cat: "loucura", mercado: "Schick e Hložek ambos marcam", odd: 12.00, resultado: null,
              justificativa: "P(Schick)≈17,4% (λ≈0,192); P(Hložek)≈11,3% (λ≈0,12). Produto≈2,0%. Odds de 12,00 (impl. 8,3%) têm valor positivo se Tchéquia domina em desespero e ambos os atacantes chegam. Correlação positiva: se Tchéquia controla o jogo, os dois chegam em volume." },
            { cat: "loucura", mercado: "México −2.5 handicap (vence por 3+)", odd: 5.50, resultado: null,
              justificativa: "P(MEX vence por ≥3)≈25,3% com λMEX=2,17. México marcou 2-0 e 1-0 nos jogos anteriores — não goleou por padrão. Mas vs Tchéquia aberta + torcida do Azteca + Schick avançando = contragolpes letais. Se México não rotaciona, odds de 5,50 têm valor real." }
          ]
        }
      ]
    }
  ]
};
