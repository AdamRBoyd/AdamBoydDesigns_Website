// import ReactDOM from 'react-dom/client';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  About,
  Code,
  CodeDictionary,
  CodeTicTacToe,
  CodeWeather,
  Contact,
  Gallery,
  GalleryImages,
  HomePage,
  NotFoundPage,
  Shop,
  ShopCategory,
  ShopListing,
} from './pages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  ScrollToTop();
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='code' element={<Code />} />
      <Route path='code/dictionary' element={<CodeDictionary />} />
      <Route path='code/weather' element={<CodeWeather />} />
      <Route path='code/tictactoe' element={<CodeTicTacToe />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='gallery/rings' element={<GalleryImages title='Rings' />} />
      <Route
        path='gallery/earrings'
        element={<GalleryImages title='Earrings' />}
      />
      <Route
        path='gallery/pendants'
        element={<GalleryImages title='Pendants' />}
      />
      <Route path='gallery/other' element={<GalleryImages title='Other' />} />
      <Route
        path='gallery/fabrication'
        element={<GalleryImages title='Fabrication' />}
      />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/earrings' element={<ShopCategory />} />
      <Route path='shop/rings' element={<ShopCategory />} />
      <Route path='shop/pendants' element={<ShopCategory />} />
      <Route path='shop/sets' element={<ShopCategory />} />
      <Route path='shop/nose' element={<ShopCategory />} />
      <Route path='shop/:category/:listing' element={<ShopListing />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
