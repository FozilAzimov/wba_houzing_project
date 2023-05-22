import React from "react";
import useUniqueId from "../hooks/useId";
import SignIn from '../pages/SignIn';

const HomePage = React.lazy(() => import('../pages/Home'));
const PropertiesPage = React.lazy(() => import('../pages/Properties'));
const HousItemPage = React.lazy(() => import('../pages/HousItem'));

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
    element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
      <HousItemPage />
    </React.Suspense>,
    title: 'HousItemPage',
    path: '/properties/:id',
    private: false,
    hidden: true
  },
  {
    id: useUniqueId,
    element: <SignIn />,
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