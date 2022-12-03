import React from 'react';

import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import Link from '../atoms/Link';
import Heading from '../atoms/Heading';
import PageTitleFrame from '../organisms/PageTitleFrame';
import Paragraph from '../atoms/Paragraph';
import Spacer from '../atoms/Spacer';
import HorizontalRule from '../atoms/HorizontalRule';

const IMAGE_HEIGHT = '230px';
const IMAGE_WIDTH = '350px';
const CARD_WIDTH = '400px';
const CARD_HEIGHT = '300px';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const ParagraphWrapper = styled(Paragraph)`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 2)};
  font-size: 1.25rem;
  font-weight: 530;
  text-align: center;
  width: 85%;
  margin: 0.5rem 0 1rem 0;
`;

const LinkCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1rem 0 0.5rem;
  margin: 1rem 1.5rem;
  height: ${CARD_HEIGHT};
  width: ${CARD_WIDTH};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  }
`;

const StyledImage = styled.img`
  border-radius: 0.25rem;
  width: 90%;
  margin-bottom: 0.5rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const Code = () => {
  return (
    <PageTitleFrame title='Coding Projects' noBottomRule>
      <Spacer padding='small' />
      <ParagraphWrapper>
        Welcome to the programming and computer science side of my website. I
        know, its a bit weird to have a code section on a jewelry website, but
        as a programmer, this page also serves as part of my portfolio. Enjoy!
      </ParagraphWrapper>
      <HorizontalRule />
      <Spacer padding='small' />
      <Wrapper>
        <Spacer padding='small' />
        <LinkCard
          href={'https://github.com/phoenix239/adamboyddesigns'}
          target='_blank'
        >
          <StyledImage src='/images/LandingPageImage.png' alt='Website Code' />
          <StyledHeading>Website Code</StyledHeading>
        </LinkCard>
        <LinkCard to={'dictionary'}>
          <StyledImage src='/images/Dictionary.jpg' alt='Dictionary' />
          <StyledHeading>Dictionary</StyledHeading>
        </LinkCard>
        <LinkCard to={'weather'}>
          <StyledImage src='/images/Weather.jpg' alt='Weather' />
          <StyledHeading>Weather App</StyledHeading>
        </LinkCard>
      </Wrapper>
    </PageTitleFrame>
  );
};

export default Code;
