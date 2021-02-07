import { $author, $posts, $total, getPostByUserNameFx } from './index'
import { postsByUserNameEffector } from '../../services/api/postApi'

getPostByUserNameFx.use(postsByUserNameEffector)

$total.on(getPostByUserNameFx.doneData, (_, { postsTotal }) => postsTotal)

$author.on(getPostByUserNameFx.doneData, (_, { author }) => author)

$posts.on(getPostByUserNameFx.doneData, (s, { posts }) => [...s, ...posts])
