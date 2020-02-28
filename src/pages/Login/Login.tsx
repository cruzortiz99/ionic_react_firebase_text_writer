import { IonToast } from '@ionic/react'
import { analytics as banner, close } from 'ionicons/icons'
import React, { useState } from 'react'
import { loginUser } from '../../api/api'
import LoginForm from '../../components/basics/LoginForm/LoginForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'
import './Login.css'

const login = async (
  email: string,
  password: string,
  setLoginError: Function
) => {
  const response: boolean = await loginUser(email, password)
  setLoginError(!response)
}

const AppLogin: React.FC = () => {
  const [loginError, setLoginError] = useState(false)
  return (
    <LoginContainer banner={banner}>
      <LoginForm
        onSave={(email: string, password: string) =>
          login(email, password, setLoginError)
        }
      ></LoginForm>
      <IonToast
        isOpen={loginError}
        color='danger'
        message='Wrong email or password'
        buttons={[
          {
            text: 'Dismiss',
            handler: () => {
              setLoginError(false)
            },
            icon: close
          }
        ]}
      ></IonToast>
    </LoginContainer>
  )
}

export default AppLogin
