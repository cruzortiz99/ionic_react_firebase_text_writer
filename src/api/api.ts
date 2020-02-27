import firebaseApp from './firebase.config'

export const loginUser = async (email: string, password: string) => {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
