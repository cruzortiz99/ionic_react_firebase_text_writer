import { IonContent, IonIcon, IonPage } from '@ionic/react'
import React from 'react'
import './LoginContainer.css'

export interface AppLoginContainer {
  banner?: string
  children?: React.ReactNode
}

const LoginContainer: React.FC<AppLoginContainer> = props => {
  return (
    <IonPage>
      <section className='login_container_banner'>
        <IonIcon
          icon={props.banner}
          color='primary'
          className='login_container_logo'
        />
      </section>
      <IonContent>{props.children}</IonContent>
    </IonPage>
  )
}

export default LoginContainer
