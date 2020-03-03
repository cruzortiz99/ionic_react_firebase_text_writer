import ActionsName from './names.d'

export const setUserState = (payload?: any) => {
  return {
    type: ActionsName.SET_USER_STATE,
    payload: payload
  }
}
