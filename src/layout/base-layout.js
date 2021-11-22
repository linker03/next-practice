import { Header, Footer } from 'src/components';

const BaseLayout = ({ children, white }) => {
  return (
    <main>
      <Header white={white} />
      {children}
      <Footer />
    </main>
  );
};

export default BaseLayout;
