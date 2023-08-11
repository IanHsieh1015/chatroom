import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

/** 初始化 Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons'

/** Firebase */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgQSHCvhlglQBB4WNPwRQcfdnN1mIRo6Y',
  authDomain: 'chat-firebase-df516.firebaseapp.com',
  projectId: 'chat-firebase-df516',
  storageBucket: 'chat-firebase-df516.appspot.com',
  messagingSenderId: '467692971184',
  appId: '1:467692971184:web:3cbf144bdeac55fb40c775',
  measurementId: 'G-GXN4G8PTR0'
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getAnalytics(firebaseApp)

// 將 db 注入到 Vue 3 應用的全域屬性中
app.config.globalProperties.$db = db

app.mount('#app')
