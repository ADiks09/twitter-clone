import axios, { AxiosResponse } from 'axios'
import { API } from './endpoint'
import { IFullUser } from '../../store/ducks/common'

export const profileApiUser = () =>
  axios
    .get(API.PROFILE.USER)
    .then((response: AxiosResponse<{ user: IFullUser }>) => ({
      data: response.data.user,
    }))
    .catch((error) => ({ error }))

export const getProfileUserApi = () =>
  axios
    .get(API.PROFILE.USER)
    .then((res: AxiosResponse<{ user: IFullUser }>) => res.data.user)
