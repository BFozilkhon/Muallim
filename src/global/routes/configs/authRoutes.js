import GenericPage from '../../generics/genericPage';
import Login from '../../../ui/auth/login';

export const authRoutes = [
  {
    id: 21,
    text: 'Register',
    path: '/register',
    exact: true,
    element: <GenericPage />,
  },
  {
    id: 22,
    text: 'Login',
    path: '/login',
    exact: true,
    element: <Login />,
  },
];
