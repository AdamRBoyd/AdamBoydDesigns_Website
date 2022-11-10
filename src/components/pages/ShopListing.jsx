import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ShopItemCard from '../molecules/ShopItemCard';
import PageTitleFrame from '../organisms/PageTitleFrame';
import Spacer from '../atoms/Spacer';
import { Earrings, Nose, Pendants, Rings, Sets } from '../atoms/JSONListings';
import BackArrow from '../atoms/BackArrow';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
  cursor: pointer;
  margin-top: 1rem;
`;

const getListing = (currentCategory, currentListing) => {
  let category = [];
  switch (currentCategory) {
    case 'earrings':
      category = Earrings;
      break;
    case 'nose':
      category = Nose;
      break;
    case 'pendants':
      category = Pendants;
      break;
    case 'rings':
      category = Rings;
      break;
    case 'sets':
      category = Sets;
      break;
    default:
      break;
  }
  const listing = category.find(
    (item) => item.listingId.toString() === currentListing.toString()
  );
  return listing;
};

const ShopListing = () => {
  const currentCategory = window.location.pathname.split('/')[2];
  const currentListing = window.location.pathname.split('/')[3];

  const [listing, setListing] = useState(
    getListing(currentCategory, currentListing)
  );

  return (
    <>
      <PageTitleFrame
        title={listing?.title || 'Nope!'}
        subtitle={listing?.subtitle}
      >
        <NavWrapper>
          <BackArrow to={`/shop/${currentCategory}`} position='left' />
        </NavWrapper>
        <ShopItemCard {...listing} />
      </PageTitleFrame>
      <BackArrow to={`/shop/${currentCategory}`} />
      <Spacer padding='xxlarge' />
    </>
  );
};

ShopListing.propTypes = {
  title: PropTypes.string,
};

export default ShopListing;
