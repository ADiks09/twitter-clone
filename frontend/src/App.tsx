import React, { FC, lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { AuthPageWrapper } from './containers/auth/AuthPageWrapper'
import CircularProgress from '@material-ui/core/CircularProgress'

const Home = lazy(() => import('./pages/home/HomePage'))
const Sign = lazy(() => import('./pages/sign/Sign'))
const Login = lazy(() => import('./pages/login/Login'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/sign" exact>
            <AuthPageWrapper title="Sign to Twitter">
              <Sign />
            </AuthPageWrapper>
          </Route>
          <Route path="/login" exact>
            <AuthPageWrapper title="Log in to Twitter">
              <Login />
            </AuthPageWrapper>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
