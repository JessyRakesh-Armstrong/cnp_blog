import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'

// Root App Start
createApp(App)
.use(router) // vue-router
.use(PrimeVue, { // PrimeVue
    theme: {
        preset: Aura
    }
})
.mount('#app')
