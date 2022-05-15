import { CardMusic } from './CardMusic';

import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

interface IResponse {
  [key: string]: [
    {
      index: string;
      result: {
        annotation_account: number;
        api_path: string;
        artist_names: string;
        full_title: string;
        header_image_thumbnail_url: string;
        header_image_url: string;
        id: number;
        lyrics_owner_id: number;
        lyrics_state: string;
        path: string;
        primary_artist: {
          api_path: string;
          header_image_url: string;
          id: number;
          image_url: string;
          name: string;
          url: string;
        };
        song_art_image_thumbnail_url: string;
        song_art_image_url: string;
        title: string;
        title_with_featured: string;
        url: string;
      };
    }
  ];
}

export const GridMusic = () => {
  const {
    songs: { items },
  } = useContext(AuthContext);

  // if (loading) return <div>Loading...</div>

  return (
    <SimpleGrid columns={3} spacing={8} minChildWidth={[300,400,500]}>
      {items.length > 1 && items.map((song) => <CardMusic key={song.id} {...song} />)}
    </SimpleGrid>
  );
};
