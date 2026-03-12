import styled from 'styled-components';

export const Section = styled.section`
  scroll-margin-top: 7rem;
`;

export const SectionInner = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const SectionHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 42rem;
  padding-left: ${({ theme }) => theme.spacing[4]};
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.1rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 0.93;
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
`;
