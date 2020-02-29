import { IonIcon, IonPage } from '@ionic/react'
import React from 'react'
import './LoginContainer.css'

export interface AppLoginContainer {
  banner?: string
  children?: React.ReactNode
}

const LoginContainer: React.FC<AppLoginContainer> = props => {
  return (
    <IonPage className='login_container_page'>
      <section className='login_container_banner'>
        <IonIcon
          icon={props.banner}
          color='primary'
          className='login_container_logo'
        />
      </section>
      <section className='login_container_slot'>{props.children}</section>
    </IonPage>
  )
}

export default LoginContainer
