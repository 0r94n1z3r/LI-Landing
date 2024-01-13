import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { createPinia } from 'pinia'
import router from './router'
import I18n from './i18n'
import Vue3TouchEvents from "vue3-touch-events";

app.use(createPinia())
app.use(router)
app.use(I18n)
app.use(Vue3TouchEvents);



import VButton from '@/components/ui/VButton.vue';

app.component('VButton', VButton)



app.mount('#app')
