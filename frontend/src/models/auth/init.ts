import { guard } from 'effector'
import { postUserLoginFx } from '../login'
import { $authError, api } from './index'

api.onCreateEffect((fx) => {
  guard({
    source: fx.fail,
    filter: (fail: any) => fail.error.response.status === 401,
    target: $authError,
  })
})

$authError.reset(postUserLoginFx.done)
