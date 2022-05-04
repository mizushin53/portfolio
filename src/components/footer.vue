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
  </footer>
</template>


<style>
  nav {
    text-align: center;
  }

  nav ul {
    margin: 0;
    padding: 0;
    width: 99.9vw;
  }

  nav ul li {
    list-style: none;
    display: inline-block;
    width: 22vw;
    height: 5vh;
  }

  nav ul li  a {
    display:block;
    text-decoration:none; 
    font-size: clamp(20px, 3vw, 50px);
    color: #38b48b;
  }

  nav ul li a:hover {
      color: black;
      background-color: #a0d8ef;
      transition: 1s;
  }


   
</style>