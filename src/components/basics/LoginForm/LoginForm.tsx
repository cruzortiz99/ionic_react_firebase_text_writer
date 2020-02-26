import React, { useState } from 'react'
import './LoginForm.css'
import { IonInput, IonButton } from '@ionic/react'

export interface AppLoginForm {
  onSave?: Function
}

const LoginForm: React.FC<AppLoginForm> = props => {
  const [userName, setUserName] = useState(undefined)
  const [userPassword, setPassword] = useState(undefined)
  return (
    <section className='login-form-content'>
      <IonInput
        placeholder='User name or email'
        value={userName}
        onIonChange={(event: any) => setUserName(event.target.value)}
        className='form_input'
        color='light'
      />
      <IonInput
        placeholder='Password'
        value={userPassword}
        type='password'
        onIonChange={(event: any) => setPassword(event.target.value)}
        className='form_input'
        color='light'
      />
      <IonButton
        className='login-form-button login-form-login-button'
        onClick={() =>
          props.onSave ? props.onSave(userName, userPassword) : () => {}
        }
      >
        Login
      </IonButton>
      <IonButton
        className='login-form-button login-form-signin-button'
        color='secondary'
        routerLink='/register'
      >
        Sign-in
      </IonButton>
    </section>
  )
}

export default LoginForm
