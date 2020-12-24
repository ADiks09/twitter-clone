import React, { FC, useEffect } from 'react'
import { ScatterPlot } from '@material-ui/icons'
import classes from './home.module.scss'
import { HomeHeader } from '../../components/home-header/HomeHeader'
import { PostCreator } from './PostCreator'
import { Posts } from '../../components/post/Posts'
import { PostContainer } from '../../components/post-container/PostContainer'
import { useDispatch, useSelector } from 'react-redux'
import { postFetchCollectionAction } from '../../store/ducks/post/actions/action'
import { IRootReducer } from '../../store/rootReducer'

type Props = {
  headerTitle: string,
}

export const Home: FC<Props> = ({ headerTitle }) => {
  const dispatch = useDispatch()

  const userName = useSelector((state: IRootReducer) => state.profile.user.name)
  const posts = useSelector((state: IRootReducer) => state.post.posts.data)

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

      <div className={classes.emptyBox}></div>

      {
        // <h2>You don't have posts</h2> ||
        posts.map((data, index) => (
          <Posts {...data} key={index} />
        ))
      }
    </div>
  )
}
