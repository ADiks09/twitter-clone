import React, { useEffect, useState } from 'react'
import { UniversalDialog } from '../../services/components/Dialog'
import { Box, Button, Container, useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { SideBanners } from '../../containers/banners-offer/SideBanners'
import { SideNav } from '../../containers/sidenav/SideNav'
import { Home } from '../../containers/home/Home'
import { useDispatch, useSelector } from 'react-redux'
import { IRootReducer } from '../../store/rootReducer'
import { profileFetchData } from '../../store/ducks/profile/actions/action'
import { screenTablet } from '../../services/material/mediaQuery'

export const HomePage = () => {
  const [isRedirectToLogin, setIsRedirectToLogin] = useState(false)

  const matches = useMediaQuery(screenTablet())

  const user = useSelector((state: IRootReducer) => state.profile)
  const authStore = useSelector((state: IRootReducer) => state.authorized.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      await dispatch(profileFetchData())
    })()
  }, [dispatch])

  useEffect(() => {
    setIsRedirectToLogin(!authStore)
  }, [authStore])

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
          <SideNav firstName={user.user.firstName} tag={user.user.name} />
          <Home headerTitle="Home" />
          {matches && <SideBanners />}
        </Box>
      </Container>
    </>
  )
}
