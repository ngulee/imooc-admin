import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerIcons from '@/icons'
import 'normalize.css'

const app = createApp(App)
registerIcons(app)

app
  .use(store)
  .use(router)
  .mount('#app')
