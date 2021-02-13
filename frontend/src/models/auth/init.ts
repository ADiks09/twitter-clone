import { guard } from 'effector'
import {
  $authError,
  $userLoginData,
  $userLoginStore,
  api,
  postUserLoginFx,
} from './index'
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

$authError.watch((state) => {
  console.log('errro', state)
})

$userLoginData.watch((state) => {
  console.log('user login data', state)
})

$userLoginStore.watch((state) => {
  console.log(state)
})
