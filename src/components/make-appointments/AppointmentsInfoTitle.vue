<template lang='pug'>
  .make-appointments-info__title
    Label(labelFor="appointment-title" text="Appointment title" isMandatory=true)
    input(type="text" id="appointment-title" v-model="title" @input='typeTitle' :class="{ 'make-appointments-info__title--error-border': error }")
    span.make-appointments-info__title--error(v-if="error") This field is required
</template>

<script>
import Label from '../common/Label'
export default {
  components: {
    Label
  },
  props: {
    error: {
      type: Boolean,
      required: true,
      default: () => false
    }
  },
  data: () => ({
    title: ''
  }),
  methods: {
    typeTitle(e) {
      this.$emit('typeTitle', e.target.value)
    },
    clearField: function(value) {
      this.title = value;
    },
  }
};
</script>