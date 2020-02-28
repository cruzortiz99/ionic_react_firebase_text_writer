import { person as banner } from 'ionicons/icons'
import React from 'react'
import RegisterForm from '../../components/basics/RegisterForm/RegisterForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import { toast } from '../../components/basics/utils/AppToast'

const onSaveHandler = (error: string, data: any) => {
  toast(error, undefined, 'danger', undefined)
}

const AppRegisterPage = () => {
  return (
    <LoginContainer banner={banner}>
      <RegisterForm
        onSave={(error: string, data: any) => onSaveHandler(error, data)}
      ></RegisterForm>
    </LoginContainer>
  )
}

export default AppRegisterPage
