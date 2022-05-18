import { List } from '@chakra-ui/react';
import { ITrack } from '../interfaces/interfaces';
import { ListItemMusicAlbum } from './ListItemMusicAlbum';

export const ListMusicAlbum = ({ items }: ITrack) => {
  return (
    <List  w="100%" h="100%" >
      {items.map((item) => (
        <ListItemMusicAlbum key={item.id} {...item} />
      ))}
    </List>
  );
};
