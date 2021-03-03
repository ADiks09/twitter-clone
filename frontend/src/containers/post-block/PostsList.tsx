import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $profile } from '../../models/profile'
import {
  $postsByUserNameStore,
  getPostByUserNameFx,
} from '../../models/postsByUserName'
import { Post } from '../../components/post/Post'

export const PostsList = () => {
  const { name } = useStore($profile)
  const { error, data, skip } = useStore($postsByUserNameStore)

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

  if (error) {
    console.log('home something error: ', error)
  }

  return (
    <>
      {data.posts.map((post, index) => (
        <Post post={post} author={data.author} key={index} />
      ))}
    </>
  )
}
