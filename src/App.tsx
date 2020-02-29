import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
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
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import AppRegisterPage from './pages/Register/Register'
/* Theme variables */
import './theme/variables.css'
import { Provider } from 'react-redux'
import { store } from './store/account'

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet animated={false}>
          <Switch>
            <Route path='/login' component={Login} exact={true} />
            <Route path='/register' component={AppRegisterPage} exact={true} />
            <Route path='/' render={() => <Redirect to='/login' />} />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </Provider>
)

export default App
