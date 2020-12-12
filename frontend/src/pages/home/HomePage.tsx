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
//TODO: remove data and image pre-deploy
const posts = [
  {
    avatar: './bg.jpg',
    userName: 'TwitterOfficial',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at aut mollitia quis quisquam quod voluptas? Adipisci autem distinctio error expedita ipsum obcaecati quod ullam. Dolor dolorem doloremque soluta? Ea? Adipisci autem distinctio error expedita ipsum obcaecati quod ullam. Dolor dolorem doloremque soluta? Ea? asdsad dsad',
    imgUrl: './bg.jpg',
    userTag: '@antondikson',
    time: '39 min',
  },
  {
    avatar: './contBcg-3.jpeg',
    userName: 'Tоликмашина',
    text: 'Эма машина делает бРРррр',
    imgUrl: './contBcg-1.jpeg',
    userTag: '@antondikson',
    time: '39 min',
  },
  {
    avatar: './contBcg-1.jpeg',
    userName: 'TwitterOfficial',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at aut mollitia quis quisquam quod voluptas? Adipisci autem distinctio error expedita ipsum obcaecati quod ullam. Dolor dolorem doloremque soluta? Ea? Adipisci autem distinctio error expedita ipsum obcaecati quod ullam. Dolor dolorem doloremque soluta? Ea? asdsad dsad',
  },
  {
    avatar: 'product-2.png',
    text: 'Если волк думает, значит у него есть мозги!!!',
  },
  {
    userName: 'Дима',
    text: 'Это топ мебель за 100 долларов россикйскиз сша рублей купи стул',
    imgUrl: './slider-img.png',
    avatar: 'slider-img.png',
  },
  {
    avatar: './bg.jpg',
    text:
      'Невероятный пейзаж Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda cupiditate delectus enim expedita explicabo harum illo inventore magnam molestias quas, quasi quos repellat repellendus soluta suscipit, voluptate! Ipsa, ut?',
    imgUrl: './bg.jpg',
  },
]

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
          <Home headerTitle="Home" posts={posts} />
          {matches && <SideBanners />}
        </Box>
      </Container>
    </>
  )
}
