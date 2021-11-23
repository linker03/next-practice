import { ArrowRight } from 'src/components/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { Card } from 'src/components';
import { devices } from 'src/styles/devices';

const cardsData = [
  {
    id: '0',
    title:
      'News Title News Title News Title News Title News Title News Title News Title News Title News Title News Title News',
    href: '/',
    date: 'MM DD, YYYY',
    image: '/static/images/updates/news-1.jpg',
  },
  {
    id: '1',
    title: 'News Title News Title News Title News Title News Title News',
    href: '/',
    date: 'MM DD, YYYY',
    image: '/static/images/updates/news-2.jpg',
  },
  {
    id: '2',
    title: 'News Title News Title',
    href: '/',
    date: 'MM DD, YYYY',
    image: '/static/images/updates/news-3.jpg',
    external: true,
  },
  {
    id: '3',
    title:
      'News Title News Title News Title News Title News Title News Title News Title News Title',
    href: '/',
    date: 'MM DD, YYYY',
    image: '/static/images/updates/news-4.jpg',
  },
];

const UpdatesSection = () => {
  return (
    <SectionContainer>
      <Title>
        Updates
        <Link passHref href="/">
          <DesktopLink>
            <StyledArrowRight /> View More
          </DesktopLink>
        </Link>
      </Title>
      <CardsContainer>
        {cardsData.map((el) => (
          <li key={el.id}>
            <Link href={el.href}>
              <a>
                <Card
                  title={el.title}
                  image={el.image}
                  date={el.date}
                  isExternalLink={el.external || false}
                />
              </a>
            </Link>
          </li>
        ))}
      </CardsContainer>
      <Link passHref href="/">
        <MobileLink>
          <StyledArrowRight /> View More
        </MobileLink>
      </Link>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 40px 6.7vw;

  @media ${devices.tabletM()} {
    padding: 40px 16px;
  }
`;

const Title = styled.h2`
  position: relative;
  font-family: 'adobe-garamond-pro', serif;
  font-size: 44px;
  line-height: 52.8px;
  text-align: center;
  color: var(--primary-dark-gray);
  margin-bottom: 40px;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;

  :hover {
    text-decoration: underline;
  }
`;

const DesktopLink = styled(StyledLink)`
  position: absolute;
  right: 0;
  bottom: 0;

  font-family: 'Roboto', serif;
  font-size: 16px;
  color: var(--primary-pink);

  @media ${devices.tabletM()} {
    display: none;
  }
`;

const MobileLink = styled(StyledLink)`
  font-family: 'Roboto', serif;
  font-size: 16px;
  color: var(--primary-pink);
  margin-top: 40px;
  justify-content: center;

  @media ${devices.tabletM('min')} {
    display: none;
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  fill: var(--primary-pink);
  margin-right: 10px;
`;

const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media ${devices.tabletM()} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export default UpdatesSection;
