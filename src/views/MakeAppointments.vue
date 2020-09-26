<template lang='pug'>
  div.make-appointments
    keep-alive
      component(:is="currentComponent" @setCurrentComponent="setCurrentComponent")
</template>

<script>
  import MakeAppointmentsInfo from '../components/make-appointments/MakeAppointmentsInfo'
  import MakeAppointmentsConfirmation from '../components/make-appointments/MakeAppointmentsConfirmation'

  export default {
    components: {
      MakeAppointmentsInfo,
      MakeAppointmentsConfirmation
    },
    data: () => ({
      currentComponent: 'MakeAppointmentsInfo'
    }),
    methods: {
      setCurrentComponent(component) {
        this.currentComponent = component
      }
    }
  }
</script>