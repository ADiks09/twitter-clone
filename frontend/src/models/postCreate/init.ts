import { $postCreate, createPostFx } from './index'
import { postApiCreate } from '../../services/api/postApi'

createPostFx.use(postApiCreate)

$postCreate.on(createPostFx.doneData, (_, s) => s)
