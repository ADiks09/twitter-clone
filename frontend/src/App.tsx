import React, { FC } from 'react'
import { Box, Container } from '@material-ui/core'
import { SideNav } from './containers/sidenav/SideNav'
import { Home } from './containers/home/Home'
import { SideBanners } from './containers/banners-offer/SideBanners'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { LogInForm } from './containers/login/Login'

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

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          <Container maxWidth={'lg'}>
            <Box display="flex">
              <SideNav />
              <Home headerTitle="Home" posts={posts} />
              <SideBanners />
            </Box>
          </Container>
        </Route>
        <Route path="/sign" exact></Route>
        <Route path="/login" exact>
          <LogInForm />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
