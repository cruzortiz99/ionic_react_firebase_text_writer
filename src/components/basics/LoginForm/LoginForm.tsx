import React, { useState } from 'react'
import './LoginForm.css'
import { IonInput, IonButton } from '@ionic/react'

const loginUser = (userName?: string, password?: string) => {
  console.log(userName, password)
}

const LoginForm: React.FC = () => {
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
        <IonButton onClick={() => loginUser(userName, userPassword)}>
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
