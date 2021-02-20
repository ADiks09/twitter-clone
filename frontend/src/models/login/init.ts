import { postUserLoginFx } from './index'
import { postUserLoginApi } from '../../services/api/userApi'

postUserLoginFx.use(postUserLoginApi)
