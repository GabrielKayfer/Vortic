import { AppHighlightSection } from '../features/home/components/AppHighlightSection';
import { CommunitySection } from '../features/home/components/CommunitySection';
import { FeaturedProductsSection } from '../features/home/components/FeaturedProductsSection';
import { FinalCtaSection } from '../features/home/components/FinalCtaSection';
import { HeroSection } from '../features/home/components/HeroSection';
import { SportGuidesSection } from '../features/home/components/SportGuidesSection';
import { SportsCategoriesSection } from '../features/home/components/SportsCategoriesSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SportsCategoriesSection />
      <FeaturedProductsSection />
      <SportGuidesSection />
      <AppHighlightSection />
      <CommunitySection />
      <FinalCtaSection />
    </>
  );
}
