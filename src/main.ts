import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import router from './Router/Router'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'
import firebase from 'firebase/compat/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyChpRAtpi5dd_zn6t6zlQrtacc8lZ0qvYs",
//   authDomain: "hemhal-app.firebaseapp.com",
//   projectId: "hemhal-app",
//   storageBucket: "hemhal-app.appspot.com",
//   messagingSenderId: "930543444939",
//   appId: "1:930543444939:web:bed5a22ae313ddf3a68c4e",
//   measurementId: "G-NRHYZ6GQNC"
// };


//firebase.initializeApp(firebaseConfig);
const pinia = createPinia()
const app = createApp(App)

app.use(VueUniversalModal, {
    teleportTarget: '#my-modals',
    modalComponent: 'MyModal',
  })
  
app.use(pinia)
app.use(vuetify)
app.use(router)
app.mount('#app')

  






