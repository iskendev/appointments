<template lang='pug'>
  label(:for="labelFor") {{ text }}
    mandatory-sign(v-if="isMandatory")
</template>

<script>
  import MandatorySign from '../common/MandatorySign'
  export default {
    components: {
      MandatorySign
    },
    props: {
      labelFor: {
        type: String,
        required: true,
        default: () => ''
      },

      text: {
        type: String,
        required: true,
        default: () => 'Label required'
      },

      isMandatory: {
        type: Boolean,
        required: false,
        default: () => false
      }
    }
  }
</script>

<style lang="scss">
  label {
    font-size: 12px;
    font-weight: 600;
  }
</style>