// ==========================================
// PERFIL PSÍQUICO — App.js
// ==========================================

// —— DADOS DO QUIZ ——
const QUIZ_QUESTIONS = [
  // Dimensão 1: INTROVERT (0) vs EXTROVERT (1) — Questões 1-5
  {
    dimension: 0,
    text: "Em uma situação de crise repentina, você tende a...",
    options: [
      {
        text: "Recuar internamente e processar sozinho antes de agir",
        score: 0,
      },
      {
        text: "Analisar calmamente os dados disponíveis e criar um plano",
        score: 0,
      },
      {
        text: "Chamar as pessoas ao redor e agir rapidamente em grupo",
        score: 1,
      },
      { text: "Assumir a liderança e coordenar todos imediatamente", score: 1 },
    ],
  },
  {
    dimension: 0,
    text: "Após uma semana intensa de trabalho, o que te recarrega mais?",
    options: [
      {
        text: "Ficar em casa com um livro, filme ou atividade solitária",
        score: 0,
      },
      {
        text: "Uma caminhada tranquila ou tempo em contato com a natureza",
        score: 0,
      },
      { text: "Sair com amigos para um evento ou jantar animado", score: 1 },
      { text: "Uma festa ou encontro social cheio de novas pessoas", score: 1 },
    ],
  },
  {
    dimension: 0,
    text: "Como você prefere receber feedback sobre seu trabalho?",
    options: [
      { text: "Por escrito, para poder processar no meu tempo", score: 0 },
      { text: "Em uma conversa privada e calma", score: 0 },
      { text: "Em uma reunião com a equipe presente", score: 1 },
      { text: "Em tempo real, na hora, mesmo se for em público", score: 1 },
    ],
  },
  {
    dimension: 0,
    text: "Em um grupo de amigos, você costuma ser...",
    options: [
      { text: "Quem ouve mais do que fala, absorvendo tudo", score: 0 },
      { text: "Quem faz as perguntas certas e observa as dinâmicas", score: 0 },
      { text: "Um participante animado que conecta as pessoas", score: 1 },
      { text: "A energia do ambiente — difícil imaginar sem você", score: 1 },
    ],
  },
  {
    dimension: 0,
    text: "Ao iniciar um novo projeto, sua abordagem natural é...",
    options: [
      { text: "Pesquisar profundamente antes de qualquer ação", score: 0 },
      { text: "Refletir sozinho para montar uma estratégia sólida", score: 0 },
      { text: "Discutir ideias com outros para ganhar perspectiva", score: 1 },
      { text: "Começar imediatamente e ajustar ao longo do caminho", score: 1 },
    ],
  },

  // Dimensão 2: THINKING (0) vs FEELING (1) — Questões 6-10
  {
    dimension: 1,
    text: "Quando você precisa tomar uma decisão difícil, você baseia principalmente em...",
    options: [
      {
        text: "Dados, lógica e o que faz mais sentido racionalmente",
        score: 0,
      },
      { text: "Análise dos prós e contras objetivos", score: 0 },
      {
        text: "Como cada opção se alinha com meus valores profundos",
        score: 1,
      },
      {
        text: "O que parece mais certo emocionalmente e intuitivamente",
        score: 1,
      },
    ],
  },
  {
    dimension: 1,
    text: "Quando um amigo vem a você com um problema, sua reação instintiva é...",
    options: [
      { text: "Imediatamente começar a sugerir soluções práticas", score: 0 },
      {
        text: "Fazer perguntas para entender a causa raiz do problema",
        score: 0,
      },
      {
        text: "Ouvir com total atenção e validar o que ele está sentindo",
        score: 1,
      },
      {
        text: "Compartilhar algo pessoal para que ele se sinta menos só",
        score: 1,
      },
    ],
  },
  {
    dimension: 1,
    text: "O que te motiva mais profundamente no trabalho?",
    options: [
      { text: "Resultados concretos, eficiência e metas atingidas", score: 0 },
      {
        text: "Resolver problemas complexos e intelectualmente desafiadores",
        score: 0,
      },
      {
        text: "Impactar positivamente a vida de outros e criar conexões",
        score: 1,
      },
      {
        text: "Fazer parte de algo com significado e propósito maior",
        score: 1,
      },
    ],
  },
  {
    dimension: 1,
    text: "Diante de um conflito, sua postura natural é...",
    options: [
      { text: "Apresentar argumentos lógicos e focar nos fatos", score: 0 },
      {
        text: "Buscar o que é mais justo e correto, independente das emoções",
        score: 0,
      },
      {
        text: "Buscar harmonia e verificar como todos estão se sentindo",
        score: 1,
      },
      {
        text: "Mediar empaticamente para que todos saiam satisfeitos",
        score: 1,
      },
    ],
  },
  {
    dimension: 1,
    text: "Ao assistir um filme ou série, você se identifica mais com...",
    options: [
      {
        text: "O personagem estratégico que prevê os movimentos do adversário",
        score: 0,
      },
      {
        text: "O investigador que resolve o mistério com pistas e lógica",
        score: 0,
      },
      { text: "O personagem que cuida de todos ao seu redor", score: 1 },
      {
        text: "O visionário altruísta que sacrifica algo pelo bem maior",
        score: 1,
      },
    ],
  },

  // Dimensão 3: STRUCTURED (0) vs FLEXIBLE (1) — Questões 11-15
  {
    dimension: 2,
    text: "Como você organiza seus dias e tarefas?",
    options: [
      { text: "Com lista detalhada, agenda e horários definidos", score: 0 },
      { text: "Com um plano claro que sigo rigorosamente", score: 0 },
      {
        text: "De forma fluida, seguindo a energia e as prioridades do dia",
        score: 1,
      },
      {
        text: "Sem planejamento — a inspiração do momento me guia melhor",
        score: 1,
      },
    ],
  },
  {
    dimension: 2,
    text: "O que descreve melhor sua relação com mudanças repentinas de planos?",
    options: [
      {
        text: "Me estressa — prefiro previsibilidade e estabilidade",
        score: 0,
      },
      { text: "Preciso de um tempo para me adaptar, mas consigo", score: 0 },
      { text: "Me adapto facilmente, às vezes até prefiro", score: 1 },
      { text: "Adoro! Mudanças trazem oportunidades novas", score: 1 },
    ],
  },
  {
    dimension: 2,
    text: "Como você prefere aprender algo novo?",
    options: [
      {
        text: "Com um método estruturado, passo a passo e sistemático",
        score: 0,
      },
      {
        text: "Lendo e estudando com profundidade antes de praticar",
        score: 0,
      },
      {
        text: "Explorando livremente, pulando entre temas que me interessam",
        score: 1,
      },
      { text: "Experimentando na prática e errando até acertar", score: 1 },
    ],
  },
  {
    dimension: 2,
    text: "Em um projeto em grupo, você naturalmente assume o papel de...",
    options: [
      {
        text: "Quem organiza, cria cronogramas e garante que tudo ande",
        score: 0,
      },
      { text: "Quem define os processos e padrões de qualidade", score: 0 },
      { text: "Quem gera novas ideias e mantém o grupo energizado", score: 1 },
      {
        text: "Quem conecta os pontos e improvisa quando necessário",
        score: 1,
      },
    ],
  },
  {
    dimension: 2,
    text: "Qual frase ressoa mais com sua visão de vida?",
    options: [
      { text: '"Planejamento é a chave do sucesso"', score: 0 },
      { text: '"Disciplina supera talento"', score: 0 },
      { text: '"Abrace a incerteza — é onde a magia acontece"', score: 1 },
      { text: '"O melhor plano é estar pronto para nenhum plano"', score: 1 },
    ],
  },
];

