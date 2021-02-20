import axios from 'axios'
import { API } from './endpoint'
import {
  IPostByUserNameCollection,
  IPostCreate,
  IPostFetchCollectionPayload,
} from '../../interfaces/IPost'

export const postsByUserName = ({
  userName,
  query,
}: IPostFetchCollectionPayload): Promise<IPostByUserNameCollection> => {
  const url = `${API.POST.GET_COLLECTION_BY_USER_NAME}/${userName}`
  const params = `?limit=${query.limit}&skip=${query.skip}`
  return axios.get(url + params).then((res) => res.data)
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
    .then((response) => response.data)
}
