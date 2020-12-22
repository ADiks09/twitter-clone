import {
  IPost,
  IPostCreateAction,
  // IPostCreated,
  // IPostCreatedAction,
} from './IPost'
import { PostTypes } from './postTypes'

export const postRequestCreateAction = (payload: IPost): IPostCreateAction => ({
  type: PostTypes.CREATE,
  payload,
})

// export const postCreatedAction = (
//   payload: IPostCreated
// ): IPostCreatedAction => ({
//   type: PostTypes.CREATED,
//   payload,
// })
