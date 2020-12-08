import produce, { Draft } from 'immer'
import { Action } from 'redux'

export interface IInitialAuthState {
  auth: boolean;
}

const initialAuthState: IInitialAuthState = {
  auth: true,
}

enum AuthTypes {
  AUTHORIZED = 'AUTHORIZED',
  UNAUTHORIZED = 'UNAUTHORIZED',
}

interface IAuthAuthorized extends Action<AuthTypes> {
  type: AuthTypes.AUTHORIZED;
}

export const authAuthorized = (): IAuthAuthorized => ({
  type: AuthTypes.AUTHORIZED,
})

export const authUnauthorized = (): IAuthUnauthorized => ({
  type: AuthTypes.UNAUTHORIZED,
})

interface IAuthUnauthorized extends Action<AuthTypes> {
  type: AuthTypes.UNAUTHORIZED;
}

type AuthAction = IAuthAuthorized | IAuthUnauthorized

export const authReducer = produce(
  (draft: Draft<IInitialAuthState>, action: AuthAction) => {
    switch (action.type) {
      case AuthTypes.AUTHORIZED:
        draft.auth = true
        break
      case AuthTypes.UNAUTHORIZED:
        draft.auth = false
        break
    }
  },
  initialAuthState
)
