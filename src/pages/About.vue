<script>
export default {
  data() {
    return {
      profileItems: [
        {
          id: 1,
          title: '名称:',
          description: 'MIZUSHIN'
        },
        {
          id: 2,
          title: '所在:',
          description: '埼玉県'
        },
        {
          id: 3,
          title: '職業:',
          description: '(転職活動中)'
        },
        {
          id: 4,
          title: '私について:',
          description: '埼玉県出身のエンジニア\n2020年からSIerに入社し、約2年ほどIT業界に携わる\n2022年の3月よりフルスタックエンジニアになることを目標に転職活動中(2022/4現在)'
        }
      ],
      careerItems: [
        {
          id: 1,
          period: '2020/4~2022/2',
          title: 'SIer',
          description: '新卒でSIerへ入社。主に公共機関向けに開発、保守・運用を担当\nまた社内の案件でWordpressとReact Nativeでの開発も経験'
        },
      ],
      skillItems: [
        {
          id: 1,
          title: 'HTML',
          icon: '',
          description: '',
          category: 'other'
        },
        {
          id: 2,
          title: 'CSS',
          icon: '',
          description: '',
          category: 'other'
        },
        {
          id: 3,
          title: 'Javascript',
          icon: '',
          description: '',
          category: 'programmingLanguage'
        },
        {
          id: 4,
          title: 'React',
          icon: '',
          description: '',
          category: 'library'
        },
        {
          id: 5,
          title: 'Java',
          icon: '',
          description: '',
          category: 'programmingLanguage'
        },
        {
          id: 6,
          title: 'SQL',
          icon: '',
          description: '',
          category: 'other'
        },
        {
          id: 7,
          title: 'Git',
          icon: '',
          description: '',
          category: 'other'
        },
        {
          id: 8,
          title: 'Vue',
          icon: '',
          description: '',
          category: 'library'
        },
      ]
    }
  }
}
</script>

<template>

  <div>
    <h1>About</h1>
  </div>

  <div class="section">
    <h2>プロフィール</h2>
    <template v-for="item in profileItems" :key="item.id">
      <dl>
        <dt>{{ item.title }}</dt>
        <dd>{{ item.description }}</dd>
      </dl>
    </template>
  </div>

  <div class="section">
    <h2>経歴</h2>
    <template v-for="item in careerItems" :key="item.id">
      <dl>
        <dt>
          <p class="period">{{ item.period }}</p>
          <p class="company">{{ item.title }}</p>
        </dt>
        <dd>{{ item.description }}</dd>
      </dl>
    </template>
  </div>

  <div class="section">
    <h2>スキル</h2>
    <h3>プログラミング言語</h3>
    <template v-for="item in skillItems" :key="item.id">   
      <dl v-if="item.category === 'programmingLanguage'">
        <dt>
          {{ item.title }}
        </dt>
        <dd>{{ item.description }}</dd>
      </dl>
    </template>
    <h3>ライブラリ</h3>
    <template v-for="item in skillItems" :key="item.id">      
      <dl v-if="item.category === 'library'">
        <dt>
          {{ item.title }}
        </dt>
        <dd>{{ item.description }}</dd>
      </dl>
    </template>
    <h3>その他</h3>
    <template v-for="item in skillItems" :key="item.id"> 
      <dl v-if="item.category === 'other'">
        <dt>
          {{ item.title }}
        </dt>
        <dd>{{ item.description }}</dd>
      </dl>
    </template>
  </div>

</template>

<style>
h1 {
  margin: 0px;
  font-size: clamp(20px, 2vw, 40px);
}

h2 {
  font-size: clamp(15px, 2vw, 30px);
  text-align: left;
  border-bottom: solid 2px;
}

h3 {
  font-size: clamp(12px, 2vw, 18px);
  margin: 1px;
  text-align: left;
}

.section {
  margin: 0 auto;
  max-width: 700px;
}

dl {
  margin: 10px 15px 10px 15px;
  display: flex;
  border-bottom: dotted 1px;
}
dt {
  font: bold;
  font-size: clamp(14px, 2vw, 18px);
  text-align: left;
  width: 30%;
}
dd {
  margin:0;
  text-align: left;
  width: 70%;
  white-space: pre-line;
  font-size: clamp(11px, 1vw, 16px);
}

.period {
  margin: 0;
  font-size: 0.6vw;
}
.company {
  font: bold;
  margin: 0;
  font-size: clamp(20px, 2vw, 22px);
}
</style>













