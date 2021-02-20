import { combine, createStore } from 'effector'
import { AxiosError } from 'axios'
import { api } from '../auth'
import { IFullUser } from '../../interfaces/IUser'

export const postUserSignFx = api.createEffect<
  IFullUser,
  IFullUser,
  AxiosError<{ message: string }>
>()

export const $userSign = createStore<boolean>(false)

export const $errorSign = createStore<{ message: string }>({ message: '' })

export const $userSignStore = combine({
  error: $errorSign,
  signSuccessfully: $userSign,
  loading: postUserSignFx.pending,
})
