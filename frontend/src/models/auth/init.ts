import { guard } from 'effector'
import { $authError, api } from './index'

api.onCreateEffect((fx) => {
  guard({
    source: fx.fail,
    filter: (fail: any) => fail.error.response.status === 401,
    target: $authError,
  })
})

$authError.watch((state) => {
  console.log('errro', state)
})
