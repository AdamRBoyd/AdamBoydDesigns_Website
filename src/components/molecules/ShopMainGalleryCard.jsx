import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const IMAGE_HEIGHT = '230px';
const IMAGE_WIDTH = '300px';
const CARD_WIDTH = '325px';
const CARD_HEIGHT = '300px';

const Wrapper = styled.div`
  display: flex;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  align-self: center;
  align-content: flex-start;
  justify-content: flex-start;
  width: 70%;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.5rem;
  height: ${CARD_HEIGHT};
  width: ${CARD_WIDTH};

  &:hover {
    box-shadow: 0px 0px 10px ${palette('grayscale', 4)};
  }
`;

const ImageWrapper = styled.img`
  margin: 0.5rem;
  margin-top: 0.75rem;
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.25rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const LabelWrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  font-weight: 500;
  line-height: 1.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
  padding: 0.5rem;
`;

const ShopMainGalleryCard = ({ onClick, listings, label, ...props }) => {
  const getRandomImage = (productListings) => {
    const randomIndex = Math.floor(Math.random() * productListings.length);
    return productListings[randomIndex].images[0].imageUrl570xN;
  };

  return (
    <Wrapper {...props}>
      <ImageCard onClick={onClick}>
        <ImageWrapper src={getRandomImage(listings)} height={IMAGE_HEIGHT} />
        <LabelWrapper>{label}</LabelWrapper>
      </ImageCard>
    </Wrapper>
  );
};

ShopMainGalleryCard.propTypes = {
  onClick: PropTypes.func,
  listings: PropTypes.array,
};

ShopMainGalleryCard.defaultProps = {
  onClick: () => {},
};

export default ShopMainGalleryCard;
