import React from 'react'
import { Box, Container } from '@material-ui/core'
import { SideNav } from './containers/sidenav/SideNav'
import { Home } from './containers/home/Home'
import { SideBanners } from './containers/banners-offer/SideBanners'

export const App = () => {
  return (
    <Container maxWidth={'lg'}>
      <Box display="flex">
        <SideNav />
        <Home headerTitle="Home" posts={[]} />
        <SideBanners />
      </Box>
    </Container>
  )
}
