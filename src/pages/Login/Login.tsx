import { analytics as banner } from 'ionicons/icons'
import React, { useState } from 'react'
import { loginUser } from '../../api/api'
import LoginForm from '../../components/basics/LoginForm/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import './Login.css'
import { IonLoading } from '@ionic/react'

const login = async (email: string, password: string) => {
  return await loginUser(email, password)
}

const AppLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <LoginContainer banner={banner}>
      <IonLoading isOpen={isLoading} message='Please wait' />
      <LoginForm
        onSave={async (email: string, password: string) => {
          setIsLoading(true)
          await login(email, password)
          setIsLoading(false)
        }}
      ></LoginForm>
    </LoginContainer>
  )
}

export default AppLogin
