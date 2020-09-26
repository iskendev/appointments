<template lang='pug'>
  .make-appointments-info__note
    Label(labelFor="appointment-note" text="Note" isMandatory=false)
    textarea(id="appointment-note", rows="5" @input="takeNote" v-model="note")
</template>

<script>
import Label from '../common/Label'
export default {
  components: {
    Label
  },
  data: () => ({
    note: ''
  }),
  methods: {
    takeNote(e) {
      this.$emit('takeNote', e.target.value)
    },
    clearField: function(value) {
      this.note = value;
    },
  }
};
</script>