import React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

import { Settings } from '../atoms/JSONListings';
import Link from '../atoms/Link';
import PrimaryNavigation from '../molecules/PrimaryNavigation';

const { saleTitle, advertStart, saleStart, saleEnd, salePercentage } =
  Settings.sale;

const today = new Date();
const advertiseStart = new Date(advertStart);
const start = new Date(saleStart);
const end = new Date(saleEnd);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  font-family: ${font('primary')};
  background-color: black;
  width: 100%;
  z-index: 1000;
`;

const ImageWrapper = styled.img`
  margin-top: 0.5rem;
  align-self: center;
`;

const SaleStyle = css`
  color: ${palette('grayscale', 5)};
  font-family: ${font('primary')};
  stroke: ${palette('grayscale', 0)};
`;

const SaleTitle = styled.label`
  ${SaleStyle}
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 1rem;
  margin-left: 2rem;
`;

const SalePercentage = styled.label`
  ${SaleStyle}
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const SaleDate = styled.label`
  ${SaleStyle}
  font-size: 1.3rem;
  font-weight: 500;
  margin-right: 2rem;
`;

const SaleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  align-self: center;
  background-color: ${palette('danger', 0)};
  border: 1px solid ${palette('grayscale', 1)};
  border-top: 1px solid transparent;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  height: 1.5rem;
  z-index: -1;
  position: absolute;
  width: 600px;
  margin-left: -300px;
  top: 5rem;
  left: 50%;
  padding-top: 0.4rem;
  padding-bottom: 0.25rem;
`;

const Header = (props) => {
  return (
    <>
      {today > advertiseStart && today < end && (
        <SaleWrapper>
          <SaleTitle>{saleTitle}</SaleTitle>
          <SalePercentage>{`${salePercentage}% off`}</SalePercentage>
          <SaleDate>{`${start.toLocaleString('default', {
            month: 'short',
            day: 'numeric',
          })} - ${end.toLocaleString('default', {
            month: 'short',
            day: 'numeric',
          })}`}</SaleDate>
        </SaleWrapper>
      )}
      <Wrapper>
        <Link to='/'>
          <ImageWrapper alt='Logo' src='/images/Signature.png' height='55' />
        </Link>
        <PrimaryNavigation />
      </Wrapper>
    </>
  );
};

export default Header;
