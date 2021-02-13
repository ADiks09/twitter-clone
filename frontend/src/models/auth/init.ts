import { guard } from 'effector'
import { $authError, $userLoginData, api, postUserLoginFx } from './index'
import { postUserLoginApi } from '../../services/api/userApi'

postUserLoginFx.use(postUserLoginApi)

api.onCreateEffect((fx) => {
  guard({
    source: fx.fail,
    filter: (fail: any) => fail.error.response.status === 401,
    target: $authError,
  })
})

$userLoginData.on(postUserLoginFx.doneData, (_, data) => data)

$authError.reset(postUserLoginFx.done)
