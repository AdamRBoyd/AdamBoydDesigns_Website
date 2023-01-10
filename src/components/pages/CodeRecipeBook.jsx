import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import {
  PageTitleFrame,
  Button,
  Heading,
  HorizontalRule,
  Icon,
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;
`;

const StyledHeading = styled(Heading)`
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
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

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette('primary', 3)};
  border-radius: 0.5rem;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  border: none;
  margin-left: 0.8rem;
`;

const CloseIcon = styled(Icon)`
  position: relative;
  right: 7px;
  top: -1px;
  margin: 0 0.2rem 0 1rem;
  cursor: pointer;
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
  let localSearch = localStorage.getItem('recipeSearch');
  let localRecipeList = localStorage.getItem('recipeList');
  const [recipeList, setRecipeList] = useState();
  const [searchTerm, setSearchTerm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    setSearchTerm(search);
    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    fetch(`${url}${search}`)
      .then((response) => response.json())
      .then((result) => {
        setRecipeList(result.meals);
        window.localStorage.setItem('recipeList', JSON.stringify(result.meals));
        window.localStorage.setItem('recipeSearch', result.meals ? search : '');
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (localRecipeList) {
      setRecipeList(JSON.parse(localRecipeList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReset = () => {
    document.getElementById('searchBox').value = '';
  };

  return (
    <PageTitleFrame title='Recipe Book Search' noBottomRule>
      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <StyledInput
            type='text'
            id='searchBox'
            placeholder='Search Here'
            required
          />
          <CloseIcon name='close' icon='close' onClick={handleReset} />
        </InputGroup>
        <StyledButton type='submit' value='Submit' variant='primary'>
          Search Recipes
        </StyledButton>
      </StyledForm>
      <HorizontalRule />
      <MainWrapper>
        {recipeList ? (
          <>
            <StyledHeading>{`Search Results for: ${localSearch}`}</StyledHeading>
            <ResultWrapper>
              {recipeList?.map((recipe, index) => (
                <RecipeWrapper
                  key={index}
                  id={recipe.idMeal}
                  to={recipe.idMeal}
                >
                  <StyledImage src={recipe.strMealThumb} />
                  <LabelWrapper>{recipe.strMeal}</LabelWrapper>
                  {`Recipe ID: ${recipe.idMeal}`}
                </RecipeWrapper>
              ))}
            </ResultWrapper>
          </>
        ) : (
          <ErrorSearch>
            {searchTerm === undefined ? (
              <Label>Please Enter a Recipe to Search</Label>
            ) : (
              <Label>{`Sorry, a recipe for '${searchTerm}' was not found...`}</Label>
            )}
          </ErrorSearch>
        )}
      </MainWrapper>
      <APICredit href={'https://www.themealdb.com/'} target='_blank'>
        API and Recipes courtesy of TheMealDB
      </APICredit>
      <Spacer padding={3} />
    </PageTitleFrame>
  );
};

export default CodeRecipeBook;
