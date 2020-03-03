import React from 'react'
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonText
} from '@ionic/react'

const AppDashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonText>Hello from dashboard</IonText>
      </IonContent>
    </IonPage>
  )
}

export default AppDashboard
