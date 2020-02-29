import { IonLoading } from '@ionic/react'
import { person as banner } from 'ionicons/icons'
import React, { useState } from 'react'
import { registerUser } from '../../api/api'
import RegisterForm from '../../components/basics/RegisterForm/RegisterForm'
import { toast } from '../../components/basics/utils/AppToast'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import AppLoader from '../../components/basics/AppLoader/AppLoader'

const onSaveHandler = async (
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
    ? await registerUser(data.userName, data.userPassword)
    : null
}

const AppRegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <LoginContainer banner={banner}>
      <AppLoader isOpen={isLoading} />
      <RegisterForm
        onSave={async (error, data) => {
          setIsLoading(true)
          await onSaveHandler(error, data)
          setIsLoading(false)
        }}
      ></RegisterForm>
    </LoginContainer>
  )
}

export default AppRegisterPage
