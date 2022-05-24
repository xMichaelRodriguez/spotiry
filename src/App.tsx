import { AuthProvider } from './context/AuthProvider';
import { Navigation } from './routes/Navigation';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
