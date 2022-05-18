import { IconType } from 'react-icons';
import { JSXComponent } from '../routes';

export interface IPlayLists {
  href: string;
  items: string[];
  limit: number;
  next: null | number;
  offset: number;
  previous: null | number;
  total: number;
}

export interface IResponseSongs {
  href: string;
  items: Item[];
}

export interface Item {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface IRoute {
  children?: IRoute[];
  component: JSXComponent;
  name: string;
  path: string;
  exact?: boolean;
  icon?: IconType;
}



export interface ITrack {
  href: string;
  items: IItemsTrack[];
  limit: number;
  next: number;
  offset: number;
  previous: number;
  total: number;
}
export interface IItemsTrack {
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
export interface ExternalUrls {
  spotify: string;
}