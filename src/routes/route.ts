
import { JSXComponent } from '.'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

interface IRoute {
  children?: IRoute[]
  component: JSXComponent
  name: string
  path: string
  exact?: boolean
}

export const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'Inicio',
    exact: true,
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'Login',
    exact: false,
  },
]
