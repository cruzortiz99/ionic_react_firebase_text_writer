import { AppGeneralState } from '.'

export const reduceUserState = (state: AppGeneralState, payload: any) => {
  return { ...state, user: payload.split('@')[0] }
}
