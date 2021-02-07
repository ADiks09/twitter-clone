import { combine, createEffect, createStore, restore } from 'effector'
import {
  IPost,
  IPostByUserNameCollection,
  IPostFetchCollectionPayload,
} from '../../store/ducks/post/actions/IPost'

export const $postsByUserName = createStore<
  Omit<IPostByUserNameCollection, 'posts'>
>({
  author: {
    lastName: '',
    firstName: '',
    avatarUrl: '',
    userName: '',
  },
  postsTotal: 0,
})

export const $postByUserNamePosts = createStore<IPost[]>([])

export const getPostByUserNameFx = createEffect<
  IPostFetchCollectionPayload,
  IPostByUserNameCollection,
  Error
>()

export const $postsByUserNameStore = combine({
  loading: getPostByUserNameFx.pending,
  data: $postsByUserName,
  posts: $postByUserNamePosts,
  error: restore<Error>(getPostByUserNameFx.failData, null),
})
