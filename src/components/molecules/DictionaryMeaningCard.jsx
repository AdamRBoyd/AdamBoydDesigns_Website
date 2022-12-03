import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Label from '../atoms/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  border: 1px solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px ${palette('grayscale', 4)};
  margin: 1rem;
  padding: 0 2rem 1rem;
  width: 80%;
`;

const StyledHeading = styled(Heading)`
  font-size: 1.5rem;
  font-style: italic;
  margin: 2rem 0 1.5rem;
`;

const DefinitionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SynonymAntonymWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  width: 60%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Definition = styled.div`
  margin-bottom: 0.5rem;
`;

const DictionaryMeaningCard = ({ meaning, word, ...props }) => {
  return (
    <Wrapper>
      <StyledHeading>{`${meaning.partOfSpeech}`}</StyledHeading>
      <DefinitionWrapper>
        {meaning?.definitions?.map((def, index) => (
          <Definition key={index}>{`${index + 1}: ${
            def.definition
          }`}</Definition>
        ))}
      </DefinitionWrapper>
      <SynonymAntonymWrapper>
        {meaning.synonyms.length > 0 && (
          <>
            <ColumnWrapper>
              <Label>Synonyms:</Label>
              {meaning?.synonyms?.map((syn, index) => (
                <Definition key={index}>{`${index + 1}: ${syn}`}</Definition>
              ))}
            </ColumnWrapper>
          </>
        )}
        {meaning.antonyms.length > 0 && (
          <>
            <ColumnWrapper>
              <Label>Antonyms:</Label>
              {meaning?.antonyms?.map((ant, index) => (
                <Definition key={index}>{`${index + 1}: ${ant}`}</Definition>
              ))}
            </ColumnWrapper>
          </>
        )}
      </SynonymAntonymWrapper>
    </Wrapper>
  );
};

DictionaryMeaningCard.propTypes = {
  meaning: PropTypes.object,
  word: PropTypes.string,
};

export default DictionaryMeaningCard;
