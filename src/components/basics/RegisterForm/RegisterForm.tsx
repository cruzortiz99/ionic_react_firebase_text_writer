import { IonButton, IonInput, IonText } from '@ionic/react'
import React, { useState } from 'react'
import './RegisterForm.css'

export interface AppRegisterForm {
  onSave?: Function
}

const RegisterForm: React.FC<AppRegisterForm> = props => {
  const [userName, setUserName] = useState(undefined)
  const [userPassword, setPassword] = useState(undefined)
  const [confirmedPassword, setConfirmedPassword] = useState(undefined)
  const [passwordError, setPasswordError] = useState(false)

  const onPasswordConfirmed = (
    useName: string | undefined,
    userPassword: string | undefined,
    confirmedPassword: string | undefined
  ) => {
    if (userName && userPassword && userPassword === confirmedPassword) {
      setPasswordError(false)
      return props.onSave ? props.onSave(userName, userPassword) : null
    }
    setPasswordError(true)
  }

  return (
    <section className='register-form-content'>
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
      <IonInput
        placeholder='Confirme Password'
        value={confirmedPassword}
        type='password'
        onIonChange={(event: any) => setConfirmedPassword(event.target.value)}
        className='form_input'
        color='light'
      />
      {passwordError ? (
        <IonText className='form_input' color='danger'>
          {userName
            ? userPassword
              ? 'Password must match the confirmation'
              : 'Must type a valid password'
            : 'Must type a valid user name'}
        </IonText>
      ) : null}
      <IonButton
        onClick={() =>
          onPasswordConfirmed(userName, userPassword, confirmedPassword)
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
