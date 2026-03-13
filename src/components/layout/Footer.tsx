import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCatalogPath, getHomePath, getHomeSectionPath } from '../../app/routes/paths';
import { HOME_SECTION_IDS } from '../../app/routes/sections';
import { Container } from '../ui/Container';

const footerGroups = [
  {
    title: 'Produtos',
    links: [
      { label: 'Calçados', to: getCatalogPath() },
      { label: 'Vestuário', to: getCatalogPath() },
      { label: 'Acessórios', to: getCatalogPath({ category: 'Acessorios' }) },
      { label: 'Bolsas e mochilas', to: getCatalogPath({ search: 'mochila' }) },
      { label: 'Destaques da semana', to: getHomeSectionPath(HOME_SECTION_IDS.products) },
    ],
  },
  {
    title: 'Modalidades',
    links: [
      { label: 'Corrida', to: getCatalogPath({ category: 'Corrida' }) },
      { label: 'Ciclismo', to: getCatalogPath({ category: 'Ciclismo' }) },
      { label: 'Futebol', to: getCatalogPath({ category: 'Futebol' }) },
      { label: 'Natação', to: getCatalogPath({ category: 'Natacao' }) },
      { label: 'Tênis', to: getCatalogPath({ category: 'Tenis' }) },
    ],
  },
  {
    title: 'Guias',
    links: [
      { label: 'Escolher um tênis', to: getHomeSectionPath(HOME_SECTION_IDS.guides) },
      { label: 'Primeiro kit de piscina', to: getHomeSectionPath(HOME_SECTION_IDS.guides) },
      { label: 'Pedal para o dia a dia', to: getHomeSectionPath(HOME_SECTION_IDS.guides) },
      { label: 'Treino técnico', to: getHomeSectionPath(HOME_SECTION_IDS.guides) },
      { label: 'Peças para quadra e rua', to: getHomeSectionPath(HOME_SECTION_IDS.guides) },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Entrega e devolução', to: getHomePath() },
      { label: 'Trocas', to: getHomePath() },
      { label: 'Guia de tamanhos', to: getCatalogPath() },
      { label: 'Conta', to: getHomePath() },
      { label: 'Ajuda', to: getHomePath() },
    ],
  },
] as const;

const FooterWrap = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background:
    linear-gradient(180deg, rgba(240, 210, 31, 0.1) 0, rgba(240, 210, 31, 0.1) 1rem, transparent 1rem),
    ${({ theme }) => theme.colors.surface};
`;

const FooterContent = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
  padding-top: ${({ theme }) => theme.spacing[10]};
  padding-bottom: ${({ theme }) => theme.spacing[8]};
`;

const TopGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) repeat(4, minmax(0, 1fr));
    align-items: start;
  }
`;

const BrandBlock = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 24rem;
`;

const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.alert};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const BrandTitle = styled.h2`
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  line-height: 0.95;
`;

const BrandText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8;
`;

const ContactList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ContactText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  line-height: 1.65;
`;

const NewsletterCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.lineStrong};
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const NewsletterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
`;

const NewsletterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 600;
`;

const Group = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const GroupTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 700;
`;

const LinkList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  line-height: 1.6;
  transition: color 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const BottomText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  line-height: 1.6;
`;

const BottomLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export function Footer() {
  return (
    <FooterWrap>
      <FooterContent>
        <TopGrid>
          <BrandBlock>
            <Eyebrow>Vortic</Eyebrow>
            <BrandTitle>Produtos, guias e hábitos para quem leva o esporte para o dia a dia.</BrandTitle>
            <BrandText>
              Plataforma esportiva que reúne escolhas de compra, leituras curtas e
              orientação para corrida, ciclismo, futebol, natação e tênis. O esporte
              aparece aqui entre treino, deslocamento e volta à rotina.
            </BrandText>
            <ContactList>
              <ContactText>Atendimento: ola@vortic.com.br</ContactText>
              <ContactText>Seg a sex, 9h às 18h</ContactText>
              <ContactText>São Paulo, Brasil</ContactText>
            </ContactList>
            <NewsletterCard>
              <NewsletterTitle>Newsletter semanal</NewsletterTitle>
              <BrandText>
                Receba lançamentos, leituras curtas e recortes da semana.
              </BrandText>
              <NewsletterLink to={getHomeSectionPath(HOME_SECTION_IDS.guides)}>Receber novidades</NewsletterLink>
            </NewsletterCard>
          </BrandBlock>

          {footerGroups.map((group) => (
            <Group key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <LinkList>
                {group.links.map((link) => (
                  <FooterLink key={link.label} to={link.to}>
                    {link.label}
                  </FooterLink>
                ))}
              </LinkList>
            </Group>
          ))}
        </TopGrid>

        <BottomBar>
          <BottomText>(c) 2026 Vortic. Escolha, repertório e leitura editorial para o movimento seguir.</BottomText>
          <BottomLinks>
            <FooterLink to={getHomePath()}>Política de privacidade</FooterLink>
            <FooterLink to={getHomePath()}>Termos de uso</FooterLink>
            <FooterLink to={getHomePath()}>Entregas e trocas</FooterLink>
          </BottomLinks>
        </BottomBar>
      </FooterContent>
    </FooterWrap>
  );
}
