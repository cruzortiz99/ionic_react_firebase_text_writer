import React from 'react'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import RegisterForm from '../../components/basics/RegisterForm/RegisterForm'
import { person as banner } from 'ionicons/icons'

const printUser = (...args: string[]) => {
  console.log(...args)
}

const AppRegisterPage = () => {
  return (
    <LoginContainer banner={banner}>
      <RegisterForm onSave={printUser}></RegisterForm>
    </LoginContainer>
  )
}

export default AppRegisterPage
