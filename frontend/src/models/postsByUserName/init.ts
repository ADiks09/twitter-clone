import {
  $postsByUserName,
  getPostByUserNameFx,
  $postByUserNamePosts,
} from './index'
import { postsByUserNameEffector } from '../../services/api/postApi'

getPostByUserNameFx.use(postsByUserNameEffector)

$postsByUserName.on(getPostByUserNameFx.doneData, (state, data) => data)

$postByUserNamePosts.on(getPostByUserNameFx.doneData, (state, { posts }) => [
  ...state,
  ...posts,
])
