<template>
    <div class="landing-page">
      <h1>{{ msg }}</h1>
      <p>
        Welcome to the Coffee N' Potions Online Space 
      </p>
    </div>
  </template>
  
  <script>
    // import Button from 'primevue/button';

  export default {
    name: 'LandingPage',
    props: {
      msg: String
    },
    components: {
        // Button
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
  