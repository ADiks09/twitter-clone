import React, { FC } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { AuthPageWrapper } from './containers/auth/AuthPageWrapper'
import { LogInForm } from './pages/login/Login'
import { Sign } from './pages/sign/Sign'
import { HomePage } from './pages/home/HomePage'

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
      </Switch>
    </BrowserRouter>
  )
}
