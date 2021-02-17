import { combine, createStore, restore } from 'effector'
import { IFullUser } from '../../store/ducks/common'
import { AxiosError } from 'axios'
import { api } from '../auth'

export const postUserSignFx = api.createEffect<
  IFullUser,
  IFullUser,
  AxiosError
>()

export const $userSignData = createStore<IFullUser>({
  birthday: new Date(),
  email: '',
  firstName: '',
  lastName: '',
  name: '',
  password: '',
  phone: '',
})

export const $userSignStore = combine({
  error: restore<AxiosError>(postUserSignFx.failData, null),
  user: $userSignData,
  loading: postUserSignFx.pending,
})
