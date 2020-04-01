<template>
  <div class="input-field">
    <input :type="type" :id="id" @input="$emit('input', $event.target.value)" :value="value" />
    <label :for="id" :class="className">{{ label }}</label>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
    type: String,
    label: String,
    value: String,
    className: {
      type: String,
      default: "active"
    }
  }
};
</script>
