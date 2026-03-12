import lifestyleRunImage from '../../../assets/images/products/FotoPessoaCorrendoVisaoPernas.avif';
import bandanaImage from '../../../assets/images/products/bandanatenis.avif';
import capImage from '../../../assets/images/products/bone.avif';
import backpackImage from '../../../assets/images/products/mochila.avif';
import swimSetImage from '../../../assets/images/products/natacao.avif';
import cyclingSupportImage from '../../../assets/images/products/shortCiclismoFemDois.avif';

export const catalogQuickFilters = [
  'Tudo',
  'Corrida',
  'Academia',
  'Futebol',
  'Natacao',
  'Ciclismo',
  'Basquete'
] as const;

export const catalogHighlights = [
  {
    value: '06',
    label: 'produtos ativos na selecao inicial',
    tone: 'primary' as const
  },
  {
    value: '03',
    label: 'frentes combinadas entre comercio, repertorio e uso real',
    tone: 'secondary' as const
  },
  {
    value: '01',
    label: 'linguagem visual unica para toda a experiencia',
    tone: 'support' as const
  }
] as const;

export const catalogEditorialNotes = [
  {
    title: 'Curadoria enxuta',
    description: 'A vitrine privilegia poucos produtos com leitura rapida e contexto claro.'
  },
  {
    title: 'Base para evolucao',
    description: 'Filtros, ordenacao e recomendacoes podem entrar depois sem reescrever a pagina.'
  },
  {
    title: 'Marca antes de ruido',
    description: 'A pagina funciona como selecao assinada, nao como parede promocional.'
  }
] as const;

export const catalogEditorialVisual = {
  image: backpackImage,
  overline: 'Vitrine editorial',
  title: 'Uma selecao pensada para acompanhar habito, deslocamento e treino.',
  description:
    'O catalogo ja nasce com espaco para conteudo, contexto e descoberta. Produtos entram como suporte da pratica esportiva e nao como excesso de oferta.'
} as const;

export const productEditorialBySlug = {
  'tenis-adizero-evo-sl': {
    overline: 'Edicao corrida',
    description:
      'Um tenis pensado para treinos de resposta rapida, deslocamento urbano e rotinas em que leveza e presenca caminham juntas.',
    supportImage: lifestyleRunImage,
    supportLabel: 'Ritmo e cidade',
    supportText: 'Funciona bem para quem alterna treino tecnico, recuperacao ativa e uso cotidiano.',
    highlights: ['Resposta leve', 'Leitura limpa', 'Uso versatil'],
    specs: [
      { label: 'Indicacao', value: 'Treinos curtos e ritmo progressivo' },
      { label: 'Sensacao', value: 'Leveza com estrutura enxuta' },
      { label: 'Curadoria', value: 'Corrida, commute e rotina ativa' }
    ],
    notes: [
      'Bom ponto de entrada para quem quer elevar a rotina sem ir para um visual exagerado.',
      'Entrega a mistura mais clara entre performance e linguagem premium dentro da selecao.'
    ]
  },
  'conjunto-academia-feminino': {
    overline: 'Edicao training',
    description:
      'Conjunto tecnico com leitura limpa para quem quer uma base consistente de treino e mobilidade ao longo da semana.',
    supportImage: bandanaImage,
    supportLabel: 'Camada base',
    supportText: 'Ideal para treinos recorrentes, com foco em conforto, praticidade e visual organizado.',
    highlights: ['Treino recorrente', 'Mobilidade', 'Base essencial'],
    specs: [
      { label: 'Indicacao', value: 'Academia e rotina funcional' },
      { label: 'Sensacao', value: 'Ajuste seguro e visual limpo' },
      { label: 'Curadoria', value: 'Entrada para montar look tecnico' }
    ],
    notes: [
      'Peca de base para construir uma rotina sem excesso de informacao visual.',
      'Funciona bem para combinar com acessorios e camadas leves fora do treino.'
    ]
  },
  'bola-futebol-copa': {
    overline: 'Edicao futebol',
    description:
      'Item iconico para treinos, jogo casual e repertorio esportivo com apelo cultural imediato.',
    supportImage: capImage,
    supportLabel: 'Cultura de jogo',
    supportText: 'A selecao de futebol entra como gesto de identidade, memoria e pratica ao mesmo tempo.',
    highlights: ['Icone esportivo', 'Treino casual', 'Leitura cultural'],
    specs: [
      { label: 'Indicacao', value: 'Jogo recreativo e treino leve' },
      { label: 'Sensacao', value: 'Presenca visual e uso imediato' },
      { label: 'Curadoria', value: 'Campo, quadra e repertorio urbano' }
    ],
    notes: [
      'Produto com forte leitura emocional dentro da vitrine.',
      'Ajuda a costurar esporte e lifestyle sem parecer merchandising.'
    ]
  },
  'jaqueta-basket-performance': {
    overline: 'Edicao basquete',
    description:
      'Jaqueta para quem busca camada funcional, volume certo e linguagem esportiva com mais personalidade.',
    supportImage: backpackImage,
    supportLabel: 'Camada externa',
    supportText: 'Boa para deslocamento, aquecimento e rotina de quadra com identidade mais marcada.',
    highlights: ['Protecao leve', 'Volume controlado', 'Uso urbano'],
    specs: [
      { label: 'Indicacao', value: 'Pre e pos treino, deslocamento' },
      { label: 'Sensacao', value: 'Camada leve com presenca' },
      { label: 'Curadoria', value: 'Basquete, rua e sobreposicao' }
    ],
    notes: [
      'Peca que aproxima a pagina de produto de uma linguagem mais fashion-esportiva.',
      'Funciona como item de repertorio e nao apenas cobertura tecnica.'
    ]
  },
  'kit-natacao-training': {
    overline: 'Edicao natacao',
    description:
      'Kit de entrada para uma rotina consistente de piscina, com leitura simples e foco total em uso real.',
    supportImage: swimSetImage,
    supportLabel: 'Rotina de piscina',
    supportText: 'Ajuda a criar constancia com um conjunto direto, funcional e facil de manter.',
    highlights: ['Pratica constante', 'Entrada funcional', 'Baixo ruido'],
    specs: [
      { label: 'Indicacao', value: 'Inicio e recorrencia de treino' },
      { label: 'Sensacao', value: 'Uso direto e organizacao simples' },
      { label: 'Curadoria', value: 'Piscina, mobilidade e frequencia' }
    ],
    notes: [
      'Aposta em clareza e recorrencia em vez de excesso de equipamento.',
      'Bom exemplo de como a Vortic pode curar entrada de categoria.'
    ]
  },
  'short-ciclismo-feminino': {
    overline: 'Edicao ciclismo',
    description:
      'Short pensado para trajetos recorrentes, treino tecnico e construcoes de look mais enxutas no universo do pedal.',
    supportImage: cyclingSupportImage,
    supportLabel: 'Ritmo continuo',
    supportText: 'Uma peca que reforca o lado tecnico do ciclismo com linguagem visual mais controlada.',
    highlights: ['Ajuste tecnico', 'Ritmo constante', 'Perfil clean'],
    specs: [
      { label: 'Indicacao', value: 'Pedal urbano e treino de media distancia' },
      { label: 'Sensacao', value: 'Compressao equilibrada e mobilidade' },
      { label: 'Curadoria', value: 'Ciclismo, commute e endurance leve' }
    ],
    notes: [
      'Traz o lado mais tecnico da selecao sem sacrificar a leitura editorial.',
      'Ajuda a diferenciar a vitrine de ciclismo de uma pagina puramente utilitaria.'
    ]
  }
} as const;
