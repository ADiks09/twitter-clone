import { guard } from 'effector'
import { postUserLoginFx } from '../login'
import { $authError, $authState, api, unauthorizedEvent } from './index'

api.onCreateEffect((fx) => {
  guard({
    source: fx.fail,
    filter: (fail: any) => fail.error.response.status === 401,
    target: [$authError, unauthorizedEvent],
  })
})

$authState.on(unauthorizedEvent, () => false)

$authState.on(postUserLoginFx.done, () => true)

$authError.reset(postUserLoginFx.done)
