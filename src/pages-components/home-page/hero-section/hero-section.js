import styled from 'styled-components';
import Image from 'next/image';
import { devices } from 'src/styles/devices';
import heroImage from 'public/static/images/hero-2x.webp';

const HeroSection = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <Image
          src={heroImage}
          alt="hero-image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </ImageContainer>
      <HeroTitle>
        <HeroStroke>Fukui — </HeroStroke>
        <HeroStroke>Enjoy at</HeroStroke>
        <HeroStroke>Your Own Pace</HeroStroke>
      </HeroTitle>
      <ScrollArrow>SCROLL</ScrollArrow>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 9px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: 30px;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 40px;

  color: var(--primary-white);

  @media ${devices.tabletM()} {
    left: 28px;
  }
`;

const HeroStroke = styled.span`
  font-size: 96px;
  line-height: 90px;
  display: block;
  font-family: 'adobe-garamond-pro', serif;

  @media ${devices.tabletM()} {
    font-size: 48px;
    line-height: 40px;
  }
`;

const ScrollArrow = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;

  color: var(--primary-white);
  writing-mode: vertical-lr;
  font-size: 14px;

  display: flex;
  align-items: center;

  :after {
    content: '';
    height: 150px;
    border-right: 1px solid var(--primary-white);
    display: block;
    width: 0;
    margin-top: 10px;
  }

  @media ${devices.tabletM()} {
    right: unset;
    left: 28px;
    bottom: 176px;
  }
`;

export default HeroSection;
