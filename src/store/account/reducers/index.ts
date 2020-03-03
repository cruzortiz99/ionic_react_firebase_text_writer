import ActionsNames from '../actions/names.d'

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
      return {
        ...state,
        userData: payload
      }
  }
  return state
}
