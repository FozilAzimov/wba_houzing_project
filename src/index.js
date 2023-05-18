import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootContext from './context';
import Root from './root';
import 'antd/dist/reset.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RootContext>
      <Root />
    </RootContext>
  </BrowserRouter>
);
