import { useHistory } from 'react-router-dom';
import { Badge, Button, Center, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import { Item } from '../../../interfaces/';
import { CardMusicImage } from '../../../components/CardMusicImage';

export const CardMusic = ({ name, artists, images, release_date, id }: Item) => {
  const history = useHistory();
  const handlePlayMusic = (id: string) => {
    history.push(`/album/${id}`);
  };
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <CardMusicImage
          key={images[1].url}
          url={images[1].url}
          height={images[1].height}
          width={images[1].width}
        />

        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {/*  */}@{artists[0].name}
          </Text>
          <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
            Realese date: {release_date}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge px={2} py={1} bg={useColorModeValue('gray.300', 'gray.800')} fontWeight={'400'}>
              #art
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.300', 'gray.800')} fontWeight={'400'}>
              #photography
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue('gray.300', 'gray.800')} fontWeight={'400'}>
              #music
            </Badge>
          </Stack>

          <Button
            colorScheme="teal"
            variant={'solid'}
            w={'100%'}
            onClick={() => handlePlayMusic(id)}
          >
            Ver Album
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
