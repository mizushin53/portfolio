<template>
  <footer>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/dev">Dev</router-link></li>
        <li><router-link to="/posts">Posts</router-link></li>
      </ul>
    </nav>

    <!-- <p>© 2022 MIZUSHIN. All rights reserved.</p> -->
  </footer>
</template>


<style>
  nav {
    text-align: center;
    /* font-size: 32px; */
    position:relative;
  }

  nav ul {
    margin: 0;
    padding: 0;
    width: 99.9vw; /* 横幅 */
    /* max-width: 1200px; */
    background-color: #eaf4fc; /* 背景色 */
  }

  nav ul li {
    list-style: none;
    display: inline-block;
    width: 22vw;
    height: 5vh;
    border: 1px solid #cc0000; /* 枠線 */
    background-color: #ffcccc; /* 背景色 */
  }


   
</style>