import React, { useState } from 'react'
import { UniversalDialog } from '../../services/components/Dialog'
import { Box, Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { SideBanners } from '../../containers/banners-offer/SideBanners'
import { SideNav } from '../../containers/sidenav/SideNav'
import { Home } from '../../containers/home/Home'
import { useSelector } from 'react-redux'
import { IRootReducer } from '../../store/rootReducer'

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
  const [redirect, setRedirect] = useState(false)

  const user = useSelector((state: IRootReducer) => state.auth.appUser)

  return (
    <>
      <UniversalDialog
        open={redirect}
        content="Click the button to go to the authorization page for further
                  use of the Twitter Clone service"
        title="You are not authorized"
      >
        <Button color="primary">
          <Link onClick={() => setRedirect(false)} to="/login">
            To login
          </Link>
        </Button>
      </UniversalDialog>
      <Container maxWidth={'lg'}>
        <Box display="flex">
          <SideNav firstName={user.firstName} tag={user.name} />
          <Home headerTitle="Home" posts={posts} />
          <SideBanners />
        </Box>
      </Container>
    </>
  )
}
