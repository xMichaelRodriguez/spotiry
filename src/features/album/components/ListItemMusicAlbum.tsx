import { Divider, ListItem } from '@chakra-ui/react';
import { AuthContext } from '../../../context/AuthContext';
import { IItemsTrack } from '../../../interfaces/tracks.interface';
import { useContext } from 'react';
export const ListItemMusicAlbum = ({ name, preview_url }: IItemsTrack) => {
  const { handleSongUri } = useContext(AuthContext);

  const handlePlay = () => {
    if (preview_url === '') return;
    handleSongUri(preview_url);
  };
  return (
    <>
      <ListItem _hover={{ cursor: 'pointer' }} py={3} onClick={handlePlay}>
        {name}
      </ListItem>
      <Divider variant={'dashed'}  />
    </>
  );
};
