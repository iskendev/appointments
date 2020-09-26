<template lang='pug'>
  .make-appointments-info__date-picker
    Label(labelFor="appointment-date" text="Pick a date" isMandatory=true)
    datepicker(format="dd MMMM yyyy"
      id="appointment-date"
      @selected="pickDate"
      v-model="date"
      :input-class="{ 'make-appointments-info__title--error-border': error }")
    span.make-appointments-info__date-picker--error(v-if="error") This field is required
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Label from '../common/Label'

export default {
  components: {
    Label,
    Datepicker
  },
  props: {
    error: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  data: () => ({
    date: ''
  }),
  methods: {
    pickDate(e) {
      this.$emit('pickDate', e)
    },
    clearField: function(value) {
      this.date = value;
    },
  }
};
</script>