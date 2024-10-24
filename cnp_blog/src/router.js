import { createMemoryHistory, createRouter } from 'vue-router'

import LandingPage from './Pages/LandingPage.vue'
import AboutUs from './Pages/AboutUs.vue'
import NotFound from './Pages/NotFound.vue'

const routes = [
    {name: 'landing-page', path: '/', component: LandingPage},
    {name: "about-us", path: '/about-us', component: AboutUs},
    {name: '404', path: '/:pathMatch(.*)*', component: NotFound},
    // {path: '/about', component: LandingPage},
    // {path: '/projects', component: LandingPage},
    // {path: '/links', component: LandingPage},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
  
export default router
