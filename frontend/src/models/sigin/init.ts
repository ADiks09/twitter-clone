import { $errorSign, $userSign, postUserSignFx } from './index'
import { userApiSignIn } from '../../services/api/userApi'

postUserSignFx.use(userApiSignIn)

$errorSign.on(postUserSignFx.failData, (_, d) => d.response?.data)

$userSign.on(postUserSignFx.done, () => true)

$errorSign.reset(postUserSignFx.done)
