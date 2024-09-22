import { createMemoryHistory, createRouter } from 'vue-router'

import LandingPage from './Pages/LandingPage.vue'

const routes = [
    {path: '/', component: LandingPage},
    // {path: '/about', component: LandingPage},
    // {path: '/projects', component: LandingPage},
    // {path: '/links', component: LandingPage},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
  
export default router