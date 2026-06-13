// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-13T14:45:00-03:00",

  // Campos não-deriváveis do placar — preenchidos pela routine. Totais (jogos/gols/média)
  // são auto-calculados pelo app a partir dos placares.
  estatisticasManuais: {
    cartoesAmarelos: 7,
    escanteiosMed: "9.2"
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
      titulo: "Dia 3 — Brasil estreia",
      contexto: "O grande dia: Brasil enfrenta Marrocos no MetLife Stadium (NY) às 19h. Catar e Suíça abrem o dia às 16h em Santa Clara — missão quase impossível para os catarenses (modelo: 90.8% Suíça). À noite, Escócia e Haiti fazem a estreia histórica de dois países que voltam à Copa após décadas. Brasil chega sem Neymar (lesão muscular), mas com Vinicius Jr. e Raphinha intactos e Ancelotti estreando como técnico.",
      jogos: [
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Catar",
          grupo: "B",
          local: "Levi's Stadium, Santa Clara (SF Bay Area)",
          placar: null,
          stats: "Maior desequilíbrio do dia. Suíça (FIFA #19, Elo 1891) vs Catar (FIFA #57, Elo 1421). Catar foi o 1º time anfitrião a perder na estreia em 2022 (0-2 vs Equador), caiu os 3 grupos (1GF, 7GC). Suíça venceu 6/6 eliminatórias com apenas 2GC. Xhaka (Arsenal, capitão, 36 anos, 130+ caps) dirige um meio-campo sem falhas; Embolo é o finalizador. Histórico: 1 jogo (amistoso 2018, Catar 1-0, gol Afif). Hassan Al-Haydos (35 anos, 186 caps) lidera um elenco envelhecido. Lopetegui substituído por Marquez López. XI confirmados — Suíça: Kobel; Widmer, Akanji, Elvedi, Rodriguez; Xhaka, Freuler; Vargas, Rieder, Ndoye; Embolo. Catar: Abunada; Al Oui, Miguel, Khoukhi, Elamin; Laye, Fathi, Gaber; Edmilson Jr., Almoez Ali, Afif. Árbitro: Saíd Martínez (Honduras) — estreante como árbitro-chefe em Copa; foi assistente em 2022. Média de 3.2 amarelos/jogo no WC 2026 (6 jogos). Perfil conservador em grandes torneios.",
          numeros: [
            { v: "91%", l: "Prob. Suíça" },
            { v: "2.91", l: "λ Suíça" },
            { v: "0.22", l: "λ Catar" },
            { v: "6/6", l: "Vitórias Suíça (elim.)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Suíça vence a zero", odd: 2.20, edge: 0.67, kelly: 0.14,
              justificativa: "P(Suíça a zero) = P(Catar=0) × P(Suíça≥1) = e^(−0.22) × (1−e^(−2.91)) = 0.803 × 0.946 = 0.759. Edge = (0.759 × 2.20) − 1 = 67%. Árbitro Saíd Martínez é conservador (3.2 cartões/jogo), não vai inflar o jogo com pênaltis — P(pênalti Catar) é baixíssima. Kobel (Dortmund) concedeu apenas 2 gols em 6 eliminatórias. Defesa Catar: Khoukhi 35, Elamin inexperiente." },
            { cat: "conservadora", mercado: "Suíça marca no 1T", odd: 1.85, edge: 0.42, kelly: 0.12,
              justificativa: "λ Suíça 1T ≈ 2.91/2 = 1.455. P(≥1 gol no 1T) = 1−e^(−1.455) = 76.6%. Edge = (0.766 × 1.85) − 1 = 42%. Catar costuma jogar recuado, criando espaços para contra-ataques rápidos da Suíça — Ndoye e Vargas pelas alas são rápidos. Saíd Martínez não bloqueia a transição com cartões precoces." },
            { cat: "intermediaria", mercado: "Breel Embolo marca", odd: 2.80, edge: 0.45, kelly: 0.06,
              justificativa: "λ_Embolo ≈ 2.91 × 0.25 = 0.728 (25% dos gols suíços). P(marca) = 1−e^(−0.728) = 51.7%. Edge = (0.517 × 2.80) − 1 = 45%. Monaco 25/26: 14 gols em 35 jogos. É o 9 referencial — físico, forte no ar contra defesa Catar envelhecida (Khoukhi 35, Miguel sem experiência Copa)." },
            { cat: "intermediaria", mercado: "Ruben Vargas marca", odd: 3.00, edge: 0.32, kelly: 0.04,
              justificativa: "λ_Vargas ≈ 2.91 × 0.20 = 0.582 (winger ativo). P(marca) = 1−e^(−0.582) = 44.1%. Edge = (0.441 × 3.00) − 1 = 32%. Vargas pela esquerda vai encarar Al Oui, lateral direito do Catar sem experiência internacional de ponta. Com Suíça dominando, Vargas tem múltiplas entradas na área." },
            { cat: "intermediaria", mercado: "Over 3.5 cartões no jogo", odd: 2.80, edge: 0.10, kelly: 0.01,
              justificativa: "P(≥4 cartões) com Saíd Martínez (λ=3.2 no WC): Poisson → P(≥4) = 39.4%. Edge = (0.394 × 2.80) − 1 = 10%. Catar, desesperado para travar transições da Suíça, fará faltas táticas repetidas. Árbitro inexperiente como chefe pode reagir distribuindo cartões ao sentir o jogo fugir do controle no 2T." },
            { cat: "loucura", mercado: "Suíça vence + over 3.5 gols", odd: 3.80, edge: 0.42, kelly: 0.04,
              justificativa: "P(Suíça vence E total≥4) = soma sobre i>j com i+j≥4 dos P(SUI=i)×P(CAT=j) ≈ 37.3%. Edge = (0.373 × 3.80) − 1 = 42%. λSUI=2.91 garante que goleadas são o cenário modal. Nas eliminatórias suíças: 4-0, 5-1 foram frequentes. Catar abre ao precisar de gol no 2T." },
            { cat: "loucura", mercado: "Suíça −2.5 handicap", odd: 3.50, edge: 0.79, kelly: 0.08,
              justificativa: "P(Suíça vence por ≥3) ≈ 51.1% — enumeração Poisson sobre pares (SUI,CAT) com SUI−CAT≥3. Edge = (0.511 × 3.50) − 1 = 79%. Mercado coloca a vitória por 3+ como evento raro, mas o modelo (λSUI=2.91, λCAT=0.22) indica que é o cenário esperado. Saldo eliminatórias: +15 gols." }
          ]
        },
        {
          hora: "19h",
          mandante: "Brasil",
          visitante: "Marrocos",
          grupo: "C",
          local: "MetLife Stadium, East Rutherford (Nova York)",
          placar: null,
          stats: "O duelo mais esperado do dia. Brasil (Elo 1991, FIFA #6) vem sem Neymar (lesão grau 2 na panturrilha) e sem Wesley (lesão muscular, cortado do Mundial) — Danilo joga como LD e Alex Sandro como LE. Vinicius Jr. (Ballon d'Or 2024, 36G+A no La Liga 24/25), Raphinha e Ancelotti estreando como técnico. XI provável: Alisson; Danilo, Marquinhos, Gabriel Magalhães, Alex Sandro; Casemiro, Bruno Guimarães; Raphinha, Lucas Paquetá, Vinicius Jr.; Matheus Cunha. Marrocos (Elo 1827, FIFA #7): sem Ziyech (excluído), sem Aguerd (joelho, corte), sem Ezzalzouli (joelho, corte). Mazraoui (luxação parcial no ombro em amistoso vs Noruega) treinou normalmente na quinta e está confirmado — mas pode estar a ~85%. En-Nesyri (11 gols nas Eliminatórias CAF) INICIA NO BANCO; ataque titular: Brahim Díaz, Talbi, Saibari. XI provável: Bounou; Hakimi, Issa Diop, Chadi Riad, Mazraoui; El Aynaoui, Bouaddi, Ounahi; Brahim Díaz, Talbi, Saibari. H2H: Brasil 3-0 na Copa 1998. Marrocos 2-1 em amistoso (set/2023). Árbitro: Slavko Vincic (Eslovênia, 46 anos) — 4.13 amarelos/jogo na carreira (330 jogos), 0 vermelhos em 2 jogos de Copa, 0.29 pênaltis/jogo na 2025/26. Experiente e equilibrado, não tende a inflar cartões em jogos de alto calibre.",
          numeros: [
            { v: "61%", l: "Prob. Brasil" },
            { v: "1.79", l: "λ Brasil" },
            { v: "0.80", l: "λ Marrocos" },
            { v: "36", l: "Gols Vinicius Jr. (Real 24/25)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Empate no intervalo", odd: 2.10, edge: 0.16, kelly: 0.04,
              justificativa: "P(empate HT) ≈ 55% com base no padrão de Marrocos em 2022: foi ao intervalo empatado em todos os jogos da fase de grupos. Defesa de Regragui (bloco baixo 4-4-2) resiste no 1T e Brasil tende a forçar mais no 2T. Edge = (0.55 × 2.10) − 1 = 16%. Vincic não precipita o jogo com cartões no 1T — fase inicial tende a ser estudada." },
            { cat: "conservadora", mercado: "Brasil marca no 1T", odd: 1.80, edge: 0.07, kelly: 0.02,
              justificativa: "λ Brasil 1T ≈ 1.79/2 = 0.895. P(≥1 gol Brasil no 1T) = 1−e^(−0.895) = 59.2%. Edge = (0.592 × 1.80) − 1 = 7%. Com Vinicius pela esquerda e Raphinha pela direita dominando desde o apito inicial, e Marrocos sem Aguerd (melhor zagueiro, cortado), a probabilidade de gol brasileiro no 1T é real mesmo contra o bloco marroquino." },
            { cat: "intermediaria", mercado: "Vinicius Jr. marca", odd: 2.40, edge: 0.16, kelly: 0.03,
              justificativa: "λ_Vini = 1.79 × 0.35 × 1.05 = 0.658 (35% dos gols do Brasil, ajuste +5% por Mazraoui comprometido). P = 1−e^(−0.658) = 48.2%. Edge = (0.482 × 2.40) − 1 = 16%. Vai encarar Mazraoui (LB) a ~85% fisicamente — luxação parcial no ombro. Duelos de velocidade e dribling ficam desequilibrados. É o cobrador de pênaltis e protagonist absoluto sem Neymar." },
            { cat: "intermediaria", mercado: "Matheus Cunha marca", odd: 4.00, edge: 0.20, kelly: 0.02,
              justificativa: "λ_Cunha = 1.79 × 0.20 = 0.358 (centroavante titular). P = 1−e^(−0.358) = 30.1%. Edge = (0.301 × 4.00) − 1 = 20%. Com Neymar fora, Cunha é o 9 titular de Ancelotti — físico, gosta de duelar com zagueiros. Issa Diop (CB, 1.93m) é sólido mas lento. Mercado ainda subestima Cunha fora do contexto do Atletico Madrid." },
            { cat: "intermediaria", mercado: "Lucas Paquetá marca", odd: 4.50, edge: 0.24, kelly: 0.02,
              justificativa: "λ_Paquetá = 1.79 × 0.18 = 0.322 (meia por trás com liberdade de chegar). P = 1−e^(−0.322) = 27.6%. Edge = (0.276 × 4.50) − 1 = 24%. Paquetá joga na meia-esquerda e tem liberdade de inserção na área — marcou 8 gols na Premier League 24/25. Vincic não costuma negar pênaltis claros (0.29/jogo): se Paquetá entrar na área, é risco real para Marrocos." },
            { cat: "loucura", mercado: "Brasil vence a zero", odd: 4.00, edge: 0.10, kelly: 0.01,
              justificativa: "P = P(Brasil vence) × P(Marrocos=0) = 0.61 × e^(−0.80) = 0.61 × 0.449 = 27.4%. Edge = (0.274 × 4.00) − 1 = 10%. Sem Aguerd (melhor zagueiro), Ziyech (criativo) e Ezzalzouli (extremo), o ataque marroquino é Brahim Díaz + Talbi — menos ameaçador. Alisson não cometeu erros graves em 2025/26 e Marquinhos domina os duelos aéreos." },
            { cat: "loucura", mercado: "Brasil vence + over 2.5 gols", odd: 4.00, edge: 0.36, kelly: 0.03,
              justificativa: "P(Brasil vence E total≥3) ≈ 34.1% via enumeração Poisson — inclui 2-1, 3-0, 3-1, 2-0+Marrocos 0 (total=2, não conta), 4-0 etc. Edge = (0.341 × 4.00) − 1 = 36%. Ancelotti é um treinador que prefere vencer com estilo — se o Brasil abrir 2-0, não fecha o jogo como Regragui. Com Marrocos precisando atacar para empatar, espaços surgem no 2T." }
          ]
        },
        {
          hora: "22h",
          mandante: "Escócia",
          visitante: "Haiti",
          grupo: "C",
          local: "Gillette Stadium, Boston (Foxborough)",
          placar: null,
          stats: "Duelo histórico: Escócia em sua 1ª Copa desde 1998 (28 anos de espera!) e Haiti de volta depois de 52 anos (última Copa: 1974). Robertson (Liverpool, capitão), McTominay (Napoli, 11G na Serie A 24/25) CONFIRMADO após recuperação de gripe estomacal. Billy Gilmour CORTADO do Mundial (substituído por Tyler Fletcher, Manchester United). XI provável: Gunn; Hickey, Souttar, McKenna, Robertson; Gannon-Doak, McTominay, Ferguson, Christie; Adams, Shankland. Técnico: Steve Clarke. Amistosos pré-Copa: 5-0 Curaçao, 3-1 Bolívia. Haiti (WR 83): sem lesões. Nazon (artilheiro histórico, 20+ gols), Providence, Isidor confirmados. XI provável (4-4-2): Placide; Arcus, Ade, Delcroix, Experience; Casimir, Jean Jacques, Bellegarde, Providence; Nazon, Isidor. Árbitro: Mustapha Gorbal (Argélia). H2H: Escócia 1-0 Haiti na Copa 1974 (gol Joe Jordan). Modelo: pM (Escócia) = 64.8%, pE = 21.6%, pV (Haiti) = 13.6%, λEscócia = 1.87, λHaiti = 0.72.",
          numeros: [
            { v: "65%", l: "Prob. Escócia" },
            { v: "1.87", l: "λ Escócia" },
            { v: "0.72", l: "λ Haiti" },
            { v: "11", l: "Gols McTominay (Serie A 24/25)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50, edge: 0.10, kelly: 0.05,
              justificativa: "P(total≥2) com λ_total=2.59: 1 − P(0) − P(1) = 1 − 0.075 − 0.194 = 73.1%. Edge = (0.731 × 1.50) − 1 = 10%. Escócia vem de 5-0 e 3-1 nos amistosos — Robertson orquestra pela esquerda, Gannon-Doak pela direita. Haiti não tem estrutura para 90min de pressão sem ceder ao menos 1 gol. Mercado priced muito apertado, mas o edge existe." },
            { cat: "conservadora", mercado: "Over 3.5 cartões no jogo", odd: 1.90, edge: 0.08, kelly: 0.02,
              justificativa: "Ghorbal (Argélia) no WC 2026: média de 4.0 cartões/jogo e 28.8 faltas/jogo. P(≥4 cartões) com Poisson(4.0) = 56.7%. Edge = (0.567 × 1.90) − 1 = 8%. Haiti faz muitas faltas táticas (MLS, Ligue 2 — físico e intenso). Escócia também joga duro com McTominay e Ferguson no meio. Árbitro africano tende a reagir rapidamente com cartões." },
            { cat: "intermediaria", mercado: "Scott McTominay marca", odd: 2.80, edge: 0.11, kelly: 0.02,
              justificativa: "λ_McTominay ≈ 1.87 × 0.27 = 0.505. P(marca) = 1−e^(−0.505) = 39.6%. Edge = (0.396 × 2.80) − 1 = 11%. 11 gols pelo Napoli na Serie A 24/25. Finalizador de média distância e bolas paradas — Haiti vai fazer faltas perto da área (Ghorbal = 28.8 faltas/jogo). McTominay cobra falta e chega na segunda bola melhor que qualquer jogador do Haiti." },
            { cat: "intermediaria", mercado: "Che Adams marca", odd: 3.50, edge: 0.50, kelly: 0.05,
              justificativa: "λ_Adams ≈ 1.87 × 0.30 = 0.561. P(marca) = 1−e^(−0.561) = 42.9%. Edge = (0.429 × 3.50) − 1 = 50%. Adams é o atacante referencial da Escócia — duelos físicos com Ade e Delcroix (defensores haitianos em ligas baixas). Nos amistosos Escócia encontrou Adams como artilheiro da campanha. Mercado subestima o 9 escocês vs uma defesa de Ligue 2 e segunda divisão." },
            { cat: "intermediaria", mercado: "Haiti marca", odd: 2.10, edge: 0.08, kelly: 0.02,
              justificativa: "P(Haiti≥1) = 1−e^(−0.72) = 51.3%. Edge = (0.513 × 2.10) − 1 = 8%. Nazon (artilheiro histórico Haiti, velocidade no contra-ataque) e Isidor têm explosão. Se Escócia criar o placar cedo e jogar aberta buscando mais gols, o Haiti pode roubar um contra-ataque. Ghorbal (28.8 faltas/jogo) → pênalti é possível se Haiti entrar na área." },
            { cat: "loucura", mercado: "Escócia −1.5 handicap", odd: 3.20, edge: 0.25, kelly: 0.03,
              justificativa: "P(Escócia vence por ≥2) ≈ 39.1% via Poisson sobre pares (ESC=k, HAI=j) com k−j≥2. Edge = (0.391 × 3.20) − 1 = 25%. Haiti na 1ª Copa desde 1974 — pressão emocional enorme no Gillette Stadium. Nos amistosos escoceses: 5-0 e 3-1. Com Robertson+McTominay e uma defesa haitiana de nível Ligue 2 vs Série A italiana, a goleada é cenário plausível." },
            { cat: "loucura", mercado: "Escócia vence + Haiti marca", odd: 5.00, edge: 0.18, kelly: 0.01,
              justificativa: "P(ESC>HAI E HAI≥1) = soma sobre pares i>j≥1: (2,1)+(3,1)+(3,2)+(4+,1)+(4+,2)+(4+,3) ≈ 23.6%. Edge = (0.236 × 5.00) − 1 = 18%. Cenário: Escócia domina mas Haiti marca em contra ou pênalti (Ghorbal + Nazon = risco real). 2-1 ou 3-1 são placares realistas. Combo correlacionado positivamente — se Haiti marcar significa que houve abertura de jogo que favorece mais gols da Escócia também." }
          ]
        }
      ]
    }
  ]
};
