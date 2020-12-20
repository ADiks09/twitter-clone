import { IPost, IPostCreateAction } from './IPost'
import { PostTypes } from './postTypes'

export const postRequestCreateAction = (payload: IPost): IPostCreateAction => ({
  type: PostTypes.CREATE,
  payload,
})
