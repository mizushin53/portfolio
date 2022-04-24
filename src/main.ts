import { createApp, VueElement } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

library.add(faCoffee)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
