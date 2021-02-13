import { $postsByUserName, getPostByUserNameFx } from './index'
import { postsByUserNameEffector } from '../../services/api/postApi'

getPostByUserNameFx.use(postsByUserNameEffector)

$postsByUserName.on(getPostByUserNameFx.doneData, (state, data) => ({
  author: data.author,
  postsTotal: data.postsTotal,
  posts: [...state.posts, ...data.posts],
}))
