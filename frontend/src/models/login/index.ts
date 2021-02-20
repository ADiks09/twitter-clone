import { combine, restore } from 'effector'
import { AxiosError } from 'axios'
import { IFullUser, IUser } from '../../interfaces/IUser'
import { api } from '../auth'

export const postUserLoginFx = api.createEffect<IUser, IFullUser, AxiosError>()

export const $userLoginStore = combine({
  error: restore<AxiosError>(postUserLoginFx.failData, null),
  loading: postUserLoginFx.pending,
})
