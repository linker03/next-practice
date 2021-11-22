import Link from 'next/link';
import { BaseLayout } from 'src/layout';
import { HeroSection } from 'src/pages-components/home-page';

const Home = () => {
  return (
    <BaseLayout desktopTransparency>
      <HeroSection />
      <div style={{ height: 4000 }}></div>
    </BaseLayout>
  );
};

export default Home;
