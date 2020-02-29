import firebaseApp from './firebase.config'
import { toast } from '../components/basics/utils/AppToast'

export const loginUser = async (email: string, password: string) => {
  try {
    await firebaseApp.auth().signInWithEmailAndPassword(email, password)
    return true
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
