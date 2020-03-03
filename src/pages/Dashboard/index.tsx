import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { logOut } from '../../api'
import { useHistory } from 'react-router'
import AppLoader from '../../components/basics/AppLoader'

const AppDashboard: React.FC = () => {
  const user = useSelector((state: any) => state.user)
  const history = useHistory()
  const [busy, setBusy] = useState(false)
  const userLogout = async () => {
    setBusy(true)
    await logOut()
    setBusy(false)
    history.replace('/login')
  }
  return (
    <IonPage>
      <AppLoader isOpen={busy}></AppLoader>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonText>Hello {user} from dashboard</IonText>
        <br />
        <IonButton onClick={userLogout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default AppDashboard
