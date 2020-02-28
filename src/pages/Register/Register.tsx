import { IonToast } from '@ionic/react'
import { close, person as banner } from 'ionicons/icons'
import React, { useState } from 'react'
import RegisterForm from '../../components/basics/RegisterForm/RegisterForm'
import LoginContainer from '../../components/containers/LoginContainer/LoginContainer'

const onSaveHandler = (
  error: string,
  data: any,
  setRegisterError: Function
) => {
  console.log(error, data)
  setRegisterError(error)
}

const AppRegisterPage = () => {
  const [registerError, setRegisterError] = useState('')
  return (
    <LoginContainer banner={banner}>
      <RegisterForm
        onSave={(error: string, data: any) =>
          onSaveHandler(error, data, setRegisterError)
        }
      ></RegisterForm>
      <IonToast
        isOpen={!!registerError}
        message={registerError}
        color='danger'
        buttons={[
          {
            icon: close,
            text: 'Dismiss',
            handler: () => setRegisterError('')
          }
        ]}
      ></IonToast>
    </LoginContainer>
  )
}

export default AppRegisterPage