// —— TIPOS DE PERSONALIDADE ——
// Combinação de 3 dimensões binárias -> 8 tipos
// Dimensão 0: I(0)/E(1), Dimensão 1: T(0)/F(1), Dimensão 2: S(0)/P(1)
const PERSONALITY_TYPES = {
  "000": {
    name: "O Analista Estratégico",
    emoji: "🧠",
    tagline:
      "Você enxerga padrões onde outros veem caos. Sua mente é uma poderosa ferramenta de precisão.",
    color: "#06b6d4",
    description: `Você é o tipo de pessoa que não apenas resolve problemas — você os prevê. Com uma mente incrivelmente estruturada e analítica, você tem a capacidade de absorver informações complexas, identificar padrões sutis e construir estratégias que outros simplesmente não enxergam. Introvertido e orientado pela lógica, você prefere profundidade a amplitude. Não vai se satisfazer com respostas superficiais — você quer entender como e por quê as coisas funcionam até o menor detalhe.

Sua maior força está na precisão: enquanto outros agem por impulso, você age por convicção bem fundamentada. Isso te torna um parceiro valioso em qualquer equipe de alta performance — mas também pode te isolar quando as pessoas ao redor preferem velocidade à corretude.`,
    strengths: [
      "Pensamento crítico aguçado",
      "Capacidade de análise profunda",
      "Alta precisão e atenção aos detalhes",
      "Excelente em planejamento de longo prazo",
      "Independência intelectual",
    ],
    blindspots: [
      {
        emoji: "🔄",
        title: "Paralisia por análise",
        desc: "Sua necessidade de certeza pode atrasar decisões importantes. Nem sempre é possível ter todos os dados — e isso está ok.",
      },
      {
        emoji: "💬",
        title: "Comunicação emocional",
        desc: "Você pode ser percebido como frio ou distante. Invest ir na expressão emocional abre portas que a lógica sozinha não consegue.",
      },
      {
        emoji: "👥",
        title: "Trabalho em equipe",
        desc: "Sua preferência por trabalhar sozinho pode limitar seu impacto. As maiores realizações são coletivas.",
      },
    ],
    careers: [
      "💻 Engenheiro de Software",
      "📊 Cientista de Dados",
      "🔬 Pesquisador Científico",
      "📈 Analista Financeiro",
      "🏗️ Arquiteto de Sistemas",
      "🧩 Estrategista Corporativo",
    ],
    compatibility: [
      { type: "Alma Criativa", pct: 92 },
      { type: "Sonhador Inovador", pct: 78 },
      { type: "Pioneiro Audacioso", pct: 55 },
      { type: "Conector Empático", pct: 47 },
    ],
    plan: {
      week1: [
        "Identifique um projeto pessoal que mobilize seu interesse analítico genuíno",
        "Estabeleça uma rotina matinal de 30 min de leitura técnica ou estudo profundo",
      ],
      week2: [
        "Pratique comunicar uma ideia complexa para alguém leigo — simplificar é poderoso",
        "Desafie-se a tomar uma decisão importante com 70% dos dados (exercício de confiança)",
      ],
      week3: [
        "Conecte-se com uma pessoa de perfil oposto ao seu — ouça sem julgamentos",
        "Documente seus 3 maiores pontos cegos e crie um plano de desenvolvimento para cada",
      ],
      week4: [
        "Apresente um projeto ou análise para um grupo — visibilidade amplia seu impacto",
        "Celebre suas conquistas do mês — analistas tendem a ignorar o progresso e focar no que falta",
      ],
    },
  },
  "001": {
    name: "O Guardião Reflexivo",
    emoji: "🌿",
    tagline:
      "Você é a âncora silenciosa que mantém tudo no lugar. Sua profundidade é sua superpotência.",
    color: "#10b981",
    description: `Introvertido, lógico e altamente adaptável, você é o tipo de pessoa que os outros procuram quando precisam de conselhos honestos e bem fundamentados. Você pensa antes de falar — e quando fala, vale a pena ouvir. Sua flexibilidade mental combinada com rigor analítico cria uma combinação rara: você consegue analisar como um engenheiro e improvisar como um artista quando necessário.

Você tem um código interno forte e raramente trai seus princípios, mesmo sob pressão. Essa integridade silenciosa é percebida pelos que estão ao seu redor — você inspira confiança sem precisar se promover. Sua presença é calmante e sua opinião, valiosa.`,
    strengths: [
      "Integridade e princípios sólidos",
      "Adaptabilidade inteligente",
      "Pensamento independente",
      "Profundidade emocional discreta",
      "Resiliência silenciosa",
    ],
    blindspots: [
      {
        emoji: "🔋",
        title: "Zona de conforto",
        desc: "Sua flexibilidade pode virar evitação de compromisso. Algumas estruturas e rotinas são libertadoras, não prisões.",
      },
      {
        emoji: "📣",
        title: "Autoafirmação",
        desc: "Suas conquistas merecem ser vistas. Ser modesto é virtude — ser invisível é desperdício do seu potencial.",
      },
      {
        emoji: "⏰",
        title: "Procrastinação reflexiva",
        desc: "Pensar demais antes de agir pode ser um escudo. Ação imperfeita é melhor que perfeição não executada.",
      },
    ],
    careers: [
      "🧪 Pesquisador",
      "✍️ Escritor ou Roteirista",
      "🧭 Consultor Estratégico",
      "💡 Product Manager",
      "🎓 Educador ou Professor",
      "🔐 Analista de Segurança",
    ],
    compatibility: [
      { type: "Líder Visionário", pct: 88 },
      { type: "Realizador Resiliente", pct: 74 },
      { type: "Analista Estratégico", pct: 70 },
      { type: "Pioneiro Audacioso", pct: 52 },
    ],
    plan: {
      week1: [
        "Escreva sobre 3 situações recentes onde você agiu por princípio — reconheça esse valor",
        "Identifique uma área onde você tem postergado decisões por excesso de reflexão",
      ],
      week2: [
        "Comprometa-se com uma estrutura semanal mínima (ex: horário fixo para 3 atividades)",
        "Compartilhe uma ideia ou conquista sua com alguém de confiança — pratique o autocrédito",
      ],
      week3: [
        "Tome uma decisão de baixo risco com base na intuição, sem análise prévia",
        "Explore uma prática criativa sem julgamento (escrita, arte, música) — para liberar o analítico",
      ],
      week4: [
        "Crie um mapa de valores: o que é inegociável para você? O que pode ser flexibilizado?",
        "Celebre sua constância — guardiões muitas vezes esquecem que resistir também é conquista",
      ],
    },
  },
  "010": {
    name: "O Conector Empático",
    emoji: "💜",
    tagline:
      "Você sente o que os outros não dizem. Sua empatia é um presente — use-a com sabedoria.",
    color: "#8b5cf6",
    description: `Você possui um dom raro: a capacidade de realmente sentir o que as pessoas ao seu redor estão vivendo, mesmo quando não expressam com palavras. Introvertido mas profundamente conectado emocionalmente, você mantém relações de qualidade excepcional — poucos amigos, mas laços que duram décadas. Sua presença é nutritiva e sua escuta, transformadora.

Você é movido por valores profundos e tem uma bússola moral muito bem calibrada. Não consegue fingir que está bem quando não está, e tampouco consegue participar de ambientes que contradizem quem você é. Sua autenticidade é magnética — as pessoas sentem que com você, podem ser elas mesmas.`,
    strengths: [
      "Empatia profunda e autêntica",
      "Relacionamentos de alta qualidade",
      "Bússola moral aguçada",
      "Escuta ativa transformadora",
      "Lealdade inabalável",
    ],
    blindspots: [
      {
        emoji: "🛡️",
        title: "Limites saudáveis",
        desc: "Absorver as emoções alheias sem filtro te esgota. Empatia sem fronteiras não é virtude — é autossabotagem.",
      },
      {
        emoji: "💔",
        title: "Superinvestimento emocional",
        desc: "Você se entrega tanto que uma decepção parece um colapso. Aprenda a amar com leveza.",
      },
      {
        emoji: "🗣️",
        title: "Dificuldade em confrontos",
        desc: "Sua aversão ao conflito pode te impedir de defender o que é verdadeiramente seu. Sua voz importa.",
      },
    ],
    careers: [
      "🧠 Psicólogo ou Terapeuta",
      "👩‍⚕️ Enfermagem ou Medicina",
      "🎨 Artes e Design",
      "📚 Educação Especial",
      "🤝 RH e Gestão de Pessoas",
      "✍️ Escritor ou Jornalista",
    ],
    compatibility: [
      { type: "Pioneiro Audacioso", pct: 95 },
      { type: "Líder Visionário", pct: 80 },
      { type: "Alma Criativa", pct: 75 },
      { type: "Analista Estratégico", pct: 48 },
    ],
    plan: {
      week1: [
        "Liste 3 limites que você precisa estabelecer com clareza e gentileza",
        "Experimente uma prática de 10 min/dia de meditação ou escrita reflexiva",
      ],
      week2: [
        "Pratique dizer 'não' uma vez sem culpa e sem excessiva justificativa",
        "Identifique onde você está se esgotando emocionalmente e crie um ritual de recuperação",
      ],
      week3: [
        "Expresse uma opinião divergente em uma conversa — a discordância pode ser um ato de amor",
        "Reconecte-se com uma atividade que existe só para você, sem utilidade social",
      ],
      week4: [
        "Avalie: quais relacionamentos te nutrem e quais te drenam? Faça ajustes conscientes",
        "Celebre cada ato de autocuidado — cuidar de si permite que você cuide dos outros melhor",
      ],
    },
  },
  "011": {
    name: "O Sonhador Inovador",
    emoji: "✨",
    tagline:
      "Você vive num mundo de possibilidades infinitas. Sua imaginação remodela a realidade.",
    color: "#ec4899",
    description: `Você é um artista da vida — sensível, criativo, profundamente intuitivo e com uma mente que nunca para. Introvertido por natureza, seu mundo interno é rico e vasto: cheio de ideias, conexões inusitadas e uma visão de futuro que poucos conseguem acompanhar. Você não vê o mundo como ele é, mas como ele poderia ser — e essa perspectiva é extraordinariamente valiosa.

Você possui uma inteligência emocional e criativa fora do comum. É o tipo de pessoa que encoraja outros a sonhar maior, que vê beleza onde ninguém mais olha, e que transforma a dor em arte. Seus relacionamentos são profundos e transformadores — quando você ama, é com toda a sua alma.`,
    strengths: [
      "Criatividade e visão inovadora",
      "Inteligência emocional elevada",
      "Pensamento divergente e original",
      "Profundidade e autenticidade",
      "Capacidade de inspirar outros",
    ],
    blindspots: [
      {
        emoji: "🎯",
        title: "Execução e foco",
        desc: "Ter mil ideias brilhantes e não executar nenhuma é um desperdício. Disciplina não mata a criatividade — a protege.",
      },
      {
        emoji: "🌱",
        title: "Autocrítica excessiva",
        desc: "Você é seu crítico mais severo. O padrão que você impõe a si mesmo é humanamente impossível.",
      },
      {
        emoji: "🏗️",
        title: "Estrutura e rotina",
        desc: "Um mínimo de estrutura não te prende — te liberta para criar com mais profundidade e consistência.",
      },
    ],
    careers: [
      "🎨 Designer ou Artista",
      "🎭 Ator ou Diretor",
      "✍️ Escritor ou Poeta",
      "🎵 Músico ou Produtor",
      "🧠 Psicólogo Criativo",
      "💡 Empreendedor de Impacto",
    ],
    compatibility: [
      { type: "Analista Estratégico", pct: 91 },
      { type: "Guardião Reflexivo", pct: 83 },
      { type: "Realizador Resiliente", pct: 67 },
      { type: "Conector Empático", pct: 60 },
    ],
    plan: {
      week1: [
        "Escolha UMA ideia dentre as muitas que você tem — e dedique-se só a ela por 30 dias",
        "Crie um ritual criativo diário de 20 minutos sem julgamento (escreva, desenhe, toque)",
      ],
      week2: [
        "Estabeleça uma rotina mínima para a manhã — ela cria o chão firme para você voar",
        "Compartilhe algo que criou com alguém de confiança — visibilidade é combustível",
      ],
      week3: [
        "Pratique autocompaixão ativa: trate-se como trataria um amigo querido",
        "Aprenda uma habilidade técnica que potencialize sua criatividade (edição, código, design)",
      ],
      week4: [
        "Lance algo imperfeito mas real — um post, um projeto, uma ideia pública",
        "Comemore cada pequeno progresso — o Sonhador precisa de combustível emocional para continuar",
      ],
    },
  },
  100: {
    name: "O Líder Visionário",
    emoji: "👑",
    tagline:
      "Você nasceu para mover multidões. Quando você fala, o mundo escuta.",
    color: "#f59e0b",
    description: `Você tem presença. Não o tipo superficial de presença que vem do ego — mas a presença magnética de quem sabe onde está indo e convida os outros para a jornada. Extrovertido, lógico e altamente organizado, você combina energia social com rigor estratégico de uma forma que poucos conseguem. Você não apenas sonha com o futuro — você o constrói.

Líderes Visionários são raros. Você consegue ver o macro enquanto gerencia o micro, inspirar enquanto exige excelência, e tomar decisões difíceis sem perder o Norte. Sua maior realização não é o que você conquista sozinho — mas o quanto você eleva os que estão ao seu redor.`,
    strengths: [
      "Liderança natural e carismática",
      "Pensamento estratégico de longo prazo",
      "Alta capacidade de execução",
      "Comunicação persuasiva e clara",
      "Visão sistêmica e integradora",
    ],
    blindspots: [
      {
        emoji: "👂",
        title: "Escuta ativa",
        desc: "Líderes que só falam perdem perspectivas valiosas. Os mais sábios são os que mais perguntam.",
      },
      {
        emoji: "🏃",
        title: "Impulsividade",
        desc: "Sua energia pode virar precipitação. Pausa não é fraqueza — é estratégia.",
      },
      {
        emoji: "💆",
        title: "Autocuidado",
        desc: "Você carrega muito — às vezes demais. Líderes que não cuidam de si alimentam o sistema com energia negativa.",
      },
    ],
    careers: [
      "🏢 CEO / Empreendedor",
      "🎙️ Palestrante ou Coach",
      "📣 Marketing e Vendas",
      "⚖️ Direito e Advocacia",
      "🏛️ Política ou Gestão Pública",
      "🎬 Diretor Criativo",
    ],
    compatibility: [
      { type: "Conector Empático", pct: 90 },
      { type: "Guardião Reflexivo", pct: 85 },
      { type: "Analista Estratégico", pct: 72 },
      { type: "Alma Criativa", pct: 65 },
    ],
    plan: {
      week1: [
        "Identifique sua visão de 5 anos com clareza — escreva, não apenas pense",
        "Pratique escuta ativa em uma conversa: faça 3 perguntas antes de dar 1 opinião",
      ],
      week2: [
        "Delegue uma tarefa importante — controle é diferente de liderança",
        "Crie um ritual de 'desaceleração' semanal para processar e recarregar",
      ],
      week3: [
        "Busque feedback honesto de alguém que você respeita e ouça sem se defender",
        "Identifique alguém no seu círculo que você pode mentorar ou elevar",
      ],
      week4: [
        "Avalie: onde você está liderando pelo ego vs. pelo propósito?",
        "Comemore as pessoas que você elevou — líderes crescem pela grandeza do time",
      ],
    },
  },
  101: {
    name: "O Pioneiro Audacioso",
    emoji: "⚡",
    tagline:
      "Você vive no limite do possível. Onde outros veem risco, você vê oportunidade.",
    color: "#ef4444",
    description: `Você foi feito para a fronteira. Dinâmico, extrovertido, analítico e completamente avesso à estagnação, você é o tipo de pessoa que muda de ideia quando surgem fatos novos — não por fraqueza, mas porque seu compromisso é com a verdade e com o resultado, não com o ego. Você age rápido, pensa rápido e raramente tem medo de falhar, pois sabe que o fracasso é apenas dado de aprendizado.

Pioneiros Audaciosos transformam setores inteiros. Você não espera a permissão do mercado — você cria o mercado. Sua combinação de energia extrovertida com pensamento lógico te permite vender ideias enquanto as desenvolve, seduzir parceiros enquanto testa hipóteses. Você é um força da natureza empreendedora.`,
    strengths: [
      "Coragem para arriscar e inovar",
      "Velocidade de execução",
      "Energia contagiante",
      "Resiliência ao fracasso",
      "Visão de oportunidades únicas",
    ],
    blindspots: [
      {
        emoji: "🧱",
        title: "Finishing power",
        desc: "Você começa 10 projetos e termina 2. Cultivar a disciplina de conclusão é sua maior alavanca de crescimento.",
      },
      {
        emoji: "👥",
        title: "Sensibilidade com pessoas",
        desc: "Sua velocidade pode atropelar quem está ao seu lado. Nem todos correm no mesmo ritmo — e isso é valioso.",
      },
      {
        emoji: "🔋",
        title: "Sustentabilidade de energia",
        desc: "Você queima como estrela — intenso e brilhante. Mas estrelas que não têm pausa explodem. Cuide do seu ritmo.",
      },
    ],
    careers: [
      "🚀 Empreendedor Serial",
      "📱 Desenvolvimento de Produtos",
      "💰 Investidor ou Trader",
      "🎙️ Criador de Conteúdo",
      "🌍 Jornalismo ou Mídia",
      "🔬 Pesquisa e Inovação",
    ],
    compatibility: [
      { type: "Conector Empático", pct: 94 },
      { type: "Alma Criativa", pct: 86 },
      { type: "Guardião Reflexivo", pct: 70 },
      { type: "Analista Estratégico", pct: 58 },
    ],
    plan: {
      week1: [
        "Liste todos os seus projetos em andamento — escolha 2 para focar completamente",
        "Pratique 'slowing down': passe 1 dia propositalmente em ritmo reduzido",
      ],
      week2: [
        "Peça feedback a alguém que você acha muito 'lento' — talvez haja sabedoria ali",
        "Complete algo que estava inacabado há mais de 1 mês — sinta a satisfação do fechamento",
      ],
      week3: [
        "Crie um sistema mínimo de acompanhamento dos seus projetos (não precisa ser perfeito)",
        "Ofereça sua energia para apoiar o projeto de outra pessoa — colaboração expande impacto",
      ],
      week4: [
        "Defina seus 3 critérios para dizer SIM a novos projetos — e comece a usá-los",
        "Celebre uma missão completada — Pioneiros raramente pausam para reconhecer o caminho",
      ],
    },
  },
  110: {
    name: "O Realizador Resiliente",
    emoji: "🏆",
    tagline:
      "Você não desiste. Essa é sua arma mais poderosa — e seu maior presente para o mundo.",
    color: "#10b981",
    description: `Você é a definição viva de que consistência supera talento. Extrovertido, movido por valores e altamente organizado, você foi feito para construir — e para construir junto com as pessoas. Você encontra significado no processo tanto quanto no resultado, e sua capacidade de continuar quando os outros desistem é simplesmente extraordinária.

Realizadores Resilientes são os pilares das melhores equipes, famílias e comunidades. Você entende que grandes conquistas acontecem através de pessoas — e por isso investe genuinamente nas relações que cria. Sua palavra tem peso. Sua presença gera segurança. Você é o tipo de pessoa que deixa os ambientes melhores do que encontrou.`,
    strengths: [
      "Resiliência e persistência incomparáveis",
      "Inteligência social elevada",
      "Organização e foco em resultados",
      "Capacidade de inspirar times",
      "Confiabilidade absoluta",
    ],
    blindspots: [
      {
        emoji: "🌙",
        title: "Descanso e prazer",
        desc: "Você é tão orientado a metas que esquece de viver. Prazer não é preguiça — é combustível.",
      },
      {
        emoji: "🎨",
        title: "Abertura ao imprevisto",
        desc: "Às vezes o melhor caminho é o não planejado. Solte o controle eventualmente — a vida te surpreende.",
      },
      {
        emoji: "💝",
        title: "Receber ajuda",
        desc: "Você dá muito e recebe pouco. Aprender a ser apoiado é tão importante quanto apoiar.",
      },
    ],
    careers: [
      "🏅 Esporte de Alta Performance",
      "🏗️ Gestão de Projetos",
      "👩‍⚖️ Liderança Organizacional",
      "🌱 Empreendedorismo Social",
      "🏥 Saúde e Bem-Estar",
      "🎓 Educação e Mentoria",
    ],
    compatibility: [
      { type: "Sonhador Inovador", pct: 89 },
      { type: "Guardião Reflexivo", pct: 79 },
      { type: "Pioneiro Audacioso", pct: 73 },
      { type: "Analista Estratégico", pct: 61 },
    ],
    plan: {
      week1: [
        "Agende deliberadamente uma atividade sem propósito prático — apenas por prazer",
        "Identifique onde você está carregando mais do que deveria — e peça ajuda",
      ],
      week2: [
        "Quebre uma rotina estabelecida propositalmente — explore o incomum",
        "Reconheça e verbalize 3 conquistas suas da última semana — você merece esse reconhecimento",
      ],
      week3: [
        "Pratique delegar sem microgerenciar — confie nas pessoas ao seu redor",
        "Conecte-se com alguém novo fora do seu círculo — perspectivas diferentes te enriquecem",
      ],
      week4: [
        "Avalie: você está perseguindo suas metas ou as metas da sociedade?",
        "Comemore não só o resultado — mas quem você se tornou ao longo do caminho",
      ],
    },
  },
  111: {
    name: "A Alma Criativa",
    emoji: "🌈",
    tagline:
      "Você é uma tempestade de possibilidades. Sua autenticidade desafia o ordinário e transforma tudo.",
    color: "#ec4899",
    description: `Você é uma força elemental. Extrovertido, profundamente empático e completamente livre de convenções, você virou instintivamente para o que é genuíno, expressivo e vivo. Sua criatividade não é uma habilidade — é sua forma de existir no mundo. Você conecta pontos que ninguém mais vê, transforma o cotidiano em experiência estética e atrai pessoas com a força magnética da autenticidade.

Almas Criativas são catalisadoras: onde você entra, algo muda. Você não aceita o mundano sem questionar, não segue roteiros sem adaptá-los, e não faz por fazer — cada ação precisa ter alma. Isso pode ser desafiador em sistemas rígidos, mas é incrivelmente valioso em um mundo que anseia por significado e conexão genuína.`,
    strengths: [
      "Criatividade e expressão autêntica",
      "Conexão emocional profunda",
      "Carisma e magnetismo social",
      "Adaptabilidade criativa",
      "Capacidade de inspirar e energizar",
    ],
    blindspots: [
      {
        emoji: "⚓",
        title: "Ancoragem e consistência",
        desc: "Sua fluidez criativa precisa de pontos de ancoragem para se tornar legado, não apenas brilhos passageiros.",
      },
      {
        emoji: "📋",
        title: "Processos e sistemas",
        desc: "Um mínimo de estrutura não mata sua criatividade — ela a transforma em algo durável e de maior impacto.",
      },
      {
        emoji: "🎭",
        title: "Autovaloração",
        desc: "Você dá tanto que às vezes se perde. Descubra onde termina a performance e começa o ser real.",
      },
    ],
    careers: [
      "🎨 Arte e Design",
      "🎬 Cinema e Produção",
      "🎵 Música e Performance",
      "📱 Marketing Digital Criativo",
      "🧠 Psicologia Criativa",
      "💼 Branding e Comunicação",
    ],
    compatibility: [
      { type: "Analista Estratégico", pct: 93 },
      { type: "Pioneiro Audacioso", pct: 87 },
      { type: "Líder Visionário", pct: 76 },
      { type: "Guardião Reflexivo", pct: 54 },
    ],
    plan: {
      week1: [
        "Crie algo hoje — sem planejamento, sem validação. Apenas expresse.",
        "Identifique um projeto criativo que você quer transformar em algo concreto e durável",
      ],
      week2: [
        "Escolha uma rotina mínima que sustente sua criatividade (ex: horário fixo de criação)",
        "Compartilhe sua criação com um público real — a troca alimenta a alma criativa",
      ],
      week3: [
        "Aprenda uma ferramenta técnica que potencialize sua arte",
        "Explore um campo completamente diferente do seu — conexões inesperadas são combustível criativo",
      ],
      week4: [
        "Lance algo: um projeto, uma conta, uma performance — o mundo precisa da sua autenticidade",
        "Celebre cada expressão sua — Almas Criativas muitas vezes subestimam o impacto que geram",
      ],
    },
  },
};

