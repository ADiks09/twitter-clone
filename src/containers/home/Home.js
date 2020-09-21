import React from 'react'
import { ScatterPlot } from '@material-ui/icons'
import classes from './home.module.scss'
import { HomeHeader } from '../../components/HomeHeader/HomeHeader'
import { PostCreator } from './PostCreator'
import { Posts } from '../../components/Post/Posts'
import { PostContainer } from '../../components/PostContainer/PostContainer'

export const Home = ({ headerTitle, posts }) => {
  return (
    <div className={classes.home}>
      <HomeHeader
        icon={<ScatterPlot color="primary" fontSize={'small'} />}
        title={headerTitle}
      />
      {/*TODO: fix problems with scroll*/}
      <div className={classes.scrollContainer}>
        <div className={classes.wrapper}>
          <PostContainer>
            <PostCreator />
          </PostContainer>
        </div>

        <div className={classes.emptyBox}> </div>

        {<h2>You don't have posts</h2> ||
          posts.map((data, index) => <Posts {...data} key={index} />)}
      </div>
    </div>
  )
}
