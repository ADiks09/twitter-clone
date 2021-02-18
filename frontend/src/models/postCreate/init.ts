import {
  $postSuccessfullyCreate,
  createPostFx,
  resetSuccessfullyCreate,
} from './index'
import { postApiCreate } from '../../services/api/postApi'

createPostFx.use(postApiCreate)

$postSuccessfullyCreate.on(createPostFx.doneData, (_, s) => ({
  ...s,
  isSuccess: true,
}))

$postSuccessfullyCreate.reset(resetSuccessfullyCreate)
