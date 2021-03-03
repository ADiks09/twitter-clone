import { $postsByUserName, $skip, getPostByUserNameFx, setSkip } from './index'
import { postsByUserName } from '../../services/api/postApi'

getPostByUserNameFx.use(postsByUserName)

$skip.on(setSkip, (s, p) => s + p)

$postsByUserName.on(getPostByUserNameFx.doneData, (state, data) => ({
  author: data.author,
  postsTotal: data.postsTotal,
  posts: [...state.posts, ...data.posts],
}))
