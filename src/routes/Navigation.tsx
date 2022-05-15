import { Suspense, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import logo from '../logo.svg'

import { routes } from './route'

export const Navigation = () => {
  const { auth, handleAuth } = useContext(AuthContext)
  useEffect(() => {
    const _token = localStorage.getItem('token') || null
    const hash = window.location.hash
    window.location.hash = ''

    if (!!_token && hash) {
      const accessToken = hash.split('=')[1]
      localStorage.setItem('token', accessToken)
      handleAuth(accessToken)
    } else {
      handleAuth(_token)
    }
  }, [])
  return (
    <div>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React Logo" />
              <ul>
                {routes.map(({ path, name }) => (
                  <li key={path}>
                    <NavLink to={path} activeClassName="nav-active" exact>
                      {name}- {path}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} component={() => <Component />} exact />
              ))}

              <Redirect to={routes[0].path} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  )
}
