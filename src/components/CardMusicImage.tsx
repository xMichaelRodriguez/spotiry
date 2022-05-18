import { AspectRatio, Flex, Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
  url: string;
  height?: number;
  width?: number;
}

export const CardMusicImage = ({ url, height, width }: Props) => {
  return (
    <Flex flex={1}  h={height} w={width}>
      <Image objectFit="cover" boxSize="100%"  src={url} alt={url} 
      h={height} w={width}
      />
    </Flex>
  );
};
