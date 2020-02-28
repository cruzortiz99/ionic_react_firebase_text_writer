import { analytics as banner } from 'ionicons/icons'
import React from 'react'
import { loginUser } from '../../api/api'
import LoginForm from '../../components/basics/LoginForm/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import './Login.css'

const login = (email: string, password: string) => {
  loginUser(email, password)
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
