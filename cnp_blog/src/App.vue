<template>
  <Navbar/>
  <LandingPage msg="Welcome to Coffee 'N Potions"/>
</template>

<script>
import LandingPage from './Pages/LandingPage.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    Navbar
  },
  data(){
    return {
      items: ["Home", "About", "Projects"]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
