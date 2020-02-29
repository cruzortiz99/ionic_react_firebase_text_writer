import React from 'react'
import { IonLoading } from '@ionic/react'

export interface AppLoaderProps extends Partial<HTMLIonLoadingElement> {
  isOpen: boolean
}

const AppLoader: React.FC<AppLoaderProps> = props => {
  return <IonLoading message='Please wait' isOpen={props.isOpen} {...props} />
}

export default AppLoader
