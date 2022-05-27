import { useEffect, useState } from 'react';
import { helpHttp } from '../lib/helpHttp';

interface IProps {
  song?: string;
  artist?: string;
}
export const useLyrics = ({ artist, song }: IProps) => {
  const [lyrics, setLyrics] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const lyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const songUrl = ` theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      setLoading(true);
      const [songData, lyricsData] = await Promise.all([
        helpHttp().get({ endPoint: songUrl }),
        helpHttp().get({ endPoint: lyricsUrl }),
      ]);
      console.log(songData, lyricsData);
      setLyrics(lyricsData);
      setBio(songData);

      setLoading(false);
    };

    fetchData();
  }, [artist, song]);

  return {
    loading,
    lyrics,
    bio,
  };
};
