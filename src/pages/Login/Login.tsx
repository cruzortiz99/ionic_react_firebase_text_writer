import { analytics as banner } from 'ionicons/icons'
import React from 'react'
import LoginForm from '../../components/basics/LoginForm/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import './Login.css'
const registerUser = (
  userName?: string,
  password?: string,
  confirmedPassword?: string
) => {
  console.log(userName, password, confirmedPassword)
}

const AppLogin: React.FC = () => {
  return (
    <LoginContainer banner={banner}>
      <LoginForm></LoginForm>
    </LoginContainer>
  )
}

export default AppLogin
