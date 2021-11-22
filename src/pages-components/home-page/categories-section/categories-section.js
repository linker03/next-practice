import { CheckboxButton } from 'src/components';
import { devices } from 'src/styles/devices';
import styled from 'styled-components';
import { categories, CategoryCard, tags } from './components';
import Link from 'next/link';

const CategoriesSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        How Do You
        <br />
        Want To Enjoy
        <br />
        Fukui?
      </SectionTitle>
      <CategoriesContainer>
        {categories.map((el) => (
          <CategoryCard
            key={el.id}
            href={el.href}
            title={el.title}
            image={el.image}
          />
        ))}
      </CategoriesContainer>
      <TagsContainer>
        <TagsTitle>Recommended Tags</TagsTitle>
        <Tags>
          {tags.map((el) => (
            <li key={el.id}>
              <Link href="/">
                <a>
                  <CheckboxButton label={el.label} />
                </a>
              </Link>
            </li>
          ))}
        </Tags>
      </TagsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  padding-top: 40px;

  :after {
    content: '';
    border-radius: 30px;
    background-color: var(--secondary-lighter-pink);

    position: absolute;
    top: calc(6.7vw + 130px);
    bottom: 6.7vw;
    left: 6.7vw;
    right: 6.7vw;
    z-index: -1;

    @media ${devices.tabletM()} {
      top: calc(6.7vw + 100px);
      right: 0;
      left: 52px;
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 96px;
  font-family: 'adobe-garamond-pro', serif;
  margin-left: 14vw;

  @media ${devices.tabletM()} {
    font-size: 48px;
  }
`;

const CategoriesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${devices.tabletM()} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0;

  @media ${devices.tabletM()} {
    padding: 40px 0;
  }
`;

const TagsTitle = styled.h2`
  font-family: 'adobe-garamond-pro', serif;
  font-size: 64px;
  font-weight: 400;
  margin-bottom: 36px;

  @media ${devices.tabletM()} {
    font-size: 26px;
    margin-bottom: 14px;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  padding-bottom: 6.7vw;
  gap: 16px;

  label {
    padding-left: 36px;
    padding-right: 32px;

    :hover {
      background-color: var(--secondary-light-pink);
    }
  }

  @media ${devices.tabletM()} {
    width: 100%;
    padding: 16px;
  }
`;

export default CategoriesSection;
