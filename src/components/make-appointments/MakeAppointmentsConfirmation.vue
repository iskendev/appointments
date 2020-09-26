<template lang="pug">
.make-appointments-confirm
  h1 Confirm an appointment
  .make-appointments-confirm__static-info
    div(v-for="(info, i) in infos"
      :key="i"
      :class="`make-appointments-confirm__static-info--${info.value.toLowerCase()}`")
      span {{ info.value }}: {{ appointment[info.value.toLowerCase()] }}
  .make-appointments-confirm__btns
    button(@click="back") Back
    button(@click="create") Create
</template>

<script>
export default {
  data: () => ({
    infos: [
      { value: "Date" },
      { value: "Title" },
      { value: "Note" },
    ],
  }),
  computed: {
    appointment() {
      return this.$store.getters.appointment;
    },
  },
  methods: {
    back() {
      this.$emit("setCurrentComponent", "MakeAppointmentsInfo");
    },
    create() {
      this.$store.commit('createAppointment');
      this.$router.push('/')
    }
  },
};
</script>