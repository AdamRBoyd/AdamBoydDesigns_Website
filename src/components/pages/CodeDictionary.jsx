import React, { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import {
  PageTitleFrame,
  DictionaryMeaningCard,
  Button,
  HorizontalRule,
  Input,
  Label,
  Link,
  Spacer,
} from '../../components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  margin: 1rem 0;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  border-radius: 0.5rem;
`;

const StyledLabel = styled(Label)``;

const StyledButton = styled(Button)`
  border-radius: 0.5rem;
`;

const StyledError = styled(Label)`
  color: ${palette('danger', 3)};
  font-size: 1.5rem;
  margin: 2rem 0 0;
`;

const DefinitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`;

const WordPhoneticTitle = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: flex-end;
  margin: 1.5rem 2rem;
`;

const StyledPhonetic = styled.div`
  margin: 0 0 0.5rem 2rem;
  font-size: 1.5rem;
`;

const WordTitle = styled.div`
  padding-left: 2rem;
  font-size: 3rem;
  text-transform: capitalize;
`;

const LinkCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1rem;
  width: fit-content;
  &:hover {
    box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  }
`;

const StyledLinks = styled(Link)`
  padding: 0.2rem;
  width: fit-content;
`;

const APICredit = styled(Link)`
  font-size: 0.8rem;
  margin: 0 0 2rem;
`;

const CodeDictionary = () => {
  const [searchResult, setSearchResult] = useState();
  const [hasTitle, setHasTitle] = useState(true);

  function data(result, word) {
    if (result.title) {
      setHasTitle(true);
    } else {
      setSearchResult(result[0]);
      setHasTitle(false);
    }
  }

  function fetchApi(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => data(result, word))
      .catch(() => {});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi(e.target[0].value);
  };

  return (
    <PageTitleFrame title='Dictionary API Fetch Project' noBottomRule>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Define:</StyledLabel>
        <StyledInput type='text' required />
        <StyledButton type='submit' value='Submit'>
          Search
        </StyledButton>
      </StyledForm>
      <HorizontalRule />
      <DefinitionWrapper>
        {hasTitle ? (
          <StyledError>Please Enter a Valid Word</StyledError>
        ) : (
          <>
            <WordPhoneticTitle>
              <WordTitle>{`${searchResult.word}`}</WordTitle>
              <StyledPhonetic>
                {searchResult.phonetic ? <>{`${searchResult.phonetic}`}</> : ''}
              </StyledPhonetic>
            </WordPhoneticTitle>
            {searchResult?.meanings.map((meaning, index) => (
              <DictionaryMeaningCard
                meaning={meaning}
                word={searchResult.word}
                key={index}
              />
            ))}
            <Spacer padding='medium' />
            <LinkCard>
              <Label>Source:</Label>
              {searchResult.sourceUrls.map((url, index) => (
                <StyledLinks href={url} target='_blank' key={index}>
                  <div>{`${url}`}</div>
                </StyledLinks>
              ))}
            </LinkCard>
          </>
        )}
      </DefinitionWrapper>
      <Spacer padding='large' />
      <APICredit href={'https://dictionaryapi.dev/'} target='_blank'>
        Dictionary API courtesy of Dictionary API
      </APICredit>
    </PageTitleFrame>
  );
};

export default CodeDictionary;
