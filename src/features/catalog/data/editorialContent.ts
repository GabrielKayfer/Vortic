import lifestyleRunImage from '../../../assets/images/products/FotoPessoaCorrendoVisaoPernas.avif';
import camisaChileImage from '../../../assets/images/products/camisaFutebolChile.png';
import femaleTransitImage from '../../../assets/images/products/malaFem.png';
import swimSupportImage from '../../../assets/images/products/natacaosunga.png';
import pouchImage from '../../../assets/images/products/pochete.png';
import shortTenisImage from '../../../assets/images/products/shortTenisMasc.png';
import cyclingSupportImage from '../../../assets/images/products/shortCiclismoFemDois.png';
import womanTrainingLifestyleImage from '../../../assets/images/products/mulherFazendoExercicio..avif';
import manPortraitImage from '../../../assets/images/products/homemFazendoPosePretoeBranco.avif';

export const catalogQuickFilters = [
  'Tudo',
  'Corrida',
  'Treino',
  'Futebol',
  'Natacao',
  'Ciclismo',
  'Basquete',
  'Tenis',
  'Acessorios',
] as const;

export const catalogHighlights = [
  {
    value: '08',
    label: 'itens ativos com leitura clara de preço, faixa e proposta de uso',
    tone: 'primary' as const,
  },
  {
    value: '05',
    label: 'modalidades principais para abrir a busca com menos ruído',
    tone: 'secondary' as const,
  },
  {
    value: '06',
    label: 'destaques na home para chegar mais rápido ao que interessa',
    tone: 'support' as const,
  },
] as const;

export const catalogEditorialNotes = [
  {
    title: 'Comece pela modalidade',
    description: 'Se a dúvida ainda estiver aberta, comece por corrida, ciclismo, futebol, natação ou tênis para cortar o excesso logo no início.',
  },
  {
    title: 'Busque pelo tipo de item',
    description: 'Mochila, bola, faixa, kit, jaqueta ou tênis funcionam melhor do que termos amplos demais.',
  },
  {
    title: 'Compare antes de levar',
    description: 'Badge, faixa de tamanho e descrição curta já ajudam a separar o que entra agora do que pode esperar.',
  },
] as const;

export const catalogEditorialVisual = {
  image: femaleTransitImage,
  overline: 'Como navegar',
  title: 'Do tênis de base à mochila de uso diário, o catálogo encurta a procura sem tirar contexto.',
  description:
    'Quando o esporte já está definido, a modalidade resolve metade do caminho. Quando o item vem primeiro, vale buscar por mochila, bola, faixa, kit, jaqueta ou tipo de treino.',
} as const;

