import firebaseApp from './firebase.config'
import { toast } from '../components/basics/utils/AppToast'

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
    return response
  } catch (error) {
    console.error(error)
    return toast('Wrong user or password', undefined, 'danger', undefined)
  }
}

export const registerUser = async (username: string, password: string) => {
  try {
    await firebaseApp.auth().createUserWithEmailAndPassword(username, password)
    return true
  } catch (error) {
    console.error(error)
    return toast(error.message, undefined, 'danger', undefined)
  }
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
      resolve(user)
      unsubscribe()
    })
  })
}

export const logOut = () => {
  return firebaseApp.auth().signOut()
}
