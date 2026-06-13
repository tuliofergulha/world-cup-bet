// Copa 2026 — Painel de Análise. Atualizado diariamente pelo briefing das 8h.
// Gerado automaticamente pela routine de análise (acessa sites + valida stats reais).
const DATA = {
  atualizadoEm: "2026-06-13T08:00:00-03:00",

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
          stats: "Maior desequilíbrio do dia. Suíça (FIFA #19, Elo 1891) vs Catar (FIFA #57, Elo 1421). Catar foi o 1º time anfitrião a perder na estreia em 2022 (0-2 vs Equador), caiu os 3 grupos (1GF, 7GC). Suíça venceu 6/6 eliminatórias com apenas 2GC. Xhaka (Arsenal, capitão, 36 anos, 130+ caps) dirige um meio-campo sem falhas; Embolo é o finalizador. Histórico: 1 jogo (amistoso 2018, Catar 1-0, gol Afif). Hassan Al-Haydos (35 anos, 186 caps) lidera um elenco envelhecido. Lopetegui substituído por Marquez López.",
          numeros: [
            { v: "91%", l: "Prob. Suíça" },
            { v: "2.91", l: "λ Suíça" },
            { v: "0.22", l: "λ Catar" },
            { v: "6/6", l: "Vitórias Suíça (elim.)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Suíça vence", odd: 1.10,
              justificativa: "90.8% pelo modelo Elo-Poisson. Catar perdeu os 3 grupos em 2022 com apenas 1 gol marcado e 7 sofridos. Suíça venceu todos os 6 jogos das eliminatórias com saldo +15. Xhaka e Freuler dominam o meio — o Catar não tem como competir em nível técnico." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.20,
              justificativa: "λ total = 3.13. Com Suíça esperando 2.91 gols e Catar com 0.22, é quase impossível o jogo terminar com 0 ou 1 gol. Simulação Poisson: >95% de 2+ gols." },
            { cat: "conservadora", mercado: "Suíça vence a zero", odd: 2.20,
              justificativa: "λ Catar = 0.22 → P(Catar não marca) = e^(−0.22) ≈ 80%. Catar não tem atacante de nível internacional — Al-Haydos tem 35 anos e Almoez Ali vai enfrentar Sommer (um dos GKs mais consistentes do mundo). Suíça concedeu apenas 2 gols em 6 eliminatórias." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.55,
              justificativa: "λ total = 3.13. Simulação Poisson: 63% de 3+ gols. Suíça com trio ofensivo Ndoye-Embolo-Vargas, enquanto o Catar tem defesa envelhecida (Khoukhi 35, Hatem 36, Boudiaf 35). Quando Suíça abre vantagem cedo, o jogo abre." },
            { cat: "intermediaria", mercado: "Breel Embolo marca", odd: 2.80,
              justificativa: "Artilheiro da Suíça — 10 gols em 2024 pelo país. Monaco 25/26: 14 gols em 35 jogos. É o 9 referencial, físico, inteligente nos canais e forte no ar. Contra a defesa lenta e envelhecida do Catar, deve ter múltiplas oportunidades." },
            { cat: "intermediaria", mercado: "Over 3.5 cartões no jogo", odd: 1.90,
              justificativa: "Catar vai fazer faltas táticas ao longo do jogo para travar a transição da Suíça. Com árbitro europeu para esse tipo de jogo e Suíça pressionando, o cartão amarelo vira ferramenta de sobrevivência do Catar." },
            { cat: "loucura", mercado: "Suíça vence + over 3.5 gols", odd: 3.80,
              justificativa: "λ Suíça = 2.91 e λ total = 3.13. Se a Suíça sair na frente cedo (alta probabilidade), o Catar vai ter que se abrir. Poisson: ~40% de 4+ gols. Suíça massacrou nas eliminatórias — 4-0, 5-1 foram resultados recorrentes." },
            { cat: "loucura", mercado: "Suíça −2.5 handicap", odd: 3.50,
              justificativa: "Com λ de 2.91 e um Catar com 0.22, goleada é o cenário esperado. Suíça teve saldo de gols de +15 nas eliminatórias. Se Embolo e companhia começam bem, o 3-0 ou 4-0 é tão provável quanto o 2-0." },
            { cat: "loucura", mercado: "Almoez Ali marca", odd: 5.00,
              justificativa: "O artilheiro histórico do Catar (39 gols) precisa criar algo do nada com λ = 0.22. Mas se o Catar conseguir um escanteio ou pênalti, Almoez é o executor. Com odds de 5.00, o valor especulativo existe — mesmo com apenas 20% de chance de Catar marcar." }
          ]
        },
        {
          hora: "19h",
          mandante: "Brasil",
          visitante: "Marrocos",
          grupo: "C",
          local: "MetLife Stadium, East Rutherford (Nova York)",
          placar: null,
          stats: "O duelo mais esperado do dia. Brasil (Elo 1991, FIFA #6) vem sem Neymar (lesão muscular desde maio), mas com Vinicius Jr. (Ballon d'Or 2024, 36G+A no La Liga 24/25), Raphinha (Barcelona, 42 G+A na temporada) e Ancelotti estreando como técnico. 3 amistosos pré-Copa: 3-1 Croácia, 6-2 Panamá, 2-1 Egito. Marrocos (Elo 1827, FIFA #7): sem Ziyech (excluído) e sem Aguerd (joelho). Hakimi confirmado após recuperar de lesão. En-Nesyri (11 gols nas Eliminatórias CAF) é o centroavante. Pré-Copa: 4-0 Burundi, 5-0 Madagascar, 1-1 Noruega. H2H: Brasil 3-0 na Copa 1998. Marrocos 2-1 em amistoso (set/2023).",
          numeros: [
            { v: "61%", l: "Prob. Brasil" },
            { v: "1.79", l: "λ Brasil" },
            { v: "0.80", l: "λ Marrocos" },
            { v: "36", l: "Gols Vinicius Jr. (Real 24/25)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Under 2.5 gols", odd: 1.90,
              justificativa: "λ total = 2.59. Marrocos concedeu apenas 3 gols em 6 jogos das Eliminatórias CAF (0.50/jogo) — defesa organizada com Mazraoui, Hakimi e bloco baixo de Regragui. Estreias de Copa são historicamente travadas. Poisson: 52% de chance de under 2.5." },
            { cat: "conservadora", mercado: "Brasil vence", odd: 1.65,
              justificativa: "61% pelo modelo. Vinicius Jr. é o melhor jogador do planeta — 36 gols no Real Madrid, cobrador de pênaltis, intocável pelos lados. Sem Ziyech (criativo principal) e sem Aguerd (melhor zagueiro), Marrocos chega diminuída. Ancelotti sabe montar times para vencer jogos difíceis." },
            { cat: "conservadora", mercado: "Empate no intervalo", odd: 2.10,
              justificativa: "Marrocos historicamente é resiliente nos primeiros 45min — foi assim em quase toda a campanha do 2022. Defesa de Regragui resiste no 1T e cresce no 2T. Brasil tende a aumentar o ritmo no segundo tempo. Mercado ignora esse padrão tático marroquino." },
            { cat: "intermediaria", mercado: "Vinicius Jr. marca", odd: 2.40,
              justificativa: "Ballon d'Or 2024, 36 gols no La Liga, cobrador de pênaltis da seleção brasileira. Com Neymar fora, Vinicius é o protagonista absoluto. Vai encarar Mazraoui (RB) — duelo de elite, mas Vinicius tem mais imposição ofensiva. É o candidato nº1 para qualquer gol do Brasil." },
            { cat: "intermediaria", mercado: "Marrocos não perde (dupla hipótese)", odd: 2.60,
              justificativa: "39% de não-vitória do Brasil (22.7%E + 16.2%V). Marrocos foi semifinalista em 2022, tem En-Nesyri perigoso nas bolas paradas e Hakimi como arma ofensiva pela direita. Sem Neymar, o Brasil pode ser menos criativo. 1-1 ou mesmo 1-0 Marrocos são plausíveis." },
            { cat: "intermediaria", mercado: "Over 9.5 escanteios", odd: 1.85,
              justificativa: "Brasil ataca pelas duas alas (Vinicius pela esquerda, Raphinha pela direita). Marrocos defende com dois blocos compactos — limpa cruzamentos pela linha de fundo em vez de arriscar no centro. Padrão marroquino gera muitos escanteios para o adversário." },
            { cat: "loucura", mercado: "Empate", odd: 3.40,
              justificativa: "22.7% de empate pelo modelo — justo odds seria ~4.40, mas 3.40 indica valor. Marrocos é uma das seleções mais resilientes do mundo atual. Sem Neymar, Brasil pode ser menos inspirado no ataque. 1-1 é um placar completamente realista." },
            { cat: "loucura", mercado: "Brasil vence + Vinicius Jr. marca + under 2.5 gols", odd: 5.50,
              justificativa: "Combo correlacionado: se o Brasil vence de 1-0 ou 2-0, Vinicius tende a estar no placar (é o atacante principal) e o jogo é naturalmente under com a defesa marroquina. As três pernas andam juntas no roteiro de 'vitória apertada com gol do craque'." },
            { cat: "loucura", mercado: "En-Nesyri marca", odd: 5.00,
              justificativa: "Artilheiro das Eliminatórias CAF (11 gols) e especialista em cabeceios e bolas paradas. Sem Aguerd na zaga, Marrocos vai tentar contra-atacar — En-Nesyri é a ameaça real. Se o Brasil jogar aberto, os cruzamentos do Hakimi podem encontrá-lo na área." }
          ]
        },
        {
          hora: "22h",
          mandante: "Escócia",
          visitante: "Haiti",
          grupo: "C",
          local: "Gillette Stadium, Boston (Foxborough)",
          placar: null,
          stats: "Duelo histórico: Escócia em sua 1ª Copa desde 1998 (28 anos de espera!) e Haiti de volta depois de 52 anos (última Copa: 1974). Robertson (Liverpool, capitão), McTominay (Napoli, 11G na Serie A 24/25), Tierney, McKenna. Ataque: Shankland + Adams. Técnico: Steve Clarke. Amistosos pré-Copa: 5-0 Curaçao, 3-1 Bolívia. Haiti (WR 83): Nazon (artilheiro histórico, 20+ gols), Providence, Isidor. Maioria dos jogadores no MLS e Ligue 2. H2H: Escócia 1-0 Haiti na Copa 1974 (gol Joe Jordan). Modelo: pM (Escócia) = 64.8%, pE = 21.6%, pV (Haiti) = 13.6%, λEscócia = 1.87, λHaiti = 0.72.",
          numeros: [
            { v: "65%", l: "Prob. Escócia" },
            { v: "1.87", l: "λ Escócia" },
            { v: "0.72", l: "λ Haiti" },
            { v: "11", l: "Gols McTominay (Serie A 24/25)" }
          ],
          dicas: [
            { cat: "conservadora", mercado: "Escócia vence", odd: 1.60,
              justificativa: "64.8% pelo modelo. Haiti é WR 83, sem jogadores em ligas top (MLS e Ligue 2). Escócia veio de 5-0 Curaçao e 3-1 Bolívia nos amistosos — em ritmo. Robertson e McTominay são demais tecnicamente para o Haiti aguentar 90 minutos." },
            { cat: "conservadora", mercado: "Over 1.5 gols", odd: 1.50,
              justificativa: "λ total = 2.59. Escócia vai atacar (λ 1.87) — Robertson orquestra pela esquerda, Gannon-Doak pela direita. Dificilmente fica 0-0 com essa pressão escocesa por 90min. Poisson: >90% de pelo menos 2 gols." },
            { cat: "conservadora", mercado: "Escócia vence a zero", odd: 2.60,
              justificativa: "Haiti λ = 0.72 → P(Haiti não marca) = e^(−0.72) ≈ 49%. Metade das vezes o Haiti não marca. Sem atacantes de qualidade internacional, Nazon tende a ser isolado. McKenna e Souttar são a coluna vertebral da defesa escocesa." },
            { cat: "intermediaria", mercado: "Over 2.5 gols", odd: 1.85,
              justificativa: "λ total = 2.59. Escócia veio de 5-0 e 3-1 nos amistosos. Haiti, ao entrar atrás no placar, vai ter que se abrir no 2T — e Escócia tem Robertson, Christie e Adams para explorar espaços. Poisson: ~54% de 3+ gols." },
            { cat: "intermediaria", mercado: "Scott McTominay marca", odd: 2.80,
              justificativa: "11 gols pelo Napoli na Serie A 24/25, excelente finalizador de média distância e bolas paradas. Principal ameaça ofensiva da Escócia além dos atacantes. Em estilo Copa (jogo mais aberto), McTominay é o tipo de jogador que aparece nos momentos decisivos." },
            { cat: "intermediaria", mercado: "Escócia vence + over 2.5 gols", odd: 2.80,
              justificativa: "Escócia domina (64.8%) num jogo com λ total de 2.59. Se Robertson e Gannon-Doak criarem espaços com Haiti abrindo para atacar, 2-0 ou 3-0 é realista. Haiti não tem estrutura defensiva para segurar por 90min sem ceder gols." },
            { cat: "loucura", mercado: "Escócia −1.5 handicap", odd: 3.20,
              justificativa: "64.8% de vitória e superioridade técnica enorme. Haiti em sua 1ª Copa desde 1974 pode ser sobrecarregado emocionalmente no Gillette Stadium. Se Escócia sair na frente com Robertson+McTominay funcionando, o floodgates pode abrir como foi nos amistosos (5-0)." },
            { cat: "loucura", mercado: "Haiti marca", odd: 2.10,
              justificativa: "λ = 0.72 → 51% de chance de marcar pelo Poisson. Haiti tem velocidade no contra-ataque (Nazon, Isidor). Se Escócia se lançar todo no ataque buscando o gol, pode levar um gol de contra. Com 2.10 de odds e 51% de probabilidade, é o melhor valor dessa lista." },
            { cat: "loucura", mercado: "Empate", odd: 4.00,
              justificativa: "21.6% de empate pelo modelo — odds justo seria ~4.63, mas 4.00 tem valor. Haiti pode ser resiliente como foram outros 'azarões' em 2022. Jogam em blocos fechados. Se o placar ficar 0-0 até os 70min, Escócia entra em pânico e 0-0 ou 1-1 se tornam realistas." }
          ]
        }
      ]
    }
  ]
};
