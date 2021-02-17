import { $userSignData, postUserSignFx } from './index'
import { userApiSignIn } from '../../services/api/userApi'

postUserSignFx.use(userApiSignIn)

$userSignData.on(postUserSignFx.doneData, (_, data) => data)
