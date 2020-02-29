import React from 'react'
import {
  IonPage,
  IonContent,
  IonToolbar,
  IonHeader,
  IonTitle
} from '@ionic/react'

const AppNotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default AppNotFoundPage
