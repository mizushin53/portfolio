<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
<div id="about">
  <h2 id="title">About me</h2>
  <div class="card">
    <p id="name">NAME:</p>
    <p >mizushin(Yu Ikejima)</p>
    <p >AGE:25(May 3,1996)</p>
    <p>
      link:
      <a href="https://github.com/mizushin53" target="_blank">GitHub</a>
      |
      <a href="https://twitter.com/mzsn53" target="_blank">Twitter</a>
      |
      <a href="https://qiita.com/mizushin53" target="_blank">Qiita</a>
    </p>
  </div>
</div>

<div id="career">
  <h2 id="title">Career</h2>
  <div class="card">
    <p class="period">2020/4〜2022/2</p>
    <h3>中小SIer</h3>
    <p class="text">新卒で中小のSIerへ入社。主に公共機関向けに開発、保守・運用を行う。また社内の案件でWordpressとReact Nativeでの開発も担当</p>
    <p class="period">2015/4〜2020/3</p>
    <h3>桜美林大学</h3>
    <p class="text">
    ビジネスマネジメント学群へ入学。専攻科目はICTビジネス
    </p>
  </div>
</div>

<div id="skill">
<h2 id="title">SKILL</h2>
  <div class="card">
    <p>HTML/CSS</p>
    <p>Javascript</p>
    <p>React</p>
    <p>Vue</p>
    <p>Java</p>
    <p>ITパスポート</p>
  </div>
</div>
</template>

<style scoped>

#title {
  margin:0px;
  font-size:250%;
}

h3 {
  margin:0px;
  font-size:250%
}
#name {
  color:#19448e;
  border: solid;
}
.card{
  text-align: left;
  border: solid;
}

.career {
  border: solid;
}

</style>