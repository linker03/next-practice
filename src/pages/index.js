import { Article, TextWithBackground } from 'src/components';
import { BaseLayout } from 'src/layout';
import {
  BannerSection,
  CategoriesSection,
  EmergencySection,
  HeroSection,
  MapSection,
  TripIdeasSection,
  UpdatesSection,
} from 'src/pages-components/home-page';

const Home = () => {
  return (
    <BaseLayout white>
      <HeroSection />
      <EmergencySection />
      <CategoriesSection />
      <TextWithBackground />
      <Article />
      <MapSection />
      <TripIdeasSection />
      <UpdatesSection />
      <BannerSection />
    </BaseLayout>
  );
};

export default Home;
