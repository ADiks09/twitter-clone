import React from 'react'
import { Container } from '@material-ui/core'
import { SideNav } from './containers/sidenav/SideNav'

export const App = () => {
  return (
    <Container maxWidth={'lg'}>
      <SideNav />
    </Container>
  )
}
