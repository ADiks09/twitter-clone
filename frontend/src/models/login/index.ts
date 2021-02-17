import { combine, createStore, restore } from 'effector'
import { IFullUser, IUser } from '../../store/ducks/common'
import { AxiosError } from 'axios'
import { api } from '../auth'

export const postUserLoginFx = api.createEffect<IUser, IFullUser, AxiosError>()

export const $userLoginData = createStore<IFullUser>({
  birthday: new Date(),
  email: '',
  firstName: '',
  lastName: '',
  name: '',
  password: '',
  phone: '',
})

export const $userLoginStore = combine({
  error: restore<AxiosError>(postUserLoginFx.failData, null),
  user: $userLoginData,
  loading: postUserLoginFx.pending,
})