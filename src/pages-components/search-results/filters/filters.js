import { Checkbox, CheckboxButton } from 'src/components';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import FilterItem from '../filter-item/filter-item';
import {
  categoriesFilter,
  destinationsFilter,
  seasonsFilter,
  recommendedTagsFilter,
} from './filters-data';

const changeFilter = (state, target) =>
  state.map((el) => {
    if (el.name === target.name) {
      return { ...el, value: target.checked };
    }
    return el;
  });

const Filters = () => {
  const [categories, setCategories] = useState(categoriesFilter);
  const [seasons, setSeasons] = useState(seasonsFilter);
  const [destinations, setDestinations] = useState(destinationsFilter);
  const [tags, setTags] = useState(recommendedTagsFilter);

  const changeCategories = (target) => {
    setCategories((state) => changeFilter(state, target));
  };

  const changeSeasons = (target) => {
    setSeasons((state) => changeFilter(state, target));
  };

  const changeDestinations = (target) => {
    setDestinations((state) => changeFilter(state, target));
  };

  const changeTags = (target) => {
    setTags((state) => changeFilter(state, target));
  };

  return (
    <Container>
      <FilterBy>Filter By:</FilterBy>
      <ButtonContainer>
        <FilterItem title="Categories" menuCSS={MenuCSS} cutRight>
          {categories.map((el) => (
            <Checkbox
              key={el.name}
              label={el.label}
              name={el.name}
              defaultValue={el.value}
              onChange={changeCategories}
            />
          ))}
        </FilterItem>
        <FilterItem
          title="Seasons"
          menuCSS={MenuCSS}
          cutLeft
          cutRight
          withStripes
        >
          {seasons.map((el) => (
            <Checkbox
              key={el.name}
              label={el.label}
              name={el.name}
              defaultValue={el.value}
              onChange={changeSeasons}
            />
          ))}
        </FilterItem>
        <FilterItem title="Destinations" menuCSS={MenuCSS} cutLeft>
          {destinations.map((el) => (
            <Checkbox
              key={el.name}
              label={el.label}
              name={el.name}
              defaultValue={el.value}
              onChange={changeDestinations}
            />
          ))}
        </FilterItem>
        <FilterItem title="Recommended Tags" menuCSS={TagsMenuCSS}>
          {tags.map((el) => (
            <CheckboxButton
              key={el.name}
              label={el.label}
              name={el.name}
              defaultValue={el.value}
              onChange={changeTags}
            />
          ))}
        </FilterItem>
      </ButtonContainer>
      <ResultForContainer>
        <p>Showing results for: </p>
        <StyledResults>{`"Summer, Action & Adventure"`}</StyledResults>
        <ResetButton>RESET</ResetButton>
      </ResultForContainer>
    </Container>
  );
};

const MenuCSS = css`
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TagsMenuCSS = css`
  width: 380px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FilterBy = styled.p`
  font-size: 12px;
  line-height: 30px;
  align-self: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

const ResultForContainer = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 30px;
  color: var(--primary-dark-gray);
`;

const StyledResults = styled.p`
  font-family: 'adobe-garamond-pro', serif;
  font-style: italic;
  margin-left: 10px;
`;

const ResetButton = styled.button`
  font-size: 14px;
  text-decoration: underline;
  color: #a0a0a0;
  margin-left: auto;

  transition: all 0.3s ease-in-out;

  :hover {
    text-decoration: none;
    color: var(--primary-pink);
  }
`;

export default Filters;
