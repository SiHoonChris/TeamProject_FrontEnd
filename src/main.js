import { createApp } from 'vue'
import App from './MainPage.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mitt from './mitt'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$serverUrl = 'http://localhost:8086'
app.use(store).use(router).use(mitt).mount('#app')

window.Kakao.init("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
window.console.log(Kakao.isInitialized())

// 닉네임  	          profile_nickname
// 카카오계정(이메일)  account_email
// 생일               birthday