export const productEditorialBySlug = {
  'tenis-pulse-atr': {
    overline: 'Tênis para corrida diária',
    description:
      'Um modelo de base para quem corre entre 5 e 10 km, alterna rua e esteira e prefere amortecimento estável em vez de sensação excessivamente macia.',
    supportImage: lifestyleRunImage,
    supportLabel: 'Onde entra melhor',
    supportText: 'Funciona como par principal para treinos comuns, aquecimento e rodagem leve, principalmente quando a corrida abre ou fecha o dia.',
    highlights: [
      'Amortecimento estável para treino diário',
      'Cabedal ventilado que seca rápido',
      'Boa leitura para rua e esteira',
    ],
    specs: [
      { label: 'Indicação', value: 'Treinos de base, esteira e rodagem leve' },
      { label: 'Tamanhos', value: '36 ao 43' },
      { label: 'Construção', value: 'Drop de 8 mm com cabedal em mesh' },
    ],
    notes: [
      'É uma escolha boa para quem quer um par confiável para os treinos que mais se repetem, sem guardar o melhor tênis só para o longo.',
      'Também funciona para quem mistura corrida curta, caminhada acelerada e deslocamento a pé no mesmo dia.',
    ],
  },
  'conjunto-flow-training': {
    overline: 'Top + legging de treino',
    description:
      'Conjunto pensado para musculação, funcional e aula de studio, com top de suporte médio e legging de cós firme para treinos que pedem repetição na semana.',
    supportImage: womanTrainingLifestyleImage,
    supportLabel: 'Onde encaixa',
    supportText: 'Resolve o treino recorrente de quem lava rápido, repete a peça e precisa de sustentação confortável sem excesso de compressão.',
    highlights: [
      'Top de suporte médio para força e studio',
      'Tecido de secagem rápida para repetir na semana',
      'Cós firme para agachamento e mobilidade',
    ],
    specs: [
      { label: 'Indicação', value: 'Musculação, funcional e studio' },
      { label: 'Modelagem', value: 'Top ajustado e legging de cintura alta' },
      { label: 'Tamanhos', value: 'PP ao GG' },
    ],
    notes: [
      'É uma base forte para quem prefere tirar a dúvida do look de treino e repetir a peça com segurança ao longo da semana.',
      'O conjunto entra bem quando a prioridade é mobilidade com sustentação, não visual de academia montado demais.',
    ],
  },
  'bola-match-5-club': {
    overline: 'Bola para jogo e resenha',
    description:
      'Bola número 5 pensada para society, gramado e partida recreativa, com toque firme e construção pronta para rodar mais de um jogo na semana.',
    supportImage: camisaChileImage,
    supportLabel: 'Quando vale levar',
    supportText: 'É a compra que resolve rápido o jogo do fim de tarde, o treino leve e a bola que sempre falta quando o grupo combina de jogar.',
    highlights: [
      'Número 5 com toque firme e estável',
      'Construção reforçada para society e campo',
      'Boa para treino leve e jogo casual',
    ],
    specs: [
      { label: 'Indicação', value: 'Society, gramado e recreação' },
      { label: 'Superfície', value: 'Uso misto em campo e society' },
      { label: 'Perfil', value: 'Treino leve e jogo de fim de semana' },
    ],
    notes: [
      'É uma compra simples, mas muito clara: quando a bola certa aparece, o jogo deixa de depender do improviso de alguém do grupo.',
      'Faz sentido para quem quer uma opção única para alternar society e gramado sem complicar a escolha.',
    ],
  },
  'jaqueta-courtline-woven': {
    overline: 'Jaqueta leve para quadra',
    description:
      'Camada leve para aquecimento, ida à quadra e saída do jogo, com modelagem solta para vestir por cima da regata sem travar o braço.',
    supportImage: manPortraitImage,
    supportLabel: 'Quando ela rende',
    supportText: 'Entra antes do primeiro arremesso, segura o vento na ida e continua funcionando quando o basquete vira rua depois do jogo.',
    highlights: [
      'Camada leve para aquecimento e pós-jogo',
      'Modelagem solta com mobilidade no braço',
      'Visual limpo para quadra e rua',
    ],
    specs: [
      { label: 'Indicação', value: 'Aquecimento, saída da quadra e deslocamento' },
      { label: 'Modelagem', value: 'Solta, para sobreposição leve' },
      { label: 'Tamanhos', value: 'P ao GG' },
    ],
    notes: [
      'Resolve a camada externa de quem sai da quadra e continua o dia sem trocar o visual inteiro.',
      'Também funciona para quem quer uma peça de rua com referência esportiva, mas sem cara de uniforme.',
    ],
  },
  'kit-pool-start': {
    overline: 'Kit essencial de piscina',
    description:
      'Óculos, touca e case pensados para aula, nado livre e retorno à piscina, sem exagero de acessório para quem ainda está retomando a frequência.',
    supportImage: swimSupportImage,
    supportLabel: 'Primeira compra',
    supportText: 'Resolve o básico para voltar a nadar com conforto e guardar tudo junto, sem gastar cedo demais com item que ainda não entra na rotina.',
    highlights: [
      'Óculos com vedação macia',
      'Touca leve para rotina de piscina',
      'Case rígido para guardar e levar',
    ],
    specs: [
      { label: 'Indicação', value: 'Aula, nado livre e retomada' },
      { label: 'Conteúdo', value: 'Óculos, touca e case' },
      { label: 'Perfil', value: 'Adulto' },
    ],
    notes: [
      'É a compra certa para quem quer voltar à piscina sem transformar a retomada em uma lista longa demais.',
      'Quando o básico já sai resolvido, fica mais fácil manter a frequência antes de ampliar o kit.',
    ],
  },
  'short-pace-ride-2': {
    overline: 'Bermuda para pedal diário',
    description:
      'Bermuda de compressão média com forro anatômico para pedal urbano, giro curto e média distância, pensada para quem alterna deslocamento e treino.',
    supportImage: cyclingSupportImage,
    supportLabel: 'Quando entra',
    supportText: 'Resolve bem a ida ao trabalho de bike, o giro curto no meio da semana e o pedal mais longo de sábado sem pedir troca no meio do caminho.',
    highlights: [
      'Forro anatômico para mais tempo no selim',
      'Compressão média com ajuste seguro',
      'Boa para urbano e média distância',
    ],
    specs: [
      { label: 'Indicação', value: 'Deslocamento, giro curto e média distância' },
      { label: 'Modelagem', value: 'Rente ao corpo com compressão média' },
      { label: 'Tamanhos', value: 'PP ao G' },
    ],
    notes: [
      'Entrega exatamente o que pesa na escolha do ciclista casual: conforto no selim, ajuste firme e uso repetido sem complicação.',
      'Funciona para quem pedala por treino e para quem usa a bike como parte do deslocamento diário.',
    ],
  },
  'faixa-court-dry': {
    overline: 'Faixa leve para quadra',
    description:
      'Faixa elástica de secagem rápida para aula, treino técnico e jogo em dias de calor, segurando o suor sem pesar na bolsa.',
    supportImage: shortTenisImage,
    supportLabel: 'Detalhe que resolve',
    supportText: 'É o tipo de acessório pequeno que melhora conforto imediato, libera a visão e evita parar o ponto para enxugar o rosto.',
    highlights: [
      'Secagem rápida para calor de quadra',
      'Elástico macio sem apertar demais',
      'Cabe na bolsa e resolve rápido',
    ],
    specs: [
      { label: 'Indicação', value: 'Aula, treino técnico e jogo' },
      { label: 'Ajuste', value: 'Elástico confortável' },
      { label: 'Cor', value: 'Off-white com detalhe escuro' },
    ],
    notes: [
      'Mostra como um acessório pequeno consegue melhorar conforto imediato sem aumentar o volume da bolsa.',
      'Também entra bem em corrida leve e treino funcional quando o calor pede um detalhe simples para segurar o suor.',
    ],
  },
  'mochila-transit-22l': {
    overline: 'Mochila para treino e trabalho',
    description:
      'Mochila de 22 litros com divisão interna clara para levar notebook, troca de roupa e acessórios no mesmo dia, sem volume exagerado.',
    supportImage: pouchImage,
    supportLabel: 'O que ela resolve',
    supportText: 'Funciona para quem sai cedo, passa pelo trabalho, encaixa treino no meio ou no fim do dia e precisa separar roupa usada do resto.',
    highlights: [
      '22 litros com leitura fácil de espaço',
      'Bolso ventilado para o pós-treino',
      'Boa para notebook, troca e acessórios',
    ],
    specs: [
      { label: 'Indicação', value: 'Trabalho, treino e deslocamento' },
      { label: 'Volume', value: '22 litros' },
      { label: 'Compartimentos', value: 'Principal, frontal, lateral e bolso ventilado' },
    ],
    notes: [
      'É uma escolha forte para quem sai cedo, passa o dia fora e precisa levar o treino junto sem carregar uma bolsa grande demais.',
      'A divisão interna ajuda a separar roupa, acessório e item pessoal sem perder tempo procurando no fundo da mochila.',
    ],
  },
} as const;
