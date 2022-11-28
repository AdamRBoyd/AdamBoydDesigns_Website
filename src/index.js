import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import PageTemplate from '../src/components/pages/PageTemplate';
import theme from './components/theme';
import './index.css';

document.body.style.overflowY = 'scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <PageTemplate>
        <App />
      </PageTemplate>
    </BrowserRouter>
  </ThemeProvider>
);
