import axios, { AxiosResponse } from 'axios'
import {
  IPostByUserNameCollection,
  IPostCreate,
  IPostFetchCollectionPayload,
  IPostSetCreateSuccessfulAction,
} from '../../store/ducks/post/actions/IPost'
import { API } from './endpoint'

export const postsByUserName = ({
  userName,
  query,
}: IPostFetchCollectionPayload) => {
  const url = `${API.POST.GET_COLLECTION_BY_USER_NAME}/${userName}`
  const params = `?limit=${query.limit}&skip=${query.skip}`
  return axios
    .get(url + params)
    .then((response: AxiosResponse<IPostByUserNameCollection>) => ({
      data: response.data,
    }))
    .catch((error) => ({ error }))
}

export const postApiCreate = ({ text, file }: IPostCreate) => {
  const formData = new FormData()

  if (file) formData.append('file', file)
  formData.append('text', text)

  return axios
    .post(API.POST.CREATE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response: AxiosResponse<IPostSetCreateSuccessfulAction>) => ({
      data: response.data,
    }))
    .catch((error) => ({ error }))
}
