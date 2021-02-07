import { combine, createEffect, createStore, restore } from 'effector'
import {
  IPost,
  IPostAuthor,
  IPostByUserNameCollection,
  IPostFetchCollectionPayload,
} from '../../store/ducks/post/actions/IPost'

export const $author = createStore<IPostAuthor>({
  avatarUrl: '',
  firstName: '',
  lastName: '',
  userName: '',
})

export const $total = createStore<number>(0)

export const $posts = createStore<IPost[]>([])

export const getPostByUserNameFx = createEffect<
  IPostFetchCollectionPayload,
  IPostByUserNameCollection,
  Error
>()

export const $postsByUserNameStore = combine({
  loading: getPostByUserNameFx.pending,
  error: restore<Error>(getPostByUserNameFx.failData, null),
  author: $author,
  posts: $posts,
  total: $total,
})
