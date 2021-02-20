import { $postsByUserName, getPostByUserNameFx } from './index'
import { postsByUserName } from '../../services/api/postApi'

getPostByUserNameFx.use(postsByUserName)

$postsByUserName.on(getPostByUserNameFx.doneData, (state, data) => ({
  author: data.author,
  postsTotal: data.postsTotal,
  posts: [...state.posts, ...data.posts],
}))
