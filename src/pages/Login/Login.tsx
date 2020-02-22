import { analytics as banner } from 'ionicons/icons'
import React from 'react'
import LoginForm from '../../components/basics/LoginForm/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import './Login.css'
const printUser = (...args: string[]) => {
  console.log(...args)
}

const AppLogin: React.FC = () => {
  return (
    <LoginContainer banner={banner}>
      <LoginForm onSave={printUser}></LoginForm>
    </LoginContainer>
  )
}

export default AppLogin
