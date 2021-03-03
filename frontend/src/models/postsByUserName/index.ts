import { combine, createEvent, createStore, restore } from 'effector'
import { api } from '../auth'
import {
  IPostByUserNameCollection,
  IPostFetchCollectionPayload,
} from '../../interfaces/IPost'

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

export const $skip = createStore<number>(0)

export const getPostByUserNameFx = api.createEffect<
  IPostFetchCollectionPayload,
  IPostByUserNameCollection,
  Error
>()

export const setSkip = createEvent<number>()

export const $postsByUserNameStore = combine({
  loading: getPostByUserNameFx.pending,
  error: restore<Error>(getPostByUserNameFx.failData, null),
  data: $postsByUserName,
  skip: $skip,
})
