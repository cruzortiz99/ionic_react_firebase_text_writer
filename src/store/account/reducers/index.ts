import ActionsNames from '../actions/names.d'
import * as userReducers from './reducers'

export const rootReducer = (
  state = [],
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
