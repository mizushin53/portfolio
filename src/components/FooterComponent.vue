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
    <ul class="sociallink">
      <li>Twitter</li>
      <li>Youtube</li>
      <li>GitHub</li>
    </ul>
    <p>©mizushin</p>
  </footer>
</template>


<style>
.sociallink{
  list-style: none;
  font-size: clamp(8px, 3vw, 16px);
  border: solid;

}
 ul {
   text-align: center;

 }
 ul li {
   display: inline-block;
   width: 12vw;
 }

 footer {
    margin: 0;
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%);
  }

  nav {
    text-align: center;
  }

  nav ul {
    margin: 0;
    padding: 0;
    width: 95vw;
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