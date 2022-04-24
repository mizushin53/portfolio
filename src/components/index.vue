<script setup lang="ts">
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
  <div id="sec">
  <ul>
    <li>
      <span class="fa fa-code"></span>
<font-awesome-icon icon="fa-brands fa-html5" />
      <p class="title01">HTML</p>
      <p>使用期間：2年</p>
    </li>
    <li>
      <span class="fa fa-code"></span>

      <p class="title01">タイトル1</p>
      <p>この部分はダミーテキスト。この部分はダミーテキスト。この部分はダミーテキスト。この部分はダミーテキスト。この部分はダミーテキスト。この部分はダミーテキスト。この部分はダミーテキスト。この部分はダミーテキスト。</p>
    </li>
  </ul>
</div>
  
  <p>CSS</p>
  <p>使用期間：2年</p>
  <p>Javascript</p>
  <p>使用期間：1年半</p>
  <p>React</p>
  <p>使用期間：半年</p>
  <p>Vue</p>
  <p>使用期間：2カ月</p>
  <p>Java</p>
  <p>使用期間：1年</p>
  <p>ITパスポート</p>
  <p>取得2020年4月〜</p>
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

.period {
  font-size:16px;
}

/*--------------------------------------
  カード型_03
--------------------------------------*/
#sec {
  padding: 0;
  background: #fff;
  text-align: center;
  word-wrap: break-word;
}

#sec ul {
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  border: none;
}
#sec ul li {
  padding: 40px;
  width: 320px;
  transition: box-shadow 0.3s;
}
#sec ul li:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#sec ul li:hover span {
  color: #63B7E6;
}
#sec ul li:hover p {
  color: #555;
}
#sec ul li:hover .title01 {
  color: #63B7E6;
}
#sec ul li:hover .title01:after {
  width: 25px;
}
#sec ul li span {
  font-size: 2.6em;
  display: block;
  transition: color 0.3s;
  color: #A2A2A2;
}
#sec ul li span:before, #sec ul li span:after {
  position: static;
}
#sec ul li .title01 {
  color: #6f6f6f;
  display: inline-block;
  font-size: 24px;
  font-weight: 100;
  transition: color 0.3s;
}
#sec ul li .title01:after {
  content: "";
  position: relative;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  display: block;
  width: 40px;
  height: 1px;
  background: #6f6f6f;
  transition: width 0.3s;
}
#sec ul li p {
  color: #A2A2A2;
  text-align: left;
  text-indent: 1em;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;
}
</style>