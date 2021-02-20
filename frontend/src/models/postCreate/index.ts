import { combine, createEvent, createStore, restore } from 'effector'
import { api } from '../auth'
import { AxiosError } from 'axios'
import { IPostCreate } from '../../interfaces/IPost'

interface ISuccessfully {
  message: string
  isSuccess: boolean
}

export const $postSuccessfullyCreate = createStore<ISuccessfully>({
  message: '',
  isSuccess: false
})

export const resetSuccessfullyCreate = createEvent()

export const createPostFx = api.createEffect<
  IPostCreate,
  { message: string },
  AxiosError
>()

export const $postCreateStore = combine({
  loading: createPostFx.pending,
  error: restore<AxiosError>(createPostFx.failData, null),
  successfully: $postSuccessfullyCreate,
})
