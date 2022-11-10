import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

const IMAGE_HEIGHT = '240px';
const IMAGE_WIDTH = '240px';
const CARD_WIDTH = '260px';
const CARD_HEIGHT = '380x';

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  align-self: center;
  align-content: flex-start;
  justify-content: center;
`;

const ImageCard = styled.div`
  align-content: center;
  align-items: center;
  align-self: center;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  margin-bottom: -1.5rem;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};

  &:hover {
    box-shadow: 0px 0px 10px ${palette('grayscale', 4)};
  }
`;

const ImageWrapper = styled.img`
  border-radius: 0.25rem;
  border: 1px solid ${palette('grayscale', 4)};
  margin: 0.5rem;
  justify-self: flex-start;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const LabelWrapper = styled.div`
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
`;

const PriceAndShippingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-bottom: 0.5rem;
`;

const PriceAndShippingStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
`;

const PriceWrapper = styled(LabelWrapper)`
  ${PriceAndShippingStyles}
  background-color: ${palette('grayscale', 7)};
  border-radius: 0.5rem;
  border: 1px solid ${palette('grayscale', 6)};
  font-size: 1.1rem;
  width: 30%;
  font-weight: 525;
`;

const ShippingWrapper = styled(LabelWrapper)`
  ${PriceAndShippingStyles}
  background-color: ${palette('success', 3)};
  color: ${palette('grayscale', 0)};
  border-radius: 0.75rem;
  border: 1px solid ${palette('grayscale', 6)};
  font-size: 0.6rem;
  max-width: 75%;
  height: 0.9rem;
  padding-left: 0rem;
  padding-right: 0rem;
  margin-left: 0.75rem;
`;

const InStockWrapper = styled(LabelWrapper)`
  ${PriceAndShippingStyles}
  background-color: ${palette('grayscale', 6)};
  border-radius: 0.75rem;
  color: ${palette('grayscale', 2)};
  font-size: 0.7rem;
  width: 90%;
  height: 0.9rem;
  padding-left: 0rem;
  padding-right: 0rem;
  margin-top: -0.15rem;
  margin-bottom: 1rem;
`;

const SoldOutStatusStyling = css`
  position: relative;
  top: -8.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 88%;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.25rem;
  border-radius: 0.3rem;
`;

const SoldOutWrapper = styled(LabelWrapper)`
  ${SoldOutStatusStyling}
  color: ${palette('grayscale', 4)};
  text-shadow: 0px 0px 5px ${palette('grayscale', 1)};
  background-color: ${palette('danger', 0)};
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px ${palette('grayscale', 1)};
`;

const NotSoldOutWrapper = styled(LabelWrapper)`
  ${SoldOutStatusStyling}
  color: transparent;
  background-color: transparent;
  border: 1px solid transparent;
`;

const ShopListingGalleryCard = ({
  showSold,
  title,
  images,
  price,
  hasVariations,
  state,
  onClick,
  quantity,
  ...props
}) => {
  return (
    <>
      {state === 'active' || showSold ? (
        <Wrapper {...props}>
          <ImageCard>
            <ImageWrapper src={images[0].imageUrl570xN} alt={title} />
            <LabelWrapper>{title}</LabelWrapper>
            <PriceAndShippingWrapper>
              <PriceWrapper>
                {`$${price.amount}`}
                {hasVariations ? ' +' : ''}
              </PriceWrapper>
              {price.amount >= 35 ? (
                <ShippingWrapper>FREE Shipping</ShippingWrapper>
              ) : (
                <ShippingWrapper>{`Add $${Math.round(
                  35 - price.amount
                )} more for FREE Shipping`}</ShippingWrapper>
              )}
            </PriceAndShippingWrapper>
            <InStockWrapper>
              {quantity > 0 && quantity < 20 && state === 'active'
                ? `${quantity} In Stock`
                : 'Made to Order'}
            </InStockWrapper>
          </ImageCard>
          {state !== 'active' ? (
            <SoldOutWrapper>• Sold* •</SoldOutWrapper>
          ) : (
            <NotSoldOutWrapper>• Available •</NotSoldOutWrapper>
          )}
        </Wrapper>
      ) : (
        <></>
      )}{' '}
    </>
  );
};

ShopListingGalleryCard.propTypes = {
  showSold: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.object,
  hasVariations: PropTypes.bool,
  state: PropTypes.string,
  quantity: PropTypes.number,
};

export default ShopListingGalleryCard;
