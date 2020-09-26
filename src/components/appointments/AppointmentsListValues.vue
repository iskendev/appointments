<template lang="pug">
  .appointments-list__values
    .appointments-list__values--item(v-for="(appointment, i) in appointments", :key="i")
      .appointments-list__values--item-date
        span(:class="{'appointments-list__values--item-completed': appointment.isCompleted }") {{ appointment.date }}
      .appointments-list__values--item-title
        span(:class="{'appointments-list__values--item-completed': appointment.isCompleted }") {{ appointment.title }}
      .appointments-list__values--item-note
        span(:class="{'appointments-list__values--item-completed': appointment.isCompleted }") {{ appointment.note ? appointment.note: 'No note taken' }}
      .appointments-list__values--item-complete
        input(type="checkbox" :checked="appointment.isCompleted" @change="markAsCompleted(i)")
      .appointments-list__values--item-remove
        button(@click="deleteAppointment(i)") Delete
</template>

<script>
export default {
  methods: {
    markAsCompleted(index) {
      this.$store.commit('markAsCompleted', index)
      this.reloadPage()
    },
    deleteAppointment(index) {
      let shouldDelete = confirm("Do you want to delete an appointment?")
      if (shouldDelete) {
        this.$store.commit('deleteAppointment', index)
        this.reloadPage()
      }
    },
    reloadPage() {
      location.reload()
      return false
    }
  },
  computed: {
    appointments() {
      const appointments = JSON.parse(localStorage.getItem("appointments"))
      return appointments !== null && appointments.length ? appointments : []
    },
  }
};
</script>