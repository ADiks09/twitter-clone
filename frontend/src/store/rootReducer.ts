import { combineReducers } from 'redux'
import { userReducer } from './ducks/user/reducer'

export const rootReducer = combineReducers({
  auth: userReducer,
})
