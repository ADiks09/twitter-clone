import React, { FC } from 'react'
import { ScatterPlot } from '@material-ui/icons'
import { PostContainer } from '../../components/post-container/PostContainer'
import { HomeHeader } from '../../components/home-header/HomeHeader'
import { PostCreator } from '../post-block/PostCreator'
import { PostsBlock } from '../post-block/PostsBlock'
import classes from './home.module.scss'

export const Home: FC = () => {
  return (
    <div className={classes.home}>
      <HomeHeader
        icon={<ScatterPlot color="primary" fontSize={'small'} />}
        title={'Home'}
      />
      <div className={classes.wrapper}>
        <PostContainer imgSrc="none">
          <PostCreator />
        </PostContainer>
      </div>
      <div className={classes.emptyBox} />
      <PostsBlock />
    </div>
  )
}
