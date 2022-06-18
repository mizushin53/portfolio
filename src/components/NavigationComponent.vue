<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/dev">Dev</router-link></li>
    <li><router-link to="/posts">Posts</router-link></li>
  </ul>
  <ul>
    <li><a href="https://twitter.com/mzsn53">Twitter</a></li>
    <li><a href="https://github.com/mizushin53">GitHub</a></li>
  </ul>


  <div class="hamburger-menu">
    <input type="checkbox" id="menu-btn-check">
    <label for="menu-btn-check" class="menu-btn"><span></span></label>
  </div>


</template>

<style>
a{

}

ul{
  
}
  .menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    z-index: 90;
    background-color: #3584bb;
  }
  .menu-btn span,
  .menu-btn span:before,
  .menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: #ffffff;
    position: absolute;
  }
  .menu-btn span:before {
    bottom: 8px;
  }
  .menu-btn span:after {
    top: 8px;
  }
</style>