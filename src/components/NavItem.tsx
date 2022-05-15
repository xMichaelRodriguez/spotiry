import { Flex, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
interface IProps {
  name: string;
  path: string;
  icon: IconType | undefined;
}
export const NavItem = ({ name, path, icon, ...rest }: IProps) => {
  return (
    <NavLink key={name} to={path}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}

        {name}
      </Flex>
    </NavLink>
  );
};
