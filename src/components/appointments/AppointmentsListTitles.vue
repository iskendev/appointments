<template lang="pug">
  .appointments-list__titles
    span(v-for="title in titles" :key="title") {{ title }}
</template>

<script>
  export default {
    data: () => ({
      titles: ['Date', 'Title', 'Note', 'Complete', 'Delete']
    }),
  }
</script>