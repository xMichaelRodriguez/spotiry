import { FiHome } from 'react-icons/fi';
import { FaSignInAlt } from 'react-icons/fa';

import HomePage from '../features/home/pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import AlbumPage from '../features/album/pages/AlbumPage';
import { IRoute } from '../interfaces/routes.interface';

export const routes: IRoute[] = [
  {
    path: '/',
    component: HomePage,
    name: 'Inicio',
    exact: true,
    icon: FiHome,
  },
  {
    path: '/album/:id',
    component: AlbumPage,
    name: 'Album',
    exact: true,
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'Login',
    exact: false,
    icon: FaSignInAlt,
  },
];
