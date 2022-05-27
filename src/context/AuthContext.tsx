import { createContext } from 'react';
import { IPlayLists, IResponseSongs } from '../interfaces/';

// export type AuthTokenProps = {
//   token: string
//   handleAuth: () => void
// }
// export const AuthContext = createContext<AuthTokenProps>({} as AuthTokenProps)

export type AuthContextProps = {
  auth: string;
  handleAuth: (auth: string) => void;
  playList: IPlayLists;
  handlePlayList: (playList: IPlayLists) => void;
  songs: IResponseSongs;
  handleSongs: (songs: IResponseSongs) => void;
  songUri: string;
  handleSongUri: (uri: string) => void;
};
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
