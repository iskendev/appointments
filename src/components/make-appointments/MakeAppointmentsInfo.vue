<template lang='pug'>
  .make-appointments-info
    h1 Create an appointment
    appointments-info-date-picker(ref="datePicker" @pickDate="pickDate" :error="errors.date")
    appointments-info-title(ref="titlePicker" @typeTitle="typeTitle" :error="errors.title")
    appointments-info-note(ref="notePicker" @takeNote='takeNote')
    .make-appointments-info__btns
      button(@click="back") Back
      button(@click="next") Next
</template>

<script>
import AppointmentsInfoDatePicker from "./AppointmentsInfoDatePicker";
import AppointmentsInfoTitle from "./AppointmentsInfoTitle";
import AppointmentsInfoNote from "./AppointmentsInfoNote";
export default {
  components: {
    AppointmentsInfoDatePicker,
    AppointmentsInfoTitle,
    AppointmentsInfoNote,
  },
  data: () => ({
    date: '',
    title: '',
    note: '',
    errors: {
      date: false,
      title: false
    }
  }),
  methods: {
    pickDate(date) {
      this.date = this.dateFormatter(date)
    },
    typeTitle(title) {
      this.title = title
    },
    takeNote(note) {
      this.note = note
    },
    dateFormatter(value) {
      const options = {}
      options.day = '2-digit'
      options.month = 'long'
      options.year = 'numeric'
      return new Intl.DateTimeFormat('en-GB', options).format(new Date(value))
    },
    back() {
      this.$router.push('/')
    },
    next() {
      if (this.validateFields()) {
        const { date, title, note } = this
        const appointment = { date, title, note }
        this.$store.commit('goToConfirm', appointment)
        this.$emit('setCurrentComponent', 'MakeAppointmentsConfirmation')
      }
    },
    validateFields() {
      if (this.date == '') {
        this.errors.date = true
        return
      }

      if (this.title == '') {
        this.errors.title = true
        return
      }
      return true
    },
    clearFields() {
      this.$refs.datePicker.clearField('')
      this.$refs.titlePicker.clearField('')
      this.$refs.notePicker.clearField('')
    }
  },
  watch: {
    date() {
      if (this.date !== '') this.errors.date = false
    },
    title() {
      if (this.title !== '') this.errors.title = false
    }
  }
};
</script>