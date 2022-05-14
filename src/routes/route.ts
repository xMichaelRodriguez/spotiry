import { lazy, LazyExoticComponent } from "react";
import { JSXComponent } from ".";

interface IRoute {
  children?: IRoute[];
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
}

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ "../pages/HomePage"));

export const routes = [
  {
    path: "/",
    component: HomePage,
    name: "Inicio",
  },
];
