import { DesktopHeader, MobileHeader } from './components';

const Header = ({ white }) => {
  return (
    <>
      <DesktopHeader white={white} />
      <MobileHeader />
    </>
  );
};

export default Header;
