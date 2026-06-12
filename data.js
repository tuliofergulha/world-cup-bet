// Copa 2026 — Central de Apostas. Atualizado diariamente pelo briefing das 8h.
// status: "pendente" | "ganhou" | "perdeu" | "anulada"
// Apostas ficam dentro de cada jogo para manter contexto.
const DATA = {
  atualizadoEm: "2026-06-11T21:00:00-03:00",
  unidade: "1u = 1% da banca (sugestão)",
  dias: [
    {
      data: "2026-06-11",
      titulo: "Dia 1 — Abertura",
      contexto: "Abertura precisa: modelo cravou México 2×0 África do Sul (λ 2.76×0.18, 90% vitória). À noite, Coreia × Tchéquia fecha o Dia 1 — jogo mais equilibrado de toda a 1ª rodada.",
      jogos: [
        {
          hora: "16h",
          mandante: "México",
          visitante: "África do Sul",
          grupo: "A",
          local: "Estádio Azteca, Cidade do México",
          placar: "2 × 0",
          stats: "Modelo previu exatamente 2×0 (90% vitória, λ 2.76×0.18) ✓ · Primeiro teste do Elo-Poisson: aprovado",
          apostas: []
        },
        {
          hora: "23h",
          mandante: "Coreia do Sul",
          visitante: "Tchéquia",
          grupo: "A",
          local: "Estadio Akron, Guadalajara",
          placar: null,
          stats: "Modelo: 39/26/34 · λ 1.37×1.26 (total: 2.63 gols esperados) · Jogo mais equilibrado da 1ª rodada",
          apostas: [
            { cat: "conservadora", mercado: "Ambas marcam", odd: 1.75, stake: 1.5, status: "pendente",
              justificativa: "λ moderados dos dois lados (1.37×1.26): Poisson indica ~53% de ambas marcarem. Son para Coreia, Schick para Tchéquia — dois atacantes de referência sem bloco ultra-defensivo na estreia." },
            { cat: "intermediaria", mercado: "Empate", odd: 3.20, stake: 1, status: "pendente",
              justificativa: "Jogo mais equilibrado da 1ª rodada (modelo: 39/26/34). Com λ quase iguais (1.37×1.26), nenhum time domina. Empate é o resultado individualmente mais provável." },
            { cat: "intermediaria", mercado: "Tchéquia vence", odd: 3.10, stake: 0.75, status: "pendente",
              justificativa: "Modelo dá 34.4% para a Tchéquia. Se o mercado paga 3.10 (~32% implícito), há valor marginal. Tchéquia tem Schick + Souček; Coreia joga em estádio mexicano sem apoio da torcida." },
            { cat: "loucura", mercado: "Criar Aposta: Tchéquia vence + mais de 2.5 gols", odd: 8.0, stake: 0.25, status: "pendente",
              justificativa: "Tchéquia vence (34.4%) num jogo com total esperado de 2.63 gols (~49% over 2.5). Se a Tchéquia vencer, o roteiro tende a ser mais aberto — pernas correlacionadas." }
          ]
        }
      ]
    },
    {
      data: "2026-06-12",
      titulo: "Dia 2 — Canadá e EUA estreiam",
      contexto: "Canadá e EUA estreiam em casa. Desfalques: Davies fora (Canadá); Chris Richards confirmado (EUA).",
      jogos: [
        {
          hora: "16h",
          mandante: "Canadá",
          visitante: "Bósnia e Herz.",
          grupo: "B",
          local: "BMO Field, Toronto",
          placar: null,
          stats: "Modelo: 77% Canadá, λ 2.24×0.52 · Sem Alphonso Davies · J. David: camisa 9 e cobrador de pênaltis · Bósnia (Elo 1595) deve jogar fechada",
          apostas: [
            { cat: "conservadora", mercado: "Criar Aposta: Canadá vence + J. David marca", odd: 2.50, stake: 1.5, status: "pendente",
              justificativa: "Modelo dá 77% pro Canadá (λ 2.24). David é o camisa 9 e cobrador de pênaltis. Se o Canadá vence em casa, a probabilidade de David participar do placar é alta — pernas correlacionadas." },
            { cat: "loucura", mercado: "Criar Aposta: Canadá −2.5 + J. David 2+ gols", odd: 11.0, stake: 0.25, status: "pendente",
              justificativa: "Roteiro goleada: Canadá precisa inflar o saldo de gols (desempate com a Suíça no grupo). Se sair cedo o 1º, David é quem mais finaliza na área." }
          ]
        },
        {
          hora: "22h",
          mandante: "EUA",
          visitante: "Paraguai",
          grupo: "D",
          local: "SoFi Stadium, Los Angeles",
          placar: null,
          stats: "Paraguai: 10 gols sofridos em 18 jogos — Eliminatória mais 'under' do CONMEBOL · 13.7 faltas/jogo · D. Gómez: 9 amarelos e 48 faltas na PL 25/26 · EUA: posse + jogo pelos lados (Robinson/Dest) contra bloco baixo",
          apostas: [
            { cat: "conservadora", mercado: "Criar Aposta: Menos de 2.5 gols + EUA 8.5+ escanteios", odd: 2.10, stake: 2, status: "pendente",
              justificativa: "Paraguai sofreu 0.56 gol/jogo nas Eliminatórias — bloco baixo 4-4-2 → EUA forçado a cruzar dos lados → escanteios + poucos gols. Estreias de Copa são historicamente travadas." },
            { cat: "intermediaria", mercado: "Diego Gómez recebe cartão", odd: 3.00, stake: 1, status: "pendente",
              justificativa: "9 amarelos e 48 faltas em 2.136 min pelo Brighton na PL 25/26. Vai ser o destruidor escalado em cima do Pulisic num jogo de estreia tenso — perfil perfeito de cartão." },
            { cat: "intermediaria", mercado: "Criar Aposta: Empate + menos de 2.5 gols", odd: 4.50, stake: 0.75, status: "pendente",
              justificativa: "Modelo vê coin-flip (38/26/36) e o mercado superprecifica o mando dos EUA. Se empatar, quase certamente é 0-0 ou 1-1 (perfil under do Paraguai) — pernas andam juntas." },
            { cat: "loucura", mercado: "Criar Aposta: Empate + under 2.5 + 5.5+ cartões", odd: 12.0, stake: 0.25, status: "pendente",
              justificativa: "'Jogo feio completo': truncado, faltoso (Paraguai 13.7 faltas/jogo) e sem vencedor. Três pernas 100% correlacionadas — se o roteiro do bloco baixo se confirmar, tudo bate junto." }
          ]
        }
      ]
    },
    {
      data: "2026-06-13",
      titulo: "Dia 3 — Brasil estreia",
      contexto: "Dia mais esperado: Brasil faz sua estreia às 19h no MetLife (NJ) contra Marrocos. Antes, Suíça encerra o Grupo B contra o Catar. Escócia × Haiti fecha o dia.",
      jogos: [
        {
          hora: "16h",
          mandante: "Suíça",
          visitante: "Catar",
          grupo: "B",
          local: "Levi's Stadium, Santa Clara",
          placar: null,
          stats: "Modelo: 91% Suíça, λ 2.80×0.18 · Embolo: artilheiro suíço nas Eliminatórias (6 gols) · Catar: pior Elo do torneio (1421)",
          apostas: [
            { cat: "conservadora", mercado: "Embolo marca a qualquer momento", odd: 1.90, stake: 1.5, status: "pendente",
              justificativa: "Artilheiro da Suíça nas Eliminatórias (6 gols) contra o pior Elo do torneio. λ suíço de 2.80 concentrado no centroavante titular." },
            { cat: "conservadora", mercado: "Mais de 8.5 escanteios", odd: 1.70, stake: 1, status: "pendente",
              justificativa: "91% de domínio esperado contra bloco baixo extremo = volume de cruzamento, chute bloqueado e linha de fundo. Proxy direto do λ 2.80×0.18." },
            { cat: "intermediaria", mercado: "Criar Aposta: Suíça vence a zero + Embolo marca", odd: 3.20, stake: 0.75, status: "pendente",
              justificativa: "91% de vitória, Catar com λ 0.18 (clean sheet ~80%), Embolo finaliza o combo." }
          ]
        },
        {
          hora: "19h",
          mandante: "Brasil",
          visitante: "Marrocos",
          grupo: "C",
          local: "MetLife Stadium, East Rutherford (NJ)",
          placar: null,
          stats: "Modelo: 60% Brasil, λ 1.83×0.87 · Marrocos: semifinalista em 2022, Elo 1827 (7º FIFA) · Ezzalzouli com dúvida · Estreia mais aguardada do torneio",
          apostas: [
            { cat: "conservadora", mercado: "Brasil vence", odd: 1.65, stake: 2, status: "pendente",
              justificativa: "Modelo dá 60.1% pro Brasil (λ 1.83×0.87). Marrocos é perigoso (semifinalista 2022), mas Brasil como favorito na estreia tem valor claro." },
            { cat: "intermediaria", mercado: "Marrocos vence ou empata (dupla hipótese)", odd: 3.40, stake: 0.75, status: "pendente",
              justificativa: "39.9% de não-vitória brasileira (17.4% Marrocos + 22.5% empate). Marrocos tem defesa sólida (λ 0.87) e pode frustrar o Brasil em uma estreia de Copa." },
            { cat: "loucura", mercado: "Criar Aposta: Brasil vence + Vinicius Jr. marca", odd: 4.50, stake: 0.50, status: "pendente",
              justificativa: "Brasil 60% de vitória e Vinicius como referência ofensiva principal. Se o roteiro 'Brasil vence' acontece, Vinicius é o candidato natural ao gol — pernas altamente correlacionadas." }
          ]
        },
        {
          hora: "22h",
          mandante: "Escócia",
          visitante: "Haiti",
          grupo: "C",
          local: "Gillette Stadium, Foxboro (MA)",
          placar: null,
          stats: "Modelo: 64% Escócia, λ 1.91×0.80 · Haiti (Elo 1548): 2º menor Elo do Grupo C · Escócia em sua 2ª Copa consecutiva",
          apostas: []
        }
      ]
    }
  ]
};
