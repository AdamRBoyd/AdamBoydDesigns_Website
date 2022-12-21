import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import {
  PageTitleFrame,
  Button,
  HorizontalRule,
  Input,
  Label,
  Link,
  Spacer,
} from '../../components';

const IMAGE_HEIGHT = '150px';
const IMAGE_WIDTH = '200px';
const CARD_WIDTH = '250px';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 90%;
  padding: 1rem 0;
`;

const RecipeWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${CARD_WIDTH};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const ErrorSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
`;

const StyledButton = styled(Button)``;

const StyledImage = styled.img`
  border-radius: 0.25rem;
  width: 90%;
  margin-bottom: 0.5rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const LabelWrapper = styled(Label)`
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;

const APICredit = styled(Link)`
  font-size: 0.8rem;
  margin: 1rem;
`;

const CodeRecipeBook = () => {
  const [recipeList, setRecipeList] = useState();
  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    fetch(`${url}${e.target[0].value}`)
      .then((response) => response.json())
      .then((result) => setRecipeList(result.meals))
      .catch(() => {});
  };

  return (
    <PageTitleFrame title='Recipe Book Search' noBottomRule>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type='text' required />
        <StyledButton type='submit' value='Submit'>
          Search Recipes
        </StyledButton>
      </StyledForm>
      <HorizontalRule />
      <MainWrapper>
        {recipeList ? (
          recipeList?.map((recipe, index) => (
            <RecipeWrapper key={index} id={recipe.idMeal} to={recipe.idMeal}>
              <StyledImage src={recipe.strMealThumb} />
              <LabelWrapper>{recipe.strMeal}</LabelWrapper>
              {`Recipe ID: ${recipe.idMeal}`}
            </RecipeWrapper>
          ))
        ) : (
          <ErrorSearch>
            {search === undefined ? (
              <Label>Please Enter a Recipe to Search</Label>
            ) : (
              <Label>{`Sorry, a recipe for '${search}' was not found...`}</Label>
            )}
          </ErrorSearch>
        )}
      </MainWrapper>
      <APICredit href={'https://www.themealdb.com/'} target='_blank'>
        API and Recipes courtesy of TheMealDB
      </APICredit>
      <Spacer padding='xlarge' />
    </PageTitleFrame>
  );
};

export default CodeRecipeBook;
