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

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)

export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

export const signOut = () => auth.signOut()

export const updateProfile = data => auth.currentUser.updateProfile(data)
