import { IonApp } from '@ionic/react'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './api'
import AppRoutingSystem from './components/basics/AppRoutingSystem'
import { setUserState } from './store/account/actions'
/* Theme variables */
import './theme/variables.css'

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        dispatch(setUserState(user.email))
        window.history.replaceState({}, '', '/dashboard')
      } else {
        window.history.replaceState({}, '', '/login')
      }
      setBusy(false)
    })
  }, [dispatch])

  return (
    <IonApp>
      <AppRoutingSystem busy={busy}></AppRoutingSystem>
    </IonApp>
  )
}

export default App
