import { analytics as banner } from 'ionicons/icons'
import React, { useState } from 'react'
import { loginUser } from '../../api'
import AppLoader from '../../components/basics/AppLoader'
import LoginForm from '../../components/basics/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer'
import './Login.css'

const login = async (email: string, password: string) => {
  return await loginUser(email, password)
}

const AppLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <LoginContainer banner={banner}>
      <AppLoader isOpen={isLoading} />
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
