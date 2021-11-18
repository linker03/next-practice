import { useState } from 'react';
import { Search } from 'src/components/icons';
import styled from 'styled-components';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState();

  const onChange = (event) => {
    const value = event.target.value;

    setSearchValue(value);
  };

  return (
    <Container>
      <SearchInput
        value={searchValue}
        onChange={onChange}
        placeholder="Search"
      />
      <SearchButton>
        <StyledSearchIcon />
      </SearchButton>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  padding: 10px 0;
  max-width: 730px;
  width: 100%;
`;

const SearchInput = styled.input`
  background-color: var(--secondary-light-gray);
  padding: 15px 80px 15px 32px;
  width: 100%;

  line-height: 30px;

  border-radius: 30px;

  ::placeholder {
    color: #949494;
  }
`;

const SearchButton = styled.button`
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  position: absolute;
  top: 0;
  right: 0;

  background-color: var(--primary-pink);
`;

const StyledSearchIcon = styled(Search)`
  width: 32px;
  height: 32px;

  fill: var(--primary-white);
`;

export default SearchBar;
