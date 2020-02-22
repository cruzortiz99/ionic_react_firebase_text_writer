import { IonButton, IonInput } from '@ionic/react'
import React, { useState } from 'react'
import './RegisterForm.css'

const registerUser = (
  userName?: string,
  password?: string,
  confirmedPassword?: string
) => {
  console.log(userName, password, confirmedPassword)
}

const RegisterForm = () => {
  const [userName, setUserName] = useState(undefined)
  const [userPassword, setPassword] = useState(undefined)
  const [confirmedPassword, setConfirmedPassword] = useState(undefined)
  return (
    <section className='login-content'>
      <div className='register_form'>
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
        <IonInput
          placeholder='Confirme Password'
          value={confirmedPassword}
          type='password'
          onIonChange={(event: any) => setConfirmedPassword(event.target.value)}
          className='form_input'
        />
        <IonButton
          onClick={() =>
            registerUser(userName, userPassword, confirmedPassword)
          }
          className='center_button'
        >
          Sign-in
        </IonButton>
        <IonButton routerLink='/login' color='secondary'>
          Back
        </IonButton>
      </div>
    </section>
  )
}

export default RegisterForm