// —— ESTADO DA APLICAÇÃO ——
const state = {
  currentSection: "landing",
  currentQuestion: 0,
  scores: [0, 0, 0], // [dimensão0, dimensão1, dimensão2]
  answers: [],
  userName: "",
  userEmail: "",
  personalityKey: null,
  timerInterval: null,
  timerSeconds: 15 * 60,
};

// —— HELPERS ——
const $ = (id) => document.getElementById(id);
const show = (id) => {
  $(id).classList.add("active");
};
const hide = (id) => {
  $(id).classList.remove("active");
};

function goToSection(sectionId) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  show(sectionId);
  state.currentSection = sectionId;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// —— LANDING PAGE ——
function initLanding() {
  animateCounter("counter-users", 247391, 2000);
  animateCounter("counter-types", 8, 800);
  animateCounter("counter-accuracy", 94, 1500, "%");
  goToSection("section-landing");
}

function animateCounter(id, target, duration, suffix = "") {
  const el = $(id);
  if (!el) return;
  const start = Date.now();
  const tick = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString("pt-BR") + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// —— QUIZ ——
function startQuiz() {
  state.currentQuestion = 0;
  state.scores = [0, 0, 0];
  state.answers = [];
  goToSection("section-quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = QUIZ_QUESTIONS[state.currentQuestion];
  const idx = state.currentQuestion;
  const total = QUIZ_QUESTIONS.length;
  const progress = (idx / total) * 100;

  $("quiz-progress").style.width = progress + "%";
  $("quiz-current").textContent = idx + 1;
  $("quiz-total").textContent = total;

  const wrapper = $("question-wrapper");
  wrapper.style.opacity = "0";
  wrapper.style.transform = "translateX(30px)";

  setTimeout(() => {
    $("question-number-label").textContent = `Questão ${idx + 1} de ${total}`;
    $("question-text").textContent = q.text;

    const letters = ["A", "B", "C", "D"];
    const optContainer = $("options-container");
    optContainer.innerHTML = "";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.id = `opt-${i}`;
      btn.innerHTML = `
        <span class="option-letter">${letters[i]}</span>
        <span>${opt.text}</span>
      `;
      btn.addEventListener("click", () =>
        selectAnswer(i, opt.score, q.dimension),
      );
      optContainer.appendChild(btn);
    });

    wrapper.style.opacity = "1";
    wrapper.style.transform = "translateX(0)";
    wrapper.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  }, 150);
}

