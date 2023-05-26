import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootContext from './context';
import Root from './root';
import 'antd/dist/reset.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootContext>
          <Root />
        </RootContext>
      </BrowserRouter>
    </QueryClientProvider>
  </>
);
