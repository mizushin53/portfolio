<script setup lang="ts">
import getAge from "../components/scripts/age"
</script>

<template>

<header>
  <h1>瑞心-MIZUSHIN-</h1>
  <a href="https://github.com/mizushin53" target="_blank"><img class="linkIcon" src="../assets/GitHub-logo.png" alt="GitHub"></a>
  <a href="https://qiita.com/mizushin53" target="_blank"><img class="linkIcon" src="../assets/qiita-logo.png" alt="GitHub"></a>
</header>
<NuxtLink to="/about">
about
</NuxtLink>
<section id="about">
  <h2>私について</h2>
  <p class="txtBox">
    埼玉県出身のエンジニア<br>
    2020年からSIerに入社し、約2年ほどIT業界に携わる<br>
    2022年の3月よりフルスタックエンジニアになることを目標に転職活動中(2022/4現在)
  </p>
  <div>
    <dl>
      <dt>名前 :</dt>
      <dd>MIZUSHIN</dd>
      <dt>所在 :</dt>
      <dd>埼玉県</dd>
      <dt>年齢 :</dt>
      <dd>{{getAge(1996,5,3)}}(1996/5/3)</dd>
      <dt>Twitter :</dt>
      <dd><a href="https://twitter.com/mzsn53" target="_blank">＠mzsn53</a></dd>
    </dl>
  </div>
</section>

<section id="career">
  <h2>経歴</h2>
  <div class="career">
    <div class="company">
      <time class="careerPeriod">2020/4〜2022/2</time>
      <h3>SIer</h3>
    </div>
    <p class="careerTxt">
      新卒でSIerへ入社。主に公共機関向けに開発、保守・運用を担当<br>
      また社内の案件でWordpressとReact Nativeでの開発も経験
    </p>
  </div>
</section>

<section id="skill">
  <h2>スキル</h2>
  <h3>プログラミング言語</h3>
  <ul class="cards">
    <li class="card">
      <img class="icon" src="../assets/js-square-brands.svg">
      <p class="title01">Javascript</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/java-brands.svg">
      <p class="title01">Java</p>
      <p class="cardTxt"></p>
    </li>
  </ul>
  <h3>ライブラリ</h3>
  <ul class="cards">
    <li class="card">
      <img class="icon" src="../assets/react-brands.svg">
      <p class="title01">React</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/vuejs-brands.svg">
      <p class="title01">Vue</p>
      <p class="cardTxt"></p>
    </li>
  </ul>
  <h3>その他</h3>
  <ul class="cards">
    <li class="card">
      <img class="icon" src="../assets/html5-brands.svg">
      <p class="title01">HTML</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/css3-alt-brands.svg">
      <p class="title01">CSS</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/database-solid.svg">
      <p class="title01">SQL</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/git-alt-brands.svg">
      <p class="title01">Git</p>
      <p class="cardTxt"></p>
    </li>
  </ul>
  
  <h3>OS</h3>
  <ul class="cards">
    <li class="card">
      <img class="icon" src="../assets/windows-brands.svg">
      <p class="title01">Windows</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/apple-brands.svg">
      <p class="title01">Mac</p>
      <p class="cardTxt"></p>
    </li>
    <li class="card">
      <img class="icon" src="../assets/linux-brands.svg">
      <p class="title01">Linux</p>
      <p class="cardTxt"></p>
    </li>
  </ul>
</section>

</template>

<style scoped>
@import "../components/css/hearder.css";
@import "../components/css/main.css";
</style>