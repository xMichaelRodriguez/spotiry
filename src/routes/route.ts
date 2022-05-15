import { FiHome } from 'react-icons/fi';
import { FaSignInAlt } from 'react-icons/fa';
import { IRoute } from '../interfaces/interfaces';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

export const routes: IRoute[] = [
  {
    path: '/',
    component: HomePage,
    name: 'Inicio',
    exact: true,
    icon: FiHome,
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'Login',
    exact: false,
    icon: FaSignInAlt,
  },
];
