import { combine, createEffect, createStore, restore } from 'effector'
import {
  IPostByUserNameCollection,
  IPostFetchCollectionPayload,
} from '../../store/ducks/post/actions/IPost'

export const $postsByUserName = createStore<IPostByUserNameCollection>({
  author: {
    avatarUrl: '',
    firstName: '',
    lastName: '',
    userName: '',
  },
  posts: [],
  postsTotal: 0,
})

export const getPostByUserNameFx = createEffect<
  IPostFetchCollectionPayload,
  IPostByUserNameCollection,
  Error
>()

export const $postsByUserNameStore = combine({
  loading: getPostByUserNameFx.pending,
  error: restore<Error>(getPostByUserNameFx.failData, null),
  data: $postsByUserName,
})
