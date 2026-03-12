import corridaImage from '../../../assets/images/categories/corrida.png';
import ciclismoImage from '../../../assets/images/categories/ciclismo.png';
import futebolImage from '../../../assets/images/categories/futebol.png';
import natacaoCategoryImage from '../../../assets/images/categories/natacao.png';
import tenisCategoryImage from '../../../assets/images/categories/tenis.png';
import lifestyleRunImage from '../../../assets/images/products/FotoPessoaCorrendoVisaoPernas.avif';
import femaleTrainingImage from '../../../assets/images/products/academiafem.avif';
import bandanaImage from '../../../assets/images/products/bandanatenis.avif';
import shortBasketImage from '../../../assets/images/products/shortBasket.avif';
import tennisShoeImage from '../../../assets/images/products/Tenis_ADIZERO_EVO_SL_ATR_Preto_KK2685_HM1.avif';
import cyclingShortImage from '../../../assets/images/products/shortCiclismoFemDois.avif';
import swimSetImage from '../../../assets/images/products/natacao.avif';
import backpackImage from '../../../assets/images/products/mochila.avif';
import capImage from '../../../assets/images/products/bone.avif';
import stopwatchIcon from '../../../assets/images/symbols/cronometro.png';
import deliveryIcon from '../../../assets/images/symbols/delivery.png';
import ignitionIcon from '../../../assets/images/symbols/ignicao.png';
import shareIcon from '../../../assets/images/symbols/compartilhar.png';
import priceTagIcon from '../../../assets/images/symbols/pricetag.png';

export const heroStats = [
  { value: '05', label: 'modalidades com curadoria inicial pronta para crescer' },
  { value: '18', label: 'produtos e narrativas distribuidos em uma vitrine viva' },
  { value: '01', label: 'ecossistema unindo compra, guia e rotina esportiva' }
] as const;

export const sportsCategories = [
  {
    title: 'Corrida',
    description: 'Tenis, ritmo e repertorio para quem treina com constancia.',
    image: corridaImage
  },
  {
    title: 'Ciclismo',
    description: 'Camadas tecnicas e acessorios para trajetos urbanos e longos.',
    image: ciclismoImage
  },
  {
    title: 'Futebol',
    description: 'Pecas iconicas, campo e cultura conectados na mesma prateleira.',
    image: futebolImage
  },
  {
    title: 'Natacao',
    description: 'Equipamentos enxutos, funcionais e prontos para a rotina de piscina.',
    image: natacaoCategoryImage
  },
  {
    title: 'Tenis',
    description: 'Movimento rapido, precisao e um visual limpo dentro e fora da quadra.',
    image: tenisCategoryImage
  }
] as const;

export const guideCards = [
  {
    sport: 'Corrida',
    title: 'Como montar uma base semanal sem sacrificar recuperacao.',
    description: 'Um guia introdutorio para equilibrar volume, intensidade e descanso.',
    image: lifestyleRunImage,
    meta: 'Leitura de 6 min'
  },
  {
    sport: 'Tenis',
    title: 'Essenciais para treino tecnico com mobilidade e leveza.',
    description: 'Selecao pensada para quem precisa transitar entre quadra, academia e rua.',
    image: bandanaImage,
    meta: 'Checklist curado'
  },
  {
    sport: 'Natacao',
    title: 'O que vale investir primeiro para criar uma rotina consistente.',
    description: 'Do kit basico ao suporte de treino, com foco em longevidade de uso.',
    image: swimSetImage,
    meta: 'Atualizado para iniciantes'
  }
] as const;

export const appFeatures = [
  {
    title: 'Rotina em blocos',
    description: 'Sessao, lembrete e historico organizados em uma interface de ritmo rapido.',
    icon: stopwatchIcon
  },
  {
    title: 'Entrega ligada ao treino',
    description: 'A compra conversa com a necessidade real da pratica e do calendario.',
    icon: deliveryIcon
  },
  {
    title: 'Descoberta contextual',
    description: 'O app sugere produtos e guias a partir do esporte que voce acompanha.',
    icon: ignitionIcon
  }
] as const;

export const communityCards = [
  {
    title: 'Rotina urbana com repertorio esportivo',
    description: 'A comunidade combina treino, deslocamento e estilo com escolhas funcionais.',
    image: backpackImage,
    icon: shareIcon
  },
  {
    title: 'Curadoria viva para diferentes fases do treino',
    description: 'Produtos entram como suporte do habito, nao como excesso de vitrine.',
    image: capImage,
    icon: priceTagIcon
  }
] as const;

export const heroVisuals = {
  lifestyle: lifestyleRunImage,
  mainProduct: tennisShoeImage,
  supportProduct: femaleTrainingImage,
  accentProduct: cyclingShortImage,
  communityProduct: shortBasketImage
} as const;
