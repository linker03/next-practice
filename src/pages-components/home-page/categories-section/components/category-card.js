import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { devices } from 'src/styles/devices';

const CategoryCard = ({ image, title, href }) => {
  return (
    <CardContainer>
      <Link href={href} passHref>
        <StyledLink>
          <ImageContainer>
            <Image
              src={image}
              alt="category-image"
              width={426}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </ImageContainer>
          <CardTitle>{title}</CardTitle>
        </StyledLink>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.li`
  img {
    transition: transform 1s ease-out;
  }

  :hover {
    img {
      transform: scale(1.1);
    }
    div {
      :after {
        background: rgba(208, 130, 108, 0.33);
      }
    }
  }
`;

const StyledLink = styled.a`
  position: relative;
  display: block;
`;

const ImageContainer = styled.div`
  position: relative;
  display: block;

  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 1;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 1s ease-out;
  }
`;

const CardTitle = styled.h3`
  font-size: 36px;
  font-family: 'adobe-garamond-pro', serif;
  line-height: 43px;
  letter-spacing: 0.02em;
  text-align: center;

  position: absolute;
  top: 35px;
  width: 100%;
  z-index: 2;

  color: var(--primary-white);
  transition: all 0.3s ease-out;

  @media ${devices.tabletM()} {
    font-size: 24px;
  }
`;

export default CategoryCard;
