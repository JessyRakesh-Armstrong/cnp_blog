<template>
    <div class="landing-page">
      <h1>Coffee 'N Potions</h1>
      <p>
        Welcome to the Coffee N' Potions Online Space 
      </p>
    </div>
    <div>
      <Image :src="require('../assets/images/Subject.png')" alt="Image" width="250" />
    </div>
  </template>
  
  <script>
    import Image from 'primevue/image';

  export default {
    name: 'LandingPage',
    props: {
      msg: String
    },
    components: {
        // Button
      Image,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  
