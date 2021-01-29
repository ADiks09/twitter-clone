import axios, { AxiosResponse } from 'axios'
import { IFullUser, IUser } from '../../store/ducks/common'
import { API } from './endpoint'

export const userApiLogin = ({ email, password }: IUser) =>
  axios
    .post(API.USER.LOGIN, {
      email,
      password,
    })
    .then((response: AxiosResponse<IFullUser>) => ({
      data: response.data,
    }))
    .catch((error) => ({
      error,
    }))

export const userApiSignIn = (fullUser: IFullUser) =>
  axios
    .post(API.USER.REGISTER, fullUser)
    .then((response: AxiosResponse<IFullUser>) => ({ data: response.data }))
    .catch((error) => ({ error }))
