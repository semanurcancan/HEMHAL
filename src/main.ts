import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createVuetify } from 'vuetify/lib/framework.mjs'



const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(vuetify)
app.mount('#app')

  






