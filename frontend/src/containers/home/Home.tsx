import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScatterPlot } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { postFetchCollectionAction } from '../../store/ducks/post/actions/action'
import { IRootReducer } from '../../store/rootReducer'
import { PostContainer } from '../../components/post-container/PostContainer'
import { HomeHeader } from '../../components/home-header/HomeHeader'
import { PostCreator } from './PostCreator'
import { LoadingStatus } from '../../store/ducks/common'
import { PostSkeleton } from '../../components/post/PostSkeleton'
import { Post } from '../../components/post/Post'
import classes from './home.module.scss'

type Props = {
  headerTitle: string,
}

export const Home: FC<Props> = ({ headerTitle }) => {
  const dispatch = useDispatch()

  const userName = useSelector((state: IRootReducer) => state.profile.user.name)
  const posts = useSelector((state: IRootReducer) => state.post.posts)

  const [skip, setSkip] = useState(0)
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      if (!userName) return

      await dispatch(
        postFetchCollectionAction({
          userName,
          query: {
            skip: skip,
            limit: 10,
          },
        })
      )
    })()
  }, [dispatch, userName, skip])

  const observer = useRef<IntersectionObserver>(null)

  const lastElementRef = useCallback(
    (node) => {
      if (posts.loading === LoadingStatus.LOADING) return

      if (observer.current) observer.current.disconnect()

      // @ts-ignore
      observer.current = new IntersectionObserver(([entries]) => {
        if (entries.isIntersecting) {
          const totalSkip = skip + 10

          if (totalSkip >= posts.data.postsTotal) {
            setDisabled(true)
            return
          }

          setSkip(totalSkip)
        }
      })

      if (node) observer.current.observe(node)
    },
    [posts.data.postsTotal, posts.loading, skip]
  )

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

      {posts.data.posts.map((data, index) => (
        <Post post={data} author={posts.data.author} key={index} />
      ))}

      {posts.loading === LoadingStatus.LOADING &&
        Array.from(new Array(10)).map((_, i) => <PostSkeleton key={i} />)}

      <Button
        disabled={disabled}
        fullWidth
        variant="outlined"
        color="primary"
        ref={lastElementRef}
      >
        {disabled ? 'Your posts collection has empty' : 'Load more...'}
      </Button>
    </div>
  )
}
