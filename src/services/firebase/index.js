import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBwjhw-YAMtlg5V0__NqCG-CraqeMEvpXI',
  authDomain: 'watcode-208609.firebaseapp.com',
  databaseURL: 'https://watcode-208609.firebaseio.com',
  projectId: 'watcode-208609',
  storageBucket: 'watcode-208609.appspot.com',
  messagingSenderId: '969552551752',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()

export const signUp = auth.createUserWithEmailAndPassword

export const signIn = auth.signInWithEmailAndPassword
