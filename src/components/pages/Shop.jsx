import React from 'react';
import styled from 'styled-components';

import { Earrings, Nose, Pendants, Rings, Sets } from '../json';
import {
  Link,
  PageTitleFrame,
  ShopMainGalleryCard,
  Spacer,
} from '../../components';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Shop = () => {
  return (
    <PageTitleFrame title='Shop' noBottomRule>
      <Spacer padding='small' />
      <GalleryWrapper>
        <Link to='/shop/earrings'>
          <ShopMainGalleryCard listings={Earrings} label='Earrings' />
        </Link>
        <Link to='/shop/nose'>
          <ShopMainGalleryCard listings={Nose} label='Nose' />
        </Link>
        <Link to='/shop/pendants'>
          <ShopMainGalleryCard listings={Pendants} label='Pendants' />
        </Link>
        <Link to='/shop/rings'>
          <ShopMainGalleryCard listings={Rings} label='Rings' />
        </Link>
        <Link to='/shop/sets'>
          <ShopMainGalleryCard listings={Sets} label='Sets' />
        </Link>
      </GalleryWrapper>
    </PageTitleFrame>
  );
};

export default Shop;
