import React, { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Earrings, Nose, Pendants, Rings, Sets } from '../json';
import { SORT_OPTIONS } from '../Constants/SortOptions';
import { saleOn, salePercentage } from '../Constants/SaleDate';
import {
  Button,
  Dropdown,
  HorizontalRule,
  Link,
  PageTitleFrame,
  ShopListingGalleryCard,
  Spacer,
} from '../../components/';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footnote = styled.div`
  font-family: ${font('primary')};
  color: ${palette('danger', 0)};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 0.75rem;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 85%;
  text-align: center;
  margin: 0rem 0 -0.5rem;
  padding: 0.5rem 2rem 0;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${palette('grayscale', 6)};
`;

const StyledButton = styled(Button)`
  width: 14%;
  margin: -0.5rem 0 0 0;
`;

const StyledDropdown = styled(Dropdown)``;

const FreeShippingFlag = styled.div`
  position: relative;
  top: -1rem;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
  width: 40%;
  text-transform: uppercase;
  text-align: center;
  background-color: ${palette('success', 3)};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: 1px solid ${palette('grayscale', 6)};
  border-top: 1px solid ${palette('grayscale', 4)};
`;

const ShopCategory = () => {
  // Get current page from url
  const currentPage = window.location.pathname.split('/')[2];
  const [showSold, setShowSold] = useState(true);

  const listings = (currentCategory) => {
    switch (currentCategory) {
      case 'earrings':
        return { label: 'Earrings', category: Earrings };
      case 'nose':
        return { label: 'Nose', category: Nose };
      case 'pendants':
        return { label: 'Pendants', category: Pendants };
      case 'rings':
        return { label: 'Rings', category: Rings };
      case 'sets':
        return { label: 'Sets', category: Sets };
      default:
        return { label: 'UH OH!', category: null };
    }
  };

  const listingsData = listings(currentPage);
  const [sortedListings, setSortedListings] = useState(listingsData);

  const handleSortChange = (e) => {
    let listings = [];

    switch (e.target.value) {
      case 'priceASC':
        listings = listingsData.category.sort(
          (a, b) => a.price.amount - b.price.amount
        );
        break;
      case 'priceDESC':
        listings = listingsData.category.sort(
          (a, b) => b.price.amount - a.price.amount
        );
        break;
      case 'titleASC':
        listings = listingsData.category.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        );
        break;
      case 'titleDESC':
        listings = listingsData.category.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
        );
        break;
      case 'dateASC':
        listings = listingsData.category.sort(
          (a, b) => b.creationDate - a.creationDate
        );
        break;
      case 'dateDESC':
        listings = listingsData.category.sort(
          (a, b) => a.creationDate - b.creationDate
        );
        break;
      default:
        listings = listingsData.category.sort((a, b) => a.index - b.index);
        break;
    }
    setSortedListings({
      label: listingsData.label,
      category: listings,
    });
  };

  const handleShowHideSold = () => {
    setShowSold(!showSold);
  };

  return (
    <>
      <PageTitleFrame title={listingsData.label}>
        <NavWrapper>
          {showSold ? (
            <StyledButton
              onClick={handleShowHideSold}
              variant='primary'
              buttonHeight={1.75}
            >
              Hide Sold Out
            </StyledButton>
          ) : (
            <StyledButton
              onClick={handleShowHideSold}
              variant='ghost'
              buttonHeight={1.75}
            >
              Show Sold Out
            </StyledButton>
          )}
          <StyledDropdown
            onChange={handleSortChange}
            options={SORT_OPTIONS}
            label='Sorting: '
            initialValue={SORT_OPTIONS[0].label}
          />
        </NavWrapper>
        <Spacer padding='small' />
        <HorizontalRule />
        <FreeShippingFlag>Free Shipping on orders over $35</FreeShippingFlag>
        <Spacer padding='small' />
        <GalleryWrapper>
          {sortedListings.category.map((listing, index) => (
            <Link
              to={`/shop/${currentPage}/${listing.listingId}`}
              title={listing.title}
              key={listing.listingId}
            >
              <ShopListingGalleryCard
                showSold={showSold}
                saleOn={saleOn}
                salePercentage={salePercentage}
                {...listing}
              />
            </Link>
          ))}
        </GalleryWrapper>
        <Spacer padding='small' />
        <HorizontalRule />
        <Spacer padding='small' />
        <Footnote>* Sold listings may be available for custom order</Footnote>
        <Footnote>Contact me for more Information </Footnote>
      </PageTitleFrame>
      <Spacer padding='xxlarge' />
    </>
  );
};

ShopCategory.propTypes = {};

export default ShopCategory;
