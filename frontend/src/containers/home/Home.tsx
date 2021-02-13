import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ScatterPlot } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { IRootReducer } from '../../store/rootReducer'
import { PostContainer } from '../../components/post-container/PostContainer'
import { HomeHeader } from '../../components/home-header/HomeHeader'
import { PostCreator } from './PostCreator'
import { PostSkeleton } from '../../components/post/PostSkeleton'
import { Post } from '../../components/post/Post'
import classes from './home.module.scss'
import { useStore } from 'effector-react'
import {
  $postsByUserNameStore,
  getPostByUserNameFx,
} from '../../models/postsByUserName'

type Props = {
  headerTitle: string,
}

export const Home: FC<Props> = ({ headerTitle }) => {
  const userName = useSelector((state: IRootReducer) => state.profile.user.name)

  const { loading, error, data } = useStore($postsByUserNameStore)

  const [skip, setSkip] = useState(0)
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      if (!userName) return

      await getPostByUserNameFx({
        userName,
        query: {
          skip: skip,
          limit: 10,
        },
      })
    })()
  }, [userName, skip])

  const observer = useRef<IntersectionObserver>(null)

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return

      if (observer.current) observer.current.disconnect()
      // @ts-ignore
      observer.current = new IntersectionObserver(
        ([entries]) => {
          if (!entries.isIntersecting) return

          const totalSkip = skip + 10

          if (totalSkip >= data.postsTotal) {
            setDisabled(true)
            return
          }

          setSkip(totalSkip)
        },
        {
          rootMargin: '20px',
          threshold: 0.2,
        }
      )

      if (node) observer.current.observe(node)
    },
    [data.postsTotal, loading, skip]
  )

  if (error) {
    return <h1>{error}</h1>
  }

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

      {data.posts.map((post, index) => (
        <Post post={post} author={data.author} key={index} />
      ))}

      {loading &&
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
