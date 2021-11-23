import styled from 'styled-components';
import Link from 'next/link';
import { devices } from 'src/styles/devices';
import { Card } from 'src/components';

const cardsData = [
  {
    id: '0',
    image: '/static/images/trip-ideas/travel.jpg',
    title: 'Travel to Fukui',
    href: '/',
  },
  {
    id: '1',
    image: '/static/images/trip-ideas/getting-around.jpg',
    title: 'Getting Around Fukui',
    href: '/',
  },
  {
    id: '2',
    image: '/static/images/trip-ideas/first-time.jpg',
    title: 'For First Timers',
    href: '/',
  },
  {
    id: '3',
    image: '/static/images/trip-ideas/tips.jpg',
    title: 'Travel Tips',
    href: '/',
  },
];

const TripIdeasSection = () => {
  return (
    <SectionContainer>
      <CardsContainer>
        {cardsData.map((el) => (
          <li key={el.id}>
            <Link href={el.href}>
              <a>
                <Card image={el.image} title={el.title} />
              </a>
            </Link>
          </li>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 50px 6.7vw;

  @media ${devices.tabletM()} {
    padding: 50px 16px;
  }
`;

const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;

  @media ${devices.tabletM()} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export default TripIdeasSection;
