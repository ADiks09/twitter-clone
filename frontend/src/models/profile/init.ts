import { $profile, getUserProfileFx } from './index'
import { getProfileUserApi } from '../../services/api/profileApi'

getUserProfileFx.use(getProfileUserApi)

$profile.on(getUserProfileFx.doneData, (_, data) => data)
