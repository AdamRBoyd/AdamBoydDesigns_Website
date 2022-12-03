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

const ImageCard = styled.div`
  align-content: center;
  align-items: center;
  align-self: center;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
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
  justify-self: center;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  display: grid;
  margin-bottom: -2rem;
`;

const SoldOutStatusStyling = css`
  position: relative;
  top: -3rem;
  justify-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 92%;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.25rem;
  border-radius: 0.3rem;
`;

const SoldOutWrapper = styled(LabelWrapper)`
  ${SoldOutStatusStyling}
  color: ${palette('grayscale', 4)};
  text-shadow: 0px 0px 5px ${palette('grayscale', 1)};
  background-color: ${palette('danger', 1)};
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px ${palette('grayscale', 1)};
`;

const NotSoldOutWrapper = styled(LabelWrapper)`
  ${SoldOutStatusStyling}
  color: transparent;
  background-color: transparent;
  border: 1px solid transparent;
`;

const PriceAndShippingStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  margin-bottom: 0.5rem;
`;

const PriceWrapper = styled(LabelWrapper)`
  ${PriceAndShippingStyles}
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid ${palette('grayscale', 6)};
  font-size: 1.1rem;
  width: fit-content;
  padding: 0.25rem 1.5rem;
  font-weight: 525;
`;

const SalePriceWrapper = styled.div`
  font-size: 0.9rem;
  text-decoration: line-through;
  margin: 0 0.3rem;
  color: ${palette('grayscale', 3)};
`;

const SalePercentWrapper = styled.div`
  font-size: 0.9rem;
  color: ${palette('grayscale', 3)};
`;

const VariationsWrapper = styled.div`
  font-size: 0.7rem;
  margin-right: 0.5rem;
`;

const InStockAndShippingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0.5rem 0 0.5rem 0;
`;

const ShippingWrapper = styled(LabelWrapper)`
  ${PriceAndShippingStyles}
  background-color: ${palette('success', 3)};
  color: ${palette('grayscale', 0)};
  border-radius: 0.75rem;
  border: 1px solid ${palette('grayscale', 6)};
  font-size: 0.7rem;
  max-width: 45%;
`;

const InStockWrapper = styled(LabelWrapper)`
  ${PriceAndShippingStyles}
  background-color: ${palette('grayscale', 7)};
  border: 1px solid ${palette('grayscale', 6)};
  border-radius: 0.75rem;
  color: ${palette('grayscale', 2)};
  font-size: 0.7rem;
  max-width: 45%;
`;

const ShopListingGalleryCard = ({
  showSold,
  title,
  images,
  price,
  hasVariations,
  saleOn,
  salePercentage,
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
            <ImageOverlay>
              <ImageWrapper src={images[0].imageUrl570xN} alt={title} />
              {state !== 'active' ? (
                <SoldOutWrapper>• Sold* •</SoldOutWrapper>
              ) : (
                <NotSoldOutWrapper>Available</NotSoldOutWrapper>
              )}
            </ImageOverlay>
            <LabelWrapper>{title}</LabelWrapper>
            {saleOn ? (
              <PriceWrapper>
                <VariationsWrapper>
                  {hasVariations ? 'From' : ''}
                </VariationsWrapper>
                {`$${price.amount - price.amount * (salePercentage / 100)}`}
                <SalePriceWrapper>{`$${price.amount}`}</SalePriceWrapper>
                <SalePercentWrapper>
                  {`(${salePercentage}% off)`}
                </SalePercentWrapper>
                {'   '}
              </PriceWrapper>
            ) : (
              <PriceWrapper>
                <VariationsWrapper>
                  {hasVariations ? 'From' : ''}
                </VariationsWrapper>
                {`$${price.amount}`}
              </PriceWrapper>
            )}
            <InStockAndShippingWrapper>
              <InStockWrapper>
                {quantity > 0 && quantity < 20 && state === 'active'
                  ? `${quantity} In Stock`
                  : 'Made to Order'}
              </InStockWrapper>
              {price.amount >= 35 ? (
                <ShippingWrapper>FREE Shipping</ShippingWrapper>
              ) : (
                <ShippingWrapper>{`Add $${Math.round(
                  35 - price.amount
                )} more`}</ShippingWrapper>
              )}
            </InStockAndShippingWrapper>
          </ImageCard>
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
  saleOn: PropTypes.bool,
  salePercentage: PropTypes.number,
  state: PropTypes.string,
  quantity: PropTypes.number,
};

export default ShopListingGalleryCard;
