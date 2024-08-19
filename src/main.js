/* eslint-disable */ 
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vue from "vue"
import VueCookies from "vue-cookies"

createApp(App).use(store).use(router).use(VueCookies,{expires:'1h'}).mount('#app')
