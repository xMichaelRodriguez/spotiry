import { Artist } from './';
import { Image } from './';
import { ITrack } from './';
export interface IMusicAlbum {
  id: string;
  artists: Artist[];
  images: Image[];
  name: string;
  tracks: ITrack;
}
