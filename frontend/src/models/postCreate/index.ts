import { combine, createStore, restore } from 'effector'
import { IPost, IPostCreate } from '../../store/ducks/post/actions/IPost'
import { api } from '../auth'
import { AxiosError } from 'axios'

export const $postCreate = createStore<IPostCreate>({
  text: '',
})

export const createPostFx = api.createEffect<IPostCreate, IPost, AxiosError>()

export const $postCreateStore = combine({
  loading: createPostFx.pending,
  error: restore<AxiosError>(createPostFx.failData, null),
  data: $postCreate,
})
