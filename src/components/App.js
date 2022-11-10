// import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import PageTemplate from './pages/PageTemplate';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import GalleryImages from './pages/GalleryImages';
import ShopCategory from './pages/ShopCategory';
import ShopListing from './pages/ShopListing';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <PageTemplate>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route
            path='gallery/rings'
            element={<GalleryImages title='Rings' />}
          />
          <Route
            path='gallery/earrings'
            element={<GalleryImages title='Earrings' />}
          />
          <Route
            path='gallery/pendants'
            element={<GalleryImages title='Pendants' />}
          />
          <Route
            path='gallery/other'
            element={<GalleryImages title='Other' />}
          />
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
      </PageTemplate>
    </BrowserRouter>
  );
}

export default App;
