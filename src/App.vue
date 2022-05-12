<script lang="ts">
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {FooterComponent},
}
</script>

<template>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<style>
html {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  width: 99vw;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* height: 100vh;
  width: 100vh; */
  text-align: center;
  color: #2c3e50;
  /* font-size:2em; */
}
</style>
