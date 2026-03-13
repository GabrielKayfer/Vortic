export const HOME_SECTION_IDS = {
  home: 'inicio',
  categories: 'modalidades',
  products: 'produtos',
  guides: 'guias',
  app: 'app',
  community: 'comunidade',
} as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[keyof typeof HOME_SECTION_IDS];

export const HOME_SECTION_ORDER: HomeSectionId[] = [
  HOME_SECTION_IDS.home,
  HOME_SECTION_IDS.categories,
  HOME_SECTION_IDS.products,
  HOME_SECTION_IDS.guides,
  HOME_SECTION_IDS.app,
  HOME_SECTION_IDS.community,
];