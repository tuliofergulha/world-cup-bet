// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-26T10:00:00-03:00",

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
      contexto: "R3 dos Grupos A, B e C repleto de surpresas. MAIOR CHOQUE: África do Sul 1-0 Coreia do Sul — Son Heung-min BANQUEDO por Hong Myung-bo, Maseko decidiu no 63'. Bafana ao mata-mata pela 1.ª vez! Suíça 2-1 Canadá (Vargas + Manzambi; Promise David sub) — Suíça 1.ª do Grupo B. Brasil 3-0 Escócia (Vinicius 2G + Cunha) com campanha perfeita (9 pts, +6 GD) — 1.º do Grupo C. Marrocos virou 4-2 sobre Haiti (que fez 2 gols históricos!) — 2.º atrás do Brasil. México perfeito 3-0 sobre Tchéquia: Gilberto Mora (17 anos) e Ochoa (40 anos, 6.ª Copa).",
      jogos: [
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Canadá",
          grupo: "B",
          local: "BC Place, Vancouver (British Columbia)",
          placar: "2 × 1",
          stats: "Suíça supera torcida e bônus de sede em Vancouver. Vargas abriu logo no início do 2T com finalização precisa na entrada da área. Manzambi ampliou ~10 minutos depois — 3.º gol no torneio. Promise David (sub) descontou 73 segundos após entrar. Jonathan David (hat-trick vs Catar), artilheiro da Copa, ficou em branco. Suíça 1.ª do Grupo B; Canadá 2.º.",
          numeros: [
            { v: "2 × 1", l: "Placar final" },
            { v: "2", l: "Gols Vargas + Manzambi (SUI)" },
            { v: "73s", l: "Promise David descontou 73s após entrar (sub)" },
            { v: "0", l: "Gols Jonathan David (artilheiro parado)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá não perde (dupla hipótese)", odd: 1.45, resultado: "miss",
              justificativa: "P(CAN+EMP)=40,9%+24,5%=65,4%. Suíça venceu 2-1 — Vargas abriu no 2T e Manzambi ampliou. Jonathan David ficou em branco. BC Place não foi suficiente para a virada canadense." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.40, resultado: "hit",
              justificativa: "3 gols no total (2-1). λ_total=2,94, P(≥2)≈85%. Vargas, Manzambi e Promise David entregaram o over 1.5 com facilidade." },
            { cat: "conservadora", mercado: "Ambas as equipes marcam", odd: 1.68, resultado: "hit",
              justificativa: "Suíça marcou 2 (Vargas + Manzambi); Canadá marcou 1 (Promise David sub, 73s após entrar). Ambas marcaram — produto confirmado." },
            { cat: "intermediaria", mercado: "Jonathan David marca a qualquer momento", odd: 2.10, resultado: "miss",
              justificativa: "David ficou em branco — gol canadense foi de Promise David, que entrou como sub. Suíça parou o artilheiro da Copa de forma efetiva." },
            { cat: "intermediaria", mercado: "Canadá vence", odd: 2.30, resultado: "miss",
              justificativa: "Suíça venceu 2-1 em Vancouver. O bônus de sede não foi suficiente — Vargas e Manzambi foram os decisivos." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.88, resultado: "hit",
              justificativa: "3 gols (Vargas, Manzambi, Promise David) = exatamente no limite do over 2.5 ✓. Jogo decididamente aberto como projetado." },
            { cat: "loucura", mercado: "Canadá vence a zero", odd: 7.00, resultado: "miss",
              justificativa: "Suíça venceu 2-1 — Canadá não venceu e não teve clean sheet. Ambas as pernas falharam." },
            { cat: "loucura", mercado: "Ruben Vargas marca + Suíça não perde", odd: 6.00, resultado: "hit",
              justificativa: "Vargas abriu o 2T com o 1-0 suíço e Suíça venceu 2-1. Ambas as pernas do combo corretas: Vargas marcou ✓ e Suíça não perdeu ✓." },
            { cat: "loucura", mercado: "David bissa (2+ gols)", odd: 7.50, resultado: "miss",
              justificativa: "Jonathan David ficou em branco — gol canadense foi de Promise David (sub). Hat-trick vs Catar não se repetiu contra a solidez defensiva suíça." }
          ]
        },
        {
          hora: "16h",
          mandante: "Bósnia e Herz.",
          visitante: "Catar",
          grupo: "B",
          local: "Lumen Field, Seattle (Washington)",
          placar: "3 × 1",
          stats: "Vitória histórica: 1.ª da Bósnia na história das Copas! Alajbegovic (18 anos) abriu no 29' — 8.º mais jovem marcador da história do WC e o mais novo goleador bósnio de sempre. Dzeko chutou e a bola desviou em Al-Brake para OG (34'). Al-Haydos descontou para o Catar (42'). Mahmic fechou no 82'. Bósnia 3.ª do Grupo B com 2 pts — candidata a melhor 3.ª colocada.",
          numeros: [
            { v: "3 × 1", l: "Placar final" },
            { v: "18", l: "Anos de Alajbegovic (8.º mais jovem marcador da história do WC)" },
            { v: "1.ª", l: "Vitória da Bósnia em Copas do Mundo — histórico!" },
            { v: "42'", l: "Al-Haydos gol (QAT) — Catar marca e encerra com dignidade" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Bósnia não perde (dupla hipótese)", odd: 1.25, resultado: "hit",
              justificativa: "P(BOS+EMP)=83,9%. Bósnia venceu 3-1 na vitória mais histórica da seleção — Alajbegovic (18 anos) abriu, OG Dzeko e Mahmic fecharam. Motivação de orgulho entregou." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: "hit",
              justificativa: "4 gols no total (3-1): Alajbegovic 29', OG 34', Al-Haydos 42' e Mahmic 82'. λ_total=2,59, P(≥2)≈73%. Entregou com folga." },
            { cat: "conservadora", mercado: "Bósnia marca 2+ gols", odd: 1.90, resultado: "hit",
              justificativa: "Bósnia marcou 3: Alajbegovic (29'), OG (34') e Mahmic (82'). P(BOS≥2)≈47,5% com λ=1,80 — o 3.º gol foi bônus histórico." },
            { cat: "intermediaria", mercado: "Edin Dzeko marca", odd: 2.60, resultado: "miss",
              justificativa: "O chute de Dzeko desviou em Al-Brake para OG — oficialmente não foi gol de Dzeko. O veterano de 37 anos foi decisivo na jogada mas o marcador oficial é contra." },
            { cat: "intermediaria", mercado: "Bósnia vence", odd: 1.62, resultado: "hit",
              justificativa: "Bósnia venceu 3-1 — 1.ª vitória histórica em Copa. pM=61,2% entregou com convicção: Alajbegovic, OG e Mahmic foram os artilheiros." },
            { cat: "intermediaria", mercado: "Catar marca a qualquer momento", odd: 1.85, resultado: "hit",
              justificativa: "Al-Haydos marcou no 42' — Catar encerrou com dignidade após o OG. P(CAT≥1)≈54,6% confirmou: Catar marcou em 2 dos 3 jogos da Copa." },
            { cat: "loucura", mercado: "Bósnia −1.5 handicap (vence por 2+)", odd: 3.00, resultado: "hit",
              justificativa: "3-1 = 2 gols de diferença = handicap de −1.5 superado ✓. P(BOS por ≥2)≈30% — pagou 3.00 com respaldo do modelo." },
            { cat: "loucura", mercado: "Dzeko bissa (2+ gols)", odd: 8.00, resultado: "miss",
              justificativa: "Dzeko não marcou oficialmente — seu chute foi desviado para OG. A despedida não teve o gol no placar que o veterano merecia." },
            { cat: "loucura", mercado: "Ambas marcam + over 2.5 gols", odd: 4.00, resultado: "hit",
              justificativa: "Ambas marcaram ✓ (BOS 3, QAT 1) e 4 gols > 2.5 ✓. P≈21% com odds 4.00 — valor confirmado num jogo aberto de times sem pressão classificatória." }
          ]
        },
        {
          hora: "19h",
          mandante: "Marrocos",
          visitante: "Haiti",
          grupo: "C",
          local: "Mercedes-Benz Stadium, Atlanta (Georgia)",
          placar: "4 × 2",
          stats: "Drama histórico em Atlanta! Haiti marcou seus 1.ºs gols em Copa: Bono OG (10', de Joseph) e Isidor de fora da área (43') para o 1-2 no HT. Hakimi igualou (39') e Saibari varrendo cruzamento de Hakimi (45+1', 3.º gol no torneio) empatou 2-2 antes do intervalo. Rahimi (sub) desviou no 78' e Yassine fechou no 89'. Marrocos 2.º do Grupo C — Brasil ganhou 3-0 da Escócia e ficou com o +6 de GD vs +3 de Marrocos.",
          numeros: [
            { v: "4 × 2", l: "Placar final" },
            { v: "2", l: "Gols históricos do Haiti (1.ºs em Copa desde 1974)" },
            { v: "3", l: "Gols Saibari no torneio (artilheiro de Marrocos)" },
            { v: "2.º", l: "Marrocos no Grupo C (Brasil 1.º com GD +6 vs +3)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Marrocos não perde (dupla hipótese)", odd: 1.12, resultado: "hit",
              justificativa: "P(MAR+EMP)=94,8%. Marrocos venceu 4-2 mesmo cedendo 2 gols ao Haiti. Vitória confirmada mas de forma dramática — Haiti marcou os 1.ºs gols da história da seleção em Copa." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.42, resultado: "hit",
              justificativa: "6 gols no total! (4-2). λ_total=2,71 previa 82% de over 1.5 — entregou muito além do esperado com o Haiti marcando 2." },
            { cat: "conservadora", mercado: "Marrocos marca no 1T", odd: 1.48, resultado: "hit",
              justificativa: "Hakimi (39') e Saibari (45+1') marcaram no 1T. P(MAR≥1 no 1T)≈68,3% confirmada — Marrocos marcou 2 antes do intervalo." },
            { cat: "intermediaria", mercado: "Marrocos vence a zero", odd: 1.80, resultado: "miss",
              justificativa: "Haiti marcou 2 gols: Bono OG (10') e Isidor de fora da área (43'). Primeiro clean sheet do Marrocos foi adiado — λHAI=0,41 subestimou o Haiti histórico." },
            { cat: "intermediaria", mercado: "Brahim Díaz marca ou dá assistência", odd: 1.90, resultado: "miss",
              justificativa: "Gols marroquinos: Hakimi (39'), Saibari via cruzamento de Hakimi (45+1'), Rahimi (78') e Yassine (89'). Brahim Díaz não aparece como artilheiro nem assistente — Hakimi foi o protagonista." },
            { cat: "intermediaria", mercado: "Marrocos marca 2+ gols", odd: 1.65, resultado: "hit",
              justificativa: "Marrocos marcou 4 gols. P(MAR≥2)≈63,2% entregou com amplitude — Hakimi, Saibari, Rahimi e Yassine foram os artilheiros." },
            { cat: "loucura", mercado: "Saibari marca a qualquer momento", odd: 3.50, resultado: "hit",
              justificativa: "Saibari marcou no 45+1' (cruzamento de Hakimi) — 3.º gol no torneio. P(marca)≈43,8% com odds de 3.50: valor confirmado." },
            { cat: "loucura", mercado: "Haiti marca", odd: 4.00, resultado: "hit",
              justificativa: "Haiti marcou 2 gols históricos — Bono OG (10') e Isidor (43'). P(HAI≥1)≈33,6%: odds de 4.00 com odds justo em ~3.00 representava valor." },
            { cat: "loucura", mercado: "Marrocos −2.5 handicap (vence por 3+)", odd: 4.50, resultado: "miss",
              justificativa: "4-2 = 2 gols de diferença. Marrocos não venceu por 3+ — Haiti resistiu heroicamente marcando 2 gols históricos. Handicap falhou." }
          ]
        },
        {
          hora: "19h",
          mandante: "Brasil",
          visitante: "Escócia",
          grupo: "C",
          local: "Hard Rock Stadium, Miami (Florida)",
          placar: "3 × 0",
          stats: "Dominância verde-amarela em Miami. Vinicius abriu no 7' em contra-ataque e bisou no 45+3'. Cunha completou no 60'. Neymar estreou como sub no 2T. Escócia eliminada. Brasil 1.º do Grupo C com campanha perfeita: 9 pts, +6 GD. H2H histórico confirmado — Brasil nunca perdeu para Escócia em Copa. Raphinha saiu bem fora mas Vinicius carregou sozinho.",
          numeros: [
            { v: "3 × 0", l: "Placar final" },
            { v: "2", l: "Gols Vinicius Jr. (7' e 45+3') — torneio todo com gol" },
            { v: "60'", l: "Cunha sela — bisou vs Haiti no R2" },
            { v: "9 pts", l: "Brasil 1.º Grupo C com campanha perfeita (+6 GD)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Brasil não perde (dupla hipótese)", odd: 1.15, resultado: "hit",
              justificativa: "P(BRA+EMP)=91,6%. Brasil venceu 3-0 com facilidade — Vinicius 2G (7' e 45+3') e Cunha (60'). H2H Copa confirmado: Brasil nunca perdeu para Escócia." },
            { cat: "conservadora", mercado: "Vinicius Jr. marca a qualquer momento", odd: 2.00, resultado: "hit",
              justificativa: "Vinicius bisou: 7' e 45+3'. P(marca)≈51,7% com λVini=0,728 — marcou em TODOS os 3 jogos da fase de grupos. O melhor jogador do Brasil entregou na grande noite." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: "hit",
              justificativa: "3 gols no total (3-0). λ_total=2,62, P(≥2)≈73,9%. Escócia precisava vencer e abriu espaços — Brasil aproveitou com 3 gols." },
            { cat: "intermediaria", mercado: "Brasil vence", odd: 1.32, resultado: "hit",
              justificativa: "pM=73,6%. Brasil venceu 3-0 com dominância total — Vinicius carregou o ataque com Raphinha fora. Campanha perfeita na fase de grupos." },
            { cat: "intermediaria", mercado: "Matheus Cunha marca", odd: 2.50, resultado: "hit",
              justificativa: "Cunha marcou no 60' — 3.º gol em 2 jogos (bisou vs Haiti). P(marca)≈44%. Com Raphinha fora, Cunha foi decisivo no 3.º gol." },
            { cat: "intermediaria", mercado: "Brasil vence a zero", odd: 2.20, resultado: "hit",
              justificativa: "P≈42,9%. Escócia não marcou (0 gols em 3 jogos = 1 gol no torneio total). Alisson impecável — só sofreu 1 gol em toda a fase de grupos." },
            { cat: "loucura", mercado: "Vinicius e Cunha ambos marcam", odd: 5.50, resultado: "hit",
              justificativa: "P≈22,8%. Vinicius bisou (7', 45+3') e Cunha marcou (60'). Combo de valor real que entregou — ambos os atacantes foram decisivos com Raphinha fora." },
            { cat: "loucura", mercado: "Escócia vence", odd: 8.00, resultado: "miss",
              justificativa: "Brasil venceu 3-0. O milagre escocês não aconteceu — a defesa brasileira foi impermeável e o contra-ataque com Vinicius foi imparável." },
            { cat: "loucura", mercado: "Brasil −1.5 handicap (vence por 2+)", odd: 3.50, resultado: "hit",
              justificativa: "3-0 = 3 gols de diferença > 1.5 ✓. P(BRA por ≥2)≈32% com odds de 3.50: excelente valor confirmado. Vinicius bisou e Cunha fechou." }
          ]
        },
        {
          hora: "22h",
          mandante: "Coreia do Sul",
          visitante: "África do Sul",
          grupo: "A",
          local: "Estadio BBVA, Guadalupe (Monterrey)",
          placar: "0 × 1",
          stats: "UPSET HISTÓRICO em Monterrey! Son Heung-min foi BANQUEDO por Hong Myung-bo — polêmica tática que chocou o mundo do futebol. Maseko finalizou da entrada da área após passe transversal de Moremi no 63'. Coreia dominou (8 chutes, 1.0 xG) mas não converteu. África do Sul vai ao mata-mata pela PRIMEIRA VEZ NA HISTÓRIA — enfrentará o Canadá. Coreia 3.ª do Grupo A (3 pts, GD -1), ainda pode avançar como melhor 3.ª colocada.",
          numeros: [
            { v: "0 × 1", l: "Placar final" },
            { v: "63'", l: "Gol Maseko (RSA) — finalização após passe de Moremi" },
            { v: "BANQUEDO", l: "Son Heung-min — decisão polêmica de Hong Myung-bo" },
            { v: "1.ª vez", l: "África do Sul no mata-mata de Copa do Mundo!" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Coreia do Sul não perde (dupla hipótese)", odd: 1.17, resultado: "miss",
              justificativa: "P(KOR+EMP)=91,0%. UPSET — África do Sul venceu 1-0 com Son BANQUEDO. Maseko (63') decidiu. A Coreia perdeu com 8 chutes (1.0 xG) mas sem eficiência ofensiva." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.42, resultado: "miss",
              justificativa: "Apenas 1 gol no total (Maseko 63'). λ_total=2,61 previa 80% de over 1.5 — jogo completamente travado, Coreia sem Son não conseguiu finalizar com qualidade." },
            { cat: "conservadora", mercado: "Son Heung-min marca a qualquer momento", odd: 2.00, resultado: "miss",
              justificativa: "Son foi BANQUEDO por Hong Myung-bo! Polêmica tática histórica. O capitão não entrou e a Coreia perdeu 1-0 — a ausência de Son na escalação foi o fator decisivo." },
            { cat: "intermediaria", mercado: "Coreia vence a zero", odd: 2.25, resultado: "miss",
              justificativa: "Coreia não venceu — perdeu 0-1. Maseko marcou no 63' com finalização da entrada da área. Kim Seung-gyu foi batido pela segunda vez na Copa." },
            { cat: "intermediaria", mercado: "Coreia vence", odd: 1.35, resultado: "miss",
              justificativa: "Coreia perdeu 0-1 num dos maiores upsets da Copa 2026. África do Sul foi pragmática e Maseko fez o único gol do jogo no 63'." },
            { cat: "intermediaria", mercado: "Hwang Hee-chan marca", odd: 2.80, resultado: "miss",
              justificativa: "Hwang e todos os coreanos ficaram em branco. Com Son no banco, o ataque da Coreia perdeu criatividade e os sul-africanos controlaram bem." },
            { cat: "loucura", mercado: "Son marca 2+ gols", odd: 6.50, resultado: "miss",
              justificativa: "Son foi banquedo — impossível marcar sentado no banco. A decisão de Hong Myung-bo de não escalar o capitão chocou o mundo do futebol." },
            { cat: "loucura", mercado: "África do Sul vence", odd: 7.50, resultado: "hit",
              justificativa: "pV=9,0%: Africa do Sul venceu 1-0! Maseko (63') é o herói. O maior valor da Copa 2026 até agora — contrarianismo confirmado. Bafana ao mata-mata pela 1.ª vez na história." },
            { cat: "loucura", mercado: "Coreia −1.5 handicap (vence por 2+)", odd: 3.00, resultado: "miss",
              justificativa: "Coreia não venceu sequer — perdeu 0-1. Son no banco, Maseko decisivo. O modelo esperava dominância coreana que nunca chegou." }
          ]
        },
        {
          hora: "22h",
          mandante: "México",
          visitante: "Tchéquia",
          grupo: "A",
          local: "Estadio Azteca, Cidade do México",
          placar: "3 × 0",
          stats: "México PERFEITO: 3V/3J, único anfitião com campanha perfeita na história recente. Gilberto Mora (17 anos, mais jovem titular do torneio em 24 anos) foi estrela com assistência para Chávez (55'). Quiñones selou após desvio (61'). Fidalgo (sub) enrolou para o 3.º (90+). Ochoa (40 anos) completou a 6.ª Copa — único goleiro a jogar 6 Mundiais. Tchéquia elimina sem marcar em 3 jogos.",
          numeros: [
            { v: "3 × 0", l: "Placar final" },
            { v: "17", l: "Anos de Gilberto Mora — destaque (mais jovem titular em 24 anos)" },
            { v: "40", l: "Anos de Ochoa — 6.ª Copa (único goleiro na história)" },
            { v: "9 pts", l: "México — campanha perfeita na fase de grupos" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "México não perde (dupla hipótese)", odd: 1.18, resultado: "hit",
              justificativa: "P(MEX+EMP)=93,1%. México venceu 3-0 no Azteca com 100k torcedores. Gilberto Mora (17 anos), Quiñones e Fidalgo selaram a campanha perfeita." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.48, resultado: "hit",
              justificativa: "3 gols no total (3-0). λ_total=2,65, P(≥2)≈74,6%. Chávez (55'), Quiñones (61') e Fidalgo (90+) entregaram o over 1.5 com folga." },
            { cat: "conservadora", mercado: "Tchéquia marca", odd: 2.65, resultado: "miss",
              justificativa: "Tchéquia terminou sem marcar em 3 jogos seguidos. P(TCH≥1)≈38% não se confirmou — Schick e Hložek ficaram completamente em branco." },
            { cat: "intermediaria", mercado: "México vence", odd: 1.30, resultado: "hit",
              justificativa: "México venceu 3-0 com campanha perfeita. pM=76,4% no Azteca entregou — 9 pts em 3 jogos para o co-anfitrião." },
            { cat: "intermediaria", mercado: "Patrik Schick marca", odd: 3.20, resultado: "miss",
              justificativa: "Schick não marcou — 0 gols em 3 jogos de Copa. A Tchéquia inteira ficou em branco: 0 gols em 9 chutes. Ochoa manteve o clean sheet sem ser muito exigido." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 2.00, resultado: "hit",
              justificativa: "3 gols (exatamente no limite). P(≥3)≈48,9% — México marcou 3 sem rotação total de Aguirre. Gilberto Mora foi o catalisador com assistência para Chávez." },
            { cat: "loucura", mercado: "Tchéquia vence", odd: 9.00, resultado: "miss",
              justificativa: "Tchéquia perdeu 0-3. México não rotacionou tanto quanto se esperava — Aguirre manteve a base e entregou a campanha perfeita do anfitrião no Azteca." },
            { cat: "loucura", mercado: "Schick e Hložek ambos marcam", odd: 12.00, resultado: "miss",
              justificativa: "Nenhum dos dois marcou. Tchéquia não balançou as redes em nenhum dos 3 jogos — Schick 0G em toda a Copa, igual ao R1 vs Coreia e R2 vs África do Sul." },
            { cat: "loucura", mercado: "México −2.5 handicap (vence por 3+)", odd: 5.50, resultado: "hit",
              justificativa: "3-0 = exatamente 3 gols de diferença = handicap de −2.5 superado ✓. P≈25,3% com odds 5.50: grande valor. Campanha perfeita com ampla margem no Azteca." }
          ]
        }
      ]
    },
    {
      data: "2026-06-25",
      titulo: "Dia 15 — R3 Grupos D, E e F: Missão Alemanha, Japão vs Suécia e batalha Paraguai–Austrália",
      contexto: "R3 definitivo de três grupos em simultâneo. Grupo E: EQU (1pt) PRECISA vencer a Alemanha (6pts) numa missão quase impossível; CIV (3pts) avança até com empate vs Curaçao — garantida pelo H2H (venceu EQU 1-0 no R1). Grupo F: SWE (3pts) PRECISA vencer Japão (4pts) que avança com empate — Gyokeres e Isak vs o melhor bloqueio da Copa. Grupo D: PAR (3pts, DG −2) vs AUS (3pts, DG 0) — Almiron suspenso por cobrir a boca, Enciso lidera o ataque; EUA já classificada roda o banco vs Turquia (0pts, 0G em 40+ finalizações!).",
      jogos: [
        {
          hora: "17h",
          mandante: "Equador",
          visitante: "Alemanha",
          grupo: "E",
          local: "MetLife Stadium, East Rutherford (Nova York)",
          placar: "2 × 1",
          stats: "Maior zebra do torneio! Sane abriu (2', assistência de Wirtz), Angulo empatou (7') e Plata selou (77', cruzamento de Rodríguez). Musiala titulou mas ficou em branco; Undav entrou como sub e não converteu. Equador avança como melhor 3.º (4pts); Alemanha segue 2.º do Grupo E com 6pts.",
          numeros: [
            { v: "0.568", l: "pV(ALE) — Alemanha favorita clara" },
            { v: "2.09", l: "λ(ALE) — maior expectativa de gols visitante do dia" },
            { v: "3", l: "Gols de Undav em apenas 58 minutos na Copa" },
            { v: "1pt", l: "Equador — precisa de vitória para ter chance de avançar" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Alemanha não perde (dupla hipótese)", odd: 1.28, resultado: "miss",
              justificativa: "P(ALE+EMP)=77,7%. Alemanha imbatível na Copa (7-1 vs CUR, 2-1 vs CIV). EQU sem vitória ainda — derrota 0-1 vs CIV no R1, empate 0-0 vs CUR no R2. Nagelsmann busca o histórico 3V/3J. RESULTADO: EQU venceu 2-1 — a maior zebra do torneio." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.22, resultado: "hit",
              justificativa: "λ_total=3,33 — EQU obrigado a atacar (1pt) abre espaço para o contra-golpe alemão. P(≥2 gols)≈84,4% pelo modelo de Poisson com médias combinadas. RESULTADO: 3 gols (2-1)." },
            { cat: "conservadora", mercado: "Alemanha marca no 1T", odd: 1.55, resultado: "hit",
              justificativa: "ALE abriu 3-0 ainda no 1T vs CUR. Com EQU forçado a avançar a linha para vencer, haverá espaços para transições alemãs cedo. P(ALE≥1 no 1T)≈65% com λ_ALE=2,09. RESULTADO: Sane abriu no 2'." },
            { cat: "intermediaria", mercado: "Alemanha vence", odd: 1.75, resultado: "miss",
              justificativa: "pV=56,8%. EQU vai apostar tudo no ataque por obrigação — abre espaço para Undav, Musiala e Wirtz decidirem no contra. Alemanha com motivação de campanha perfeita em Copa do Mundo. RESULTADO: Equador venceu 2-1." },
            { cat: "intermediaria", mercado: "Deniz Undav marca", odd: 2.20, resultado: "miss",
              justificativa: "Artilheiro da Copa pelo ritmo: 3G em 58 min, bisou em 26 min como sub vs CIV. Havertz é titular no 9 mas Undav entrando pode ser decisivo outra vez. λ_ALE=2,09 projeta espaço. RESULTADO: Undav entrou como sub mas não marcou; Sane foi o goleador alemão." },
            { cat: "intermediaria", mercado: "Jamal Musiala marca ou dá assistência", odd: 2.00, resultado: "miss",
              justificativa: "Musiala 1G no 7-1 vs CUR e em grande fase. É o criativo central — dribla, finaliza e cria. EQU recuando para eventual vantagem dá espaço na meia-lua. Ação direta provável. RESULTADO: Musiala titular mas sem gol ou assistência; foi Wirtz quem assistiu Sane." },
            { cat: "loucura", mercado: "Alemanha −1.5 handicap (vence por 2+)", odd: 2.50, resultado: "miss",
              justificativa: "Com λ_ALE=2,09 e EQU obrigado a abrir o jogo, vitória alemã ampla é plausível. Se ALE abre 1-0, EQU vai ao tudo-ou-nada e cede ainda mais espaço — Undav do banco pode selar. RESULTADO: ALE perdeu 1-2." },
            { cat: "loucura", mercado: "Florian Wirtz marca", odd: 3.50, resultado: "miss",
              justificativa: "Wirtz, 21 anos (18G+15A pelo Leverkusen na Bundesliga), ainda sem gols na Copa. EQU forçado a avançar cria os espaços nas costas da linha que Wirtz explora pela meia-esquerda. RESULTADO: Wirtz deu a assistência para Sane mas não marcou." },
            { cat: "loucura", mercado: "Equador marca + Alemanha vence", odd: 2.80, resultado: "miss",
              justificativa: "EQU ataca por obrigação — λ_EQU=1,24 sugere que marcarão. Mas ALE tem qualidade para vencer mesmo cedendo gol: resultado tipo 2-1 ou 3-1 tem P≈40% pelos dois eventos combinados. RESULTADO: EQU marcou (Angulo+Plata) mas ALE não venceu — zebra total." }
          ]
        },
        {
          hora: "17h",
          mandante: "Curaçao",
          visitante: "Costa do Marfim",
          grupo: "E",
          local: "Lincoln Financial Field, Philadelphia",
          placar: "0 × 2",
          stats: "Nicolas Pepe bisou para classificar a Costa do Marfim ao mata-mata pela 1.ª vez na história. CUR encerrou o torneio sem marcar (0-9 em 3 jogos). Amad Diallo ficou fora dos gols. CIV segue como 2.ª do Grupo E (6pts, atrás da ALE no H2H).",
          numeros: [
            { v: "0.741", l: "pV(CIV) — Costa do Marfim esmagadora favorita" },
            { v: "2.10", l: "λ(CIV) — segunda maior expectativa de gols visitante do dia" },
            { v: "91,9%", l: "P(CIV não perde) — pV+pE" },
            { v: "0", l: "Gols de Curaçao nas duas primeiras partidas (1-7 vs ALE, 0-0 vs EQU)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Costa do Marfim não perde (dupla hipótese)", odd: 1.12, resultado: "hit",
              justificativa: "P(CIV+EMP)=91,9%. Curaçao marcou apenas 1 gol na Copa (Curiel vs ALE antes da goleada) e 0 vs EQU. CIV com motivação total para fechar o grupo em 2.º — avança com qualquer resultado. RESULTADO: CIV venceu 2-0." },
            { cat: "conservadora", mercado: "Costa do Marfim marca", odd: 1.18, resultado: "hit",
              justificativa: "λ_CIV=2,10 com atacantes de nível: Diallo (gol decisivo vs EQU), Pepe (Nice) e Kessié (motor do meio). Curaçao cedeu 7 gols vs Alemanha. P(CIV≥1)≈87,8%. RESULTADO: Pepe bisou." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.40, resultado: "hit",
              justificativa: "λ_total=2,63. CIV vai pressionar; CUR precisando vencer deve sair também, abrindo espaços. P(≥2 gols)≈73,9% pelo modelo Poisson. RESULTADO: 2 gols (0-2)." },
            { cat: "intermediaria", mercado: "Costa do Marfim vence", odd: 1.35, resultado: "hit",
              justificativa: "pV=74,1% — maior probabilidade isolada de vitória dos 6 jogos de hoje. CUR foi goleada 1-7 pela mesma Alemanha que a CIV perdeu apenas 1-2. Diferença de qualidade explícita. RESULTADO: CIV venceu 2-0." },
            { cat: "intermediaria", mercado: "Amad Diallo marca ou dá assistência", odd: 2.30, resultado: "miss",
              justificativa: "Diallo foi o decisivo da CIV: gol no 90' vs EQU como sub assistido por Singo. Extremo do Manchester United quer confirmar espaço para o mata-mata. CUR cede buracos na defesa alta. RESULTADO: Foi Pepe o protagonista com brace — Diallo não participou dos gols." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.95, resultado: "miss",
              justificativa: "λ_total=2,63 e CUR precisa marcar (obrigado a vencer). Se CUR atacar, abre para contra-ataques de CIV. P(≥3 gols)≈49% — o jogo pode ficar mais aberto do que parece. RESULTADO: Apenas 2 gols." },
            { cat: "loucura", mercado: "Costa do Marfim vence a zero", odd: 2.25, resultado: "hit",
              justificativa: "λ_CUR=0,53 — a menor expectativa ofensiva dos 6 jogos de hoje. P(CIV vence) × P(CUR=0) ≈ 74,1% × 58,9% ≈ 43,6%: odds 2,25 ligeiramente acima do valor justo de 2,29. Valor claro. RESULTADO: CIV 2-0 CUR — CUR terminou o torneio sem marcar um único gol (0-9)." },
            { cat: "loucura", mercado: "Nicolas Pepe marca", odd: 3.50, resultado: "hit",
              justificativa: "Pepe (Nice) ainda não marcou na Copa — Kessié e Diallo dominaram as participações. Vs CUR com a pior defesa do Grupo E, o espaço para Pepe finalizar é real e as odds refletem o hiato de visibilidade. RESULTADO: Pepe bisou! A dica loucura mais rentável do dia." },
            { cat: "loucura", mercado: "Curaçao marca + CIV vence", odd: 4.50, resultado: "miss",
              justificativa: "CUR marcou vs ALE no 31' antes da goleada. Com mesma dinâmica (CUR tenta, CIV responde e vence), teríamos o enredo do R1 invertido. P(CUR≥1) × P(CIV vence) ≈ 41% × 74% ≈ 30,5%: valor nas odds. RESULTADO: CUR não marcou um gol sequer no torneio inteiro." }
          ]
        },
        {
          hora: "20h",
          mandante: "Japão",
          visitante: "Suécia",
          grupo: "F",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: "1 × 1",
          stats: "Empate que valeu para os dois. Maeda abriu (56', passe de Doan) e Elanga empatou (62', 2.º gol no torneio). Gyokeres e Isak ficaram em branco. Japão avança em 2.º (enfrentará Brasil no R32); Suécia avança como melhor 3.º do Grupo F (4pts).",
          numeros: [
            { v: "0.486", l: "pM(JPN) — Japão leve favorito em campo neutro" },
            { v: "1.59 / 1.10", l: "λ(JPN) / λ(SWE) — Japão com maior média esperada" },
            { v: "21", l: "Gols de Gyokeres pela Suécia em 35 convocações" },
            { v: "9", l: "Jogos consecutivos sem derrota do Japão (incluindo grupos)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Japão não perde (dupla hipótese)", odd: 1.35, resultado: "hit",
              justificativa: "P(JPN+EMP)=73,6%. JPN avança com empate e vai defender e contra-atacar. SWE vem de derrota 1-5 vs HOL com defesa exposta. Táticas japonesas favorecem o resultado protegido. RESULTADO: 1-1, Japão não perdeu." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.45, resultado: "hit",
              justificativa: "λ_total=2,69. SWE PRECISA atacar — abre espaço para o contra-golpe japonês veloz. JPN goleou TUN 4-0 no R2. P(≥2 gols)≈74,9%. RESULTADO: 2 gols (1-1)." },
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.80, resultado: "hit",
              justificativa: "P(JPN≥1)≈80%, P(SWE≥1)≈67%. Suécia atacará com Gyokeres+Isak por necessidade. Japão em contra-golpe com Minamino e Kamada. Dinâmica ataque-bloqueio-contra produce gols dos dois lados. P≈53%. RESULTADO: Maeda (JPN 56') e Elanga (SWE 62')." },
            { cat: "intermediaria", mercado: "Viktor Gyokeres marca", odd: 2.90, resultado: "miss",
              justificativa: "Gyokeres: 21G/35 jogos pela Suécia. Marcou vs TUN no R1 com máscara após fratura nasal. Precisa do gol mais que nunca — é o pino central do ataque sueco que vai pressionar 90 min. RESULTADO: Gyokeres ficou em branco; foi Elanga quem igualou para a Suécia." },
            { cat: "intermediaria", mercado: "Alexander Isak marca", odd: 3.20, resultado: "miss",
              justificativa: "Isak (Liverpool, 18G/60 caps) marcou no R1 vs TUN. Com defesa japonesa concentrada em Gyokeres, Isak pode encontrar espaços pela segunda linha. Duo marcou 3G juntos no R1. RESULTADO: Isak também em branco." },
            { cat: "intermediaria", mercado: "Suécia vence", odd: 3.50, resultado: "miss",
              justificativa: "pV=26,4% pelo modelo, mas o must-win é o maior catalisador do futebol. Gyokeres+Isak são o melhor par de atacantes do torneio. Se SWE marcar primeiro, a dinâmica muda: JPN não pode mais sentar no resultado. RESULTADO: Empate 1-1." },
            { cat: "loucura", mercado: "Japão vence a zero", odd: 6.00, resultado: "miss",
              justificativa: "Japão é o time defensivo do torneio: goleou TUN 4-0 com bloqueio organizado. P(JPN vence) × P(SWE=0) ≈ 48,6% × 33,3% ≈ 16,2%. Com Gyokeres e Isak, improvável — mas a capacidade existe. RESULTADO: Empate, e Elanga marcou para a Suécia." },
            { cat: "loucura", mercado: "Gyokeres e Isak ambos marcam", odd: 10.00, resultado: "miss",
              justificativa: "Marcaram no mesmo jogo vs TUN no R1 (5-1). Se a Suécia precisar de uma goleada, os dois vão disputar para inflar o saldo. P≈34%×30%≈10% — exatamente o que as odds refletem. RESULTADO: Nenhum dos dois marcou; Elanga foi o goleador sueco." },
            { cat: "loucura", mercado: "Suécia vence + over 2.5 gols", odd: 6.50, resultado: "miss",
              justificativa: "Se SWE vencer, será em jogo aberto: JPN também contra-ataca com Minamino. Vitória sueca + 3+ gols é o cenário dos must-win abertos. P≈26%×60%≈16% — valor nas odds para apostadores contrários. RESULTADO: Empate 1-1." }
          ]
        },
        {
          hora: "20h",
          mandante: "Tunísia",
          visitante: "Holanda",
          grupo: "F",
          local: "Arrowhead Stadium, Kansas City",
          placar: "1 × 3",
          stats: "Skhiri OG (2', cruzamento Dumfries), Brobbey marca seu 3.º gol no torneio (7'), Mastouri desconta TUN (54') e Van Hecke sela de cabeça. Gakpo ficou em branco — os 3 gols holandeses envolveram OGs e Brobbey. HOL topa Grupo F e vai encarar Marrocos no R32.",
          numeros: [
            { v: "0.801", l: "pV(HOL) — maior probabilidade de vitória dos 6 jogos de hoje" },
            { v: "2.30", l: "λ(HOL) — maior expectativa de gols isolada do dia" },
            { v: "9", l: "Gols sofridos pela Tunísia em 2 partidas (1-5 vs SWE, 0-4 vs JPN)" },
            { v: "52,6%", l: "P(HOL vence a zero) — λ_TUN=0,42, mínima ameaça ofensiva" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Holanda não perde (dupla hipótese)", odd: 1.10, resultado: "hit",
              justificativa: "P(HOL+EMP)=94,8%. TUN desmoralizada: 0-9 em gols (média 4,5 sofridos/jogo), demitiu o técnico. HOL em ótima forma com 7G em 2 jogos. A maior probabilidade de não-derrota dos 6 jogos. RESULTADO: HOL venceu 3-1." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.42, resultado: "hit",
              justificativa: "λ_total=2,72 com HOL projetando 2,30 gols só para si. TUN cedeu 4,5 gols/jogo. Gakpo, Brobbey e Summerville (todos com 2G no torneio) em fina forma. P(≥2 gols)≈75,1%. RESULTADO: 4 gols (1-3)." },
            { cat: "conservadora", mercado: "Holanda vence a zero", odd: 1.90, resultado: "miss",
              justificativa: "TUN não marcou em 2 jogos (9 gols cedidos). λ_TUN=0,42 — a menor expectativa ofensiva dos 6 jogos de hoje. P(HOL vence) × P(TUN=0) ≈ 80,1% × 65,7% ≈ 52,6%: valor claro. RESULTADO: Mastouri marcou para TUN no 54' — clean sheet perdido." },
            { cat: "intermediaria", mercado: "Holanda vence", odd: 1.25, resultado: "hit",
              justificativa: "pV=80,1% — a maior probabilidade de vitória do dia. TUN sem treinador e com defesa furada. HOL quer garantir a liderança do Grupo F se SWE bater JPN — vai a campo com intensidade total. RESULTADO: HOL 3-1 TUN, topo do Grupo F." },
            { cat: "intermediaria", mercado: "Cody Gakpo marca", odd: 2.20, resultado: "miss",
              justificativa: "Gakpo bisou vs SWE (47', 54') e está a 2 gols do recorde holandês em grandes torneios. TUN cedeu 4,5G/jogo — contexto ideal para o atacante do Liverpool alcançar a marca histórica. RESULTADO: Gakpo ficou em branco; gols foram de OG (Skhiri 2'), Brobbey (7') e Van Hecke." },
            { cat: "intermediaria", mercado: "Brian Brobbey marca", odd: 2.30, resultado: "hit",
              justificativa: "Brobbey bisou como sub vs SWE (65', 68') em 25 min de jogo. É o centroavante de impacto de Koeman. Com TUN defensivamente frágil, Brobbey pode ter início mais cedo desta vez. RESULTADO: Brobbey marcou no 7' — 3.º gol no torneio." },
            { cat: "loucura", mercado: "Holanda marca 3 ou mais gols", odd: 2.50, resultado: "hit",
              justificativa: "HOL fez 5 vs SWE que havia feito 5 vs TUN. P(HOL≥3) ≈ 40,5% com λ_HOL=2,30. Gakpo+Brobbey+Summerville podem inflar facilmente vs a pior defesa do dia. Odds com margem de valor. RESULTADO: 3 gols holandeses (OG+Brobbey+Van Hecke)." },
            { cat: "loucura", mercado: "Gakpo e Brobbey ambos marcam", odd: 5.50, resultado: "miss",
              justificativa: "Bisaram no mesmo jogo vs SWE (Gakpo 47', 54'; Brobbey sub 65', 68'). Vs TUN que não sustenta nenhuma pressão, repetir é factível. P≈46%×40%≈18%: valor para o risco. RESULTADO: Gakpo ficou em branco; Brobbey marcou mas sozinho." },
            { cat: "loucura", mercado: "Holanda −2.5 handicap (vence por 3+)", odd: 3.00, resultado: "miss",
              justificativa: "HOL fez 5 vs SWE que havia feito 5 vs TUN — cadeia transitiva sugere goleada também aqui. P(HOL vence por ≥3)≈35%. TUN cedeu 4,5G/jogo. Odd 3,00 com valor histórico dado o contexto de forma. RESULTADO: HOL venceu por 2 (3-1) — faltou 1 gol para o handicap." }
          ]
        },
        {
          hora: "23h",
          mandante: "Paraguai",
          visitante: "Austrália",
          grupo: "D",
          local: "Levi's Stadium, Santa Clara (São Francisco)",
          placar: "0 × 0",
          stats: "0-0 frio e tenso. AUS avança como 2.ª do Grupo D por melhor DG (+0 vs −2); PAR avança como melhor 3.º (3pts). Enciso e Galarza foram contidos pela defesa australiana. Empate eliminou o Paraguai da disputa pela 2.ª vaga — mas os 3pts são suficientes entre os melhores 3.ºs.",
          numeros: [
            { v: "0.507", l: "pM(PAR) — Paraguai leve favorito" },
            { v: "64s", l: "Gol mais rápido da Copa 2026: Galarza vs Turquia no R2" },
            { v: "0", l: "Derrotas da Austrália vs Paraguai no H2H histórico (2V 3E)" },
            { v: "−2", l: "DG do Paraguai — empate NÃO basta (AUS avança com empate)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Paraguai não perde (dupla hipótese)", odd: 1.35, resultado: "hit",
              justificativa: "P(PAR+EMP)=75,5%. PAR tem qualidade sem Almiron: Enciso (Brighton), Pitta e Galarza formam ataque competente. Atenção: empate elimina o Paraguai — mas para apostas a dupla hipótese tem valor. RESULTADO: 0-0, PAR não perdeu." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.45, resultado: "miss",
              justificativa: "λ_total=2,67. PAR PRECISA marcar e vencer — vai ao ataque desde o 1'. AUS em contra-ataque com Irankunda e Volpato. Jogo aberto por necessidade paraguaia. P(≥2)≈74,7%. RESULTADO: 0-0, sem gols." },
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.80, resultado: "miss",
              justificativa: "P(PAR≥1)≈80%, P(AUS≥1)≈65%. PAR atacando para sair do impasse sem Almiron; AUS em contra-golpe com Irankunda rápido. A necessidade paraguaia estimula os dois lados. P≈52%. RESULTADO: 0-0." },
            { cat: "intermediaria", mercado: "Paraguai vence", odd: 2.05, resultado: "miss",
              justificativa: "pM=50,7% — o mais equilibrado dos 3 jogos simultâneos. PAR vai com tudo: Enciso (22 anos, Brighton) como criativo e Pitta no 9. Almiron faz falta mas o grupo tem identidade própria. RESULTADO: Empate 0-0." },
            { cat: "intermediaria", mercado: "Júlio Enciso marca", odd: 3.00, resultado: "miss",
              justificativa: "Com Almiron suspenso, Enciso herda a responsabilidade criativa do Paraguai. É o jogador mais capaz de criar algo do nada — finta, finaliza e tem nível Premier League. Contexto ideal para sua estreia decisiva. RESULTADO: Enciso foi travado pela defesa australiana — 0-0." },
            { cat: "intermediaria", mercado: "Matias Galarza marca", odd: 3.00, resultado: "miss",
              justificativa: "Galarza marcou o gol mais rápido da Copa 2026 (64s vs TUR). Meia de caixa com chegada ofensiva que PAR vai usar para romper bloqueio australiano. Timing cedo e finalizações de meia distância são suas forças. RESULTADO: 0-0." },
            { cat: "loucura", mercado: "Paraguai vence a zero", odd: 5.50, resultado: "miss",
              justificativa: "P(PAR vence) × P(AUS=0) ≈ 50,7% × 35,0% ≈ 17,8%. AUS tem Irankunda e Volpato perigosos no contra. Mas Gill (goleiro) foi sólido no R2 vs TUR. Odds 5,50 com margem para o improvável. RESULTADO: 0-0, PAR não venceu." },
            { cat: "loucura", mercado: "Austrália vence", odd: 4.00, resultado: "miss",
              justificativa: "pV=24,5% e H2H histórico: AUS NUNCA perdeu para o Paraguai (2V 3E). AUS avança até empatando — portanto pode jogar recuada e esperar o erro paraguaio. Irankunda e Volpato em contra-golpe podem decidir. RESULTADO: Empate 0-0." },
            { cat: "loucura", mercado: "Galarza gol no 1T", odd: 7.00, resultado: "miss",
              justificativa: "Galarza marcou em 64 segundos no R2 vs TUR. PAR vai sair para o ataque desde o apito — se o meia de caixa chegou em 64s no R2, pode chegar cedo no R3 também. P≈15%: odd 7,00 tem valor narrativo. RESULTADO: 0-0 — nenhum gol no jogo inteiro." }
          ]
        },
        {
          hora: "23h",
          mandante: "Turquia",
          visitante: "EUA",
          grupo: "D",
          local: "SoFi Stadium, Los Angeles (Inglewood)",
          placar: "3 × 2",
          stats: "Drama em Los Angeles! Trusty (EUA 3'), Guler empata (TUR 10'), Kokcu vira (TUR 31'), Berhalter empata (EUA 49'), Ayhan decide no 98' (TUR). Yildiz chutou na trave no 72' mas sem gol/assistência. EUA vence Grupo D; Turquia encerra dignamente.",
          numeros: [
            { v: "0", l: "Gols da Turquia em 2 jogos de Copa (40+ finalizações no total)" },
            { v: "0.457", l: "pV(EUA) — favorita mesmo rotacionando o time" },
            { v: "4", l: "Jogadores da EUA com cartão amarelo (Adams, Balogun, Robinson, Richards)" },
            { v: "74,1%", l: "P(TUR marca) — com EUA rodando, hora da Turquia converter as chances" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "EUA não perde (dupla hipótese)", odd: 1.45, resultado: "miss",
              justificativa: "P(EUA+EMP)=69,4%. EUA rota mas tem bench de qualidade (Reyna, Ferreira, Sargent). TUR marcou 0 gols em 2 jogos vs adversários de nível inferior. Americanos no SoFi de Los Angeles com enorme torcida. RESULTADO: TUR venceu 3-2 com gol de Ayhan no 98'." },
            { cat: "conservadora", mercado: "Turquia finalmente marca", odd: 1.60, resultado: "hit",
              justificativa: "P(TUR≥1)≈74,1%. TUR acumulou 40+ chutes em 2 jogos sem converter uma vez. Com EUA rodando reservas, os espaços serão maiores. Yildiz (Juventus) e Calhanoglu (Inter) têm qualidade para destravar. RESULTADO: TUR marcou 3 gols (Guler 10', Kokcu 31', Ayhan 98')." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.25, resultado: "hit",
              justificativa: "λ_total=3,04 — a maior expectativa de gols dos 3 jogos desta rodada. TUR atacará sem pressão eliminatória e EUA-reservas oferecem menos solidez defensiva. P(≥2 gols)≈80,7%. RESULTADO: 5 gols (3-2)." },
            { cat: "intermediaria", mercado: "EUA vence", odd: 2.20, resultado: "miss",
              justificativa: "pV=45,7% mesmo rodando — maior do que TUR (30,6%). EUA tem profundidade real: Reyna, Brandon Vazquez, Sargent. TUR 0 gols em 2 jogos não inspira confiança ofensiva, mesmo vs reservas. RESULTADO: TUR venceu 3-2 no último lance." },
            { cat: "intermediaria", mercado: "Kenan Yildiz marca ou dá assistência", odd: 2.80, resultado: "miss",
              justificativa: "Yildiz, 21 anos (12G+12A pelo Juventus na Serie A 24-25), ainda sem decidir na Copa. Com EUA rodando e déficit defensivo maior, o maior talento individual da Turquia tem espaço para finalmente mostrar seu nível. RESULTADO: Yildiz chutou na trave no 72' mas não marcou nem assistiu — Guler, Kokcu e Ayhan foram os goleadores." },
            { cat: "intermediaria", mercado: "Turquia vence", odd: 3.20, resultado: "hit",
              justificativa: "pM=30,6%. EUA rota para proteger 4 jogadores do segundo amarelo. Com reservas americanos em campo, TUR tem a melhor chance do torneio para sair vitorioso e encerrar a Copa com dignidade. RESULTADO: TUR 3-2 no drama total — Ayhan no 98' decidiu." },
            { cat: "loucura", mercado: "Gio Reyna marca", odd: 3.50, resultado: "miss",
              justificativa: "Reyna (Nottingham Forest) entrou vs PAR e criou perigo. Com Pulisic ainda em dúvida pós-lesão no calf e EUA poupando o time titular, Reyna pode ter sua chance de jogo completo para mostrar valor ao mata-mata. RESULTADO: Goleadores dos EUA foram Trusty (3') e Berhalter (49') — Reyna não marcou." },
            { cat: "loucura", mercado: "Turquia vence + ambas marcam", odd: 4.80, resultado: "hit",
              justificativa: "Se TUR vence, foi em jogo aberto com EUA-reservas também marcando. P(TUR vence) × P(EUA≥1) ≈ 30,6% × 81,5% ≈ 24,9%. Odd 4,80 acima do valor justo — cenário possível com o elenco B americano em campo. RESULTADO: TUR 3-2 EUA — ambas marcaram, odd 4,80 entregou!" },
            { cat: "loucura", mercado: "Over 3.5 gols", odd: 3.00, resultado: "hit",
              justificativa: "λ_total=3,04 — o jogo com mais gols esperados desta rodada. TUR com 40+ finalizações represadas e EUA-reservas menos sólidos defensivamente. P(≥4 gols)≈36,3%: valor nas odds 3,00 para o jogo mais aberto. RESULTADO: 5 gols (3-2) — o jogo mais goleado do dia." }
          ]
        }
      ]
    },
    {
      data: "2026-06-26",
      titulo: "Dia 16 — R3 Grupos G, H e I: Haaland vs Mbappé, Espanha testa Uruguai e batalha Egito–Irã",
      contexto: "R3 de três grupos em simultâneo. Grupo I (16h): FRA (6pts, GD+5) vs NOR (6pts, GD+4) — França avança com empate, Noruega PRECISA vencer; SEN vs IRQ mortos. Grupo H (21h): URU (2pts) precisa de ao menos ponto vs ESP (4pts já classificada); CPV (2pts) vs SAU (1pt) — vitória CPV garante vaga histórica na estreia. Grupo G (00h): EGI (4pts) avança com empate vs IRÃ (2pts, que precisa vencer); BEL (2pts) PRECISA vencer NZL (1pt) e torcer por tropeço egípcio.",
      jogos: [
        {
          hora: "16h",
          mandante: "Noruega",
          visitante: "França",
          grupo: "I",
          local: "Gillette Stadium, Foxborough (Boston)",
          placar: null,
          stats: "FRA (6pts, GD+5) avança com empate — pode jogar para não perder. NOR (6pts, GD+4) PRECISA VENCER para ser 1.ª do grupo. Haaland (4G em 2 jogos) vs Mbappé (4G em 2 jogos) — os artilheiros partilham a liderança. Árbitro: Michael Oliver (ENG). Ryerson (NOR, lesionado) é dúvida; Saliba (FRA) ausente no treino. H2H: FRA domina (7V 4D 4E em 15 jogos históricos); última vitória norueguesa em grande torneio: Euro 1987.",
          numeros: [
            { v: "0.194", l: "pM(NOR) — Noruega azarão para vencer o jogo" },
            { v: "0.569", l: "pV(FRA) — França ampla favorita, avança com empate" },
            { v: "4G", l: "Haaland em 2 jogos — 2 vs IRQ + 2 vs SEN" },
            { v: "4G", l: "Mbappé em 2 jogos — artilheiros empatados na Copa" },
            { v: "1.72", l: "λ(FRA) — expectativa de gols da França" },
            { v: "0.89", l: "λ(NOR) — expectativa de gols da Noruega" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "França não perde (dupla hipótese)", odd: 1.28, resultado: null,
              justificativa: "P(FRA+EMP)=80,7%. França avança com empate e vai jogar compacta. H2H: 7V 4D 4E em 15 jogos. NOR precisa vencer mas não tem como forçar FRA a abrir o jogo. Ryerson lesionado enfraquece o lado direito norueguês." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: null,
              justificativa: "λ_total=2,61. NOR vai ao ataque total para 90 min (só a vitória serve). Mbappé e companhia em contra-golpe com espaços. P(≥2 gols)≈78,5% com médias combinadas." },
            { cat: "conservadora", mercado: "França marca", odd: 1.22, resultado: null,
              justificativa: "P(FRA≥1)=82,1% com λ_FRA=1,72. Mbappé (4G em 2 jogos) é o melhor jogador em forma do torneio. NOR abre linha para pressionar e cede os espaços que Mbappé explora nas costas da linha." },
            { cat: "intermediaria", mercado: "França vence", odd: 1.75, resultado: null,
              justificativa: "pV=56,9%. FRA é qualitativamente superior — GD +5 vs +4 mostram eficiência. Oliver (árbitro) é rigoroso; NOR vai pressionar muito e pode abrir espaços. Sem Saliba, o centro de zaga franceS com Lacroix resolve." },
            { cat: "intermediaria", mercado: "Kylian Mbappé marca", odd: 2.10, resultado: null,
              justificativa: "Mbappé com 4G em 2 jogos, mais lucrativo que nunca. Linha norueguesa precisa avançar por obrigação — os espaços nas costas são Mbappé's playground. λ_FRA=1,72, projetando alta participação do capitão." },
            { cat: "intermediaria", mercado: "Erling Haaland marca", odd: 2.40, resultado: null,
              justificativa: "Haaland com 4G em 2 jogos (2 vs IRQ, 2 vs SEN). NOR vai ao ataque total — Haaland receberá serviços constantes de Odegaard. Defesa francesa sem Saliba (lesionado); Lacroix é menos sólido na marcação de alto." },
            { cat: "loucura", mercado: "Noruega vence", odd: 4.50, resultado: null,
              justificativa: "pM=19,4% — fair odd ~5,15. Motivação máxima: NOR quer ser 1.ª do grupo. Haaland em forma histórica. FRA sem Saliba pode sangrar num jogo aéreo/físico. P≈19% vale a odd com margem de valor." },
            { cat: "loucura", mercado: "Haaland e Mbappé ambos marcam", odd: 5.00, resultado: null,
              justificativa: "Os dois artilheiros da Copa em campo. P(Haaland≥1)≈55% × P(Mbappé≥1)≈65% ≈ 36% pela independência. Odd 5,00 oferece valor acima do fair de 2,78 — o confronto narrativo do torneio." },
            { cat: "loucura", mercado: "Noruega vence + over 2.5 gols", odd: 7.00, resultado: null,
              justificativa: "Se NOR vencer, o jogo foi aberto: FRA também marcará em contra e NOR precisará de 2+. P(NOR vence)×P(≥3 gols | NOR vence)≈19%×65%≈12%. Odd 7,00 com margem razoável." }
          ]
        },
        {
          hora: "16h",
          mandante: "Senegal",
          visitante: "Iraque",
          grupo: "I",
          local: "BMO Field, Toronto",
          placar: null,
          stats: "Ambas eliminadas (0pts). Jogo de orgulho e despedida. SEN perdeu 1-3 vs FRA e 2-3 vs NOR mas mostrou luta. IRQ perdeu 0-3 vs FRA e 1-4 vs NOR. Mané e Sarr são as referências ofensivas do Senegal; IRQ não marcou em jogo nenhum.",
          numeros: [
            { v: "0.664", l: "pM(SEN) — Senegal favorita mesmo sem nada a perder" },
            { v: "1.90", l: "λ(SEN) — maior expectativa de gols como mandante" },
            { v: "0.68", l: "λ(IRQ) — Iraque com expectativa ofensiva mínima" },
            { v: "0", l: "Gols do Iraque em 2 partidas na Copa 2026" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Senegal vence", odd: 1.50, resultado: null,
              justificativa: "pM=66,4%. SEN tem mais qualidade em todos os setores. IRQ não marcou na Copa (0-3 vs FRA, 1-4 vs NOR — o único gol foi no 4-1 vs NOR). Sem pressão competitiva, SEN pode soltar o jogo." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.45, resultado: null,
              justificativa: "λ_total=2,58. Sem nada a perder, ambas as equipes vão atacar — especialmente IRQ que quer sair sem vergonha. SEN com Mané e Sarr tende a criar muitas oportunidades. P(≥2 gols)≈77%." },
            { cat: "conservadora", mercado: "Senegal marca no 1T", odd: 1.60, resultado: null,
              justificativa: "P(SEN≥1 no 1T)≈60% com λ_SEN=1,90. IRQ vai pressionar mas tem mais lacunas defensivas. Mané e Sarr perigosos desde o início — SEN vai tentar abrir rápido para garantir o resultado." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 1.85, resultado: null,
              justificativa: "P(SEN≥1)≈85%, P(IRQ≥1)≈50%. IRQ marcou 1 gol na Copa (vs NOR), tem capacidade. Sem pressão = defesas menos organizadas. P(ambas marcam)≈43%." },
            { cat: "intermediaria", mercado: "Senegal vence por 2+", odd: 2.20, resultado: null,
              justificativa: "SEN superior em qualidade. IRQ sem confiança defensiva após tomar 7 gols em 2 jogos. P(SEN vence por ≥2) ≈ 40%+ com a diferença técnica e λ_SEN=1,90 favorecendo goleada parcial." },
            { cat: "intermediaria", mercado: "Sadio Mané marca", odd: 2.70, resultado: null,
              justificativa: "Capitão senegalês com moral para encerrar a Copa com gol. Vs IRQ — a seleção mais permissiva do grupo — Mané tem os espaços que precisa para finalizar. Artilheiro histórico do Senegal." },
            { cat: "loucura", mercado: "Over 3.5 gols", odd: 2.80, resultado: null,
              justificativa: "λ_total=2,58 mas sem pressão = jogo aberto. IRQ vai atacar para honrar a Copa; SEN não vai apenas sentar no resultado. P(≥4 gols)≈33% — acima do mercado na maioria das casas." },
            { cat: "loucura", mercado: "Senegal vence a zero", odd: 3.50, resultado: null,
              justificativa: "P(SEN vence) × P(IRQ=0) ≈ 66,4% × 50,7% ≈ 33,6%. IRQ marcou 1 gol em 2 jogos. Odd 3,50 próxima ao fair de 2,97 — ligeiro valor." },
            { cat: "loucura", mercado: "Ismaila Sarr marca", odd: 4.50, resultado: null,
              justificativa: "Sarr é o outro atacante perigoso do Senegal, com velocidade e capacidade de finalização. IRQ com defesa porosa (7G cedidos). Num jogo sem pressão, Sarr pode ter sua noite. Fair P≈22%." }
          ]
        },
        {
          hora: "21h",
          mandante: "Cabo Verde",
          visitante: "Arábia Saudita",
          grupo: "H",
          local: "NRG Stadium, Houston",
          placar: null,
          stats: "CPV (2pts) avança com empate ou vitória — 1.ª Copa da história. SAU (1pt, GD −4) PRECISA vencer e torcer. CPV fez história: 0-0 vs ESP e 2-2 vs URU (Varela e Pina — primeiros gols da história cpv em Copas). SAU goleada 0-4 pela Espanha e empate vs Uruguai. SAU vai ao ataque total — abre espaço para o contra-golpe cpv.",
          numeros: [
            { v: "0.434", l: "pM(CPV) — Cabo Verde ligeiramente favorita" },
            { v: "0.324", l: "pV(SAU) — Arábia Saudita precisa vencer mas é azarão" },
            { v: "1.62", l: "λ(CPV) — expectativa de gols em casa" },
            { v: "1.37", l: "λ(SAU) — expectativa ofensiva saudita" },
            { v: "−4", l: "GD da Arábia Saudita — goleada 0-4 pela Espanha no R1" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Cabo Verde não perde (dupla hipótese)", odd: 1.35, resultado: null,
              justificativa: "P(CPV+EMP)=67,5%. CPV precisa só de empate para avançar — vai defender e contra-atacar. SAU desesperada mas com a pior GD do grupo (−4). Estrutura defensiva cpv foi sólida vs ESP e URU." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, resultado: null,
              justificativa: "λ_total=2,99. SAU vai ao ataque total (único caminho). CPV é eficiente no contra-golpe (2-2 vs URU já comprova). P(≥2 gols)≈78,2%." },
            { cat: "conservadora", mercado: "Cabo Verde marca", odd: 1.45, resultado: null,
              justificativa: "P(CPV≥1)≈79,8% com λ_CPV=1,62. Varela e Pina já marcaram na Copa. SAU abrindo o jogo para atacar cede espaços nas costas — ideal para os contra-ataques cpv." },
            { cat: "intermediaria", mercado: "Cabo Verde vence", odd: 2.30, resultado: null,
              justificativa: "pM=43,4% — maior que pV(SAU)=32,4%. CPV com confiança histórica após segurar ESP e empatar vs URU. SAU desesperada e com GD −4 complicando qualquer cenário que não seja a vitória." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 1.90, resultado: null,
              justificativa: "P(CPV≥1)≈80%, P(SAU≥1)≈74,8%. SAU vai ao ataque; CPV em contra. A dinâmica que CPV já mostrou vs URU (2-2) tende a se repetir. P(ambas marcam)≈59,8%." },
            { cat: "intermediaria", mercado: "Hélio Varela marca", odd: 3.00, resultado: null,
              justificativa: "Varela marcou o 1.º gol da história de Cabo Verde em Copas. Atua como meia-atacante criativo que pode surgir na segunda linha. SAU abrindo o jogo = mais espaço para Varela surgir e finalizar." },
            { cat: "loucura", mercado: "Cabo Verde vence + SAU marca", odd: 4.50, resultado: null,
              justificativa: "CPV pode vencer em jogo aberto onde SAU também marca — como o 2-2 vs URU mostrou. P(CPV vence) × P(SAU≥1) ≈ 43,4% × 74,8% ≈ 32,5%. Odd 4,50 oferece valor sobre o mercado." },
            { cat: "loucura", mercado: "Arábia Saudita vence", odd: 3.00, resultado: null,
              justificativa: "pV=32,4% — fair odd ~3,09. SAU pode causar a surpresa: motivação máxima (must-win), λ_SAU=1,37 sugere potencial ofensivo. Odd 3,00 praticamente no justo — com margem pequena de valor." },
            { cat: "loucura", mercado: "Kevin Pina marca", odd: 5.00, resultado: null,
              justificativa: "Pina marcou o gol do empate 2-2 vs URU. Extremo de ritmo com CPV que usa a largura para atacar. SAU vai fazer pressing alto e ceder espaços nas costas para as pontas cpv. Odd 5,00 para um goleador já ativo no torneio." }
          ]
        },
        {
          hora: "21h",
          mandante: "Uruguai",
          visitante: "Espanha",
          grupo: "H",
          local: "Estadio Akron, Guadalajara",
          placar: null,
          stats: "ESP (4pts) busca liderança do Grupo H com vitória; URU (2pts) PRECISA de ao menos empate para se classificar. Pedri suspenso (2 amarelos em 2 jogos) — grande baixa no meio-campo espanhol. URU sem R. Araujo (panturrilha) e Arrascaeta (panturrilha) — dupla baixa defensiva e criativa. Árbitro: Ismael Elfath (EUA). Darwin Nuñez esperado como titular. Yamal e N. Williams para ESP.",
          numeros: [
            { v: "0.756", l: "pV(ESP) — Espanha grande favorita mesmo com Pedri suspenso" },
            { v: "0.073", l: "pM(URU) — Uruguai azarão mas com tudo a perder" },
            { v: "2.14", l: "λ(ESP) — expectativa ofensiva espanhola" },
            { v: "0.50", l: "λ(URU) — expectativa ofensiva uruguaia muito baixa" },
            { v: "Pedri suspenso", l: "Principal baixa — 2 amarelos em 2 jogos" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Espanha vence", odd: 1.40, resultado: null,
              justificativa: "pV=75,6%. ESP com 4pts, motivada para vencer o grupo. Sem Pedri, Rodri assume controle total do meio. URU sem Araujo e Arrascaeta tem lacuna defensiva e criativa. λ_ESP=2,14 projeta dominância." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.35, resultado: null,
              justificativa: "λ_total=2,64. ESP com histórico de goleadas (4-0 vs SAU). Yamal e N. Williams perigosíssimos pelas pontas. URU vai ao ataque por necessidade. P(≥2 gols)≈79,7%." },
            { cat: "conservadora", mercado: "Espanha marca no 1T", odd: 1.50, resultado: null,
              justificativa: "λ_ESP=2,14 — projeção de 1 gol a cada 28 minutos. ESP ativa desde o início com Yamal e Williams. URU sem Araujo na defesa = mais vulnerável a infiltrações pelas pontas espanholas." },
            { cat: "intermediaria", mercado: "Espanha vence por 2+", odd: 2.10, resultado: null,
              justificativa: "P(ESP vence por ≥2) ≈ 44%+. URU sem as principais defesas (Araujo) e criatividade (Arrascaeta). Rodri + Olmo + Yamal podem desmontar a linha uruguaia que já está pressionada." },
            { cat: "intermediaria", mercado: "Lamine Yamal marca ou dá assistência", odd: 2.20, resultado: null,
              justificativa: "Yamal (18 anos, Barcelona) é o principal criador espanhol com Pedri fora. Joga pela direita com liberdade de cortar e finalizar. URU sem lateral direito habitual de qualidade após baixas — espaço ideal para Yamal." },
            { cat: "intermediaria", mercado: "Darwin Nuñez marca", odd: 3.20, resultado: null,
              justificativa: "Nuñez esperado como titular (Liverpool, 24 anos). URU precisa marcar para ter chance. Darwin é o mais capaz de criar algo do nada com seu poder físico — contra ESP, qualquer chance pode virar gol no contra." },
            { cat: "loucura", mercado: "Nico Williams marca", odd: 4.50, resultado: null,
              justificativa: "Williams (Athletic Bilbao, 22 anos) começa a aparecer mais nessa Copa. Como ESP vai atacar, Williams terá mais espaço pelo lado esquerdo. Primeiro gol no torneio pode vir aqui." },
            { cat: "loucura", mercado: "Federic Valverde marca", odd: 5.50, resultado: null,
              justificativa: "Valverde (Real Madrid, 73 caps) é o motor do meio-campo uruguaio. Com URU precisando de gols, Valverde vai chegar mais à frente. Especialista em gols de média distância com finalização potente." },
            { cat: "loucura", mercado: "Espanha −1.5 handicap (vence por 2+) + Yamal/Williams decisivos", odd: 3.50, resultado: null,
              justificativa: "ESP vai inflar o placar com a dupla de pontas. λ_ESP=2,14 e URU defensivamente vulnerável. P(ESP vence por 2+)≈44%, com Yamal/Williams como protagonistas. Odd 3,50 oferece valor sobre o mercado." }
          ]
        },
        {
          hora: "00h",
          mandante: "Egito",
          visitante: "Irã",
          grupo: "G",
          local: "Lumen Field, Seattle",
          placar: null,
          stats: "EGI (4pts, GD+2) avança com empate. IRÃ (2pts) PRECISA VENCER. Salah com 68 gols pela seleção — um gol seria recorde histórico de 69. Ele participou (gol ou assistência) em todas as suas 4 partidas de Copa. EGI: 1-1 vs BEL + 3-1 vs NZL. IRÃ: 0-0 vs BEL + 2-2 vs NZL. IRÃ surpreendentemente ligeiramente favorito pelo Elo (pV=39,5% vs pM=35,4%).",
          numeros: [
            { v: "0.354", l: "pM(EGI) — Egito ligeiramente inferior pelo Elo" },
            { v: "0.395", l: "pV(IRÃ) — Irã favorito pelo modelo apesar de estar em 2.º" },
            { v: "1.37", l: "λ(EGI) — expectativa de gols egípcia" },
            { v: "1.46", l: "λ(IRÃ) — expectativa de gols iraniana" },
            { v: "68", l: "Gols de Salah pela seleção egípcia — 69 seria o recorde histórico" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Egito não perde (dupla hipótese)", odd: 1.55, resultado: null,
              justificativa: "P(EGI+EMP)=60,5%. EGI avança com empate — vai defender e jogar no contra. IRÃ precisa atacar, abre espaço. Salah no contra-golpe é uma ameaça constante mesmo em formação defensiva." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, resultado: null,
              justificativa: "λ_total=2,83. IRÃ vai ao ataque total (precisa vencer). EGI em contra-golpe eficiente (3-1 vs NZL). P(≥2 gols)≈77,4%." },
            { cat: "conservadora", mercado: "Mohamed Salah marca", odd: 2.00, resultado: null,
              justificativa: "Salah participou (G ou A) em todos os 4 jogos de Copa na carreira. Com 68 gols para EGI, um gol aqui = recorde histórico. IRÃ vai pressionar alto, abrindo espaço para os contra-golpes de Salah." },
            { cat: "intermediaria", mercado: "Irã vence", odd: 2.55, resultado: null,
              justificativa: "pV=39,5% — Elo sugere que IRÃ é levemente superior (maior que pM=35,4%!). Must-win = motivação máxima. λ_IRÃ=1,46 > λ_EGI=1,37. IRÃ tem capacidade para vencer." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 1.90, resultado: null,
              justificativa: "P(EGI≥1)≈74,6%, P(IRÃ≥1)≈76,9%. IRÃ atacará por 90 min; EGI em contra. Jogo aberto garantido com λ_total=2,83. P(ambas marcam)≈57,3%." },
            { cat: "intermediaria", mercado: "Egito vence", odd: 2.90, resultado: null,
              justificativa: "pM=35,4%. Se EGI marca cedo, IRÃ vai ao tudo-ou-nada e cede ainda mais espaço — Salah e companhia em contra-golpe. Vitória egípcia possível mesmo não sendo o favorito do modelo." },
            { cat: "loucura", mercado: "Salah bissa", odd: 6.50, resultado: null,
              justificativa: "Salah em modo record-chasing. Com IRÃ forçado a pressionar e EGI em contra, as oportunidades para Salah finalizar se multiplicam. P(Salah marca 2+) ≈ 15% com λ_EGI=1,37 concentrado no capitão." },
            { cat: "loucura", mercado: "Irã vence + ambas marcam", odd: 4.50, resultado: null,
              justificativa: "P(IRÃ vence) × P(EGI≥1) ≈ 39,5% × 74,6% ≈ 29,5%. Se IRÃ vencer, provavelmente em jogo aberto com EGI também marcando. Odd 4,50 supera o fair de 3,39 — valor claro." },
            { cat: "loucura", mercado: "Over 3.5 gols", odd: 3.00, resultado: null,
              justificativa: "λ_total=2,83. P(≥4 gols)≈38,2%. IRÃ pressionando para o must-win e EGI em contra-golpe = jogo com troca de golpes. Odd 3,00 com valor para o apostador que acredita no drama de Seattle." }
          ]
        },
        {
          hora: "00h",
          mandante: "Nova Zelândia",
          visitante: "Bélgica",
          grupo: "G",
          local: "BC Place, Vancouver",
          placar: null,
          stats: "BEL (2pts) PRECISA VENCER + torcer por derrota egípcia para avançar. NZL (1pt) tecnicamente viva mas na prática precisa de milagre. BEL sem vitória no torneio (1-1 vs EGI, 0-0 vs IRÃ) — campanha frustrante. De Bruyne (34 anos, 37G/119 caps) é o motor criativo. Decisão entre Lukaku (33) e De Ketelaere no 9. NZL: perdeu 1-3 vs EGI e empatou 2-2 vs IRÃ.",
          numeros: [
            { v: "0.823", l: "pV(BEL) — Bélgica ampla favorita (82,3%)" },
            { v: "2.39", l: "λ(BEL) — expectativa de gols belga" },
            { v: "0.38", l: "λ(NZL) — Nova Zelândia muito limitada ofensivamente" },
            { v: "0", l: "Vitórias da Bélgica em 2 jogos na Copa 2026" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Bélgica vence a zero", odd: 1.85, resultado: null,
              justificativa: "P(BEL vence) × P(NZL=0) ≈ 82,3% × 68,4% ≈ 56,3%. λ_NZL=0,38 — a menor expectativa ofensiva de todos os jogos de hoje. NZL marcou apenas 2 gols no torneio (vs IRÃ). Odd 1,85 com valor sobre o fair ~1,78." },
            { cat: "conservadora", mercado: "Bélgica marca no 1T", odd: 1.45, resultado: null,
              justificativa: "P(BEL≥1 no 1T)≈70%. BEL precisa de vitória clara para convencer o critério de 3.º — vai ao ataque desde o início. λ_BEL=2,39 é a maior expectativa de todos os jogos desta rodada." },
            { cat: "conservadora", mercado: "Over 2.5 gols", odd: 1.70, resultado: null,
              justificativa: "λ_total=2,77. BEL pressionada pelo must-win vai atacar em cheio; NZL não consegue fechar o espaço por 90 min. P(≥3 gols)≈53,3%." },
            { cat: "intermediaria", mercado: "Bélgica −1.5 handicap (vence por 2+)", odd: 1.90, resultado: null,
              justificativa: "P(BEL vence por ≥2) ≈ 55%+. NZL perdeu 1-3 vs EGI — e EGI tem λ=2,08 vs λ_BEL=2,39. BEL maior e mais técnica. De Bruyne + eventual Lukaku/CDK = ataque pluriponteiro." },
            { cat: "intermediaria", mercado: "Kevin De Bruyne marca ou dá assistência", odd: 2.00, resultado: null,
              justificativa: "De Bruyne (34 anos) pode estar jogando sua última Copa. 37G em 119 caps para a Bélgica. Vs NZL — a mais permeável — é a chance de brilhar que a campanha não ofereceu ainda." },
            { cat: "intermediaria", mercado: "Over 3.5 gols", odd: 2.80, resultado: null,
              justificativa: "BEL reprimida após 2 empates vai explodir. λ_BEL=2,39 + P(NZL≥1)≈32%. P(≥4 gols)≈40,5% — valor nas odds." },
            { cat: "loucura", mercado: "Bélgica vence + over 3.5 gols", odd: 3.50, resultado: null,
              justificativa: "P(BEL vence) × P(≥4 gols | BEL vence) ≈ 82% × 45% ≈ 37%. BEL com frustração acumulada de 2 empates vai ao ataque máximo vs a pior equipe do grupo. Odd 3,50 com valor." },
            { cat: "loucura", mercado: "Charles De Ketelaere marca", odd: 5.50, resultado: null,
              justificativa: "CDK (Atalanta) pode começar no lugar de Lukaku. Técnico, movimenta-se melhor em espaço curto. NZL com linha baixa dá espaço entre as linhas para CDK surgir e finalizar. Estreia de goleador tardio." },
            { cat: "loucura", mercado: "Bélgica marca 4+", odd: 5.00, resultado: null,
              justificativa: "P(BEL≥4) ≈ 22% com λ_BEL=2,39. BEL vai ao ataque sem freio; NZL perdeu 1-3 vs EGI que tem λ=2,08 < λ_BEL=2,39. Goleada belga é o cenário ideal para a classificação — e a equipe vai tentar forçá-la." }
          ]
        }
      ]
    }
  ]
};
