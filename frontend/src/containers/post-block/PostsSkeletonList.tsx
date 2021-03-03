import React from 'react'
import { useStore } from 'effector-react'
import { $postsByUserNameStore } from '../../models/postsByUserName'
import { PostSkeleton } from '../../components/post/PostSkeleton'

export const PostsSkeletonList = () => {
  const { loading } = useStore($postsByUserNameStore)

  return (
    <>
      {loading &&
        Array.from(new Array(10)).map((_, i) => <PostSkeleton key={i} />)}
    </>
  )
}
