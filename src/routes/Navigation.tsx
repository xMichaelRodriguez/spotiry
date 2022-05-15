import { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';

import { AuthContext } from '../context/AuthContext';
import { routes } from './route';
import { SideBar } from '../components/Sidebar';

export const Navigation = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  useEffect(() => {
    const _token = localStorage.getItem('token') || null;
    const hash = window.location.hash;
    window.location.hash = '';

    if (!!_token && hash) {
      const accessToken = hash.split('=')[1];
      localStorage.setItem('token', accessToken);
      handleAuth(accessToken);
    } else {
      handleAuth(_token);
    }
  }, []);
  return (
    <div>
      <Router>
        <Box>
          <SideBar>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} component={() => <Component />} exact />
              ))}

              <Redirect to={routes[0].path} />
            </Switch>
          </SideBar>
        </Box>
      </Router>
    </div>
  );
};
