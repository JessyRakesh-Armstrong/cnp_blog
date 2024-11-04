import { createMemoryHistory, createRouter } from 'vue-router'


// Pages
import LandingPage from './Pages/LandingPage.vue'
import AboutUs from './Pages/AboutUs.vue'
import Projects from './Pages/Projects.vue'
// Project Pages
import Basketball from './Pages/Projects/Basketball.vue' 
import CoffeeCompanion from './Pages/Projects/CoffeeCompanion.vue' 
import UCBN from './Pages/Projects/UCBN.vue' 
// 404 Page
import NotFound from './Pages/NotFound.vue'

const routes = [
    // main pages
    {name: 'landing-page', path: '/', component: LandingPage},
    {name: "about-us", path: '/about-us', component: AboutUs},
    {name: "projects", path: '/projects', component: Projects},
    // Projects
    {name: 'basketball-mafia', path: '/projects/basketball-mafia', component: Basketball},
    {name: 'coffee-companion', path: '/projects/coffee-companion', component: CoffeeCompanion},
    {name: 'basic-needs-dashboard', path: '/projects/ucbn', component: UCBN},
    // 404 Error Pages
    {name: '404', path: '/:pathMatch(.*)*', component: NotFound},
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
  
export default router;
