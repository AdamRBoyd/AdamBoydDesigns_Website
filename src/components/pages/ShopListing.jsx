import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { saleOn, salePercentage, saleTitle } from '../Constants/SaleDate';
import { PageTitleFrame, ShopListingCard, Spacer } from '../../components';

const ShopListing = () => {
  const { state } = useLocation();
  const { listing } = state;

  return (
    <>
      <PageTitleFrame
        title={listing?.title || 'Nope!'}
        subtitle={listing?.subtitle}
      >
        <ShopListingCard
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
