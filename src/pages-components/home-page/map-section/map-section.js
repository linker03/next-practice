import styled from 'styled-components';
import Image from 'next/image';

const MapSection = () => {
  return (
    <SectionContainer>
      <Image
        src="/static/images/map.webp"
        alt="fukui map"
        width={1280}
        height={724}
        layout="responsive"
      />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 100px 0 52px 0;
`;

export default MapSection;
