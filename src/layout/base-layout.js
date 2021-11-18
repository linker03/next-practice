import { Header, Footer } from 'src/components';

const BaseLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default BaseLayout;
