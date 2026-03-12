import adizeroImage from '../../../assets/images/products/Tenis_ADIZERO_EVO_SL_ATR_Preto_KK2685_HM1.avif';
import academiaFemImage from '../../../assets/images/products/academiafem.avif';
import bolaCopaImage from '../../../assets/images/products/bolaFutebolCopa.avif';
import jaquetaBasketImage from '../../../assets/images/products/jaketaBasket.avif';
import natacaoImage from '../../../assets/images/products/natacao.avif';
import shortCiclismoImage from '../../../assets/images/products/shortCiclismoFem.avif';
import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-1',
    slug: 'tenis-adizero-evo-sl',
    name: 'Tenis Adizero Evo SL ATR',
    category: 'Corrida',
    price: 899.9,
    image: adizeroImage,
    featured: true,
  },
  {
    id: 'prod-2',
    slug: 'conjunto-academia-feminino',
    name: 'Conjunto Academia Feminino',
    category: 'Academia',
    price: 239.9,
    image: academiaFemImage,
    featured: true,
  },
  {
    id: 'prod-3',
    slug: 'bola-futebol-copa',
    name: 'Bola Futebol Copa',
    category: 'Futebol',
    price: 179.9,
    image: bolaCopaImage,
    featured: true,
  },
  {
    id: 'prod-4',
    slug: 'jaqueta-basket-performance',
    name: 'Jaqueta Basket Performance',
    category: 'Basquete',
    price: 329.9,
    image: jaquetaBasketImage,
  },
  {
    id: 'prod-5',
    slug: 'kit-natacao-training',
    name: 'Kit Natacao Training',
    category: 'Natacao',
    price: 149.9,
    image: natacaoImage,
  },
  {
    id: 'prod-6',
    slug: 'short-ciclismo-feminino',
    name: 'Short Ciclismo Feminino',
    category: 'Ciclismo',
    price: 199.9,
    image: shortCiclismoImage,
  },
];