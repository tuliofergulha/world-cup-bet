// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-18T08:00:00-03:00",

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
      titulo: "Dia 8 — Grupos A e B: eliminação antecipada, goleada esperada e Tejera rigoroso",
      contexto: "Grupos A e B encerram a 2.ª rodada. No Grupo A, Tchéquia e África do Sul jogam pela sobrevivência (ambas perderam R1) — derrota praticamente elimina. África do Sul sem Sithole e Zwane (vermelhos vs México). Schick chega na melhor forma da vida (16G em 28 jogos na Bundesliga, 9G nos últimos 7). Grupo B totalmente equilibrado: todos os 4 times com 1 ponto. Suíça favorita clara vs Bósnia (λ=2.13). Canadá recebe o Catar com retorno de Alphonso Davies e 89.4% de vitória. À meia-noite, o jogo mais aguardado: México (casa no Akron) vs Coreia do Sul — árbitro Gustavo Tejera tem 5.24 cartões/jogo, mais rigoroso do torneio.",
      jogos: [
        {
          hora: "13h",
          mandante: "Tchéquia",
          visitante: "África do Sul",
          grupo: "A",
          local: "Mercedes-Benz Stadium, Atlanta (Georgia)",
          placar: null,
          stats: "Tchéquia perdeu R1 de virada (1-2 vs Coreia do Sul). África do Sul perdeu 0-2 vs México e ficou reduzida a 9 jogadores com 2 expulsões (Sithole e Zwane — SUSPENSOS hoje). Schick: 16G em 28 jogos na Bundesliga 25-26, 9G nos últimos 7 (hat-trick vs Leipzig). Lyle Foster: 3G/4 amarelos na PL 25-26, 10G em 27 caps. Ref: Tori Penso (EUA) — 1.ª equipa arbitral exclusivamente feminina da história das Copas. H2H: 1.º encontro histórico.",
          numeros: [
            { v: "66.5%", l: "Prob. Tchéquia" },
            { v: "1.900", l: "λ Tchéquia" },
            { v: "0.680", l: "λ África do Sul" },
            { v: "16G", l: "Schick (Bundesliga 25-26)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Tchéquia não perde (dupla hipótese)", odd: 1.40,
              justificativa: "P(TCH+EMP)=87.5%. Schick em forma de vida (16G na Bundesliga), África do Sul reduzida sem Sithole e Zwane (suspensos). Mesmo sem vencer, Tchéquia tem λ=1.90 e capacidade de controlar o jogo contra uma defense sul-africana enfraquecida." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55,
              justificativa: "λ_total=2.58. P(total≥2)=72.9%. Tchéquia precisa atacar para se classificar, e a África do Sul também não vai se fechar — ambas precisam de pontos. Sem Sithole e Zwane no meio, a Africa do Sul vai sofrer para segurar a linha." },
            { cat: "conservadora", mercado: "Patrik Schick marca", odd: 2.20,
              justificativa: "λ_Schick=1.90×0.28=0.532. P=41.3%. 9G nos últimos 7 jogos pela Leverkusen, hat-trick vs Leipzig. O centroavante mais em forma da Copa entrando em campo contra uma defesa sul-africana sem seus titulares de meio-campo." },
            { cat: "intermediaria", mercado: "Tchéquia vence a zero", odd: 2.40,
              justificativa: "P=43.1%. P(AFR não marca)=e^(−0.68)=50.7%. África do Sul perde Sithole e Zwane — os principais responsáveis por transitions rápidas. Sem os dois, λV=0.68 pode ser ainda menor na prática." },
            { cat: "intermediaria", mercado: "Tchéquia marca 2+ gols", odd: 2.00,
              justificativa: "P(TCH≥2)=56.5%. Schick+Hložek+Sulc formam trio em boa forma. Africa do Sul sem os dois melhores nomes do meio — os corredores laterais vão sofrer com a movimentação tcheca." },
            { cat: "intermediaria", mercado: "Relebohile Mofokeng marca", odd: 4.50,
              justificativa: "λ_Mofokeng=0.68×0.25=0.170. P=15.6%. Jovem winger do Orlando Pirates, mais perigoso da Africa do Sul. No contra-ataque — único modo possível para a Africa do Sul pontuar — Mofokeng é o mais rápido e imprevisível. Odds de 4.50 valorizam um evento com P real de ~16%." },
            { cat: "loucura", mercado: "Tchéquia vence a zero + Schick marca", odd: 5.50,
              justificativa: "P=0.431×0.413=0.178. Pernas correlacionadas: clean sheet implica domínio tcheco, domínio implica finalizações do centroavante — Schick é o principal matador. Numa vitória de controle, o artilheiro da Bundesliga vai aparecer no placar." },
            { cat: "loucura", mercado: "Schick e Hložek ambos marcam", odd: 7.00,
              justificativa: "P=P(Schick)×P(Hložek)=0.413×(1−e^(−1.90×0.18))=0.413×0.292=0.121. Duo da Leverkusen que funciona em conjunto no clube. Numa dominância tcheca contra Africa do Sul reduzida, os dois vão finalizar — combo natural do 3-4-2-1 de Koubek." },
            { cat: "loucura", mercado: "Tchéquia −1.5 handicap", odd: 3.50,
              justificativa: "P(TCH vence por ≥2)≈22%. Africa do Sul sem Sithole e Zwane + desgaste psicológico de 2 expulsões no R1. Schick em modo artilheiro — numa tarde de graça, a goleada é o cenário mais natural para o favorito." }
          ]
        },
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Bósnia e Herz.",
          grupo: "B",
          local: "SoFi Stadium, Los Angeles (Inglewood)",
          placar: null,
          stats: "Suíça: desgosto do 90+4' vs Catar (Khoukhi cabeçou o empate histórico). Embolo: 8G+3A na Ligue 1 25-26 (Rennes). Xhaka como motor defensivo e Freuler+Shaqiri no meio criativo. Bósnia: 1-1 vs Canadá (Lukic 21' de escanteio, Larin igualou 78'). Dzeko (40 anos, Schalke 2. Bundesliga) como referência central — redescobriu forma em 2026. Ref: João Pinheiro (POR). H2H: Bósnia 2-0 Suíça (2016, único amistoso). Grupo B: todos com 1 ponto — vencedor hoje lidera isolado.",
          numeros: [
            { v: "75.2%", l: "Prob. Suíça" },
            { v: "2.130", l: "λ Suíça" },
            { v: "0.510", l: "λ Bósnia e Herz." },
            { v: "H2H 2-0 Bósnia", l: "(único encontro, 2016 amistoso)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Suíça não perde (dupla hipótese)", odd: 1.25,
              justificativa: "P(SUI+EMP)=92.5%. Suíça com λ=2.13 vs Bósnia com λ=0.51 é um dos jogos mais desequilibrados do Grupo B. Xhaka e Freuler controlam o meio, Embolo finaliza — a estrutura defensiva suíça raramente cede contra times de λ baixo." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55,
              justificativa: "λ_total=2.64. P=74.1%. Suíça vai criar 15-20 finalizações como vs Catar (26 chutes). Bósnia em 4-2-3-1 com Dzeko como referência pode surgir no contra-ataque. O jogo vai ter gols." },
            { cat: "conservadora", mercado: "Breel Embolo marca", odd: 2.10,
              justificativa: "λ_Embolo=2.13×0.25=0.533. P=41.3%. 8G+3A na Ligue 1 25-26 (Rennes), converteu o pênalti vs Catar (17'). Cobrador oficial e referência central — Bósnia com λ=0.51 vai defender com blocos, mas Embolo tem movimentação para criar espaço." },
            { cat: "intermediaria", mercado: "Suíça vence a zero", odd: 1.90,
              justificativa: "P=52.9%. P(BOS não marca)=e^(−0.51)=60.0%. Bósnia tem λV=0.51 — limitação ofensiva clara. Dzeko (40 anos, Schalke) pode aparecer em cruzamentos mas a Suíça defende com Nico Elvedi+Fabian Schär — dois dos melhores zagueiros do torneio." },
            { cat: "intermediaria", mercado: "Suíça marca 2+ gols", odd: 1.95,
              justificativa: "P(SUI≥2)=62.8%. Com λ=2.13, Suíça vai criar volume. Embolo+Vargas pelos flancos e Freuler de fora. Contra a Bósnia que concedeu o gol de Larin (escanteio mal defendido) no R1, a desvantagem defensiva vai aparecer." },
            { cat: "intermediaria", mercado: "Bósnia marca", odd: 3.00,
              justificativa: "P(BOS≥1)=40.0%. Odds de 3.00 implicam 33.3% — modelo estima 40%. Dzeko, mesmo aos 40 anos e vindo do Schalke (2. Bundesliga), redescobriu a forma em 2026 e é referência em bolas aéreas e cruzamentos. H2H 2-0 Bósnia no único encontro. No grande palco do SoFi Stadium, o capitão histórico pode aparecer numa bola parada." },
            { cat: "loucura", mercado: "Suíça vence a zero + Embolo marca", odd: 5.50,
              justificativa: "P=0.529×0.413=0.218. Pernas correlacionadas: clean sheet indica dominância suíça completa; num jogo controlado por Xhaka, Embolo vai ter múltiplas finalizações. Se a Bósnia não marca, Embolo quase certamente vai aparecer no placar." },
            { cat: "loucura", mercado: "Suíça −1.5 handicap", odd: 3.20,
              justificativa: "P(SUI vence por ≥2)≈30%. λM=2.13 vs λV=0.51 é um diferencial enorme. Suíça desperdiçou 3.24 xG contra o Catar — se não coeter os erros desta vez, a margem de 2+ gols é o cenário mais provável com qualidade ofensiva presente." },
            { cat: "loucura", mercado: "Embolo e Ruben Vargas ambos marcam", odd: 7.00,
              justificativa: "P=P(Embolo)×P(Vargas)=0.413×(1−e^(−2.13×0.18))=0.413×0.318=0.131. Vargas (Augsburg): criador pelo flanco direito, 3G pela Suíça em 2025-26. Numa goleada suíça onde ambos os flancos têm liberdade, o duo pode combinar num dos melhores ataques da Copa." }
          ]
        },
        {
          hora: "19h",
          mandante: "Canadá",
          visitante: "Catar",
          grupo: "B",
          local: "BC Place, Vancouver (British Columbia)",
          placar: null,
          stats: "Canadá: 1-1 vs Bósnia (dominou mas não venceu — Larin igualou no 78'). ALPHONSO DAVIES RETORNA após perder o R1 por lesão — reforça o flanco esquerdo. Jonathan David: artilheiro histórico do Canadá (36G), agora na Juventus (6G+4A na Serie A 25-26). Catar: 1-1 vs Suíça com gol histórico de Khoukhi (90+4'). Afif criou 2 chances vs Suíça — único catarino com mais de 1 criação. Ref: Cristián Garay (Chile). Modelo: 89.4% para o Canadá — candidato a goleada do torneio.",
          numeros: [
            { v: "89.4%", l: "Prob. Canadá" },
            { v: "2.790", l: "λ Canadá" },
            { v: "0.250", l: "λ Catar" },
            { v: "DAVIES", l: "Retorna! (perdeu R1 por lesão)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Canadá vence", odd: 1.15,
              justificativa: "P(CAN)=89.4%. O maior favorito do dia. Davies de volta reforça o flanco esquerdo — sem ele vs Bósnia, o Canadá só empatou. David (36G, Juve), Larin (faro gol comprovado), Buchanan (extremo veloz) — qualidade muito superior ao Catar." },
            { cat: "conservadora", mercado: "Canadá vence a zero", odd: 1.42,
              justificativa: "P=73.1%. P(CAT não marca)=e^(−0.25)=77.9%. Catar tem λ=0.25 — um dos mais baixos da Copa. O gol histórico de Khoukhi vs Suíça (90+4') foi anomalia estatística. Em casa em Vancouver, a defesa canadense vai estar muito mais motivada." },
            { cat: "conservadora", mercado: "Jonathan David marca", odd: 1.75,
              justificativa: "λ_David=2.79×0.30=0.837. P=56.7%. Artilheiro histórico do Canadá (36G). Na Juve marcou 6G+4A. Com Davies de volta a criar pela esquerda, os cruzamentos vão chegar no espaço de David dentro da área — a combinação natural do ataque canadense." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.75,
              justificativa: "P=58.8%. λ_total=3.04. Canadá com λ=2.79 vai criar volume — vs Bósnia criou 13 finalizações mesmo sem Davies. Com o retorno do melhor lateral/winger do mundo, os cruzamentos vão multiplicar as chances." },
            { cat: "intermediaria", mercado: "Canadá marca 3+ gols", odd: 2.00,
              justificativa: "P(CAN≥3)=52.9%. λ=2.79 com 5 titulares de alto nível (Davies, David, Larin, Buchanan, Eustáquio). Catar concedeu xG generosos vs Suíça (3.24 xG de adversário) e vs Argentina (ainda mais). A barreira defensiva vai ceder." },
            { cat: "intermediaria", mercado: "Canadá −2.5 handicap", odd: 3.00,
              justificativa: "P(CAN vence por ≥3)≈39.6%. Com λ=2.79 e λV=0.25, a diferença esperada é 2.54 gols. Em Vancouver com a torcida empurrada e Davies inspirado, ganhar por 3+ é o cenário médio, não excepcional." },
            { cat: "loucura", mercado: "Jonathan David bissa (2+ gols)", odd: 5.50,
              justificativa: "P(David≥2)=20.5%. λ_David=0.837 → P(≥2)=1−e^(−0.837)×(1+0.837)=0.205. Com 36G pela seleção e Davies voltando a criar, David vai ter 4-6 chances dentro da área. O centroavante mais letal das Américas no momento certo." },
            { cat: "loucura", mercado: "David e Larin ambos marcam", odd: 7.00,
              justificativa: "P=P(David)×P(Larin)=0.567×(1−e^(−2.79×0.18))=0.567×(1−e^(−0.502})=0.567×0.395=0.224. Larin entrou no 76' e marcou no 78' vs Bósnia — instinto de gol puro. Numa goleada, o centroavante-reserva vai ter seu momento." },
            { cat: "loucura", mercado: "Catar marca", odd: 6.50,
              justificativa: "P(CAT≥1)=22.1%. Odd de 6.50 implica 15.4% — modelo estima 22%, edge de 43%. Catar tem Afif (único com 2+ criações vs Suíça) e lembranças do gol histórico de Khoukhi. O mercado subestima a probabilidade de o Catar marcar num contra-ataque abrupto." }
          ]
        },
        {
          hora: "22h",
          mandante: "México",
          visitante: "Coreia do Sul",
          grupo: "A",
          local: "Estadio Akron, Guadalajara",
          placar: null,
          stats: "Clássico de vencedores do Grupo A — quem vencer praticamente se classifica. México: 2-0 vs África do Sul (Quiñones + Jimenez). Jimenez: 9G+3A na PL 25-26 para o Wolves. Coreia do Sul: virada dramática 2-1 vs Tchéquia (0-1 → 2-1 em 23 min). Son Heung-min (LAFC, MLS: 0G/8A em 2025-26, mas capitão histórico com 60G+ pela seleção). Lee Kang-in (PSG), Hwang Hee-chan (Wolves). Ref: Gustavo Tejera (URU) — 5.24 cartões/jogo, rigoroso. Polêmica: Coreia possivelmente alvo de espionagem por drone na preparação.",
          numeros: [
            { v: "65.8%", l: "Prob. México" },
            { v: "1.890", l: "λ México" },
            { v: "0.690", l: "λ Coreia do Sul" },
            { v: "5.24", l: "Cartões/jogo Tejera (árbitro)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "México não perde (dupla hipótese)", odd: 1.35,
              justificativa: "P(MEX+EMP)=87.0%. Em casa no Akron (similar ao Azteca para o torcedor mexicano). Jimenez e Quiñones confirmados ofensivamente no R1. Kim Min-jae é forte mas Korea concedeu 1 gol vs Tchéquia. λ=1.89 aponta para domínio mexicano." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55,
              justificativa: "λ_total=2.58. P=72.8%. Ambos venceram R1 e vão buscar a vitória para se classificar — sem ultra-defensiva possível. Son, Hwang Hee-chan, Lee Kang-in para a Coreia; Jimenez e Quiñones para o México." },
            { cat: "conservadora", mercado: "Over 3.5 cartões no jogo", odd: 1.65,
              justificativa: "Tejera: 5.24 cartões/jogo em média (um dos mais rigorosos do mundo). P(≥4 cartões | λ=5.24)=76.8%. Jogo de alto impacto entre dois times motivados, com o árbitro mais severo do torneio. Combinação ideal para cartões." },
            { cat: "intermediaria", mercado: "Raul Jimenez marca", odd: 2.20,
              justificativa: "λ_Jimenez=1.89×0.28=0.529. P=41.1%. 9G+3A na PL 25-26 (Wolves). Marcou vs África do Sul. Cobrador de pênaltis e boa movimentação na área — Kim Min-jae (Bayern) vai marcar mas o espaço aparece nos cruzamentos dos flancos mexicanos." },
            { cat: "intermediaria", mercado: "Over 4.5 cartões no jogo", odd: 2.10,
              justificativa: "P(≥5 cartões | λ=5.24)=60.2%. Com Tejera e dois times que necessitam vencer, as faltas táticas vão aparecer. Hwang In-beom (Feyenoord, com histórico de amarelos) e o tempamento dos mexicanos são bons candidatos às cartolinas." },
            { cat: "intermediaria", mercado: "Ambas marcam", odd: 2.20,
              justificativa: "P=0.849×0.498=0.423. λ_KOR=0.69 — Coreia marcou 2 vs Tchéquia. Son+Hwang Hee-chan num dia inspirado podem surpreender a defesa mexicana. Ambos os times vão atacar num jogo de alto nível." },
            { cat: "loucura", mercado: "Son Heung-min marca", odd: 6.00,
              justificativa: "λ_Son=0.69×0.28=0.193. P=17.6%. Son tem 60G+ pela seleção (artilheiro histórico). Em seu 4.º Mundial e em jogo decisivo, o capitão da Coreia vai aparecer — mesmo com 0G na MLS esta temporada, a qualidade se confirma em nível de seleção." },
            { cat: "loucura", mercado: "Coreia do Sul vence", odd: 8.00,
              justificativa: "P(KOR vence)=13.0%. Coreia virou de 0-1 para 2-1 vs Tchéquia — DNA de virada. Son+Lee Kang-in+Hwang Hee-chan é um trio de classe mundial. Em Guadalajara, o México pode não encontrar o ritmo e a Coreia pode resolver no contra-ataque." },
            { cat: "loucura", mercado: "Quiñones e Jimenez ambos marcam", odd: 6.00,
              justificativa: "P=P(Quiñones)×P(Jimenez)=(1−e^(−1.89×0.18))×0.411=(1−e^(−0.340})×0.411=0.288×0.411=0.118. Pernas correlacionadas: numa vitória mexicana confortável em casa, o duo de R1 vai repetir a parceria. Tejera pode conceder um pênalti que Jimenez converte." }
          ]
        }
      ]
    }
  ]
};
