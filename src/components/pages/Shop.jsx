import React, { useState } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { useNavigate } from 'react-router-dom';

import { AllListings, Earrings, Nose, Pendants, Rings, Sets } from '../json';
import { SORT_OPTIONS } from '../Constants/SortOptions';
import { SHOP_CATEGORIES } from '../Constants/ShopCategories';
import { saleOn, salePercentage } from '../Constants/SaleDate';
import {
  Button,
  Dropdown,
  HorizontalRule,
  Link,
  PageTitleFrame,
  ShopListingGalleryCard,
  Spacer,
} from '..';

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

const Shop = () => {
  // Get current page from url
  const currentPage = window.location.pathname.split('/')[2];
  const [showSold, setShowSold] = useState(true);
  const navigate = useNavigate();

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
      case 'all':
        return { label: 'All', category: AllListings };
      default:
        return { label: 'UH OH!', category: null };
    }
  };

  const [listingsData, setListingsData] = useState(listings(currentPage));
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0].value);

  const sortListings = (sortParam, list) => {
    setCurrentSort(sortParam);

    switch (sortParam) {
      case 'priceASC':
        return list.category.sort((a, b) => a.price.amount - b.price.amount);
      case 'priceDESC':
        return list.category.sort((a, b) => b.price.amount - a.price.amount);
      case 'titleASC':
        return list.category.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        );
      case 'titleDESC':
        return list.category.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
        );
      case 'dateASC':
        return list.category.sort((a, b) => b.creationDate - a.creationDate);
      case 'dateDESC':
        return list.category.sort((a, b) => a.creationDate - b.creationDate);
      default:
        return list.category.sort((a, b) => a.index - b.index);
    }
  };

  const handleSortChange = (e) => {
    setListingsData({
      label: listingsData?.label,
      category: sortListings(e.target.value, listingsData),
    });
  };

  const handleFilterChange = (e) => {
    const category = e.target.value;
    const list = listings(category);
    setListingsData({
      label: listingsData?.label,
      category: sortListings(currentSort, list),
    });
    navigate(`/shop/${category}`);
  };

  const handleShowHideSold = () => {
    setShowSold(!showSold);
  };

  return (
    <>
      <PageTitleFrame title={'Shop'}>
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
            onChange={handleFilterChange}
            options={SHOP_CATEGORIES}
            label='Category: '
            initialValue={listingsData.label}
          />
          <StyledDropdown
            onChange={handleSortChange}
            options={SORT_OPTIONS}
            label='Sorting: '
            initialValue={SORT_OPTIONS[0].label}
          />
        </NavWrapper>
        <Spacer padding={0.5} />
        <HorizontalRule />
        <FreeShippingFlag>Free Shipping on orders over $35</FreeShippingFlag>
        <Spacer padding={0.5} />
        <GalleryWrapper>
          {listingsData.category.map((listing, index) => (
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
        <Spacer padding={0.5} />
        <HorizontalRule />
        <Spacer padding={0.5} />
        <Footnote>* Sold listings may be available for custom order</Footnote>
        <Footnote>Contact me for more Information </Footnote>
      </PageTitleFrame>
      <Spacer padding={6} />
    </>
  );
};

Shop.propTypes = {};

export default Shop;
