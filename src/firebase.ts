// src/firebase.ts
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCgQSHCvhlglQBB4WNPwRQcfdnN1mIRo6Y',
  authDomain: 'chat-firebase-df516.firebaseapp.com',
  projectId: 'chat-firebase-df516',
  storageBucket: 'chat-firebase-df516.appspot.com',
  messagingSenderId: '467692971184',
  appId: '1:467692971184:web:3cbf144bdeac55fb40c775',
  measurementId: 'G-GXN4G8PTR0'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
