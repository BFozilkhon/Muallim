import GenericPage from '../../generics/genericPage';
import LandingHomePage from '../../../ui/landing/pages/home';
import LandingRankingPage from '../../../ui/landing/pages/ranking';
import LandingBlogPage from '../../../ui/landing/pages/blog';

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
    element: <LandingRankingPage />,
  },
  {
    id: 3,
    text: 'About',
    path: '/about',
    exact: true,
    element: <GenericPage />,
  },
  {
    id: 3,
    text: 'Blog',
    path: '/blog',
    exact: true,
    element: <LandingBlogPage />,
  },
  {
    id: 4,
    text: 'BlogParams',
    path: '/blog/:specialKey',
    exact: true,
    element: <GenericPage />,
  },
  {
    id: 5,
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
