import ActionsNames from '../actions/names.d'
import * as userReducers from './reducers'

export interface AppGeneralState {
  user: string
}

const defaultState: AppGeneralState = {
  user: ''
}

export const rootReducer = (
  state = defaultState,
  {
    type,
    payload
  }: {
    type: string
    payload: any
  }
): any => {
  switch (type) {
    case ActionsNames.SET_USER_STATE:
      return userReducers.reduceUserState(state, payload)
  }
  return state
}
