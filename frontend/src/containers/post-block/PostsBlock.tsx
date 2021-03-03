import React from 'react'
import { Button } from '@material-ui/core'
import { useStore } from 'effector-react'
import { $postsByUserNameStore, setSkip } from '../../models/postsByUserName'
import { useScrollObserver } from '../../services/hooks/useScrollObserver.hook'
import { PostsSkeletonList } from './PostsSkeletonList'
import { PostsList } from './PostsList'

export const PostsBlock = () => {
  const { loading, data, skip } = useStore($postsByUserNameStore)

  const elemObserver = useScrollObserver(() => {
    const totalSkip = skip + 10

    if (totalSkip >= data.postsTotal) {
      return
    }

    setSkip(totalSkip)
  }, loading)

  return (
    <>
      <PostsList />

      <PostsSkeletonList />

      <Button fullWidth variant="outlined" color="primary" ref={elemObserver}>
        Load more
      </Button>
    </>
  )
}
