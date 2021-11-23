import { devices } from 'src/styles/devices';
import styled from 'styled-components';
import Link from 'next/link';

const BannerSection = () => {
  return (
    <SectionContainer>
      <Link href="/" passHref>
        <Banner>Banner</Banner>
      </Link>
      <Link href="/" passHref>
        <Banner>Banner</Banner>
      </Link>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  padding: 50px 6.7vw 110px 6.7vw;

  @media ${devices.tabletM()} {
    grid-template-columns: 1fr;
    gap: 20px;

    padding: 50px 16px 110px 16px;
  }
`;

const Banner = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 160px;
  width: 100%;

  background-color: #e5e5e5;

  @media ${devices.tabletM()} {
    height: 100px;
  }
`;

export default BannerSection;
