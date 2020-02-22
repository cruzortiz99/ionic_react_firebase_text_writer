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
    <section className='login-content'>
      <div className='login_form'>
        <IonInput
          placeholder='User name or email'
          value={userName}
          onIonChange={(event: any) => setUserName(event.target.value)}
          className='form_input'
        />
        <IonInput
          placeholder='Password'
          value={userPassword}
          type='password'
          onIonChange={(event: any) => setPassword(event.target.value)}
          className='form_input'
        />
        <IonButton
          onClick={() =>
            props.onSave ? props.onSave(userName, userPassword) : () => {}
          }
        >
          Login
        </IonButton>
        <IonButton color='secondary' routerLink='/register'>
          Sign-in
        </IonButton>
      </div>
    </section>
  )
}

export default LoginForm
