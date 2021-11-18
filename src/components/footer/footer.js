import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from '../icons';
import { devices } from '../../styles/devices';

const Footer = () => {
  return (
    <Container>
      <LinksContainer>
        <LogoContainer>
          <Image
            src="/static/images/Logo.jpg"
            alt="Logo"
            layout="fixed"
            width={60}
            height={60}
          />
          <LogoText>ENJOY FUKUI</LogoText>
        </LogoContainer>
        <SocialsContainer>
          <SocialItem>
            <a href="https://www.instagram.com">
              <Instagram />
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://www.facebook.com">
              <Facebook />
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://www.youtube.com">
              <Youtube />
            </a>
          </SocialItem>
        </SocialsContainer>
        <PoliciesContainer>
          <PoliciesItem>
            <Link href="/">
              <a>Privacy Policy </a>
            </Link>
          </PoliciesItem>
          <PoliciesItem>
            <Link href="/">
              <a>Cookie Policy</a>
            </Link>
          </PoliciesItem>
          <PoliciesItem>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </PoliciesItem>
        </PoliciesContainer>
      </LinksContainer>
      <CopyrigthsText>
        Copyright © Fukui Prefectural Tourism Federation. All Rights Reserved.
      </CopyrigthsText>
    </Container>
  );
};

const Container = styled.footer`
  background-color: var(--secondary-darker-gray);
  color: var(--primary-white);
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 60px;

  @media ${devices.tabletM()} {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.tabletM()} {
    margin-bottom: 40px;
  }
`;

const LogoText = styled.p`
  font-size: 20px;
  margin-left: 20px;
`;

const SocialsContainer = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;

  @media ${devices.tabletM()} {
    order: 2;
  }
`;

const SocialItem = styled.li`
  svg {
    transition: fill 0.3s ease-in-out;
    fill: var(--primary-white);
  }

  :hover {
    svg {
      fill: var(--secondary-light-pink);
    }
  }
`;

const PoliciesContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media ${devices.laptop()} {
    flex-direction: column;
  }

  @media ${devices.tabletM()} {
    order: 1;
    margin-bottom: 40px;
  }
`;

const PoliciesItem = styled.li`
  :hover {
    text-decoration: underline;
  }
`;

const CopyrigthsText = styled.p`
  padding: 0 30px 20px 30px;
  text-align: center;
`;

export default Footer;
