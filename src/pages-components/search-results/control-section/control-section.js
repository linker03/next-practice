import styled from 'styled-components';
import { Filters } from '../filters';
import { SearchBar } from '../search-bar';

const ControlSection = () => {
  return (
    <SectionContainer>
      <SearchBar />
      <Filters />
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 30px 16px;
  max-width: 730px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export default ControlSection;
