import { ChakraProps, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: ChakraProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: ChakraProps) => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
