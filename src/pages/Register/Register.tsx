import { person as banner } from 'ionicons/icons'
import React from 'react'
import RegisterForm from '../../components/basics/RegisterForm/RegisterForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import { toast } from '../../components/basics/utils/AppToast'
import { registerUser } from '../../api/api'

const onSaveHandler = (
  error: string,
  data: {
    userName: string | undefined
    userPassword: string | undefined
  }
) => {
  if (error) {
    return toast(error, undefined, 'danger', undefined)
  }
  return data.userName && data.userPassword
    ? registerUser(data.userName, data.userPassword)
    : null
}

const AppRegisterPage = () => {
  return (
    <LoginContainer banner={banner}>
      <RegisterForm
        onSave={(error, data) => onSaveHandler(error, data)}
      ></RegisterForm>
    </LoginContainer>
  )
}

export default AppRegisterPage