function selectAnswer(optionIdx, score, dimension) {
  document
    .querySelectorAll(".option-btn")
    .forEach((b) => b.classList.remove("selected"));
  const btn = $(`opt-${optionIdx}`);
  btn.classList.add("selected");

  state.scores[dimension] += score;
  state.answers.push({
    question: state.currentQuestion,
    option: optionIdx,
    score,
  });

  setTimeout(() => {
    state.currentQuestion++;

    // Mostrar captura de email na questão 8 (índice 7)
    if (state.currentQuestion === 7 && !state.userEmail) {
      goToSection("section-email");
      return;
    }

    if (state.currentQuestion >= QUIZ_QUESTIONS.length) {
      calculateAndShowResult();
      return;
    }

    renderQuestion();
  }, 400);
}

// —— CAPTURA DE EMAIL ——
function submitEmail() {
  const name = $("input-name").value.trim();
  const email = $("input-email").value.trim();

  if (!name || !email) {
    showInputError("Por favor, preencha seu nome e e-mail para continuar.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showInputError("Por favor, insira um e-mail válido.");
    return;
  }

  state.userName = name;
  state.userEmail = email;

  goToSection("section-quiz");
  renderQuestion();
}

function showInputError(msg) {
  let err = $("email-error");
  if (!err) {
    err = document.createElement("p");
    err.id = "email-error";
    err.style.cssText =
      "color: #ef4444; font-size: 0.82rem; margin-top: 8px; text-align: center;";
    $("email-form").appendChild(err);
  }
  err.textContent = msg;
}

// —— CÁLCULO DE PERSONALIDADE ——
function calculatePersonality() {
  const total = QUIZ_QUESTIONS.length;
  const perDim = Math.ceil(total / 3);

  // Para cada dimensão, calcular se a pontuação total é maioria 0 ou 1
  const dims = ["000", "001", "010", "011", "100", "101", "110", "111"];

  // Calcular pontuações por dimensão
  const dimScores = [0, 0, 0];
  const dimCounts = [0, 0, 0];

  QUIZ_QUESTIONS.forEach((q, idx) => {
    const ans = state.answers.find((a) => a.question === idx);
    if (ans) {
      dimScores[q.dimension] += ans.score;
      dimCounts[q.dimension]++;
    }
  });

  // Binarizar: se média > 0.5 => 1, senão => 0
  const key = dimScores
    .map((s, i) => {
      const avg = dimCounts[i] > 0 ? s / dimCounts[i] : 0;
      return avg > 0.5 ? "1" : "0";
    })
    .join("");

  return key;
}

function calculateAndShowResult() {
  const key = calculatePersonality();
  state.personalityKey = key;

  goToSection("section-loading");
  startLoadingSequence();
}

// —— LOADING ——
function startLoadingSequence() {
  const bar = $("loading-bar");
  const items = document.querySelectorAll(".analyse-item");
  const steps = [15, 35, 55, 72, 88, 100];
  const delays = [800, 1600, 2400, 3400, 4400, 5600];

  delays.forEach((delay, i) => {
    setTimeout(() => {
      bar.style.width = steps[i] + "%";
      if (items[i]) {
        items[i].classList.add("done");
        items[i].querySelector(".check-icon").textContent = "✓";
      }
    }, delay);
  });

  // Após loading completo, ir para paywall
  setTimeout(() => {
    showPaywall();
  }, 7000);
}

// —— PAYWALL ——
function showPaywall() {
  const personality = PERSONALITY_TYPES[state.personalityKey];
  goToSection("section-paywall");

  // Popular dados do perfil
  $("paywall-profile-emoji").textContent = personality.emoji;
  $("paywall-profile-name").textContent = personality.name;
  $("paywall-profile-tagline").textContent = personality.tagline;

  // Mostrar traços visíveis (2) e bloqueados (5)
  const visibleTraits = personality.strengths.slice(0, 2);
  const lockedTraits = [
    "Seus pontos cegos e como superá-los",
    "Suas profissões ideais com base no seu perfil",
    "Sua compatibilidade afetiva",
    "Plano de 30 dias personalizado",
    "Seu estilo de liderança e comunicação",
  ];

  const traitsContainer = $("traits-list");
  traitsContainer.innerHTML = "";

  visibleTraits.forEach((t) => {
    const div = document.createElement("div");
    div.className = "trait-item";
    div.innerHTML = `<span class="trait-dot"></span><span>${t}</span>`;
    traitsContainer.appendChild(div);
  });

  lockedTraits.forEach((t) => {
    const div = document.createElement("div");
    div.className = "trait-item locked";
    div.innerHTML = `
      <span class="trait-dot"></span>
      <span>${t}</span>
      <span class="lock-badge">🔒 Bloqueado</span>
    `;
    traitsContainer.appendChild(div);
  });

  // Sunk cost
  const name = state.userName || "Você";
  $("sunk-cost-text").textContent =
    `${name}, você respondeu ${state.answers.length} questões cuidadosamente. Seu perfil está pronto — não desperdice esse resultado.`;

  // Iniciar timer
  startPaywallTimer();
}

function startPaywallTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = 15 * 60;
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timerSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (state.timerSeconds % 60).toString().padStart(2, "0");
  const el = $("timer-display");
  if (el) el.textContent = `${m}:${s}`;
}

