export const reduceUserState = (state = [], payload: any) => {
  return { ...state, payload }
}
