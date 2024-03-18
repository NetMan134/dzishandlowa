import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { pl } from 'date-fns/locale'
import { setDefaultOptions } from 'date-fns'
setDefaultOptions({ locale: pl })

app.mount('#app')
