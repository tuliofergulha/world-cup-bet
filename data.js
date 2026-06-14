// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-14T00:35:00-03:00",

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
          placar: null,
          stats: "Turquia (Elo 1880, FIFA #22) vs Austrália (Elo 1714, FIFA #26) em Vancouver — sede canadense, sem vantagem de torcida para nenhum lado. Turquia: Hakan Calhanoglu (capitão, 100+ caps, 22 gols, Inter Milan) dirige o meio-campo; Kenan Yildiz (21 anos, Juventus, 3 gols nas eliminatórias) é a ameaça ofensiva. XI provável (4-2-3-1): Günoğlu; Müldür, Demiral, Akaydin, Kadioglu; Calhanoglu, Yokuslu; Yildiz, Yazici, Aktürkoğlu; Turan. Austrália: marcou ≤1 gol em 7 dos últimos 8 jogos. XI provável (3-4-2-1): M. Ryan; Circati, Souttar, Burgess; Italiano, O'Neill, Irvine, Bos; Leckie, Metcalfe; Touré. H2H: Austrália venceu 4 dos últimos 5 jogos contra a Turquia. Árbitro: Jesús Valenzuela (Venezuela). Modelo: pM(TUR)=61.3%, pE=22.6%, pV(AUS)=16.0%, λTUR=1.80, λAUS=0.79.",
          numeros: [
            { v: "61%", l: "Prob. Turquia" },
            { v: "1.80", l: "λ Turquia" },
            { v: "0.79", l: "λ Austrália" },
            { v: "4/5", l: "H2H últ. 5 (AUS)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.52, edge: 0.11, kelly: 0.05,
              justificativa: "λ_total = 1.80+0.79 = 2.59. P(total≥2) = 1 − e^(−2.59)×(1+2.59) = 1 − 0.075×3.59 = 73.1%. Edge = (0.731×1.52)−1 = 11.1%. Austrália tem histórico de jogos fechados (≤1 gol em 7/8 jogos) mas a Turquia de Calhanoglu+Yildiz pressionará desde o apito. λ_TUR=1.80 sozinho garante que 0 gols da Turquia é improvável (probabilidade: 16.5%)." },
            { cat: "conservadora", mercado: "Turquia vence a zero", odd: 2.85, edge: 0.08, kelly: 0.01,
              justificativa: "P = P(AUS=0) × P(TUR≥1) = e^(−0.79) × (1−e^(−1.80)) = 0.454×0.835 = 37.9%. Edge = (0.379×2.85)−1 = 8.0%. Austrália marcou ≤1 gol em 7/8 partidas recentes — o ataque dos Socceroos (Touré como único 9 confirmado) não é ameaçador. Yildiz+Aktürkoğlu pelas alas vão forçar a defesa australiana a 3 CBs." },
            { cat: "intermediaria", mercado: "Kenan Yildiz marca", odd: 2.75, edge: 0.09, kelly: 0.01,
              justificativa: "λ_Yildiz ≈ 1.80 × 0.28 = 0.504 (28% dos gols turcos — 3 gols nas eliminatórias, winger com liberdade de infiltração). P(marca) = 1−e^(−0.504) = 39.5%. Edge = (0.395×2.75)−1 = 8.6%. Com 21 anos e um Calhanoglu dando a bola sempre à frente, Yildiz cria espaços pela direita contra o 3-4-2-1 australiano. Circati e Italiano são laterais-ala sem DNA defensivo puro." },
            { cat: "intermediaria", mercado: "Austrália não perde (dupla hipótese)", odd: 2.80, edge: 0.08, kelly: 0.01,
              justificativa: "P(empate + AUS vence) = 22.6%+16.0% = 38.6%. Edge = (0.386×2.80)−1 = 8.1%. Contrarianismo justificado: Austrália venceu 4 dos últimos 5 H2H vs Turquia, os Socceroos têm solidez defensiva (Souttar + Ryan no gol) e o mercado provavelmente precifica a Turquia abaixo de 1.60 — sub-avaliando o valor no lado australiano." },
            { cat: "loucura", mercado: "Turquia vence + over 2.5 gols", odd: 3.20, edge: 0.14, kelly: 0.02,
              justificativa: "P(TUR vence E total≥3) = P(TUR vence) − P(1-0) − P(2-0) = 0.613 − (0.297×0.454) − (0.267×0.454) = 0.613 − 0.135 − 0.121 = 35.7%. Edge = (0.357×3.20)−1 = 14.2%. Com λ_TUR=1.80, a Turquia frequentemente marca 2+ e a Austrália pode pontuar em contra. Calhanoglu conduz mas também não fecha o jogo quando vence — perfil mais ofensivo do que defensivo." },
            { cat: "loucura", mercado: "Turquia −1.5 handicap", odd: 3.50, edge: 0.23, kelly: 0.02,
              justificativa: "P(TUR vence por ≥2) ≈ 35.2% (soma Poisson sobre k−j≥2). Edge = (0.352×3.50)−1 = 23.2%. Mercado trata a vitória por 2+ como evento raro (odds 3.50 → ~29%), mas com λ_TUR=1.80 e λ_AUS=0.79, o modelo indica que a maioria das vitórias turcas virão com placar amplo. Austrália marcou ≤1 em 7/8 → dificilmente ameaça o clean sheet ou uma vitória por 1." }
          ]
        },
        {
          hora: "14h",
          mandante: "Alemanha",
          visitante: "Curaçao",
          grupo: "E",
          local: "NRG Stadium, Houston (Texas)",
          placar: null,
          stats: "Maior desequilíbrio do Dia 4. Alemanha (Elo 1932, FIFA #10) em sequência de 9 vitórias seguidas (28 gols marcados, 5 gols concedidos). XI provável (4-2-3-1): Neuer; Kimmich, Tah, Schlotterbeck, Raum; Goretzka, Pavlovic; Sané, Musiala, Wirtz; Havertz. Curaçao: estreia histórica na Copa (menor país por população a disputar um Mundial), 1 vitória nos últimos 5 jogos, apenas 3 gols marcados nesse período. Técnico Dick Advocaat (78 anos, o mais velho da Copa). H2H: Alemanha venceu os 5 encontros. Árbitro a confirmar. Modelo: pM(GER)=85.7%, pE=11.3%, pV(CUR)=3.0%, λGER=2.55, λCUR=0.32.",
          numeros: [
            { v: "86%", l: "Prob. Alemanha" },
            { v: "2.55", l: "λ Alemanha" },
            { v: "0.32", l: "λ Curaçao" },
            { v: "9", l: "Vitórias seguidas GER" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Alemanha vence a zero", odd: 1.70, edge: 0.14, kelly: 0.05,
              justificativa: "P = P(CUR=0) × P(GER≥1) = e^(−0.32) × (1−e^(−2.55)) = 0.726×0.922 = 0.669. Edge = (0.669×1.70)−1 = 13.7%. Curaçao marcou apenas 3 gols nos últimos 5 jogos; sem jogadores de referência contra uma das melhores defesas da Copa. Neuer em sua última Copa — motivado. λ_CUR=0.32 implica apenas 27.4% de chance de marcar ao menos 1 gol." },
            { cat: "conservadora", mercado: "Kai Havertz marca", odd: 2.10, edge: 0.12, kelly: 0.03,
              justificativa: "λ_Havertz ≈ 2.55 × 0.30 = 0.765 (9 striker, maior fatia dos gols da Alemanha — 12 gols nas eliminatórias). P(marca) = 1−e^(−0.765) = 53.5%. Edge = (0.535×2.10)−1 = 12.4%. Com Kimmich+Raum cruzando pelas alas e Musiala+Wirtz chegando por trás, Havertz vai ter chances claras dentro da área contra uma defesa de Curaçao sem experiência europeia de ponta." },
            { cat: "intermediaria", mercado: "Jamal Musiala marca", odd: 2.25, edge: 0.06, kelly: 0.01,
              justificativa: "λ_Musiala ≈ 2.55 × 0.25 = 0.638 (meia ofensivo com liberdade total de finalização). P(marca) = 1−e^(−0.638) = 47.2%. Edge = (0.472×2.25)−1 = 6.2%. Musiala no Bayern 24/25 marcou 22 gols em 46 jogos — finalizador de fora da área e drible no dedo. Sem Timber (HOL), mas Musiala tem espaço para explorar o 4-4-2 fechado de Advocaat." },
            { cat: "intermediaria", mercado: "Over 8.5 escanteios no jogo", odd: 1.85, edge: 0.06, kelly: 0.02,
              justificativa: "P(≥9 escanteios) ≈ 57% com Alemanha dominando posse e explorando as alas (Kimmich RB, Raum LB, Sané e Wirtz pelos lados). Curaçao vai fechar em bloco baixo — defensores na linha dos 5m geram escanteios. Nos 9 jogos da sequência alemã: média de 6.8 escanteios apenas pelo lado germânico. Com a resistência do Curaçao, a Alemanha vai cruzar repetidamente. Edge = (0.57×1.85)−1 = 5.5%." },
            { cat: "loucura", mercado: "Alemanha −2.5 handicap", odd: 2.80, edge: 0.13, kelly: 0.02,
              justificativa: "P(GER vence por ≥3) ≈ P(GER vence) − P(vence por 1) − P(vence por 2) = 0.857 − 0.214 − 0.239 = 40.4%. Edge = (0.404×2.80)−1 = 13.1%. Com λ_GER=2.55, as goleadas são o cenário modal: P(3-0)=15.7%, P(4-0)=10.0%, P(3-1)=5.0%. Alemanha nas eliminatórias: 4-0, 5-0 foram frequentes. Curaçao defensivamente limitada e sem estrutura para resistir por 90 min." },
            { cat: "loucura", mercado: "Havertz e Musiala ambos marcam", odd: 4.50, edge: 0.13, kelly: 0.01,
              justificativa: "P ≈ P(Havertz marca) × P(Musiala marca) = 0.535 × 0.472 = 25.3%. Edge = (0.253×4.50)−1 = 13.4%. Independência razoável: Havertz finaliza de dentro da área (pivô), Musiala de fora (meia). Numa Alemanha que marcará 2.55 gols em média, a distribuição entre os dois principais artilheiros é real. Nos últimos 9 jogos da seleção, pelo menos 2 marcadores diferentes em 7 partidas." }
          ]
        },
        {
          hora: "17h",
          mandante: "Holanda",
          visitante: "Japão",
          grupo: "F",
          local: "AT&T Stadium, Arlington (Dallas)",
          placar: null,
          stats: "Duelo de potências desequilibrado pela forma recente. Japão (Elo 1879, FIFA #18) chegou com 6 vitórias seguidas em amistosos pré-Copa, incluindo vitórias vs Brasil e vs Inglaterra — possivelmente a melhor fase pré-torneio da história japonesa. Mitoma (Brighton) está FORA por lesão muscular. XI previsto Japão (4-2-3-1): Z. Suzuki; Taniguchi, Itakura, H. Ito; Doan, Kamada, Sano, Nakamura; Kubo (Real Sociedad, 7G/49 caps); J. Ito, A. Ueda. Holanda (Elo 1948, FIFA #8): Timber (Arsenal, zagueiro) FORA por lesão — Van Hecke assume. XI previsto (4-3-3): Verbruggen; Dumfries, Van Hecke, Van Dijk, Van de Ven; Reijnders, Gravenberch, De Jong; Summerville, Malen, Gakpo (Liverpool, 20G/50 caps). Árbitro: Ismail Elfath (EUA, residente em Austin). Modelo: pM(HOL)=45.6%, pE=25.2%, pV(JPN)=29.2%, λHOL=1.54, λJPN=1.18.",
          numeros: [
            { v: "46%", l: "Prob. Holanda" },
            { v: "29%", l: "Prob. Japão" },
            { v: "1.54", l: "λ Holanda" },
            { v: "6", l: "Vitórias JPN amistosos" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Japão não perde (dupla hipótese)", odd: 2.10, edge: 0.14, kelly: 0.03,
              justificativa: "P(empate + JPN vence) = 25.2%+29.2% = 54.4%. Edge = (0.544×2.10)−1 = 14.2%. Japão vem de 6 amistosos sem derrota, incluindo vitórias vs Brasil e England. Timber ausente fragiliza o lado esquerdo holandês — Van Hecke (Brighon) é inferior como construtor. Japão tem o melhor pressing da Copa (Doan+Kamada+Sano em bloco compacto) e Van Dijk sem seu parceiro habitual pode vacilar." },
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.95, edge: 0.06, kelly: 0.02,
              justificativa: "P(HOL≥1 E JPN≥1) = (1−e^(−1.54))×(1−e^(−1.18)) = 0.785×0.692 = 54.3%. Edge = (0.543×1.95)−1 = 5.9%. Com λ_JPN=1.18 (terceiro maior λ de visitante do dia) e um Japão que marcou contra Brasil e Inglaterra em amistosos, é improvável que fique a zero. Elfath (árbitro americano) tende a deixar o jogo fluir — menos interrupções = mais chances de gol." },
            { cat: "intermediaria", mercado: "Japão vence", odd: 3.80, edge: 0.11, kelly: 0.01,
              justificativa: "P(JPN vence) = 29.2%. Edge = (0.292×3.80)−1 = 11.0%. Mercado precifica o Japão a ~26% implícito — subestimação clara dada a forma recente. Japão já derrubou Alemanha e Espanha na Copa 2022. Com Timber fora, o flanco esquerdo holandês (Van Hecke) é a vulnerabilidade: Kubo e Junya Ito chegam pela direita e esquerda japonesa com velocidade suficiente para expor o Van Hecke." },
            { cat: "intermediaria", mercado: "Ayase Ueda marca", odd: 3.20, edge: 0.08, kelly: 0.01,
              justificativa: "λ_Ueda ≈ 1.18 × 0.35 = 0.413 (centroavante referencial do Japão). P(marca) = 1−e^(−0.413) = 33.8%. Edge = (0.338×3.20)−1 = 8.2%. Ueda (Feyenoord) marcou 16 gols pela Eredivisie 24/25. Duela com Van Hecke e Van Dijk — dois zagueiros que raramente enfrentam 9 de área tão dinâmico. Japão vai criar chances pelo centro se quebrar o meio-campo holandês." },
            { cat: "intermediaria", mercado: "Cody Gakpo marca", odd: 2.90, edge: 0.07, kelly: 0.01,
              justificativa: "λ_Gakpo ≈ 1.54 × 0.30 = 0.462 (ponta esquerda, 20 gols em 50 caps, 3 gols no grupo na Copa 2022). P(marca) = 37.0%. Edge = (0.370×2.90)−1 = 7.3%. Gakpo pela esquerda enfrenta Nakamura — lateral-direito japonês de 26 anos, mais técnico do que físico. Com Summerville e Malen como alternativas pelas alas, se Gakpo receber o espaço que teve em 2022, vai finalizar." },
            { cat: "loucura", mercado: "Japão vence + over 2.5 gols", odd: 7.00, edge: 0.18, kelly: 0.01,
              justificativa: "P(JPN vence E total≥3) = P(JPN vence) − P(1-0) − P(2-0) = 0.292 − (0.363×0.214) − (0.214×0.214) = 0.292 − 0.077 − 0.046 = 16.9%. Edge = (0.169×7.00)−1 = 18.3%. Japão quando vence joga bem e marca em múltiplas situações — o 2-1 vs Alemanha em 2022 mostrou isso. Com Holanda tendo que atacar para empatar, espaços surgem. Correlação positiva: JPN vence → jogo aberto → mais gols." }
          ]
        },
        {
          hora: "20h",
          mandante: "Costa do Marfim",
          visitante: "Equador",
          grupo: "E",
          local: "Lincoln Financial Field, Philadelphia",
          placar: null,
          stats: "Jogo que pode definir o 2.º lugar do Grupo E (Alemanha favorita ao 1.º). Equador (Elo 1938, FIFA #23): invicto nos últimos 19 jogos; Enner Valencia (49 gols, capitão, 36 anos) é DÚVIDA por lesão muscular leve — pode iniciar no banco. Sem Valencia o ataque perde referência e artilheiro histórico. XI provável sem Valencia (4-3-3): Galíndez; Ordóñez, Hincapié, Pacho, Estupiñán; Plata, Caicedo, Vite; Minda, Yeboah, Alan Minda. Árbitro: François Letexier (França) — Campeão da Euro 2024 como árbitro, 4.3 amarelos/jogo na carreira, estilo disciplinado mas equilibrado. Costa do Marfim (Elo 1793, FIFA #33): campeã africana em vigor, Amad Diallo (Machester United) e Evann Guessand na frente, Kessie+Fofana no meio. Modelo: pM(ECU)=58.2%, pE=23.4%, pV(CIV)=18.4%, λECU=1.74, λCIV=0.86.",
          numeros: [
            { v: "58%", l: "Prob. Equador" },
            { v: "1.74", l: "λ Equador" },
            { v: "0.86", l: "λ C. do Marfim" },
            { v: "19", l: "Jogos inv. Equador" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Equador não perde (dupla hipótese)", odd: 1.42, edge: 0.16, kelly: 0.09,
              justificativa: "P(empate + ECU vence) = 23.4%+58.2% = 81.6%. Edge = (0.816×1.42)−1 = 15.9%. Equador invicto em 19 jogos consecutivos — equipe sólida defensivamente mesmo sem Valencia. Caicedo no miolo (Chelsea) é um dos melhores médios defensivos do mundo; Pacho e Hincapié (ambos com experiência europeia de Champions League) travam a defesa. Costa do Marfim é campeã africana mas ainda não testou defensores de nível Champions." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.14, kelly: 0.06,
              justificativa: "λ_total = 1.74+0.86 = 2.60. P(total≥2) = 1−e^(−2.60)×(1+2.60) = 1−0.074×3.60 = 73.3%. Edge = (0.733×1.55)−1 = 13.6%. Ambas as seleções vêm de campanhas ofensivas em suas qualificatórias. Letexier tende a deixar o jogo fluir sem interromper com cartões precoces — ambiente propenso a gols desde cedo." },
            { cat: "conservadora", mercado: "Enner Valencia marca (se jogar)", odd: 2.40, edge: 0.09, kelly: 0.02,
              justificativa: "λ_Valencia ≈ 1.74 × 0.35 = 0.609 (se titular; ajuste downward se sair do banco). P(marca) = 1−e^(−0.609) = 45.4%. Edge = (0.454×2.40)−1 = 9.0%. Valencia é artilheiro histórico do Equador com 49 gols — sua presença ou ausência é o maior X desta partida. Se jogar desde o início, torna-se a maior ameaça da Copa no dia. Dica condicionada à sua titularidade." },
            { cat: "intermediaria", mercado: "Costa do Marfim não perde (dupla hipótese)", odd: 2.70, edge: 0.13, kelly: 0.02,
              justificativa: "P(empate + CIV vence) = 23.4%+18.4% = 41.8%. Edge = (0.418×2.70)−1 = 12.9%. Valor de underdog: Costa do Marfim é campeã africana com Kessie+Fofana dominando o meio e Amad Diallo capaz de criar em velocidade. Equador sem Valencia perde o referencial do ataque — abre espaço para o equilíbrio que o modelo já indica (apenas 58% para Ecuador)." },
            { cat: "intermediaria", mercado: "Gonzalo Plata marca", odd: 3.80, edge: 0.12, kelly: 0.01,
              justificativa: "λ_Plata ≈ 1.74 × 0.20 = 0.348 (extremo direito, substituto natural de Valencia na criação). P(marca) = 1−e^(−0.348) = 29.4%. Edge = (0.294×3.80)−1 = 11.7%. Se Valencia não jogar, Plata assume papel de liderança na criação e finalização. Pela direita vai enfrentar Konan (Nantes) — lateral-esquerdo marfinense sem experiência de Champions. Letexier permite duelos físicos." },
            { cat: "loucura", mercado: "Equador vence + Valencia marca", odd: 4.00, edge: 0.16, kelly: 0.01,
              justificativa: "P ≈ P(ECU vence) × P(Valencia marca | ECU vence) = 0.582 × 0.50 = 29.1%. Edge = (0.291×4.00)−1 = 16.4%. Correlação positiva: se Equador vence, Valencia provavelmente foi decisivo (artilheiro histórico tende a marcar em vitórias). Combo natural se Valencia for titular. Mercado tende a sub-avaliar Valencia pela dúvida — se ele confirmar, odd de 4.00 representa valor real." }
          ]
        },
        {
          hora: "23h",
          mandante: "Suécia",
          visitante: "Tunísia",
          grupo: "F",
          local: "Estadio BBVA, Guadalupe (Monterrey)",
          placar: null,
          stats: "Suécia (Elo 1815, FIFA #38) retorna à Copa após perder a classificação em 2022 — motivação histórica. XI provável (4-4-2): V. Johansson; Lagerbielke, I. Hien, Lindelöf; Gudmundsson (recuperado de vírus), Svanberg, Karlström, Ekdal; Isak (Newcastle, 24G/38 caps), Gyokeres (Sporting, 4 gols nos play-offs, Bola de Ouro candidato), Elanga como 3.º atacante. Tunísia (Elo 1697, FIFA #46): pré-Copa horroroso — perdeu para Mali (AFCON), perdeu 1-0 pro Áustria, foi destruída 5-0 pela Bélgica. Hannibal Mejbri (Birmingham City) com dúvida de condicionamento. Árbitro a confirmar. Modelo: pM(SWE)=53.9%, pE=24.3%, pV(TUN)=21.8%, λSWE=1.67, λTUN=0.97.",
          numeros: [
            { v: "54%", l: "Prob. Suécia" },
            { v: "1.67", l: "λ Suécia" },
            { v: "0.97", l: "λ Tunísia" },
            { v: "5-0", l: "BEL×TUN amistoso" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.55, edge: 0.15, kelly: 0.07,
              justificativa: "λ_total = 1.67+0.97 = 2.64. P(total≥2) = 1−e^(−2.64)×(1+2.64) = 1−0.071×3.64 = 74.2%. Edge = (0.742×1.55)−1 = 15.0%. Suécia tem a melhor dupla de centroavantes estreantes da Copa (Gyokeres+Isak). Tunísia marcou vs Bélgica e Áustria em amistosos — não vai jogar fechada em um jogo que precisa de resultado. λ_TUN=0.97 confirma que ela tem potencial ofensivo." },
            { cat: "conservadora", mercado: "Viktor Gyokeres marca", odd: 2.30, edge: 0.08, kelly: 0.02,
              justificativa: "λ_Gyokeres ≈ 1.67 × 0.38 = 0.635 (38% dos gols suecos — 4 gols nos play-offs, artilheiro do Sporting 24/25). P(marca) = 1−e^(−0.635) = 47.0%. Edge = (0.470×2.30)−1 = 8.1%. Gyokeres é o finalizador mais prolífico da Copa até agora em termos de xG por chance. Contra Bronn e Ali Abdi na defesa tunisiana (Liga francesa, Ligue 2) — nível inferior ao que Gyokeres enfrenta na Champions. Estreia da Copa, motivação máxima." },
            { cat: "intermediaria", mercado: "Alexander Isak marca", odd: 2.45, edge: 0.09, kelly: 0.02,
              justificativa: "λ_Isak ≈ 1.67 × 0.35 = 0.585 (35% dos gols suecos — movimento e velocidade complementam o físico de Gyokeres). P(marca) = 1−e^(−0.585) = 44.3%. Edge = (0.443×2.45)−1 = 8.5%. Isak (Newcastle, 24G/38 caps internacionais) é mais técnico que físico — dribles e finalização de qualidade. A Tunísia que tomou 5 de Lukaku e companhia não tem estrutura para deter as duas referências ofensivas suecas simultaneamente." },
            { cat: "intermediaria", mercado: "Tunísia não perde (dupla hipótese)", odd: 2.40, edge: 0.11, kelly: 0.02,
              justificativa: "P(empate + TUN vence) = 24.3%+21.8% = 46.1%. Edge = (0.461×2.40)−1 = 10.6%. Contrarianism justificado: o modelo dá apenas 53.9% para a Suécia — não é favorita dominante. Tunísia tem talento individual (Hannibal se recuperar, Skhiri no meio) e historicamente resiste em estreias de Copa (2018: 2.º lugar do grupo; 2022: 0 GC nos 2 primeiros jogos). Se Hannibal jogar no ritmo certo, a Tunísia pode explorar transições." },
            { cat: "loucura", mercado: "Gyokeres e Isak ambos marcam", odd: 5.50, edge: 0.14, kelly: 0.01,
              justificativa: "P ≈ P(Gyokeres marca) × P(Isak marca) = 0.470 × 0.443 = 20.8%. Edge = (0.208×5.50)−1 = 14.4%. Independência relativa: Gyokeres é finalizador de área, Isak é criador+finalizador. Numa Suécia com λ=1.67, a distribuição entre os dois atacantes é natural — marcaram juntos em múltiplos amistosos de 2025/26. Tunísia tomou 5 de Bélgica: não é blindada para segurar dois noves de qualidade europeia por 90 min." },
            { cat: "loucura", mercado: "Suécia −1.5 handicap", odd: 3.80, edge: 0.13, kelly: 0.01,
              justificativa: "P(SWE vence por ≥2) = P(SWE vence) − P(SWE vence por exatamente 1) = 0.539 − (P(1-0)+P(2-1)+P(3-2)+...) ≈ 0.539 − 0.241 = 29.8%. Edge = (0.298×3.80)−1 = 13.2%. Com 5-0 contra a Bélgica no radar e Gyokeres+Isak juntos, a goleada sueca é o cenário que o mercado sub-avalia. Tunísia sem Hannibal no ritmo perde o equilíbrio no meio — e quando Suécia abre 2-0, tende a não recuar." }
          ]
        }
      ]
    }
  ]
};
