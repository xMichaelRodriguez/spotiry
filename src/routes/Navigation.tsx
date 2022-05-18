import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import { AuthContext } from '../context/AuthContext';
import { routes } from './route';
import { SideBar } from '../components/Sidebar';

export const Navigation = () => {
  const { handleAuth } = useContext(AuthContext);
  useEffect(() => {
    const _token = localStorage.getItem('token') ?? null;

    const hash = window.location.hash;
    window.location.hash = '';

    if (_token === null && hash) {
      const accessToken = hash.split('=')[1];
      localStorage.setItem('token', accessToken);
      handleAuth(accessToken);
    } else {
      handleAuth(_token);
    }
    
  }, []);
  return (
    <Router>
      <Box>
        <SideBar>
          <Switch>
            {routes.map(({ path, component: Component, exact }) => (
              <Route key={path} path={path} component={() => <Component />} exact={exact} />
            ))}

            <Redirect to={routes[0].path} />
          </Switch>
        </SideBar>
      </Box>
    </Router>
  );
};
