import React, { FC } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { AuthPageWrapper } from './containers/auth/AuthPageWrapper'
import { LogInForm } from './pages/login/Login'
import { HomePage } from './pages/home/HomePage'
import { Sign } from './pages/sign/Sign'
import { Grid } from '@material-ui/core'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/sign" exact>
          <AuthPageWrapper title="Sign to Twitter">
            <Sign />
          </AuthPageWrapper>
        </Route>
        <Route path="/login" exact>
          <AuthPageWrapper title="Log in to Twitter">
            <LogInForm />
          </AuthPageWrapper>
        </Route>
        {/* todo replace on component not found page*/}
        <Route>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h1>404 Not Found</h1>
          </Grid>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
