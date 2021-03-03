import React, { useEffect, useState } from 'react'
import { UniversalDialog } from '../../services/components/Dialog'
import { Box, Button, Container, useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { SideBanners } from '../../containers/banners-offer/SideBanners'
import { SideNav } from '../../containers/sidenav/SideNav'
import { Home } from '../../containers/home/Home'
import { screenTablet } from '../../services/material/mediaQuery'
import { useStore } from 'effector-react'
import { $profile, getUserProfileFx } from '../../models/profile'
import { $authError } from '../../models/auth'

const HomePage = () => {
  const [isRedirectToLogin, setIsRedirectToLogin] = useState(false)

  const matches = useMediaQuery(screenTablet())

  const profile = useStore($profile)
  const auth = useStore($authError)

  useEffect(() => {
    if (!auth) return
    setIsRedirectToLogin(true)
  }, [auth])

  useEffect(() => {
    ;(async () => await getUserProfileFx())()
  }, [])

  return (
    <>
      <UniversalDialog
        open={isRedirectToLogin}
        content="Click the button to go to the authorization page for further
                  use of the Twitter Clone service"
        title="You are not authorized"
      >
        <Button color="primary">
          <Link onClick={() => setIsRedirectToLogin(false)} to="/login">
            To login
          </Link>
        </Button>
      </UniversalDialog>
      <Container maxWidth={'lg'}>
        <Box display="flex">
          <SideNav firstName={profile.firstName} tag={profile.name} />
          <Home />
          {matches && <SideBanners />}
        </Box>
      </Container>
    </>
  )
}

export default HomePage
