import { useState } from 'react';
import { IPlayLists, IResponseSongs } from '../interfaces/interfaces';
import { AuthContext } from './AuthContext';

const INITIAL_DATA: IPlayLists = {
  href: '',
  items: [],
  limit: 0,
  next: 0,
  offset: 0,
  previous: 0,
  total: 0,
};

const INITIAL_SONGS: IResponseSongs = {
  href: '',
  items: [
    {
      album_type: '',
      artists: [],
      available_markets: [],
      external_urls: { spotify: '' },
      href: '',
      id: '',
      images: [],
      name: '',
      release_date: '',
      release_date_precision: '',
      total_tracks: 0,
      type: '',
      uri: '',
    },
  ],
};
interface props {
  children: JSX.Element | JSX.Element[];
}
export const AuthProvider = ({ children }: props) => {
  const [auth, setAuth] = useState('');
  const [playList, setPlaylist] = useState<IPlayLists>(INITIAL_DATA);
  const [songs, setSongs] = useState<IResponseSongs>(INITIAL_SONGS);

  const handleAuth = (token: string) => {
    setAuth(token);
  };

  const handlePlayList = (playList: IPlayLists) => {
    setPlaylist(playList);
  };

  const handleSongs = (songs: IResponseSongs) => {
    setSongs(songs);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleAuth,
        playList,
        handlePlayList,
        songs,
        handleSongs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
