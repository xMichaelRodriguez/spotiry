import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { CardMusicImage } from '../../../components/CardMusicImage';
import { ListMusicAlbum } from '../components/ListMusicAlbum';
import { Reproductor } from '../../../components/Reproductor';
import { IMusicAlbum } from '../../../interfaces/';
interface IProps {
  album: IMusicAlbum | undefined;
  history: () => void;
}

export default function ALbumView({ album, history }: IProps) {
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
            <Button variant="solid" onClick={() => history()}>
              Volver
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
