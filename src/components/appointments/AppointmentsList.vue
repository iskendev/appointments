<template lang="pug">
  .appointments-list
    appointments-list-titles()
    appointments-list-values
</template>

<script>
import AppointmentsListTitles from './AppointmentsListTitles'
import AppointmentsListValues from './AppointmentsListValues'
export default {
  components: {
    AppointmentsListTitles,
    AppointmentsListValues
  }
};
</script>