// —— CHECKOUT ——
function goToCheckout() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  goToSection("section-payment");

  const p = PERSONALITY_TYPES[state.personalityKey];
  $("checkout-product-name").textContent = `Perfil Completo — ${p.name}`;
  $("checkout-countdown").textContent =
    "⏱️ Preço especial garantido por tempo limitado";

  // Pre-preencher dados
  if (state.userName) {
    const nameInput = $("checkout-name");
    if (nameInput) nameInput.value = state.userName;
  }
  if (state.userEmail) {
    const emailInput = $("checkout-email");
    if (emailInput) emailInput.value = state.userEmail;
  }

  generatePixCode();
}

function switchPaymentTab(tab) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));
  $(`tab-btn-${tab}`).classList.add("active");
  $(`tab-${tab}`).classList.add("active");
}

function generatePixCode() {
  const code =
    "perfilpsiquico" +
    Math.random().toString(36).substring(2, 10).toUpperCase();
  const el = $("pix-code-text");
  if (el) el.textContent = code;

  // "QR code" simples com texto
  const qr = $("pix-qr-display");
  if (qr) {
    qr.innerHTML = `<div style="font-size:0.6rem;color:#333;padding:8px;text-align:center;line-height:1.4">
      █▀▀▀▀▀█ ▄▄ ▄ █▀▀▀▀▀█<br>
      █ ███ █ ██▄ █ █ ███ █<br>
      █ ▀▀▀ █ ▀██ █ █ ▀▀▀ █<br>
      ▀▀▀▀▀▀▀ █▄█▄▀ ▀▀▀▀▀▀▀<br>
      ██▀▀ ▄▀ ▀▄ ██▄▀ █▀▄▄▀<br>
      ▀█▄▀ ▀▀▀ ▄▄█▄█ ▀██▀▄<br>
      ▀▀▀▀▀▀▀ ▄▀▄ ▀ ▀▀▀▀▀▀▀<br>
      R$ 9,90
    </div>`;
  }
}

