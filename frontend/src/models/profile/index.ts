import { combine, createStore } from 'effector'
import { IFullUser } from '../../store/ducks/common'
import { api } from '../auth'
import { AxiosError } from 'axios'

export const $profile = createStore<IFullUser>({
  birthday: new Date(),
  email: '',
  firstName: '',
  lastName: '',
  name: '',
  password: '',
  phone: '',
})

export const getUserProfileFx = api.createEffect<void, IFullUser, AxiosError>()

export const $profileStore = combine({
  profile: $profile,
  loading: getUserProfileFx.pending,
  error: getUserProfileFx.failData,
})
