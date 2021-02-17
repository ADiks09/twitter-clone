import axios, { AxiosResponse } from 'axios'
import { IFullUser, IUser } from '../../store/ducks/common'
import { API } from './endpoint'

export const postUserLoginApi = ({ email, password }: IUser) =>
  axios
    .post(API.USER.LOGIN, {
      email,
      password,
    })
    .then((response: AxiosResponse<{ user: IFullUser }>) => response.data.user)

export const userApiSignIn = (fullUser: IFullUser) =>
  axios
    .post(API.USER.REGISTER, fullUser)
    .then((response: AxiosResponse<{ user: IFullUser }>) => response.data.user)
