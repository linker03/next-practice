import styled from 'styled-components';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Chat, Search, Localization } from 'src/components/icons';
import {
  enjoyMenu,
  discoveryMenu,
  tripIdeas,
  localizationMenu,
} from './menu-data';
import { devices } from 'src/styles/devices';
import { useWhiteMenu } from 'src/hooks';

const DesktopHeader = ({ white }) => {
  const whiteTheme = useWhiteMenu(white);
  const isWhite = white ? whiteTheme : false;

  return (
    <Container isWhite={isWhite}>
      <LogoContainer>logo</LogoContainer>
      <Navigation isWhite={isWhite}>
        <LinksContainer>
          <LinksItem>
            <Link passHref href="/">
              <HeaderLink>DISCOVERY</HeaderLink>
            </Link>
            <MenuContainer>
              {discoveryMenu.map((el) => (
                <MenuItem key={el.label}>
                  <Link passHref href={el.href}>
                    <MenuLinks>{el.label}</MenuLinks>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </LinksItem>
          <LinksItem>
            <Link passHref href="/">
              <HeaderLink>ENJOY</HeaderLink>
            </Link>
            <MenuContainer>
              {enjoyMenu.map((el) => (
                <MenuItem key={el.label}>
                  <Link passHref href={el.href}>
                    <MenuLinks>{el.label}</MenuLinks>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </LinksItem>
          <LinksItem>
            <Link passHref href="/">
              <HeaderLink>TRIP IDEAS</HeaderLink>
            </Link>
            <MenuContainer>
              {tripIdeas.map((el) => (
                <MenuItem key={el.label}>
                  <Link passHref href={el.href}>
                    <MenuLinks>{el.label}</MenuLinks>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </LinksItem>
        </LinksContainer>
        <IconsContainer>
          <IconItem isWhite={isWhite}>
            <Localization />
            <MenuContainer>
              {localizationMenu.map((el) => (
                <MenuItem key={el.label}>
                  <Link passHref href={el.href}>
                    <MenuLinks>{el.label}</MenuLinks>
                  </Link>
                </MenuItem>
              ))}
            </MenuContainer>
          </IconItem>
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
      </Navigation>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  padding: 20px 30px;
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: ${({ isWhite }) =>
    isWhite ? 'unset' : 'var(--primary-white)'};

  transition: background-color 0.3s ease-out;

  @media ${devices.laptop()} {
    display: none;
  }
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
  color: ${({ isWhite }) =>
    isWhite ? 'var(--primary-white)' : 'var(--primary-dark-green)'};
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
  color: inherit;
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
    fill: ${({ isWhite }) =>
      isWhite ? 'var(--primary-white)' : 'var(--primary-dark-green)'};
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
  z-index: 2;

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

const HeaderLink = styled.a`
  font-family: 'adobe-garamond-pro', serif;
  font-weight: 700;
  font-size: 24px;
`;

const MenuLinks = styled.a`
  font-weight: 400;
`;

export default DesktopHeader;
