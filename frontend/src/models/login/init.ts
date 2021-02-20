import { $userLoginData, $userLoginStore, postUserLoginFx } from './index'
import { postUserLoginApi } from '../../services/api/userApi'

postUserLoginFx.use(postUserLoginApi)

$userLoginData.on(postUserLoginFx.doneData, (_, data) => data)
