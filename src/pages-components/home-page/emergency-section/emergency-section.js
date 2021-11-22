import { devices } from 'src/styles/devices';
import styled from 'styled-components';

const EmergencySection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <TextTitle>Emergency Info Title Lorem ipsum dolor sit amet</TextTitle>
        <p>
          MM DD, YYYY <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
          vulputate tellus, sit amet placerat. Read more
        </p>
      </TextContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  margin: 60px 6.7vw;
  border-radius: 30px;

  background-color: #f4f4f4;

  @media ${devices.tabletM()} {
    margin: 0;
    margin-bottom: 30px;
    border-radius: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  font-size: 18px;
  padding: 30px 18vw;
  @media ${devices.tabletM()} {
    padding: 40px;
  }
`;

const TextTitle = styled.p`
  font-weight: 700;
  margin-bottom: 25px;
`;

export default EmergencySection;
