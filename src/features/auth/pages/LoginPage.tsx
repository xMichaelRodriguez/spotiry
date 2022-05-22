import { Flex, Link } from '@chakra-ui/react';

const { VITE_AUTH_ENDPOINT, VITE_CLIENTID, VITE_REDIRECT_URI, VITE_USER_LIBRARY, VITE_PLAYLIST } =
  import.meta.env;

const loginEndPoint = `${VITE_AUTH_ENDPOINT}client_id=${VITE_CLIENTID}&redirect_uri=${VITE_REDIRECT_URI}&scope=${VITE_USER_LIBRARY}%20${VITE_PLAYLIST}&response_type=token&show_dialogg=true`;

export const LoginPage = () => {
  return (
    <Flex h="80vh" w={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Link
        href={loginEndPoint}
        textColor="white"
        p={3}
        bgGradient={'linear(to-l, #7928CA, #FF0080)'}
        borderRadius={10}
      >
        Login with Spotify
      </Link>
    </Flex>
  );
};

export default LoginPage;
