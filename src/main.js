import './assets/main.css'
import ppplog from "ppplog"


import { createApp } from 'vue'
import App from './App.vue'

ppplog.enableTime()
//  解注释这一行是log生效
// ppplog.disableppplog()

createApp(App).mount('#app')
