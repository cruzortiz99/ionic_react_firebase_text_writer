import React from 'react'
import { IonReactRouter } from '@ionic/react-router'
import { Switch, Route, Redirect } from 'react-router'
import AppDashboard from '../../../pages/Dashboard'
import LoginPage from '../../../pages/Login'
import AppRegisterPage from '../../../pages/Register'
import { IonLoading } from '@ionic/react'

export interface AppRoutingSystemProps {
  busy: boolean
}

const AppRoutingSystem: React.FC<AppRoutingSystemProps> = ({ busy }) => {
  return (
    <>
      <IonLoading isOpen={busy}></IonLoading>
      <IonReactRouter>
        <Switch>
          <Route path='/dashboard' component={AppDashboard} exact={true} />
          <Route path='/login' component={LoginPage} exact={true} />
          <Route path='/register' component={AppRegisterPage} exact={true} />
          <Route path='/' render={() => <Redirect to='/login' />} />
        </Switch>
      </IonReactRouter>
    </>
  )
}

export default AppRoutingSystem
