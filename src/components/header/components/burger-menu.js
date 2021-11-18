import styled from 'styled-components';
import {
  CloseIcon,
  Facebook,
  HomeIcon,
  Instagram,
  Youtube,
} from 'src/components/icons';
import Link from 'next/link';
import AccordionItem from './accordion-item';
import { discoveryMenu, tripIdeas, enjoyMenu } from './menu-data';

const BurgerMenu = ({ open, close }) => {
  return (
    <Container open={open}>
      <HomeContainer>
        <Link passHref href="/">
          <StyledLink>
            <HomeIcon />
            HOME
          </StyledLink>
        </Link>
        <StyledButton onClick={close}>
          <CloseIcon />
        </StyledButton>
      </HomeContainer>
      <MenuContainer>
        <AccordionItem title="DISCOVER">
          {discoveryMenu.map((el) => (
            <MenuItem key={el.label}>
              <Link href={el.href}>
                <a>{el.label}</a>
              </Link>
            </MenuItem>
          ))}
          <MenuItem>
            <Link href="/">
              <a>See All Discover</a>
            </Link>
          </MenuItem>
        </AccordionItem>
        <AccordionItem title="ENJOY">
          {enjoyMenu.map((el) => (
            <MenuItem key={el.label}>
              <Link href={el.href}>
                <a>{el.label}</a>
              </Link>
            </MenuItem>
          ))}
          <MenuItem>
            <Link href="/">
              <a>See All Enjoy</a>
            </Link>
          </MenuItem>
        </AccordionItem>
        <AccordionItem title="TRIP IDEAS">
          {tripIdeas.map((el) => (
            <MenuItem key={el.label}>
              <Link href={el.href}>
                <a>{el.label}</a>
              </Link>
            </MenuItem>
          ))}
          <MenuItem>
            <Link href="/">
              <a>See all Ideas</a>
            </Link>
          </MenuItem>
        </AccordionItem>
      </MenuContainer>
      <IconLinksContainer>
        <IconLinkItem>
          <Link href="/">
            <a>
              <Instagram />
            </a>
          </Link>
        </IconLinkItem>
        <IconLinkItem>
          <Link href="/">
            <a>
              <Facebook />
            </a>
          </Link>
        </IconLinkItem>
        <IconLinkItem>
          <Link href="/">
            <a>
              <Youtube />
            </a>
          </Link>
        </IconLinkItem>
      </IconLinksContainer>
    </Container>
  );
};

const Container = styled.nav`
  background-color: var(--primary-pink);
  color: var(-primary-dark-gray);
  margin-left: ${({ open }) => (open ? '0' : '-1000px')};

  width: 280px;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  transition: margin 0.3s ease-in-out;
`;

const HomeContainer = styled.div`
  display: flex;

  svg {
    fill: var(--secondary-light-pink);
  }
`;

const StyledLink = styled.a`
  display: flex;
  gap: 22px;
  font-size: 18px;
  align-items: center;
  padding: 32px 20px;
`;

const StyledButton = styled.button`
  padding: 32px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  svg {
    fill: var(--secondary-light-pink);
  }
`;

const MenuContainer = styled.ul`
  background-color: var(--secondary-light-pink);
  padding: 20px 0;
`;

const MenuItem = styled.li`
  padding: 10px 0 10px 56px;
`;

const IconLinksContainer = styled.ul`
  display: flex;
  padding: 40px 20px 20px 20px;
  gap: 36px;
`;

const IconLinkItem = styled.li`
  svg {
    fill: var(--secondary-light-pink);
  }
`;

export default BurgerMenu;
