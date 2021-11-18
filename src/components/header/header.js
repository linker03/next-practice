import styled from 'styled-components';
import Link from 'next/link';
import { Chat, Search, Localization } from '../icons';
import {
  enjoyMenu,
  discoveryMenu,
  tripIdeas,
  localizationMenu,
} from './components/menu-data';

const Header = ({ variant = 'light' }) => {
  return (
    <Container>
      <LogoContainer>logo</LogoContainer>
      <Navigation>
        <LinksContainer>
          <LinksItem>
            <Link href="/">
              <a>DISCOVERY</a>
            </Link>
            <MenuContainer>
              {discoveryMenu.map((el) => (
                <MenuItem key={el.label}>
                  <Link href={el.href}>
                    <a>{el.label}</a>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </LinksItem>
          <LinksItem>
            <Link href="/">
              <a>ENJOY</a>
            </Link>
            <MenuContainer>
              {enjoyMenu.map((el) => (
                <MenuItem key={el.label}>
                  <Link href={el.href}>
                    <a>{el.label}</a>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </LinksItem>
          <LinksItem>
            <Link href="/">
              <a>TRIP IDEAS</a>
            </Link>
            <MenuContainer>
              {tripIdeas.map((el) => (
                <MenuItem key={el.label}>
                  <Link href={el.href}>
                    <a>{el.label}</a>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </LinksItem>
        </LinksContainer>
        <IconsContainer>
          <IconItem>
            <Localization />
            <MenuContainer>
              {localizationMenu.map((el) => (
                <MenuItem key={el.label}>
                  <Link href={el.href}>
                    <a>{el.label}</a>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </IconItem>
          <IconItem>
            <Link href="/">
              <a>
                <Chat />
              </a>
            </Link>
          </IconItem>
          <IconItem>
            <Link href="/">
              <a>
                <Search />
              </a>
            </Link>
          </IconItem>
        </IconsContainer>
      </Navigation>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding: 20px 30px;
`;

const LogoContainer = styled.div`
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
`;

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const LinksContainer = styled.ul`
  display: flex;
  gap: 40px;
  margin-right: 40px;
  align-items: center;
`;

const LinksItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--primary-dark-green);
  height: 100%;
  font-size: 24px;
  font-weight: 700;

  transition: color 0.3s ease-in-out;

  :hover {
    color: var(--primary-pink);

    & > ul {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IconsContainer = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const IconItem = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: var(--primary-dark-green);
  }

  :hover {
    svg {
      fill: var(--primary-pink);
    }

    & > ul {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MenuContainer = styled.ul`
  padding: 24px 40px 24px 35px;
  background-color: var(--primary-pink);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 20px;

  position: absolute;
  top: 100%;
  left: 0;

  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);

  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-property: opacity, visibility, transform;
`;

const MenuItem = styled.li`
  white-space: nowrap;
  color: var(--primary-dark-gray);
  transition: color 0.3s ease-in-out;

  :hover {
    color: var(--primary-white);
  }
`;

export default Header;
