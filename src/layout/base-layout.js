import { Header, Footer, PageTopButton } from 'src/components';

const BaseLayout = ({ children, white }) => {
  return (
    <main>
      <Header white={white} />
      {children}
      <Footer />
      <PageTopButton />
    </main>
  );
};

export default BaseLayout;
