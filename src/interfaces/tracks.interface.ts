export interface ExternalUrls {
  spotify: string;
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
