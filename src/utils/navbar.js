import React from "react";
import useUniqueId from "../hooks/useId";
const HomePage = React.lazy(() => import('../pages/Home'));
const PropertiesPage = React.lazy(() => import('../pages/Properties'));

export const navbar = [
  {
    id: useUniqueId,
    element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
      <HomePage />
    </React.Suspense>,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false
  },
  {
    id: useUniqueId,
    element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
      <PropertiesPage />
    </React.Suspense>,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false
  },
  {
    id: useUniqueId,
    element: <h1>Sign In Page</h1>,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true
  },
  {
    id: useUniqueId,
    element: <h1>Sign Up Page</h1>,
    title: 'Sign Up',
    path: '/signup',
    private: false,
    hidden: true
  },
]