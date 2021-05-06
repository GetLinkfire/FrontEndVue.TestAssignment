<template>
  <div class="form-group">
    <label for="input-2">{{ label }}</label>
    <input class="input-block" type="text" id="input-2" @input="(event) => $emit('input', event.target.value)">
  </div>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>
