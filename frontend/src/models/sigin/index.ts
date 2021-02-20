import { combine, createStore } from 'effector'
import { IFullUser } from '../../store/ducks/common'
import { AxiosError } from 'axios'
import { api } from '../auth'

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
