<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
<h1>瑞心-MIZUSHIN-</h1>

<section id="about">
  <h2>About</h2>
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
      <dd>25(1996/5/3)</dd>
      <dt>Twitter :</dt>
      <dd><a href="https://twitter.com/mzsn53" target="_blank">＠mzsn53</a></dd>
    </dl>
  </div>
</section>

<section id="career">
  <h2>Career</h2>
  <div class="card">
  </div>
  <div>
    <p class="period">2020/4〜2022/2</p>
    <h3>SIer</h3>
  <div>
    <p class="txtBox">
      新卒でSIerへ入社。主に公共機関向けに開発、保守・運用を担当<br>
      また社内の案件でWordpressとReact Nativeでの開発も経験
    </p>
  </div>
  </div>
</section>

<section id="skill">
  <h2>SKILL</h2>
  <p>HTML/CSS</p>
  <p>Javascript</p>
  <p>React</p>
  <p>Vue</p>
  <p>Java</p>
  <p>ITパスポート</p>
</section>
</template>

<style scoped>
section {
  max-width: 1080px;
  display: blick;
  margin: 0 auto;
}

h1 {
  margin-bottom: 30px;
}

h2 {
  margin:0 0 70px 0;
  font-size:46px;
  text-align:left;
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

.period {
  font-size:16px;
}

.card {
  display:flex;
}
</style>