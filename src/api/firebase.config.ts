import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDFH1jdTpoulHpCt3ENt1B9GCW8f_JGHQ0',
  authDomain: 'ionic-react-app-f0b88.firebaseapp.com',
  databaseURL: 'https://ionic-react-app-f0b88.firebaseio.com',
  projectId: 'ionic-react-app-f0b88',
  storageBucket: 'ionic-react-app-f0b88.appspot.com',
  messagingSenderId: '475523760048',
  appId: '1:475523760048:web:7af86d5f20b2d18e676075'
}

export default firebase.initializeApp(config)
