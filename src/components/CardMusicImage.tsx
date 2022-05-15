import { AspectRatio, Flex, Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
  url: string;
  height?: number;
  width?: number;
}

export const CardMusicImage = ({ url, height, width }: Props) => {
  return (
    <Flex flex={1} bg="blue.200" >
      <Image objectFit="cover" boxSize="100%" src={url} alt={url} />
    </Flex>
  );
};
