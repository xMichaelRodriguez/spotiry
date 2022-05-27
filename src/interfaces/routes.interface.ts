import { IconType } from "react-icons";
import { JSXComponent } from "../routes";

export interface IRoute {
    children?: IRoute[];
    component: JSXComponent;
    name: string;
    path: string;
    exact?: boolean;
    icon?: IconType;
  }