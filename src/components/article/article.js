import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '../icons';
import { devices } from 'src/styles/devices';

const Article = ({ orientation = 'left' }) => {
  return (
    <Container orientation={orientation}>
      <TextContainer>
        <Title>Chat Bot</Title>
        <Text>
          50 words Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam euismod diam imperdiet nunc aliquam, id tristique turpis
          cursus. Integer iaculis urna et enim elementum lacinia. Donec dictum
          ultricies rhoncus. Mauris malesuada turpis vitae nibh vulputate, a
          maximus ex varius. Aenean non est eu tortor ultrices accumsan volutpat
          vel tortor. Maecenas.
        </Text>
        <Link href="/" passHref>
          <StyledLink>
            <StyledArrowRight />
            Start Chat Bot
          </StyledLink>
        </Link>
      </TextContainer>
      <ImageContainer>
        <Image
          src="/static/images/article.jpg"
          alt="article image"
          width={624}
          height={482}
          layout="responsive"
        />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === 'left' ? 'row' : 'row-reverse'};

  @media ${devices.tabletM()} {
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 100%;

  @media ${devices.tabletM()} {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  padding: 0 6.7vw;
  margin: auto;
  max-width: 50%;
  @media ${devices.tabletM()} {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-family: 'adobe-garamond-pro', serif;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  line-height: 28px;
  margin-bottom: 30px;
`;

const StyledLink = styled.a`
  color: var(--primary-pink);
  display: flex;
  align-items: center;
`;

const StyledArrowRight = styled(ArrowRight)`
  fill: var(--primary-pink);
  margin-right: 9px;
`;

export default Article;
