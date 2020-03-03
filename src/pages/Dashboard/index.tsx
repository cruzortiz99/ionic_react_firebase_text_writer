import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logOut } from '../../api'
import AppLoader from '../../components/basics/AppLoader'
import words from '../../data/words'
import './Dashboard.css'

const AppDashboard: React.FC = () => {
  const user = useSelector((state: any) => state.user)
  const history = useHistory()
  const [busy, setBusy] = useState(false)
  const [textWrote, setTextWrote] = useState('')

  const userLogout = async () => {
    setBusy(true)
    await logOut()
    setBusy(false)
    history.replace('/login')
  }
  const onChangeHandler = (event: any) => {
    const eventValue: string = event.target.value
    if (!eventValue.trim()) {
      setTextWrote('')
    } else if (eventValue.slice(-1) === ' ') {
      // do some processing
      setTextWrote('')
    } else {
      setTextWrote(eventValue)
    }
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
        {words.map((word: string, key: number) => (
          <span className='dashboard-words' key={key}>
            {word}
          </span>
        ))}
        <IonInput
          placeholder='Write the word'
          value={textWrote}
          onIonChange={onChangeHandler}
        ></IonInput>
        <IonText>
          <p>Hello {user} from dashboard</p>
        </IonText>
        <IonButton onClick={userLogout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default AppDashboard
