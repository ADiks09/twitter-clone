import { combineReducers } from 'redux'
import { userReducer } from './ducks/user/reducer'
import { IFullUserState } from './ducks/user/state'

export interface IRootReducer {
  auth: IFullUserState;
}

export const rootReducer = combineReducers({
  auth: userReducer,
})
