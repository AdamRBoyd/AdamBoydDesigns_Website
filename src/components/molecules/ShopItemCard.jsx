import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Button, Modal, Paragraph, Spacer } from '../../components';

const IMAGE_HEIGHT = '400px';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  align-self: flex-start;
  align-content: flex-start;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 2.75rem 3rem 2rem 0;
`;

const ParagraphWrapper = styled(Paragraph)`
  font-size: 1rem;
  margin: 0.2rem;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  align-self: flex-start;
  align-content: center;
  justify-content: center;
  width: 50%;
  margin-right: 1rem;
  margin-bottom: 3rem;
  padding: 0.5rem 1.5rem 2rem;
`;

const LargeImage = styled.img`
  border-radius: 0.25rem;
  border: 10px solid ${palette('grayscale', 4)};
  margin: 1rem;
  margin-top: 1.5rem;
  height: ${IMAGE_HEIGHT};
  justify-self: flex-start;
`;

const SmallImageRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  width: 90%;
  margin: 0.5rem;
`;

const SmallImage = styled.img`
  border-radius: 0.25rem;
  border: 1px solid ${palette('grayscale', 4)};
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  height: 50px;
  width: 50px;
  justify-self: flex-start;
`;

const ModalImageWrapper = styled.img`
  width: 100%;
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${palette('primary', 0)};
  margin-left: 0rem;
  padding: 0.25rem 0.7rem;
  background-color: ${palette('grayscale', 6)};
  font-size: 0.8rem;
  font-weight: 550;
`;

const PriceWrapper = styled.div`
  align-items: center;
  border-top: 1px solid ${palette('grayscale', 5)};
  border-bottom: 1px solid ${palette('grayscale', 5)};
  color: ${palette('primary', 0)};
  display: flex;
  flex-direction: row;
  font-family: ${font('primary')};
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5rem;
  padding: 0.5rem 0.8rem;
  text-align: center;
  text-transform: uppercase;
`;

const VariationWrapper = styled.div`
  font-size: 0.7rem;
  margin: 0 0.6rem;
`;

const SaleWrapper = styled.div`
  align-items: center;
  color: ${palette('grayscale', 1)};
  background-color: ${palette('success', 3)};
  display: flex;
  flex-direction: row;
  font-family: ${font('primary')};
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
`;

const SalePrice = styled.div`
  text-decoration: line-through;
  font-size: 1rem;
  color: ${palette('grayscale', 3)};
  margin-right: 0.7rem;
`;

const StyledButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
  &:enabled {
    background-color: ${palette('primary', 0)};
    color: ${palette('grayscale', 7)};
  }

  &:disabled {
    background-color: ${palette('grayscale', 4)};
    color: ${palette('grayscale', 2)};
    cursor: not-allowed;
  }
`;

const ShopItemCard = ({
  images,
  description,
  price,
  hasVariations,
  url,
  saleOn,
  salePercentage,
  saleTitle,
  state,
  quantity,
  ...props
}) => {
  const [imageUrl, setImageUrl] = useState(images[0]);

  const [isOpen, setIsOpen] = useState(false);

  // handle close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // handle open modal
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper {...props}>
      <ImageCard>
        <LargeImage src={imageUrl.imageUrl570xN} onClick={() => openModal()} />
        <SmallImageRow>
          {images.map((image, index) => (
            <SmallImage
              key={index}
              src={image.imageUrl75x75}
              onClick={() => setImageUrl(image)}
            />
          ))}
        </SmallImageRow>
      </ImageCard>
      <DescriptionWrapper>
        {description.map((line, index) => (
          <ParagraphWrapper key={`key.${index}`}>{line}</ParagraphWrapper>
        ))}

        {saleOn && (
          <>
            <Spacer padding='large' />
            <SaleWrapper>{`${saleTitle} - ${salePercentage}% off`}</SaleWrapper>
          </>
        )}

        <Spacer padding='large' />
        <PriceWrapper>
          <VariationWrapper>
            {hasVariations ? 'Price: From' : 'Price:'}
          </VariationWrapper>
          {saleOn ? (
            <>
              <SalePrice>
                {price.currency === 'USD' ? '$' : price.currency}
                {`${price.amount}`}
              </SalePrice>
              {price.currency === 'USD' ? '$' : price.currency}
              {`${price.amount - price.amount * (salePercentage / 100)}`}
            </>
          ) : (
            <>
              {price.currency === 'USD' ? '$' : price.currency}
              {`${price.amount}`}
            </>
          )}
          <VariationWrapper>
            {hasVariations ? 'Depending on variation' : ''}
          </VariationWrapper>
        </PriceWrapper>
        <Spacer padding='large' />
        <QuantityWrapper>
          {quantity > 0 && quantity < 20
            ? `${quantity} In Stock`
            : 'Made to Order'}
        </QuantityWrapper>

        <Spacer padding='medium' />
        <StyledButton
          onClick={() => window.open(url, '_blank')}
          disabled={state === 'active' ? false : true}
        >
          {state === 'active' ? 'Buy on Etsy' : 'Sold Out'}
        </StyledButton>
      </DescriptionWrapper>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalImageWrapper
          src={imageUrl.imageUrl570xN}
          alt='Modal'
          onClick={closeModal}
        />
      </Modal>
    </Wrapper>
  );
};

ShopItemCard.propTypes = {
  images: PropTypes.array,
  description: PropTypes.array,
  price: PropTypes.object,
  hasVariations: PropTypes.bool,
  url: PropTypes.string,
  saleOn: PropTypes.bool,
  salePercentage: PropTypes.number,
  saleTitle: PropTypes.string,
  state: PropTypes.string,
  quantity: PropTypes.number,
};

export default ShopItemCard;
