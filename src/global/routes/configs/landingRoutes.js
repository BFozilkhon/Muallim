import GenericPage from '../../generics/genericPage';
import LandingHomePage from '../../../ui/landing/pages/home';

export const landingRoutes = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    exact: true,
    element: <LandingHomePage />,
  },
  {
    id: 2,
    text: 'Ranking',
    path: '/ranking',
    exact: true,
    element: <GenericPage />,
  },
  {
    id: 3,
    text: 'About',
    path: '/about',
    exact: true,
    element: <GenericPage />,
  },
  {
    id: 4,
    text: 'Features',
    path: '/Features',
    exact: true,
    element: <GenericPage />,
  },
  {
    id: 9,
    text: '404',
    path: '*',
    exact: true,
    element: <h1>404 Not Found</h1>,
  },
];
