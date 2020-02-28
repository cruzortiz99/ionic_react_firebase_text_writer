import { IonButton, IonInput } from '@ionic/react'
import React, { useState } from 'react'
import './RegisterForm.css'

export interface AppRegisterForm {
  onSave?: (
    error: string,
    data: { userName: string | undefined; userPassword: string | undefined }
  ) => void | any
}

const onPasswordConfirmed = (
  userName: string | undefined,
  userPassword: string | undefined,
  confirmedPassword: string | undefined,
  onSave: (
    error: string,
    data: { userName: string | undefined; userPassword: string | undefined }
  ) => void | any
) => {
  let error = ''
  if (!userName || !userPassword || userPassword !== confirmedPassword) {
    if (!userName) {
      error = 'Must use a valid email'
    } else if (!userPassword) {
      error = 'Password must not be empty'
    } else {
      error = 'Password must match the confirmation'
    }
  }
  return onSave(error, { userName, userPassword })
}

const RegisterForm: React.FC<AppRegisterForm> = ({ onSave }) => {
  const [userName, setUserName] = useState(undefined)
  const [userPassword, setPassword] = useState(undefined)
  const [confirmedPassword, setConfirmedPassword] = useState(undefined)

  return (
    <section className='register-form-content'>
      <IonInput
        placeholder='User email'
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
      <IonInput
        placeholder='Confirme Password'
        value={confirmedPassword}
        type='password'
        onIonChange={(event: any) => setConfirmedPassword(event.target.value)}
        className='form_input'
        color='light'
      />
      <IonButton
        onClick={() =>
          onSave
            ? onPasswordConfirmed(
                userName,
                userPassword,
                confirmedPassword,
                onSave
              )
            : null
        }
        className='register-form-button register-form-signin-button'
      >
        Sign-in
      </IonButton>
      <IonButton
        className='register-form-button register-form-back-button'
        routerLink='/login'
        color='secondary'
      >
        Back
      </IonButton>
    </section>
  )
}

export default RegisterForm
