// import ReactDOM from 'react-dom/client';
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const About = lazy(() => import('../components/pages/About'));
const Code = lazy(() => import('../components/pages/Code'));
const CodeDictionary = lazy(() => import('../components/pages/CodeDictionary'));
const CodeGradient = lazy(() => import('../components/pages/CodeGradient'));
const CodePasswordGen = lazy(() =>
  import('../components/pages/CodePasswordGen')
);
const CodeRecipeBook = lazy(() => import('../components/pages/CodeRecipeBook'));
const CodeRecipeCard = lazy(() => import('../components/pages/CodeRecipeCard'));
const CodeTicTacToe = lazy(() => import('../components/pages/CodeTicTacToe'));
const CodeTipCalc = lazy(() => import('../components/pages/CodeTipCalc'));
const CodeToDo = lazy(() => import('../components/pages/CodeToDo'));
const CodeUnitConverter = lazy(() =>
  import('../components/pages/CodeUnitConverter')
);
const CodeWeather = lazy(() => import('../components/pages/CodeWeather'));
const Contact = lazy(() => import('../components/pages/Contact'));
const Gallery = lazy(() => import('../components/pages/Gallery'));
const GalleryImages = lazy(() => import('../components/pages/GalleryImages'));
const HomePage = lazy(() => import('../components/pages/HomePage'));
const LoadingPage = lazy(() => import('../components/pages/LoadingPage'));
const NotFoundPage = lazy(() => import('../components/pages/NotFoundPage'));
const Shop = lazy(() => import('../components/pages/Shop'));
const ShopCategory = lazy(() => import('../components/pages/ShopCategory'));
const ShopListing = lazy(() => import('../components/pages/ShopListing'));
const Test = lazy(() => import('../components/pages/Test'));

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
      <Route
        path='/'
        element={
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path='about'
        element={
          <Suspense fallback={<LoadingPage />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path='contact'
        element={
          <Suspense fallback={<LoadingPage />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path='code'
        element={
          <Suspense fallback={<LoadingPage />}>
            <Code />
          </Suspense>
        }
      />
      <Route
        path='code/dictionary'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeDictionary />
          </Suspense>
        }
      />
      <Route
        path='code/gradient'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeGradient />
          </Suspense>
        }
      />
      <Route
        path='code/passwordgen'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodePasswordGen />
          </Suspense>
        }
      />
      <Route
        path='code/recipe'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeRecipeBook />
          </Suspense>
        }
      />
      <Route
        path='code/recipe/:card'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeRecipeCard />
          </Suspense>
        }
      />
      <Route
        path='code/tictactoe'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeTicTacToe />
          </Suspense>
        }
      />
      <Route
        path='code/tipcalc'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeTipCalc />
          </Suspense>
        }
      />
      <Route
        path='code/todo'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeToDo />
          </Suspense>
        }
      />
      <Route
        path='code/units'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeUnitConverter />
          </Suspense>
        }
      />
      <Route
        path='code/weather'
        element={
          <Suspense fallback={<LoadingPage />}>
            <CodeWeather />
          </Suspense>
        }
      />
      <Route
        path='gallery'
        element={
          <Suspense fallback={<LoadingPage />}>
            <Gallery />
          </Suspense>
        }
      />
      <Route
        path='gallery/rings'
        element={
          <Suspense fallback={<LoadingPage />}>
            <GalleryImages title='Rings' />
          </Suspense>
        }
      />
      <Route
        path='gallery/earrings'
        element={
          <Suspense fallback={<LoadingPage />}>
            <GalleryImages title='Earrings' />
          </Suspense>
        }
      />
      <Route
        path='gallery/pendants'
        element={
          <Suspense fallback={<LoadingPage />}>
            <GalleryImages title='Pendants' />
          </Suspense>
        }
      />
      <Route
        path='gallery/other'
        element={
          <Suspense fallback={<LoadingPage />}>
            <GalleryImages title='Other' />
          </Suspense>
        }
      />
      <Route
        path='gallery/fabrication'
        element={
          <Suspense fallback={<LoadingPage />}>
            <GalleryImages title='Fabrication' />
          </Suspense>
        }
      />
      <Route
        path='shop'
        element={
          <Suspense fallback={<LoadingPage />}>
            <Shop />
          </Suspense>
        }
      />
      <Route
        path='shop/earrings'
        element={
          <Suspense fallback={<LoadingPage />}>
            <ShopCategory />
          </Suspense>
        }
      />
      <Route
        path='shop/rings'
        element={
          <Suspense fallback={<LoadingPage />}>
            <ShopCategory />
          </Suspense>
        }
      />
      <Route
        path='shop/pendants'
        element={
          <Suspense fallback={<LoadingPage />}>
            <ShopCategory />
          </Suspense>
        }
      />
      <Route
        path='shop/sets'
        element={
          <Suspense fallback={<LoadingPage />}>
            <ShopCategory />
          </Suspense>
        }
      />
      <Route
        path='shop/nose'
        element={
          <Suspense fallback={<LoadingPage />}>
            <ShopCategory />
          </Suspense>
        }
      />
      <Route
        path='shop/:category/:listing'
        element={
          <Suspense fallback={<LoadingPage />}>
            <ShopListing />
          </Suspense>
        }
      />
      <Route
        path='test'
        element={
          <Suspense fallback={<LoadingPage />}>
            <Test />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<LoadingPage />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
