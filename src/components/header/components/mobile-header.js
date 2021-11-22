import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { BurgerIcon } from 'src/components/icons';
import { Chat, Search } from 'src/components/icons';
import BurgerMenu from './burger-menu';
import { devices } from 'src/styles/devices';
import { useWhiteMenu } from 'src/hooks';

const MobileHeader = ({ white }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerToggle = () => {
    setBurgerOpen(!burgerOpen);
  };

  const isWhite = useWhiteMenu(white);

  return (
    <Container isWhite={isWhite}>
      <BurgerButton onClick={burgerToggle} isWhite={isWhite}>
        <BurgerIcon />
      </BurgerButton>
      <LogoContainer>logo</LogoContainer>
      <IconsContainer>
        <IconItem isWhite={isWhite}>
          <Link href="/">
            <a>
              <Chat />
            </a>
          </Link>
        </IconItem>
        <IconItem isWhite={isWhite}>
          <Link href="/">
            <a>
              <Search />
            </a>
          </Link>
        </IconItem>
      </IconsContainer>
      <BurgerMenu open={burgerOpen} close={burgerToggle} />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding: 20px;
  position: fixed;
  z-index: 10;
  width: 100%;

  background-color: ${({ isWhite }) =>
    isWhite ? 'unset' : 'var(--primary-white)'};

  transition: background-color 0.3s ease-out;

  @media ${devices.laptop('min')} {
    display: none;
  }
`;

const BurgerButton = styled.button`
  svg {
    fill: ${({ isWhite }) =>
      isWhite ? 'var(--primary-white)' : 'var(--primary-dark-green)'};
  }
`;

const LogoContainer = styled.div`
  min-width: 60px;
  min-height: 60px;
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e5e5e5;

  margin-left: auto;
  margin-right: 48px;
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

  svg {
    fill: ${({ isWhite }) =>
      isWhite ? 'var(--primary-white)' : 'var(--primary-dark-green)'};
  }
`;

export default MobileHeader;
