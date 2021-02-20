import axios, { AxiosResponse } from 'axios'
import { API } from './endpoint'
import { IFullUser, IUser } from '../../interfaces/IUser'

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
