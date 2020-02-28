import { analytics as banner } from 'ionicons/icons'
import React from 'react'
import { loginUser } from '../../api/api'
import LoginForm from '../../components/basics/LoginForm/LoginForm'
import { toast } from '../../components/basics/utils/AppToast'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import './Login.css'

const login = async (email: string, password: string) => {
  const response: boolean = await loginUser(email, password)
  if (!response) {
    toast('Wrong user or password', undefined, 'danger', undefined)
  }
}

const AppLogin: React.FC = () => {
  return (
    <LoginContainer banner={banner}>
      <LoginForm
        onSave={(email: string, password: string) => login(email, password)}
      ></LoginForm>
    </LoginContainer>
  )
}

export default AppLogin
