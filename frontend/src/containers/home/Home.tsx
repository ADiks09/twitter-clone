import React, { FC, useEffect, useState } from 'react'
import { ScatterPlot } from '@material-ui/icons'
import { Button } from '@material-ui/core'
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
import { useScrollObserver } from '../../services/hooks/useScrollObserver.hook'
import { $profile } from '../../models/profile'

type Props = {
  headerTitle: string,
}

export const Home: FC<Props> = ({ headerTitle }) => {
  const { name } = useStore($profile)

  const { loading, error, data } = useStore($postsByUserNameStore)

  const [skip, setSkip] = useState(0)
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      if (!name) return

      await getPostByUserNameFx({
        userName: name,
        query: {
          skip: skip,
          limit: 10,
        },
      })
    })()
  }, [name, skip])

  const elemObserver = useScrollObserver(() => {
    const totalSkip = skip + 10

    if (totalSkip >= data.postsTotal) {
      setDisabled(true)
      return
    }

    setSkip(totalSkip)
  }, loading)

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
        ref={elemObserver}
      >
        {disabled ? 'Your posts collection has empty' : 'Load more...'}
      </Button>
    </div>
  )
}
