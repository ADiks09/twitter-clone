import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScatterPlot } from '@material-ui/icons'
import { postFetchCollectionAction } from '../../store/ducks/post/actions/action'
import { IRootReducer } from '../../store/rootReducer'
import { PostContainer } from '../../components/post-container/PostContainer'
import { HomeHeader } from '../../components/home-header/HomeHeader'
import { Post } from '../../components/post/Post'
import { PostCreator } from './PostCreator'
import classes from './home.module.scss'
import { LoadingStatus } from '../../store/ducks/common'

type Props = {
  headerTitle: string,
}

export const Home: FC<Props> = ({ headerTitle }) => {
  const dispatch = useDispatch()

  const userName = useSelector((state: IRootReducer) => state.profile.user.name)
  const posts = useSelector((state: IRootReducer) => state.post.posts)

  useEffect(() => {
    ;(async () => {
      if (userName) await dispatch(postFetchCollectionAction({ userName }))
    })()
  }, [dispatch, userName])

  return (
    <div className={classes.home}>
      <HomeHeader
        icon={<ScatterPlot color="primary" fontSize={'small'} />}
        title={headerTitle}
      />
      <div className={classes.wrapper}>
        <PostContainer imgSrc="none">
          <PostCreator />
        </PostContainer>
      </div>

      <div className={classes.emptyBox} />

      {posts.loading === LoadingStatus.LOADING
        ? Array.from(new Array(10)).map((data, index) => (
            <Post {...data} key={index} loading />
          ))
        : posts.data.posts.map((data, index) => (
            <Post
              post={data}
              author={posts.data.author}
              key={index}
              loading={false}
            />
          ))}
    </div>
  )
}
