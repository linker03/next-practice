import { Card } from 'src/components';
import styled from 'styled-components';
import Link from 'next/link';
import { devices } from 'src/styles/devices';
import { temp } from './tempData';

const ResultsList = () => {
  return (
    <SectionContainer>
      <ResultsCounter>
        <Count>170</Count>
        Results
      </ResultsCounter>
      <ListContainer>
        {temp.map((el) => (
          <li key={el.id}>
            <Link href="/">
              <a>
                <Card
                  article={el.article}
                  image={el.image}
                  title={el.title}
                  text={el.text}
                  location={el.location}
                />
              </a>
            </Link>
          </li>
        ))}
      </ListContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 3.3vw 6.7vw;

  @media ${devices.tabletM()} {
    padding: 20px 16px;
  }
`;

const ResultsCounter = styled.div`
  display: flex;
  color: var(--primary-dark-gray);
  align-items: flex-end;
  margin-bottom: 40px;

  @media ${devices.tabletM()} {
    margin-bottom: 20px;
  }
`;

const Count = styled.p`
  font-size: 40px;
  font-family: 'adobe-garamond-pro', serif;
  font-style: italic;
  font-weight: 700;
  line-height: 0.9;
  margin-right: 10px;
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media ${devices.laptop()} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.tabletM()} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ResultsList;
