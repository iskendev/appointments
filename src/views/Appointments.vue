<template lang="pug">
  <div class="appointments">
    <h1>Appointments</h1>
    appointments-list(v-if="appointments.length")
    no-appointments(v-else)
    router-link.appointments-link(to="/make-appointments") Create an appointment
  </div>
</template>

<script>
import AppointmentsList from '../components/appointments/AppointmentsList'
import NoAppointments from '../components/appointments/NoAppointments'
export default {
  components: {
    AppointmentsList,
    NoAppointments
  },
  computed: {
    appointments() {
      const appointments = JSON.parse(localStorage.getItem('appointments'))
      return (appointments !== null && appointments.length) ? appointments : []
    }
  }
};
</script>