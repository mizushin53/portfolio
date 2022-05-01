<script lang="ts">
import Footer from './components/Footer.vue'

export default {
    name: "App",
    components: { Footer }
}
</script>

<template>
  <router-view />
  <!-- <nav class="pages">
    <a><router-link to="/">Home</router-link></a> |
    <a><router-link to="/about">About</router-link></a> |
    <a><router-link to="/dev">Dev</router-link></a> |
    <a><router-link to="/posts">Posts</router-link></a>
  </nav> -->
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
.pages {
  margin: 10px auto;
  font-size: clamp(10px, 2vw, 30px);
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
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
