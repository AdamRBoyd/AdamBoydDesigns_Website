import React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

import PageTitleFrame from '../organisms/PageTitleFrame';
import Paragraph from '../atoms/Paragraph';
import Spacer from '../atoms/Spacer';
import Link from '../atoms/Link';

const ParagraphWrapper = styled(Paragraph)`
  display: flex;
  justify-content: center;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 2)};
  font-weight: 530;
`;

const GalleryWrapper = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -2.5rem;
  width: 100%;
`;

const CardWrapper = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem 0.25rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  }
`;

const Styling = css`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.img`
  ${Styling}
  border-radius: 0.25rem;
  height: 250px;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  ${Styling}
  text-align: center;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 1rem;
  text-transform: uppercase;
`;

const Gallery = () => {
  return (
    <>
      <PageTitleFrame title='Custom Pieces and Past Items' noBottomRule>
        <ParagraphWrapper>
          If you are interested in getting one of these made for yourself or
          have an idea for a custom item, head over to the contact page and send
          me a message.
        </ParagraphWrapper>
        <GalleryWrapper>
          <CardWrapper>
            <Link to='/gallery/rings'>
              <StyledImage src='/images/gallery/Rings.png' alt='Rings' />
              <StyledLabel>Rings</StyledLabel>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link to='/gallery/pendants'>
              <StyledImage src='/images/gallery/Pendants.png' alt='Pendants' />
              <StyledLabel>Pendants</StyledLabel>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link to='/gallery/earrings'>
              <StyledImage src='/images/gallery/Earrings.png' alt='Earrings' />
              <StyledLabel>Earrings</StyledLabel>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link to='/gallery/other'>
              <StyledImage src='/images/gallery/Other.png' alt='Other' />
              <StyledLabel>Other</StyledLabel>
            </Link>
          </CardWrapper>
        </GalleryWrapper>
      </PageTitleFrame>
      <PageTitleFrame title='Fabrication' noBottomRule>
        <ParagraphWrapper>Pictures from the building process.</ParagraphWrapper>
        <GalleryWrapper>
          <CardWrapper>
            <Link to='/gallery/fabrication'>
              <StyledImage
                src='/images/gallery/Fabrication.png'
                alt='Fabrication'
              />
              <StyledLabel>Fabrication</StyledLabel>
            </Link>
          </CardWrapper>
        </GalleryWrapper>
      </PageTitleFrame>
      <Spacer padding='xxlarge' />
    </>
  );
};

export default Gallery;
