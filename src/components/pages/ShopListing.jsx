import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Earrings, Nose, Pendants, Rings, Sets } from '../json';
import { saleOn, salePercentage, saleTitle } from '../Constants/SaleDate';
import { PageTitleFrame, ShopItemCard, Spacer } from '../../components';

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
      <Spacer padding={6} />
    </>
  );
};

ShopListing.propTypes = {
  title: PropTypes.string,
};

export default ShopListing;
