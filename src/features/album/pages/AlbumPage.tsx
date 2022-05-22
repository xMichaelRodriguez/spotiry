import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { CardMusicImage } from '../../../components/CardMusicImage';
import { ListMusicAlbum } from '../components/ListMusicAlbum';
import { Reproductor } from '../../../components/Reproductor';
import { AuthContext } from '../../../context/AuthContext';
import { baseUrl } from '../../../lib/baseUrl';
import { helpHttp } from '../../../lib/helpHttp';
import { Image, Artist, ITrack } from '../../../interfaces/interfaces';
interface IMusicAlbum {
  id: string;
  artists: Artist[];
  images: Image[];
  name: string;
  tracks: ITrack;
}

export const AlbumPage = () => {
  const { id } = useParams<{ id: string }>();
  const { auth } = useContext(AuthContext);
  const [album, setAlbum] = useState<IMusicAlbum>();
  const history = useHistory();
  useEffect(() => {
    async function getAlbums() {
      const options = {
        headers: {
          Authorization: `Bearer  ${auth}`,
        },
      };

      const albums = await helpHttp().get({ endPoint: `${baseUrl}albums/${id}`, options });
      setAlbum(albums);
    }
    getAlbums();
  }, [id]);

  return (
    <Center py={6}>
      <Box
        p={4}
        display={{ lg: 'flex' }}
        bg={useColorModeValue('white', 'gray.900')}
        borderRadius="2xl"
        boxShadow={'2xl'}
      >
        <Box flexShrink={0}>
          {album?.images[0].url !== undefined && (
            <CardMusicImage url={album?.images[0]?.url} width={300} height={300} />
          )}
        </Box>

        <Stack
          flex={1}
          flexDirection={'column'}
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {album?.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {album?.artists[0].name}
          </Text>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
            w={'100%'}
          >
            <VStack
              justify={'center'}
              direction={'row'}
              mb={6}
              maxHeight={160}
              w={'100%'}
              overflowY="auto"
            >
              {album?.tracks && <ListMusicAlbum {...album?.tracks} />}
            </VStack>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={4} mb={3}>
              <Reproductor />
            </Stack>
          </Stack>
          <Stack>
            <Button variant="solid" onClick={() => history.goBack()}>
              Volver
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default AlbumPage;