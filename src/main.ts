import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './Router/Router'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'
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

  






