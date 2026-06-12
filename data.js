// Copa 2026 — Central de Apostas. Atualizado diariamente pelo briefing das 8h.
// status: "pendente" | "ganhou" | "perdeu" | "anulada"
// Estilo bet365: simples + "Criar Aposta" (combos correlacionados). Sem placar exato.
const DATA = {
  atualizadoEm: "2026-06-11T21:00:00-03:00",
  unidade: "1u = 1% da banca (sugestão)",
  dias: [
    {
      data: "2026-06-11",
      titulo: "Dia 1 — Abertura: México × África do Sul + Coreia × Tchéquia",
      jogos: [
        { hora: "16h", partida: "México 2 × 0 África do Sul — ENCERRADO", grupo: "A", local: "Estádio Azteca, Cidade do México",
          stats: "Modelo previu exatamente 2×0 (90% vitória, λ 2.76×0.18) ✓ · Primeiro teste do Elo-Poisson: aprovado" },
        { hora: "23h", partida: "Coreia do Sul × Tchéquia", grupo: "A", local: "Estadio Akron, Guadalajara",
          stats: "Modelo: 39/26/34 — jogo mais equilibrado da 1ª rodada · λ 1.37×1.26 (total esperado: 2.63 gols) · Coreia 39% × Empate 26% × Tchéquia 34% · Equilíbrio raro na fase de grupos" }
      ],
      contexto: "Abertura precisa: modelo cravou México 2×0 África do Sul (λ 2.76×0.18, 90% vitória) — resultado e placar. À noite, Coreia × Tchéquia encerra o Dia 1 no Estadio Akron: jogo mais equilibrado de toda a 1ª rodada, apostas ativas.",
      apostas: [
        { cat: "conservadora", mercado: "Ambas marcam — Coreia do Sul × Tchéquia", odd: 1.75, stake: 1.5, status: "pendente",
          justificativa: "λ moderados dos dois lados (1.37×1.26): Poisson indica ~53% de ambas marcarem. Son para Coreia, Schick para Tchéquia — dois centroavantes de referência e nenhum time vem com bloco ultra-defensivo na estreia." },
        { cat: "intermediaria", mercado: "Empate — Coreia do Sul × Tchéquia", odd: 3.20, stake: 1, status: "pendente",
          justificativa: "Jogo mais equilibrado da 1ª rodada (modelo: 39/26/34). Com λ quase iguais (1.37×1.26), nenhum time domina; estreias de Copa incentivam cautela. Empate é o resultado individualmente mais provável." },
        { cat: "intermediaria", mercado: "Tchéquia vence — Coreia do Sul × Tchéquia", odd: 3.10, stake: 0.75, status: "pendente",
          justificativa: "Modelo dá 34.4% para a Tchéquia. Se o mercado paga 3.10 (implícito: ~32%), há valor marginal. Tchéquia tem Schick + Souček; Coreia joga em estádio mexicano sem grande apoio da torcida." },
        { cat: "loucura", mercado: "Criar Aposta: Tchéquia vence + mais de 2.5 gols", odd: 8.0, stake: 0.25, status: "pendente",
          justificativa: "Tchéquia vence (34.4%) num jogo com total esperado de 2.63 gols (~49% over 2.5). Se a Tchéquia vencer, o roteiro tende a ser mais aberto — as pernas são correlacionadas no roteiro 'ataque tcheco se solta'." }
      ]
    },
    {
      data: "2026-06-12",
      titulo: "Dia 2 — Canadá e EUA estreiam (Grupos B e D)",
      jogos: [
        { hora: "16h", partida: "Canadá × Bósnia e Herz.", grupo: "B", local: "BMO Field, Toronto",
          stats: "Modelo: 77% Canadá, λ 2.24×0.52 · Sem Alphonso Davies · J. David: camisa 9 e cobrador de pênaltis · Bósnia (Elo 1595) deve jogar fechada" },
        { hora: "22h", partida: "EUA × Paraguai", grupo: "D", local: "SoFi Stadium, Los Angeles",
          stats: "Paraguai: 10 gols sofridos em 18 jogos — Eliminatória mais 'under' do CONMEBOL · 13.7 faltas/jogo (2ª mais faltosa) · D. Gómez: 9 amarelos e 48 faltas na PL 25/26 · EUA: posse + jogo pelos lados (Robinson/Dest) contra bloco baixo" }
      ],
      contexto: "Canadá e EUA estreiam em casa. Suíça × Catar foi movido para 13/jun (dia correto na tabela FIFA). Desfalques: Davies fora (Canadá); Chris Richards confirmado (EUA).",
      apostas: [
        { cat: "conservadora", mercado: "Criar Aposta (EUA × Paraguai): Menos de 2.5 gols + EUA mais de 8.5 escanteios", odd: 2.10, stake: 2, status: "pendente",
          justificativa: "Combo correlacionado: Paraguai sofreu 0.56 gol/jogo nas Eliminatórias (10 em 18) e joga em bloco baixo 4-4-2 → EUA forçado a cruzar dos lados → escanteios + poucos gols. Estreias de Copa são historicamente travadas." },
        { cat: "conservadora", mercado: "Criar Aposta (Canadá × Bósnia): Canadá vence + Jonathan David marca", odd: 2.50, stake: 1.5, status: "pendente",
          justificativa: "Modelo dá 77% pro Canadá (λ 2.24). David é o camisa 9, cobrador de pênaltis e referência absoluta sem Davies. Se o Canadá vence em casa, a probabilidade de David participar do placar é alta — pernas correlacionadas." },
        { cat: "intermediaria", mercado: "Diego Gómez recebe cartão (EUA × Paraguai)", odd: 3.00, stake: 1, status: "pendente",
          justificativa: "9 amarelos e 48 faltas em 2.136 min pelo Brighton na PL 25/26. Vai ser o destruidor escalado em cima do Pulisic num jogo de estreia tenso — perfil perfeito de cartão." },
        { cat: "intermediaria", mercado: "Criar Aposta (EUA × Paraguai): Empate + menos de 2.5 gols", odd: 4.50, stake: 0.75, status: "pendente",
          justificativa: "Modelo vê coin-flip (38/26/36) e o mercado superprecifica o mando dos EUA. Se empatar, quase certamente é 0-0 ou 1-1 (perfil under do Paraguai) — as duas pernas andam juntas." },
        { cat: "loucura", mercado: "Criar Aposta (EUA × Paraguai): Empate + menos de 2.5 gols + mais de 5.5 cartões", odd: 12.0, stake: 0.25, status: "pendente",
          justificativa: "O 'jogo feio completo': truncado, faltoso (Paraguai 13.7 faltas/jogo) e sem vencedor. Três pernas 100% correlacionadas — se o roteiro do bloco baixo se confirmar, tudo bate junto." },
        { cat: "loucura", mercado: "Criar Aposta (Canadá × Bósnia): Canadá vence por 3+ (handicap −2.5) + J. David marca 2 ou mais", odd: 11.0, stake: 0.25, status: "pendente",
          justificativa: "Roteiro goleada: Canadá precisa inflar o saldo de gols (desempate com a Suíça no grupo) contra o pior time do Grupo B. Se sair cedo o 1º, David é quem mais finaliza na área." }
      ]
    },
    {
      data: "2026-06-13",
      titulo: "Dia 3 — Brasil estreia + Suíça e Escócia (Grupos B e C)",
      jogos: [
        { hora: "16h", partida: "Suíça × Catar", grupo: "B", local: "Levi's Stadium, Santa Clara",
          stats: "Modelo: 91% Suíça, λ 2.80×0.18 · Embolo: artilheiro suíço das Eliminatórias (6 gols) · Catar: pior Elo do torneio (1421, 57º FIFA)" },
        { hora: "19h", partida: "Brasil × Marrocos", grupo: "C", local: "MetLife Stadium, East Rutherford (NJ)",
          stats: "Modelo: 60% Brasil, λ 1.83×0.87 · Marrocos: semifinalista em 2022, Elo 1827 (7º FIFA) · Ezzalzouli com dúvida · Estreia brasileira mais aguardada do torneio" },
        { hora: "22h", partida: "Escócia × Haiti", grupo: "C", local: "Gillette Stadium, Foxboro (MA)",
          stats: "Modelo: 64% Escócia, λ 1.91×0.80 · Haiti (Elo 1548): 2º menor Elo do Grupo C · Escócia em sua 2ª Copa consecutiva" }
      ],
      contexto: "Dia mais esperado: Brasil faz sua estreia às 19h no MetLife (NJ) contra Marrocos. Antes, Suíça encerra o Grupo B contra o Catar (missão técnica). Escócia × Haiti fecha o Dia 3 e completa o Grupo C.",
      apostas: [
        { cat: "conservadora", mercado: "Breel Embolo marca a qualquer momento (Suíça × Catar)", odd: 1.90, stake: 1.5, status: "pendente",
          justificativa: "Artilheiro da Suíça nas Eliminatórias (6 gols) contra o pior Elo do torneio (Catar 1421). λ suíço de 2.80 gols concentrado no centroavante titular." },
        { cat: "conservadora", mercado: "Mais de 8.5 escanteios — Suíça × Catar", odd: 1.70, stake: 1, status: "pendente",
          justificativa: "91% de domínio esperado contra bloco baixo extremo = volume de cruzamento, chute bloqueado e linha de fundo. Proxy direto do λ 2.80×0.18." },
        { cat: "conservadora", mercado: "Brasil vence — Brasil × Marrocos", odd: 1.65, stake: 2, status: "pendente",
          justificativa: "Modelo dá 60.1% pro Brasil (λ 1.83×0.87). Marrocos é perigoso (semifinalista 2022, Elo 1827), mas Brasil como favorito na estreia tem valor claro. Aposta-base para o jogo mais importante do Dia 3." },
        { cat: "intermediaria", mercado: "Criar Aposta (Suíça × Catar): Suíça vence sem sofrer gol + Embolo marca", odd: 3.20, stake: 0.75, status: "pendente",
          justificativa: "Versão turbinada da tese suíça: 91% de vitória, Catar com λ 0.18 (clean sheet ~80%), Embolo finaliza o combo." },
        { cat: "intermediaria", mercado: "Marrocos vence ou empata (dupla hipótese) — Brasil × Marrocos", odd: 3.40, stake: 0.75, status: "pendente",
          justificativa: "39.9% de não-vitória brasileira (17.4% Marrocos + 22.5% empate). Marrocos tem defesa sólida (λ 0.87), foi surpresa em 2022, e pode frustrar o Brasil em uma estreia de Copa." },
        { cat: "loucura", mercado: "Criar Aposta: Brasil vence + Vinicius Jr. marca", odd: 4.50, stake: 0.50, status: "pendente",
          justificativa: "Brasil 60% de vitória e Vinicius como referência ofensiva principal. Se o roteiro 'Brasil vence' acontece, Vinicius é o candidato natural ao gol — pernas altamente correlacionadas." }
      ]
    }
  ]
};
