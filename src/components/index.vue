<script setup lang="ts">
import getAge from "./scripts/age"
</script>

<template>
<header>
  <h1>瑞心-MIZUSHIN-</h1>
  <a href="https://github.com/mizushin53" target="_blank"><img class="linkIcon" src="../assets/GitHub-logo.png" alt="GitHub"></a>
  <a href="https://qiita.com/mizushin53" target="_blank"><img class="linkIcon" src="../assets/qiita-logo.png" alt="GitHub"></a>
</header>

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
.linkIcon {
  width: 30px;
  margin: 5px;
}
.careerPeriod {
  font-size: 12px;
}
.career {
  display: flex;
  margin: 10px;
}
.company {
  margin: auto;
}
.careerTxt {
  margin: auto;
}

ul {
  display: flex;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.card {
  align-items: center;
  justify-content: center;
  margin: 12px;
  width: 150px;
  height: 242.7px;
  list-style: none;
  transition: box-shadow 0.3s;
}

.cord:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.icon {
  width: 80px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.title01 {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}

.cardTxt {
  font-size: 14px;
  text-align: center;
}

section {
  max-width: 1080px;
  display: blick;
  margin: 0 auto;
}

h1 {
  margin-bottom: 30px;
}

h2 {
  margin:0 0 30px 0;
  font-size:36px;
  text-align:left;
  color: #333;
  border-bottom: 3px solid #ccc;
} 

h3 {
  margin:0px;
  font-size: 30px;
}

p {
  margin: 0;
}

.txtBox {
  margin-bottom: 30px;
  font-size:18px;
}



</style>