<script lang="ts">
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {Footer},
}
</script>

<template>
  <router-view />
  <Footer></Footer>
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
  width: 100vw;
  height: 100vh;
}

footer {
  margin: 0;
  font-size: clamp(8px, 2vw, 14px);
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%);
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
