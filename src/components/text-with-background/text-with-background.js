import { devices } from 'src/styles/devices';
import styled from 'styled-components';

const TextWithBackground = ({ className }) => {
  return (
    <Container className={className}>
      <Text>
        7 words lorem ipsum <br /> dolor consectetur <br /> adipiscing
      </Text>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  font-family: 'adobe-garamond-pro', serif;
  overflow: hidden;
  padding: 40px 0;
  padding-bottom: 60px;

  :after {
    content: 'ENJOY FUKUI';
    font-size: 288px;
    white-space: nowrap;
    color: rgba(47, 93, 80, 0.08);

    position: absolute;
    left: 6.7vw;
    top: 0;
    z-index: -1;

    @media ${devices.laptop()} {
      font-size: 200px;
      line-height: 200px;
    }

    @media ${devices.tabletM()} {
    }

    @media ${devices.tabletS()} {
      font-size: 100px;
      line-height: 100px;
      white-space: normal;
    }
  }

  @media ${devices.laptop()} {
    padding-top: 30px 0;
  }

  @media ${devices.tabletM()} {
    padding-top: 20px 0;
  }
`;

const Text = styled.p`
  width: 86vw;
  font-size: 96px;
  line-height: 96px;
  color: var(--primary-dark-gray);
  margin-left: 14vw;

  @media ${devices.laptop()} {
    font-size: 72px;
    line-height: 72px;
  }

  @media ${devices.tabletM()} {
    font-size: 48px;
    line-height: 48px;
  }
`;

export default TextWithBackground;
