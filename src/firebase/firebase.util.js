import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyAlU5kJo1Mpgpp1Nhv2mTcKix7YMmEQ8AA',
  authDomain: 'ecommerce-db-eb494.firebaseapp.com',
  projectId: 'ecommerce-db-eb494',
  storageBucket: 'ecommerce-db-eb494.appspot.com',
  messagingSenderId: '249371110400',
  appId: '1:249371110400:web:f61942ede1f0afea1afce5',
  measurementId: 'G-KTV0L0DGR2',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
