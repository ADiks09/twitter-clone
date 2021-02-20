import { combine, restore } from 'effector'
import { IFullUser, IUser } from '../../store/ducks/common'
import { AxiosError } from 'axios'
import { api } from '../auth'

export const postUserLoginFx = api.createEffect<IUser, IFullUser, AxiosError>()

export const $userLoginStore = combine({
  error: restore<AxiosError>(postUserLoginFx.failData, null),
  loading: postUserLoginFx.pending,
})
