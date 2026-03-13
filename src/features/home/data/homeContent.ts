import corridaImage from '../../../assets/images/categories/corrida.png';
import ciclismoImage from '../../../assets/images/categories/ciclismo.png';
import futebolImage from '../../../assets/images/categories/futebol.png';
import natacaoCategoryImage from '../../../assets/images/categories/natacao.png';
import tenisCategoryImage from '../../../assets/images/categories/tenis.png';
import lifestyleRunImage from '../../../assets/images/products/FotoPessoaCorrendoVisaoPernas.avif';
import runningLegsCommunityImage from '../../../assets/images/products/PernasDeDuasPessoasCorrendo.avif';
import femaleTrainingLifestyleImage from '../../../assets/images/products/mulherFazendoExercicio..avif';
import tennisBandanaImage from '../../../assets/images/products/bandanatenis.png';
import femaleTransitImage from '../../../assets/images/products/malaFem.png';
import brandPortraitImage from '../../../assets/images/products/homemFazendoPosePretoeBranco.avif';
import tennisShoeImage from '../../../assets/images/products/Tenis_ADIZERO_EVO_SL_ATR_Preto_KK2685_HM1.png';
import bestChoiceTennisImage from '../../../assets/images/products/TenisMelhorEscolha.avif';
import cyclingEditorialImage from '../../../assets/images/products/shortCiclismoFemDois.png';
import swimSetImage from '../../../assets/images/products/natacao.png';
import walkingCommunityImage from '../../../assets/images/products/duasPessoasAndando.avif';
import stopwatchIcon from '../../../assets/images/symbols/cronometro.png';
import deliveryIcon from '../../../assets/images/symbols/delivery.png';
import ignitionIcon from '../../../assets/images/symbols/ignicao.png';
import shareIcon from '../../../assets/images/symbols/compartilhar.png';
import priceTagIcon from '../../../assets/images/symbols/pricetag.png';

export const heroStats = [
  { value: '05', label: 'frentes principais para começar por modalidade e momento de uso' },
  { value: '06', label: 'destaques que conectam escolha, função e rotina da semana' },
  { value: '08', label: 'itens ativos para buscar, salvar e entender com rapidez' },
] as const;

export const sportsCategories = [
  {
    title: 'Corrida',
    description: 'Tênis, meias e camadas leves para base semanal, esteira e rua cedo.',
    image: corridaImage,
  },
  {
    title: 'Ciclismo',
    description: 'Bermudas, corta-vento e peças leves para pedal urbano, deslocamento e média distância.',
    image: ciclismoImage,
  },
  {
    title: 'Futebol',
    description: 'Bolas, camisas e peças leves para society, campo e fim de tarde em grupo.',
    image: futebolImage,
  },
  {
    title: 'Natação',
    description: 'Óculos, touca e kit essencial para aula, treino livre e retorno à piscina.',
    image: natacaoCategoryImage,
  },
  {
    title: 'Tênis',
    description: 'Faixas, calçados e peças leves para saque, deslocamento e aula em quadra.',
    image: tenisCategoryImage,
  },
] as const;

export const sportsEditorialFeature = {
  eyebrow: 'Entre prática e cidade',
  title: 'Entre sair cedo e voltar tarde, o treino pede o essencial já resolvido.',
  description:
    'Ele não começa na quadra nem termina na corrida. Passa por levar o necessário, trocar rápido e seguir o dia sem carregar peso demais.',
  leadImage: walkingCommunityImage,
  portraitImage: brandPortraitImage,
  note: 'Quando o básico está resolvido, fica mais fácil repetir o ritmo ao longo da semana.',
} as const;

export const guideCards = [
  {
    sport: 'Corrida',
    title: 'Como escolher um tênis para treinos curtos, esteira e rodagem leve.',
    description: 'Veja o que muda entre amortecimento, resposta e encaixe para uma semana de 5 km.',
    image: bestChoiceTennisImage,
    meta: 'Guia de 4 min',
  },
  {
    sport: 'Tênis',
    title: 'O que vale levar para a quadra quando você sai direto de casa ou do trabalho.',
    description: 'Uma lista curta para não esquecer faixa, troca seca e bolsa certa para o treino.',
    image: tennisBandanaImage,
    meta: 'Checklist rápido',
  },
  {
    sport: 'Natação',
    title: 'O básico para voltar à natação sem gastar com item que ainda não vai usar.',
    description: 'Comece por óculos, touca e modelagem correta antes de pensar em acessórios extras.',
    image: swimSetImage,
    meta: 'Guia de compra',
  },
] as const;

export const appFeatures = [
  {
    title: 'Agenda de treinos',
    description: 'Mostra modalidade, horário e sessão marcada para o treino não escapar da agenda.',
    icon: stopwatchIcon,
  },
  {
    title: 'Resumo de ritmo',
    description: 'Reúne minutos, frequência e meta semanal em uma leitura simples do que está andando.',
    icon: deliveryIcon,
  },
  {
    title: 'Lembrete de reposição',
    description: 'Sinaliza quando meia, faixa, kit de piscina ou item salvo voltam a fazer falta.',
    icon: ignitionIcon,
  },
] as const;

export const communityCards = [
  {
    title: 'Entre casa, trabalho e rua',
    description: 'Uma mochila bem resolvida, uma troca leve e a peça certa bastam para encaixar o treino sem desmontar o resto do dia.',
    image: femaleTrainingLifestyleImage,
    icon: shareIcon,
  },
  {
    title: 'Hábitos pequenos que seguram a frequência',
    description: 'Separar a roupa na noite anterior e deixar o acessório certo por perto ajuda o hábito a continuar.',
    image: femaleTransitImage,
    icon: priceTagIcon,
  },
] as const;

export const heroVisuals = {
  lifestyle: lifestyleRunImage,
  communityLead: runningLegsCommunityImage,
  mainProduct: tennisShoeImage,
  supportProduct: femaleTransitImage,
  accentProduct: cyclingEditorialImage,
  communityProduct: femaleTransitImage,
} as const;