function formatCardNumber(el) {
  let v = el.value.replace(/\D/g, "");
  v = v.substring(0, 16);
  v = v.replace(/(.{4})/g, "$1 ").trim();
  el.value = v;
}

function formatExpiry(el) {
  let v = el.value.replace(/\D/g, "");
  v = v.substring(0, 4);
  if (v.length > 2) v = v.substring(0, 2) + "/" + v.substring(2);
  el.value = v;
}

function processPayment() {
  const btn = $("pay-btn");
  const originalText = btn.innerHTML;

  btn.innerHTML = "⋯ Processando...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = "✓ Pagamento aprovado!";
    btn.style.background = "var(--green)";

    setTimeout(() => {
      showResult();
    }, 1000);
  }, 2500);
}

// —— RESULTADO COMPLETO ——
function showResult() {
  const p = PERSONALITY_TYPES[state.personalityKey];
  goToSection("section-result");

  const name = state.userName ? `, ${state.userName}` : "";

  // Header
  $("result-profile-emoji").textContent = p.emoji;
  $("result-profile-name").textContent = p.name;
  $("result-header-sub").textContent =
    `Seu perfil completo foi desbloqueado${name}. Conheça-se profundamente.`;

  // Descrição
  $("result-description").innerHTML = p.description.replace(/\n\n/g, "</p><p>");

  // Pontos fortes
  const strengthsEl = $("result-strengths");
  strengthsEl.innerHTML = p.strengths
    .map((s) => `<span class="strength-pill">✦ ${s}</span>`)
    .join("");

  // Blind spots
  const blindspotsEl = $("result-blindspots");
  blindspotsEl.innerHTML = p.blindspots
    .map(
      (b) => `
    <div class="blindspot-item">
      <span class="blindspot-emoji">${b.emoji}</span>
      <div class="blindspot-text">
        <h4>${b.title}</h4>
        <p>${b.desc}</p>
      </div>
    </div>
  `,
    )
    .join("");

  // Carreiras
  const careersEl = $("result-careers");
  careersEl.innerHTML = p.careers
    .map((c) => `<div class="career-item">${c}</div>`)
    .join("");

  // Plano 30 dias
  const planEl = $("result-plan");
  const weeks = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];
  const planData = [p.plan.week1, p.plan.week2, p.plan.week3, p.plan.week4];
  planEl.innerHTML = planData
    .map(
      (tasks, i) => `
    <div class="plan-week">
      <div class="plan-week-title">${weeks[i]}</div>
      ${tasks
        .map(
          (t) => `
        <div class="plan-task">
          <span class="plan-task-dot"></span>
          <span>${t}</span>
        </div>
      `,
        )
        .join("")}
    </div>
  `,
    )
    .join("");

  // Compatibilidade
  const compatEl = $("result-compat");
  compatEl.innerHTML = p.compatibility
    .map(
      (c) => `
    <div class="compat-item">
      <span class="compat-type">${c.type}</span>
      <div class="compat-bar-track">
        <div class="compat-bar-fill" style="width: 0%" data-width="${c.pct}"></div>
      </div>
      <span class="compat-pct">${c.pct}%</span>
    </div>
  `,
    )
    .join("");

  // Animar barras de compatibilidade
  setTimeout(() => {
    document.querySelectorAll(".compat-bar-fill").forEach((bar) => {
      const w = bar.dataset.width;
      bar.style.transition = "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
      bar.style.width = w + "%";
    });
  }, 400);

  // Lançar confetti
  launchConfetti();
}

