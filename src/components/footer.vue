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
    /* position:relative; */
  }

  nav ul {
    margin: 0;
    padding: 0;
    width: 99.9vw; /* 横幅 */
    /* background-color: #eaf4fc; */
  }

  nav ul li {
    list-style: none;
    display: inline-block;
    width: 22vw;
    height: 5vh;
    /* border: 1px solid #cc0000; */
    /* background-color: #ffcccc; */
  }

  nav ul li  a {
    display:block;
    text-decoration:none; 
    font-size: clamp(20px, 3vw, 50px);
    color: #38b48b;
    /* position: absolute;
    bottom: 0%;
    transform: translate(-50%); */
  }

    nav ul li:hover {
    color: azure;
    background-color: #a0d8ef;
    transition: 1s;
  }


   
</style>