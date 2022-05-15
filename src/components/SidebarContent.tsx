import { Box, BoxProps, CloseButton, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { routes } from '../routes/route';
import { NavItem } from './NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.900')}
    borderRight="1px"
    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    {routes.map(({ path, name, icon }) => (
      <NavItem key={name} name={name} path={path} icon={icon} />
    ))}
  </Box>
);
