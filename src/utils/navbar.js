import React from "react";
import useUniqueId from "../hooks/useId";
import RegisterPage from "../pages/Register";
import MyProfilePage from "../pages/MyProfile";
import AddNewHousePage from "../pages/AddNewHouse";

const HomePage = React.lazy(() => import('../pages/Home'));
const PropertiesPage = React.lazy(() => import('../pages/Properties'));
const HousItemPage = React.lazy(() => import('../pages/HousItem'));
const Favorites = React.lazy(() => import('../pages/Favorites'));

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
    element: <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
      <Favorites />
    </React.Suspense>,
    title: 'Favorites',
    path: '/favorites',
    private: true,
    hidden: true
  },
  {
    id: useUniqueId,
    element: <AddNewHousePage />,
    title: 'Add New House',
    path: '/myprofile/newhouse',
    private: true,
    hidden: true
  },
  {
    id: useUniqueId,
    element: <AddNewHousePage />,
    title: 'Add New House',
    path: '/myprofile/edithouse/:id',
    private: true,
    hidden: true
  },
  {
    id: useUniqueId,
    element: <MyProfilePage />,
    title: 'My Profile',
    path: '/myprofile',
    private: true,
    hidden: true
  },
  {
    id: useUniqueId,
    element: <RegisterPage />,
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