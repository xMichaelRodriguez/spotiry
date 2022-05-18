import { CardMusic } from './CardMusic';

import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

export const GridMusic = () => {
  const {
    songs: { items },
  } = useContext(AuthContext);

  // if (loading) return <div>Loading...</div>

  return (
    <SimpleGrid columns={3} spacing={6} minChildWidth={[300, 400, 500]}>
      {items && items.length > 1 && items.map((song) => <CardMusic key={song.id} {...song} />)}
    </SimpleGrid>
  );
};
