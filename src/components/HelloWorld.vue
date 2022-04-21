<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://github.com/mizushin53" target="_blank">
      GitHub
    </a>
    |
    <a href="https://twitter.com/mzsn53" target="_blank">Twitter</a>
  </p>

</template>

<style scoped>
icons {
  size:30px
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
