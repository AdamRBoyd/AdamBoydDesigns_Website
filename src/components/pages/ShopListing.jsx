import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ShopItemCard from '../molecules/ShopItemCard';
import PageTitleFrame from '../organisms/PageTitleFrame';
import Spacer from '../atoms/Spacer';
import { Earrings, Nose, Pendants, Rings, Sets } from '../atoms/JSONListings';
import { saleOn, salePercentage, saleTitle } from '../atoms/SaleDate';

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

  const [listing] = useState(getListing(currentCategory, currentListing));

  return (
    <>
      <PageTitleFrame
        title={listing?.title || 'Nope!'}
        subtitle={listing?.subtitle}
      >
        <ShopItemCard
          saleOn={saleOn}
          salePercentage={salePercentage}
          saleTitle={saleTitle}
          {...listing}
        />
      </PageTitleFrame>
      <Spacer padding='xxlarge' />
    </>
  );
};

ShopListing.propTypes = {
  title: PropTypes.string,
};

export default ShopListing;
