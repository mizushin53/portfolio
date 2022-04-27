<template>
<header>
  <h1>about</h1>
</header>
  <template 
  v-for="item in items"
  :key="item.id">
    <dl>
      <dt>{{ item.name }}</dt>
      <dd>{{ item.description }}</dd>
    </dl>
  </template> 
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'nameTest',
          description: 'descriptionTest'
        },
        {
          id: 2,
          name: 'nameTest2',
          description: 'descriptionTest2'
        },
        {
          id: 3,
          name: 'nameTest3',
          description: 'descriptionTest3'
        },

      ]

    }
  }
}
</script>