// —— CONFETTI ——
function launchConfetti() {
  const colors = [
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#06b6d4",
    "#10b981",
    "#fff",
  ];
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999";
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -20,
    r: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 4 + 2,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2,
    opacity: 1,
  }));

  let frame = 0;
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y += p.speed;
      p.x += Math.sin(p.angle) * 1.5;
      p.angle += p.spin;
      p.opacity -= 0.008;
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    frame++;
    if (frame < 200) requestAnimationFrame(animate);
    else {
      canvas.remove();
    }
  };
  requestAnimationFrame(animate);
}

// —— SHARE ——
function shareResult(platform) {
  const p = PERSONALITY_TYPES[state.personalityKey];
  const text = `Descobri meu perfil de personalidade: ${p.name} ${p.emoji}\n"${p.tagline}"\n\nDescubra o seu em:`;
  const url = window.location.href;

  if (platform === "whatsapp") {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      "_blank",
    );
  } else if (platform === "instagram") {
    navigator.clipboard.writeText(text + " " + url).then(() => {
      alert("Texto copiado! Cole no Instagram.");
    });
  } else {
    navigator.clipboard.writeText(text + "\n" + url).then(() => {
      alert("Link copiado para a área de transferência!");
    });
  }
}

// —— INIT ——
document.addEventListener("DOMContentLoaded", () => {
  initLanding();
});
