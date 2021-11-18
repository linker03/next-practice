import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { BurgerIcon } from 'src/components/icons';
import { Chat, Search } from 'src/components/icons';
import BurgerMenu from './burger-menu';

const MobileHeader = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerToggle = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <Container>
      <BurgerButton onClick={burgerToggle}>
        <BurgerIcon />
      </BurgerButton>
      <LogoContainer>logo</LogoContainer>
      <IconsContainer>
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
      <BurgerMenu open={burgerOpen} close={burgerToggle} />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding: 20px;
  position: relative;
`;

const BurgerButton = styled.button`
  svg {
    fill: var(--primary-dark-green);
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
    fill: var(--primary-dark-green);
  }
`;

export default MobileHeader;
