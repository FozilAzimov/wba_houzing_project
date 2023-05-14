import useUniqueId from "../hooks/useId";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";

export const navbar = [
  {
    id: useUniqueId,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false
  },
  {
    id: useUniqueId,
    element: <PropertiesPage />,
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