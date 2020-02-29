import ActionsName from './names'

export const setUserState = (payload?: any) => {
  return {
    type: ActionsName.SET_USER_STATE,
    payload: payload
  }
}
