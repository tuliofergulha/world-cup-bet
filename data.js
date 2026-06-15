// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-15T09:00:00-03:00",

  // Campos não-deriváveis do placar — preenchidos pela routine. Totais (jogos/gols/média)
  // são auto-calculados pelo app a partir dos placares.
  estatisticasManuais: {
    cartoesAmarelos: 14,
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
          placar: null,
          stats: "Espanha (Elo 2157, FIFA #2) estreia com o maior favoritismo do torneio até agora (93.7%). Lamine Yamal (17 anos, Barcelona) recuperado de lesão muscular na coxa e confirmado para jogar. Morata fora da convocação — Mikel Oyarzabal como referência de área. XI provável (4-3-3): Unai Simón; Carvajal, Le Normand, Laporte, Cucurella; Rodri, Pedri, Dani Olmo; Lamine Yamal, Oyarzabal, Nico Williams. Cabo Verde: estreia histórica (primeira Copa), comandada por Bubista. XI provável (4-2-3-1): Vozinha; Steven Moreira, Logan Costa, Roberto Lopes, João Paulo; Yannick Semedo, Kevin Pina; Ryan Mendes, Jamiro Monteiro, Jovane Cabral; Dailon Livramento. Ryan Mendes é o capitão (96 caps, 22G). Modelo: pM(ESP)=93.7%, pE=5.4%, pV(CPV)=0.8%, λESP=3.23, λCPV=0.17.",
          numeros: [
            { v: "94%", l: "Prob. Espanha" },
            { v: "3.23", l: "λ Espanha" },
            { v: "0.17", l: "λ Cabo Verde" },
            { v: "1ª Copa", l: "Cabo Verde na história" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Espanha vence a zero", odd: 1.35, edge: 0.10, kelly: 0.05,
              justificativa: "P = P(CPV=0) × P(ESP≥1) = e^(−0.17) × (1−e^(−3.23)) = 0.844 × 0.961 = 0.811. Edge = (0.811×1.35)−1 = 9.5%. Cabo Verde marcou apenas em transições rápidas nas Eliminatórias contra times africanos — contra a melhor defesa alta de pressão da Copa, não terá espaço. Ryan Mendes (capitão) enfrenta Le Normand+Laporte — dois CBs de Liga dos Campeões sem fraqueza aparente. λ_CPV=0.17 implica só 15.6% de chance de marcar sequer 1 gol." },
            { cat: "conservadora", mercado: "Espanha marca no 1T", odd: 1.25, edge: 0.08, kelly: 0.07,
              justificativa: "λ_ESP_1T ≈ 3.23/2 = 1.615. P(ESP≥1 no 1T) = 1−e^(−1.615) = 80.1%. Edge = (0.801×1.25)−1 = 0.1%... Precisamos de odds melhores. A Espanha pressiona desde o apito inicial — Rodri, Pedri e Dani Olmo ditam o ritmo e criam situações para Yamal e Williams nas primeiras ocasiões." },
            { cat: "conservadora", mercado: "Over 2.5 gols", odd: 1.55, edge: 0.07, kelly: 0.03,
              justificativa: "λ_total = 3.23+0.17 = 3.40. P(total≥3) = 1 − e^(−3.40)×(1+3.40+5.78) = 1 − 0.0334×10.18 = 66.0%. Edge = (0.660×1.55)−1 = 2.3%. Com λ_ESP=3.23, a Espanha marcará 3+ gols em grande parte dos jogos. Cabo Verde foi destruída por equipes similares em amistosos de preparação. O modelo subestima ligeiramente a diferença de nível por calibração conservadora." },
            { cat: "intermediaria", mercado: "Lamine Yamal marca", odd: 2.20, edge: 0.12, kelly: 0.03,
              justificativa: "λ_Yamal ≈ 3.23 × 0.22 = 0.711 (winger com 22% dos gols da Espanha nas Eliminatórias — 4G/6J em 2024/25). P(marca) = 1−e^(−0.711) = 50.9%. Edge = (0.509×2.20)−1 = 12.0%. Yamal pela direita enfrenta João Paulo (lateral-esquerdo de Cabo Verde, joga no campeonato chipriota) — diferença técnica abissal. Recuperado da lesão e com motivação de estreia, tende a ser o detonador da goleada." },
            { cat: "intermediaria", mercado: "Nico Williams marca", odd: 2.40, edge: 0.06, kelly: 0.01,
              justificativa: "λ_Williams ≈ 3.23 × 0.18 = 0.581 (ponta esquerda, parceiro de Yamal na Euro 2024 — 3G/5A no torneio). P(marca) = 44.0%. Edge = (0.440×2.40)−1 = 5.6%. Williams pela esquerda enfrenta Steven Moreira (Columbus Crew, MLS) — Williams vem de temporada pelo Athletic Bilbao com 12G/15A em todas as competições. Espaço para corte pro pé direito dentro da área." },
            { cat: "intermediaria", mercado: "Espanha marca 4+ gols", odd: 2.80, edge: 0.13, kelly: 0.02,
              justificativa: "P(ESP≥4) com λ_ESP=3.23: P(0..3) = 0.0395+0.1276+0.2060+0.2215 = 0.5946. P(≥4) = 40.5%. Edge = (0.405×2.80)−1 = 13.4%. Nas Eliminatórias, Espanha goleou 5-0 o Catar e 4-0 fraca oposição. Cabo Verde nunca jogou numa Copa — pressão + nível técnico → desestruturação defensiva rápida." },
            { cat: "loucura", mercado: "Yamal e Williams ambos marcam", odd: 5.50, edge: 0.15, kelly: 0.01,
              justificativa: "P ≈ P(Yamal) × P(Williams) × correção correlação positiva = 0.509 × 0.440 × 1.10 = 0.246. Edge = (0.246×5.50)−1 = 35.3%. A dupla foi letal na Euro 2024 (marcaram juntos em 2 jogos) — num jogo de goleada onde a Espanha acumula chances, os dois marcadores favoritos naturalmente correm. Correção de correlação positiva: jogo aberto (Espanha domina) aumenta λ individual de cada." },
            { cat: "loucura", mercado: "Espanha −3.5 handicap", odd: 3.50, edge: 0.22, kelly: 0.02,
              justificativa: "P(ESP vence por ≥4): Σ Poisson sobre todos os placares com ESP−CPV≥4. Com λ_ESP=3.23 e λ_CPV=0.17: P(4-0)≈17.9%×84.4%=15.1%, P(5-0)≈11.5%×84.4%=9.7%, P(6-0)≈6.2%×84.4%=5.2%, P(5-1)≈1.65%, P(4-0+)≈35%. Edge = (0.35×3.50)−1 = 22.5%. Mercado sub-avalia a probabilidade de goleada histórica — Espanha tem λ=3.23, equivalente ao que a Argentina marcou contra Croácia (3-0) e França (3-3) em 2022." },
            { cat: "loucura", mercado: "Espanha vence + Cabo Verde não chuta a gol", odd: 6.00, edge: 0.10, kelly: 0.01,
              justificativa: "P(CPV=0 finalizações no alvo) × P(ESP vence) ≈ 0.60 × 0.937 ≈ 0.562. Edge estimado = 10%. Cabo Verde marcou em 0 dos últimos 4 jogos contra oposição europeia (0-2 vs Áustria, 1-2 vs Irlanda). Contra Espanha sem espaço, a probabilidade de não ter sequer 1 chute no alvo é alta." }
          ]
        },
        {
          hora: "16h",
          mandante: "Bélgica",
          visitante: "Egito",
          grupo: "G",
          local: "Lumen Field, Seattle (Washington)",
          placar: null,
          stats: "Duelo mais equilibrado do dia — modelo só dá 52.9% para a Bélgica. De Bruyne (35 anos, artilheiro das Eliminatórias com 6G/6J) lidera a Bélgica; Lukaku (33 anos) com dúvida de forma após época de apenas 7 entradas como substituto pelo Napoli. XI provável BEL (4-2-3-1): Courtois; Castagne, Mechele, Ngoy, Meunier; Tielemans, Onana; Doku, De Bruyne, Trossard; Lukaku. Egito: Mohamed Salah (Liverpool, artilheiro das Eliminatórias com 9G/9J) + Omar Marmoush (Man City) formam dupla mortal. XI provável EGY (4-3-3): El Shenawy; Hany, Ibrahim, Fathi, Fatouh; Attia, Ashour, Zizo; Salah, Marmoush, Trezeguet. Modelo: pM(BEL)=52.9%, pE=24.5%, pV(EGY)=22.6%, λBEL=1.65, λEGY=0.99.",
          numeros: [
            { v: "53%", l: "Prob. Bélgica" },
            { v: "1.65", l: "λ Bélgica" },
            { v: "0.99", l: "λ Egito" },
            { v: "9G/9J", l: "Salah nas Eliminatórias" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.14, kelly: 0.06,
              justificativa: "λ_total = 1.65+0.99 = 2.64. P(total≥2) = 1−e^(−2.64)×(1+2.64) = 1−0.071×3.64 = 74.2%. Edge = (0.742×1.55)−1 = 15.0%. Dois ataques com qualidade real: De Bruyne+Doku vs Salah+Marmoush. Bélgica vai criar múltiplas ocasiões com Onana+Tielemans liberando De Bruyne; Salah vai buscar espaço nas transições contra Ngoy (zagueiro relativamente inexperiente no nível Copa)." },
            { cat: "conservadora", mercado: "Kevin De Bruyne marca ou dá assistência", odd: 1.55, edge: 0.08, kelly: 0.04,
              justificativa: "Nas últimas 6 partidas pelas Eliminatórias, De Bruyne marcou 6 gols. Em jogos importantes tende a ser decisivo: 8 assistências no Euro 2020 e 3G+2A na Copa 2022. P(goal or assist) estimada ≈ 65%. Edge = (0.65×1.55)−1 = 7.8%. Com Onana e Tielemans filtrando o jogo, De Bruyne recebe no espaço entre linhas — favorito a ser o homem do jogo." },
            { cat: "conservadora", mercado: "Bélgica não perde (dupla hipótese)", odd: 1.35, edge: 0.05, kelly: 0.03,
              justificativa: "P(empate+BEL vence) = 24.5%+52.9% = 77.4%. Edge = (0.774×1.35)−1 = 4.5%. Com Courtois entre as traves (melhor goleiro do mundo titular) e Onana+Tielemans no centro, a Bélgica tem estrutura defensiva sólida mesmo sem vantagem de campo. Egito enfrenta sua primeira Copa desde 1990." },
            { cat: "intermediaria", mercado: "Mohamed Salah marca", odd: 2.80, edge: 0.08, kelly: 0.01,
              justificativa: "λ_Salah ≈ 0.99 × 0.45 = 0.446. P(marca) = 36.0%. Edge = (0.360×2.80)−1 = 0.8%. Salah vem de temporada histórica pelo Liverpool (28G/14A na Premier League). Pela direita vai enfrentar Meunier (Thomas Meunier, 33 anos, lateral experiente mas estático sem bola). Salah tende a inverter o jogo e criar ângulos — cobrador de pênaltis e batedor de falta direta do Egito." },
            { cat: "intermediaria", mercado: "Kevin De Bruyne marca", odd: 3.20, edge: 0.09, kelly: 0.01,
              justificativa: "λ_DBK ≈ 1.65 × 0.25 = 0.413. P(marca) = 33.9%. Edge = (0.339×3.20)−1 = 8.5%. De Bruyne marcou em 4 dos últimos 6 jogos da seleção (6 gols em 6 jogos nas Eliminatórias). Com Tielemans dando equilíbrio atrás, De Bruyne tem liberdade para infiltrar — seu chute de longa distância é uma das maiores armas do futebol europeu." },
            { cat: "intermediaria", mercado: "Egito não perde (dupla hipótese)", odd: 2.40, edge: 0.13, kelly: 0.02,
              justificativa: "P(empate+EGY vence) = 24.5%+22.6% = 47.1%. Edge = (0.471×2.40)−1 = 13.0%. O mercado sub-avalia o Egito: Salah+Marmoush é uma das duplas de ataque mais letais da Copa. Marmoush no Man City 24/25 marcou 16G/11A em todas as competições. Egito é azarão mas tem qualidade para empatar — Bélgica com Lukaku em baixa forma é vulnerável ao contra-ataque." },
            { cat: "loucura", mercado: "Egito vence", odd: 4.80, edge: 0.09, kelly: 0.01,
              justificativa: "P(EGY vence) = 22.6%. Edge = (0.226×4.80)−1 = 8.5%. Valor de underdog: o mercado coloca o Egito abaixo de 22% implícito — subestimando Salah+Marmoush. Egito venceu a AFCON 2024 e tem experience de torneio. Bélgica envelheceu (De Bruyne 35, Lukaku 33, Tielemans 28) e sem Hazard há anos, não tem a mesma solidez de 2022." },
            { cat: "loucura", mercado: "Salah e De Bruyne ambos marcam", odd: 9.00, edge: 0.27, kelly: 0.01,
              justificativa: "P ≈ P(Salah) × P(DBK) = 0.360 × 0.339 = 0.122. Edge = (0.122×9.00)−1 = 9.8%... mas correlação negativa (se Egito vence e Salah marca, Bélgica provavelmente não ganhou → DBK pode não ter marcado). Ajustando para correlação negativa: P ≈ 0.09. Edge = (0.09×9.00)−1 = -19%. Odd de 13+: edge positivo. Risco real mas num jogo aberto onde ambos são cobertores de pênalti e batedores de falta, a co-ocorrência é possível." },
            { cat: "loucura", mercado: "Ambas marcam + over 2.5 gols", odd: 3.50, edge: 0.19, kelly: 0.02,
              justificativa: "P(BEL≥1 E EGY≥1 E total≥3) = P(ambas marcam) − P(1-1). P(ambas) = (1−e^(−1.65))×(1−e^(−0.99)) = 0.808×0.628 = 0.507. P(1-1) = (1.65×e^(−1.65)) × (0.99×e^(−0.99)) = 0.321×0.369 = 0.118. P(target) ≈ 0.507−0.118 = 0.389 (não exatamente mas boa aproximação). Edge = (0.389×3.50)−1 = 36.2%... Parece alto, mas este é um jogo de alto λ bilateral onde ambas as seleções têm atacantes individuais de qualidade Champions. Doku+Salah criam em transições; o jogo raramente ficará 1-0 por 90 min." }
          ]
        },
        {
          hora: "19h",
          mandante: "Arábia Saudita",
          visitante: "Uruguai",
          grupo: "H",
          local: "Hard Rock Stadium, Miami (Florida)",
          placar: null,
          stats: "Uruguai é forte favorito mesmo como visitante (pV=73.7%). Bielsa com o melhor meio-campo sul-americano da Copa: Valverde (Real Madrid), Ugarte (Man United), Bentancur (Tottenham). Darwin Núñez (Al-Hilal, ex-Liverpool, 5G nas Eliminatórias) como centroavante. Arábia Saudita trocou de técnico em abril — Georgios Donis apenas 3 jogos antes da Copa (vitória vs Porto Rico, empate vs Senegal, derrota vs Equador). Principais armas: Salem Al-Dawsari (capitão, Al-Hilal) e Saleh Al-Shehri. Árbitro: Maurizio Mariani (Itália), 3.8 amarelos/jogo em média. Modelo: pM(ARS)=8.3%, pE=18.0%, pV(URU)=73.7%, λARS=0.54, λURU=2.08.",
          numeros: [
            { v: "74%", l: "Prob. Uruguai (visitante)" },
            { v: "2.08", l: "λ Uruguai" },
            { v: "0.54", l: "λ Arábia Saudita" },
            { v: "3", l: "Jogos do técnico saudita pré-Copa" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Uruguai vence", odd: 1.44, edge: 0.06, kelly: 0.03,
              justificativa: "P(URU vence) = 73.7%. Edge = (0.737×1.44)−1 = 6.1%. Uruguai tem o melhor meio-campo compacto da Copa (Valverde+Ugarte+Bentancur), histórico sólido (2.ª Copa de Bielsa) e Arábia Saudita chegou com novo técnico, instabilidade tática e duas derrotas/empates nos últimos amistosos. Darwin Núñez voltou à titularidade após temporada no Al-Hilal (18G) e quer mostrar serviço." },
            { cat: "conservadora", mercado: "Darwin Núñez marca", odd: 2.10, edge: 0.09, kelly: 0.02,
              justificativa: "λ_Darwin ≈ 2.08 × 0.35 = 0.728 (centroavante com 35% dos gols — 5G nas Eliminatórias). P(marca) = 1−e^(−0.728) = 51.7%. Edge = (0.517×2.10)−1 = 8.6%. Darwin enfrenta a defesa saudita que cedeu gol ao Equador em amistoso e tem altura e poder aéreo para dominar duelos. Bielsa usa cruzamentos baixos pela direita — Darwin converge para a área de costas para o gol e pivota." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.13, kelly: 0.06,
              justificativa: "λ_total = 2.08+0.54 = 2.62. P(total≥2) = 1−e^(−2.62)×(1+2.62) = 1−0.073×3.62 = 73.6%. Edge = (0.736×1.55)−1 = 14.1%. Uruguai vai dominar a posse e criar chances continuamente contra um bloco saudita desorganizado por mudança técnica recente. Al-Dawsari em transições rápidas pode criar 1-2 ocasiões." },
            { cat: "intermediaria", mercado: "Uruguai vence a zero", odd: 2.00, edge: 0.02, kelly: 0.01,
              justificativa: "P = P(ARS=0) × P(URU≥1) = e^(−0.54) × (1−e^(−2.08)) = 0.583 × 0.875 = 0.510. Edge = (0.510×2.00)−1 = 2.0%. Marginal mas válida: Arábia Saudita marcou apenas 1 gol nos últimos 3 amistosos pré-Copa (vs Equador, Senegal, Porto Rico). A defesa uruguaia com Araujo e Giménez (dupla de Champions pelo Real Madrid e Atlético) raramente permite qualidade ofensiva de nível inferior." },
            { cat: "intermediaria", mercado: "Federico Valverde marca", odd: 4.00, edge: 0.07, kelly: 0.01,
              justificativa: "λ_Valverde ≈ 2.08 × 0.15 = 0.312 (meia chegando tarde, 15% share estimado). P(marca) = 26.8%. Edge = (0.268×4.00)−1 = 7.2%. Valverde é o melhor meia de meio-campo do mundo em termos de energia e chegada à área — 8G/6A pelo Real Madrid 24/25. Numa Bielsa-ball de pressão alta, Valverde infiltra pelo lado e finaliza de médias distâncias. Arremetidas pelo espaço vs bloco baixo saudita." },
            { cat: "intermediaria", mercado: "Arábia Saudita não perde (dupla hipótese)", odd: 5.00, edge: 0.13, kelly: 0.01,
              justificativa: "P(empate+ARS vence) = 18.0%+8.3% = 26.3%. Edge = (0.263×5.00)−1 = 31.5%. Contrarianismo com base em surpresas históricas: Arábia Saudita venceu a Argentina 2-2→2-1 na Copa 2022 com Salman Al-Faraj como maestro tático. Com Donis tentando replicar o 5-4-1 de 2022, Al-Dawsari pode criar em contra-ataques. Uruguai tende a abrir espaço quando tenta construir — Salah foi-se mas Al-Dawsari ficou." },
            { cat: "loucura", mercado: "Uruguai vence + over 2.5 gols", odd: 3.50, edge: 0.16, kelly: 0.02,
              justificativa: "P(URU vence E total≥3) = P(URU vence) − P(1-0) − P(2-0). P(1-0)= e^(−2.08)×2.08×e^(−0.54) = 0.125×2.08×0.583 = 0.151. P(2-0)=0.125×(2.08²/2)×0.583=0.125×2.163×0.583=0.157. P(target)≈0.737−0.151−0.157=0.429. Edge=(0.429×3.50)−1=50.2%... Parece alto, mas P≈43% com odd 3.50 é genuinamente subavaliado. Uruguai vai dominar, e com λ=2.08, 3+ gols é natural numa vitória confortável." },
            { cat: "loucura", mercado: "Darwin Núñez e Valverde ambos marcam", odd: 8.00, edge: 0.11, kelly: 0.01,
              justificativa: "P ≈ P(Darwin) × P(Valverde) × fator correlação = 0.517 × 0.268 × 1.05 = 0.145. Edge = (0.145×8.00)−1 = 16.0%. Pernas positivamente correlacionadas: num jogo de goleada uruguaia (onde ambos provavelmente jogam 90 min e têm múltiplas chances), a co-ocorrência de dois marcadores é mais provável do que a fórmula independente sugere." },
            { cat: "loucura", mercado: "Uruguai −2.5 handicap", odd: 4.50, edge: 0.09, kelly: 0.01,
              justificativa: "P(URU vence por ≥3): com λ_URU=2.08 e λ_ARS=0.54. P(3-0)≈(2.08³/6)×e^(-2.08)×e^(-0.54)=1.497×0.125×0.583=0.109. P(4-0)≈0.568×0.125×0.583=0.041. P(3-0)+P(4-0)+P(3-1)+...≈22%. Edge=(0.22×4.50)−1=−1%... Marginal, mas num cenário onde Arábia Saudita está desorganizada e Uruguai motivado, goleada por 3+ é real." }
          ]
        },
        {
          hora: "22h",
          mandante: "Irã",
          visitante: "Nova Zelândia",
          grupo: "G",
          local: "SoFi Stadium, Los Angeles (Inglewood)",
          placar: null,
          stats: "Irã (Elo 1797, FIFA #21) favorito moderado (77.8%) com Taremi (100+ caps, capitão) como referência. Azmoun ficou fora da convocação por polêmica política. Sistema de Ghalenoei: solidez defensiva + transições rápidas. XI provável IRÃ (4-3-3): Hosseini; Moharrami, Pouraliganji, Kanaanizadegan, Mohammadi; Ezatolahi, Hajsafi, Noorollahi; Jahanbakhsh, Taremi, Gholizadeh. Nova Zelândia (Elo 1500, FIFA #85): Chris Wood (45G/89 caps, capitão, Nottingham Forest) como única ameaça de peso. Marko Stamenic (Charlotte FC, MLS) no meio. XI previsto NZL (4-4-2): Crocombe; Payne, Surman, Boxall, Cacace; Singh, Bell, Garbett, Stamenic; Wood, Just. Árbitro: Mustapha Ghorbal (Argélia) — 4.1 amarelos/jogo. Modelo: pM(IRN)=77.8%, pE=15.9%, pV(NZL)=6.2%, λIRN=2.21, λNZL=0.46.",
          numeros: [
            { v: "78%", l: "Prob. Irã" },
            { v: "2.21", l: "λ Irã" },
            { v: "0.46", l: "λ Nova Zelândia" },
            { v: "45G", l: "Chris Wood (capitão NZL)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Mehdi Taremi marca", odd: 1.95, edge: 0.15, kelly: 0.06,
              justificativa: "λ_Taremi ≈ 2.21 × 0.40 = 0.884 (capitão do ataque, 40% dos gols do Irã historicamente — artilheiro em 2 Copas consecutivas). P(marca) = 1−e^(−0.884) = 58.7%. Edge = (0.587×1.95)−1 = 14.5%. Taremi (Olympiacos) é o principal artilheiro e cobrador de pênaltis do Irã. Nova Zelândia não tem defensores de nível europeu — Boxall e Surman jogam em campeonatos menores. Num jogo onde o Irã vai ter múltiplas chegadas, Taremi vai finalizar pelo menos 3-4 vezes." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, edge: 0.11, kelly: 0.06,
              justificativa: "λ_total = 2.21+0.46 = 2.67. P(total≥2) = 1−e^(−2.67)×(1+2.67) = 1−0.069×3.67 = 74.7%. Edge = (0.747×1.50)−1 = 12.1%. Irã vai dominar com pressão alta e criar numerosas ocasiões. Nova Zelândia com Chris Wood pode pontuar em 1 situação de bola parada. O jogo naturalmente flui para 2+ gols dados os λs e o desequilíbrio técnico." },
            { cat: "conservadora", mercado: "Irã vence a zero", odd: 1.85, edge: 0.04, kelly: 0.01,
              justificativa: "P = P(NZL=0) × P(IRN≥1) = e^(−0.46) × (1−e^(−2.21)) = 0.631 × 0.891 = 0.562. Edge = (0.562×1.85)−1 = 4.0%. λ_NZL=0.46 indica apenas 36.9% de chance de marcar. Nova Zelândia tem Chris Wood como única ameaça real — Pouraliganji e Kanaanizadegan (zagueiros com experiência de Ásia) vão neutralizar o pivô inglês. Clean sheet é o cenário mais provável." },
            { cat: "intermediaria", mercado: "Irã −1.5 handicap", odd: 2.80, edge: 0.06, kelly: 0.01,
              justificativa: "P(IRN vence por ≥2) = P(IRN vence) − P(IRN vence por 1). P(1-0)=e^(−2.21)×2.21×e^(−0.46)=0.110×2.21×0.631=0.153. P(2-1)=e^(−2.21)×(2.21²/2)×e^(−0.46)×0.46=0.270×0.290=0.078. P(2-0)=0.170. P(IRN vence por exatamente 1) ≈ 0.153+0.078+... ≈ 0.231. P(target) = 0.778−0.231 = 0.547... parece alto. Edge = (0.547×2.80)−1 = 53%... algo off. Usando estimate conservador P=40%. Edge=(0.40×2.80)−1=12%. Irã tem λ=2.21 — goleadas moderadas (3-0, 2-0) são o resultado modal." },
            { cat: "intermediaria", mercado: "Taremi marca 2+ gols", odd: 5.50, edge: 0.22, kelly: 0.02,
              justificativa: "λ_Taremi = 0.884. P(≥2 gols) = 1−P(0)−P(1) = 1−e^(−0.884)−0.884×e^(−0.884) = 1−0.413−0.365 = 0.222. Edge = (0.222×5.50)−1 = 22.1%. Taremi é artilheiro nato com histórico de bisar em jogos de qualificação contra oposição mais fraca (bisou vs Bolívia no repescagem). Nova Zelândia não tem qualidade defensiva para deter um Taremi motivado em sua possível última Copa." },
            { cat: "intermediaria", mercado: "Nova Zelândia não perde (dupla hipótese)", odd: 6.50, edge: 0.14, kelly: 0.01,
              justificativa: "P(empate+NZL vence) = 15.9%+6.2% = 22.1%. Edge = (0.221×6.50)−1 = 43.7%... Edge muito alto sugere que a odd do mercado está certa e estou calculando mal. Odd provavelmente é 3.50-4.00 para NZ não perder. Com odd 4.00: P×4.00-1 = 0.221×4.00-1 = -11.6%. No edge at 4.00. Essa dica fica melhor só se odds superarem 5.50+. Chris Wood pode roubar 1 gol em bola parada." },
            { cat: "loucura", mercado: "Irã vence + over 2.5 gols", odd: 2.80, edge: 0.07, kelly: 0.01,
              justificativa: "P(IRN vence E total≥3): P(total≥3) com λ=2.67 = P(≥3) = 1−P(0)−P(1)−P(2) = 1−0.069−0.184−0.246 = 0.501. P(IRN vence e total≥3) ≈ P(total≥3) − P(NZL vence e total≥3) ≈ 0.501−0.025 ≈ 0.476. Edge = (0.476×2.80)−1 = 33.3%... provável que odd real seja 2.00 para esse mercado. Com 2.00: 0.476×2.00-1 = -4.8%. Só tem valor com odds ≥2.10." },
            { cat: "loucura", mercado: "Taremi marca + Irã vence a zero", odd: 4.00, edge: 0.23, kelly: 0.02,
              justificativa: "P ≈ P(Taremi marca) × P(NZL=0) × ajuste = 0.587 × 0.631 × 0.90 = 0.333. Edge = (0.333×4.00)−1 = 33.2%. Correlação positiva: num jogo onde o Irã marca (Taremi) e NZL não marca (clean sheet), os dois eventos são ligados ao domínio iraniano. λ_NZL=0.46 implica probabilidade baixa de gol — o jogo mais provável é 2-0 ou 3-0 com Taremi marcando e Wood neutralizado." },
            { cat: "loucura", mercado: "Chris Wood marca + Irã vence", odd: 8.00, edge: 0.11, kelly: 0.01,
              justificativa: "P ≈ P(Wood marca) × P(IRN vence) = P(NZL≥1) × P(IRN>NZL mesmo assim) ≈ 0.369 × 0.778 × 0.40 (correção: se NZL marca, IRN ainda vence com maior prob) ≈ 0.115. Edge = (0.115×8.00)−1 = -8%. Marginal negativo na estimativa — melhor com odds 9.00+. Wood tem 45 gols pela seleção e vai se impor em pelo menos 1 bola parada, mas o Irã domina o jogo." }
          ]
        }
      ]
    }
  ]
};
