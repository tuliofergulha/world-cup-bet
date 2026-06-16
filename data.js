// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-16T09:00:00-03:00",

  // Campos não-deriváveis do placar — preenchidos pela routine. Totais (jogos/gols/média)
  // são auto-calculados pelo app a partir dos placares.
  estatisticasManuais: {
    cartoesAmarelos: 22,
    escanteiosMed: "8.9"
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
      titulo: "Dia 6 — Grupos I e J: Mbappé estreia, Haaland vs Iraque, Argentina abre defesa do título",
      contexto: "Dia de gigantes: três jogos de alta intensidade nos Grupos I e J. França (Elo 2063) estreia contra Senegal (Elo 1869) num MetLife Stadium lotado — revanche 24 anos depois do choque histórico de 2002. Mbappé (56G, 1 do recorde de Giroud) enfrenta o Senegal de Mané (10G em 13 jogos, recuperado da Copa 2022). Árbitro Faghani. No Grupo I, Noruega vs Iraque (19h): Haaland marcou 16G em 8 jogos de qualificação (dobro de qualquer outro europeu) — Iraque volta após 40 anos. À noite, Argentina (campeã, Elo 2114) estreia com Messi na 200ª cap histórica.",
      jogos: [
        {
          hora: "16h",
          mandante: "França",
          visitante: "Senegal",
          grupo: "I",
          local: "MetLife Stadium, East Rutherford (New York)",
          placar: null,
          stats: "França (Elo 2063, FIFA #3): Mbappé (56G, 1 do recorde de Giroud), Dembélé (dir.) e Olise/Doué no ataque. Saliba com dúvida de costas mas treinou. França: 4 vitórias nos últimos 5, 3-1 vs N.Irlanda em 8/jun. Senegal (Elo 1869): Mané recuperado (10G em 13 recentes, AFCON 2025 player of tournament), Mendy (gol), Koulibaly (zaga), Gueye (meio). Senegal terminou Eliminatórias invicto cedendo apenas 3 gols em 10 jogos. Revanche de 2002 — Senegal venceu 1-0 sendo campeão em exercício. Árbitro: Alireza Faghani (Iran). Modelo: pM(FRA)=65.4%, pE=21.4%, pV(SEN)=13.3%, λFRA=1.88, λSEN=0.70.",
          numeros: [
            { v: "65%", l: "Prob. França" },
            { v: "1.88", l: "λ França" },
            { v: "0.70", l: "λ Senegal" },
            { v: "56G", l: "Mbappé (1 do recorde Giroud)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "França não perde (dupla hipótese)", odd: 1.30,
              justificativa: "P(FRA+EMP) = 65.4%+21.4% = 86.8%. França venceu 4 de 5 recentes. Senegal perdeu 3-2 para EUA em amistoso de maio. Com Mbappé+Dembele+Olise, a França raramente perde no início de torneio — Deschamps é ultraconservador em estreias." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.45,
              justificativa: "λ_total = 1.88+0.70 = 2.58. P(total≥2) = 72.9%. Dois ataques com qualidade técnica individual elevada — Mbappé vs Mané é o confronto de estrelas do dia. Senegal tem Mané+Jackson+Sarr e vai buscar o contra-ataque sobre a saída de bola francesa." },
            { cat: "conservadora", mercado: "França marca no 1T", odd: 1.65,
              justificativa: "λ_FRA_1T ≈ 0.94. P(FRA≥1 no 1T) = 60.9%. Mbappé e Dembele são explosivos nos primeiros 45 minutos. Na Copa 2022, França marcou no 1T em 4 de 7 jogos. Senegal cede espaços nas costas dos alas quando em fase de ataque." },
            { cat: "intermediaria", mercado: "Kylian Mbappé marca", odd: 2.10,
              justificativa: "λ_Mbappé ≈ 1.88×0.30 = 0.564. P(marca) = 43.1%. Mbappé tem 12G em 3 Copas (mais que qualquer outro no período). Quer o gol 57 para superar Giroud como maior artilheiro histórico da França. Em estreia de Copa o francês é especialmente motivado." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 2.00,
              justificativa: "P(FRA≥1 E SEN≥1) ≈ 0.847×0.503 = 0.426. Com λ_SEN=0.70, Senegal tem 50% de chance de marcar. Mané (10G em 13 recentes) + Nicolas Jackson podem explorar as costas da defesa francesa em transições rápidas." },
            { cat: "intermediaria", mercado: "Sadio Mané marca", odd: 3.50,
              justificativa: "λ_Mané ≈ 0.70×0.35 = 0.245. P(marca) = 21.7%. Mané perdeu Copa 2022 por lesão — este é seu momento de redenção. Vem de AFCON 2025 player of tournament com 10G em 13 jogos. Vai explorar o flanco direito francês (Hernandez/Camavinga) com velocidade e dribles." },
            { cat: "loucura", mercado: "França −1.5 handicap", odd: 3.20,
              justificativa: "P(FRA vence por ≥2) ≈ 38%. P(2-0)≈0.134, P(3-0)≈0.084, P(2-1)≈0.094, P(3-1)≈0.059, P(4-0+)≈0.040 — total ≈ 41%. Edge = (0.41×3.20)−1 = 31.2%. Senegal tem λ=0.70 e a França com Dembele+Mbappé pode criar 20+ finalizações. No Grupo I a estreia dominante é o cenário modal." },
            { cat: "loucura", mercado: "Mbappé marca + França vence", odd: 3.50,
              justificativa: "P ≈ P(Mbappé) × P(FRA vence) × correlação = 0.431×0.654×0.95 = 0.268. Pernas positivamente correlacionadas: quando Mbappé marca em Copa, França quase sempre vence. O combo natural da estreia histórica do francês." },
            { cat: "loucura", mercado: "Senegal vence", odd: 7.50,
              justificativa: "P(SEN vence) = 13.3%. O precedente de 2002 é real: Senegal bateu a França campeã com estrutura defensiva impecável. Mané tem o Senegal mais completo da história — Koulibaly, Mendy, Gueye, Jackson. Com Faghani apitando (árbitro conservador), o jogo pode ficar truncado e favorecer o bloco baixo senegalês." }
          ]
        },
        {
          hora: "19h",
          mandante: "Noruega",
          visitante: "Iraque",
          grupo: "I",
          local: "Gillette Stadium, Foxborough (Boston)",
          placar: null,
          stats: "Noruega (Elo 1914, FIFA #31): Haaland (16G em 8 jogos de qualificação, 55G em 48 caps, 1.15/jogo), Ødegaard (7A nas qualificatórias), Sørloth (13G na La Liga 24/25), Nusa (winger veloz). Noruega marcou 37 gols em 8 jogos de qualificação (média 4.6/jogo). Solbakken usa 4-3-3 com Haaland centralizado e Sørloth/Nusa nas pontas. Iraque (Elo 1650): 1ª Copa desde 1986, 40 anos de ausência. Técnico Graham Arnold, sistema compacto, Aymen Hussein como centroavante. Modelo: pM(NOR)=74.3%, pE=17.7%, pV(IRQ)=8.0%, λNOR=2.10, λIRQ=0.53.",
          numeros: [
            { v: "74%", l: "Prob. Noruega" },
            { v: "2.10", l: "λ Noruega" },
            { v: "0.53", l: "λ Iraque" },
            { v: "16G", l: "Haaland em 8 jogos de qualificação" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Noruega vence", odd: 1.35,
              justificativa: "P(NOR vence) = 74.3%. Haaland+Ødegaard+Sørloth é o ataque mais produtivo da Copa (37G em 8 classificatórias). Iraque volta após 40 anos sem Copa — Graham Arnold vai tentar um bloco compacto mas não tem jogadores de nível europeu suficientes." },
            { cat: "conservadora", mercado: "Erling Haaland marca", odd: 1.75,
              justificativa: "λ_Haaland ≈ 2.10×0.42 = 0.882. P(marca) = 58.6%. Haaland marcou em TODOS os 8 jogos de qualificação (16 gols). 55 gols em 48 caps (média 1.15/jogo). Contra a defesa iraquiana sem jogadores de nível Champions, vai ter 4-6 finalizações — o centroavante do Manchester City não desperdiça." },
            { cat: "conservadora", mercado: "Noruega vence a zero", odd: 2.30,
              justificativa: "P = e^(−0.53)×(1−e^(−2.10)) = 0.589×0.878 = 0.517. Edge = (0.517×2.30)−1 = 18.9%. λ_IRQ=0.53 → apenas 41% de chance de Iraque marcar. Ajer e Heggem (Noruega) têm qualidade Champions — Aymen Hussein vai encontrar marcação difícil na estreia da Copa." },
            { cat: "intermediaria", mercado: "Noruega −1.5 handicap", odd: 2.50,
              justificativa: "P(NOR vence por ≥2) ≈ 50%. Com λNOR=2.10 e λIRQ=0.53: P(NOR wins exactly by 1) ≈ 24%, então P(NOR wins by ≥2) ≈ 74.3% − 24% = 50.3%. Noruega marcou 37G em 8 qualificatórias — vitórias largas são sua norma. O mercado sub-avalia a margem esperada de gols." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.90,
              justificativa: "λ_total = 2.63. P(≥3 gols) = 1−e^(−2.63)×(1+2.63+3.46) = 49.1%. Com Haaland+Sørloth criando pressão contínua, o total vai superar 2.5 na maioria dos cenários. Iraque pode ter 1-2 transições mas o domínio norueguês naturalmente eleva o placar." },
            { cat: "intermediaria", mercado: "Martin Ødegaard marca ou dá assistência", odd: 2.00,
              justificativa: "Ødegaard teve 7 assistências nas qualificatórias (mais da Noruega). É o metrônomo que conecta meio-campo ao ataque — libera Haaland com passes e infiltra pelo espaço. P(goal or assist) ≈ 55% num jogo onde a Noruega vai criar 15-20 ocasiões. Capitão do Arsenal, o mais técnico da equipe." },
            { cat: "loucura", mercado: "Haaland bissa (2+ gols)", odd: 5.00,
              justificativa: "P(Haaland≥2): 1−e^(−0.882)−0.882×e^(−0.882) = 22.1%. Edge = (0.221×5.00)−1 = 10.5%. Haaland marcou hat-trick vs Israel e 5G vs Moldávia nas qualificatórias. Contra a defesa iraquiana, o biss é o resultado modal de uma partida onde ele vai ter 4-6 finalizações limpas." },
            { cat: "loucura", mercado: "Noruega marca 3+ gols", odd: 3.50,
              justificativa: "P(NOR≥3) = 1−P(0)−P(1)−P(2) = 1−e^(−2.10)×(1+2.10+2.205) = 35.2%. Edge = (0.352×3.50)−1 = 23.2%. Noruega marcou 4.6 gols/jogo nas qualificatórias. Não enfrenta oposição mais forte que o Iraque e vai criar pressão ofensiva constante com Haaland+Sørloth em campo." },
            { cat: "loucura", mercado: "Haaland marca + Noruega vence a zero", odd: 4.50,
              justificativa: "P ≈ P(Haaland)×P(NOR CS) = 0.586×0.589 = 0.345. Correlação positiva: quando Haaland marca em jogo dominante da Noruega, o clean sheet é mais provável. Com odd de mercado estimada em 3.50-4.00 para este combo: edge positivo. O cenário 2-0 ou 3-0 com Haaland marcando é o mais provável." }
          ]
        },
        {
          hora: "22h",
          mandante: "Argentina",
          visitante: "Argélia",
          grupo: "J",
          local: "Arrowhead Stadium, Kansas City (Missouri)",
          placar: null,
          stats: "Argentina (Elo 2114, FIFA #1, campeã): Messi (38 anos, 200ª cap, 27º jogo em Copas — recorde) quer 3 gols para igualar o recorde de 16G em Copas. Lautaro Martínez (36G internacionais, top scorer Copa América 2024) como 9. Scaloni: 4-3-3 com De Paul, Mac Allister, Almada. Argélia (Elo 1772): Petkovic (15/20 jogos vencidos como treinador). Riyad Mahrez (capitão, 113 caps, 38G, Al Ahli). Mohamed Amoura (Lyon) top scorer africano das Eliminatórias (10G). Luca Zidane (goleiro, filho de Zinedine). Argélia bateu Holanda 1-0 em amistoso. Bensebaini lesionado. Modelo: pM(ARG)=82.1%, pE=13.5%, pV(ALG)=4.4%, λARG=2.38, λALG=0.38.",
          numeros: [
            { v: "82%", l: "Prob. Argentina" },
            { v: "2.38", l: "λ Argentina" },
            { v: "0.38", l: "λ Argélia" },
            { v: "200ª", l: "Cap histórica de Messi" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Argentina vence", odd: 1.30,
              justificativa: "P(ARG vence) = 82.1%. Argentina vem de Copa América 2024 campeã, Messi na 200ª cap, Lautaro como centroavante de nível Champions. Argélia, apesar do percurso de qualificação impecável, nunca enfrentou oposição de nível Argentina — sua experiência de torneio é AFCON." },
            { cat: "conservadora", mercado: "Argentina vence a zero", odd: 1.65,
              justificativa: "P = e^(−0.38)×(1−e^(−2.38)) = 0.684×0.907 = 0.621. Edge = (0.621×1.65)−1 = 2.5%. λ_ALG=0.38 → apenas 31.6% de chance da Argélia marcar. Romero, L.Martínez (defesa) raramente cedem gols a equipes de λ baixo. Bensebaini (lesionado) era o principal criador nos avanços argelinos." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50,
              justificativa: "λ_total = 2.76. P(total≥2) = 76.1%. Argentina vai criar múltiplas ocasiões e converter pelo menos 2. Argélia pode ter 1-2 transições com Mahrez ou Amoura, mas o volume argentino naturalmente eleva o placar." },
            { cat: "intermediaria", mercado: "Lautaro Martínez marca", odd: 2.10,
              justificativa: "λ_Lautaro ≈ 2.38×0.30 = 0.714. P(marca) = 50.9%. Edge = (0.509×2.10)−1 = 6.9%. Top scorer da Copa América 2024 e artilheiro do Inter (Itália). Vai enfrentar Mandi e Chergui (sem Bensebaini lesionado) — dupla central argelina menos experimentada contra centroavantes de elite europeia." },
            { cat: "intermediaria", mercado: "Argentina marca 3+ gols", odd: 2.50,
              justificativa: "P(ARG≥3) = 1−e^(−2.38)×(1+2.38+2.831) = 42.5%. Edge = (0.425×2.50)−1 = 6.3%. Argentina com λ=2.38 criou as maiores goleadas da Conmebol nas Eliminatórias. Petkovic traz um time que nunca enfrentou pressão alta de nível Scaloni. A desestruturação defensiva da Argélia pode ser rápida." },
            { cat: "intermediaria", mercado: "Argentina −2.5 handicap", odd: 3.50,
              justificativa: "P(ARG vence por ≥3): P(3-0)≈0.142, P(4-0)≈0.084, P(3-1)≈0.054, demais≈0.04. Total≈32%. Edge = (0.32×3.50)−1 = 12%. Messi na 200ª cap quer uma goleada histórica e Luca Zidane estreando no gol da Argélia não inspira confiança defensiva do lado argelino." },
            { cat: "loucura", mercado: "Messi e Lautaro ambos marcam", odd: 5.50,
              justificativa: "P ≈ P(Messi)×P(Lautaro)×correlaçãopositiva. λ_Messi=2.38×0.20=0.476 → P(Messi)=37.9%. P(Lautaro)=50.9%. P(ambos)=0.379×0.509×1.10=0.212. Edge = (0.212×5.50)−1 = 16.7%. Pernas positivamente correlacionadas: numa goleada Argentina, ambos jogam 90' com múltiplas chances. Messi quer o recorde de Giroud, Lautaro quer confirmar a forma da Copa América." },
            { cat: "loucura", mercado: "Argentina vence + over 3.5 gols", odd: 4.50,
              justificativa: "P(ARG wins E total≥4) ≈ P(total≥4)×P(ARG ganha∣≥4 gols) ≈ 0.274×0.90 = 0.247. Edge = (0.247×4.50)−1 = 11.1%. Argentina com λ=2.38 vai criar pressão contínua em 90 minutos — quando Messi está inspirado em Copa, a seleção tende a marcar em rajadas. Luca Zidane no gol é o fator surpresa argelino mas pode ser testado repetidamente." },
            { cat: "loucura", mercado: "Riyad Mahrez marca + Argélia não perde", odd: 14.00,
              justificativa: "P(Mahrez marca) = λ_Mahrez=0.38×0.30=0.114 → 10.8%. P(ALG+EMP)=17.9%. Correlação positiva: se Mahrez marca, Argélia quase certamente não perdeu. P ajustada ≈ 8%. Edge = (0.08×14.00)−1 = 12%. Argélia bateu Holanda 1-0 em amistoso. Mahrez (113 caps, 38G) em sua última Copa pode ser o herói improvável — mas só faz sentido como especulação." }
          ]
        }
      ]
    }
  ]
};
