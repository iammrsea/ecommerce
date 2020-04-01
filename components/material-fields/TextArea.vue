<template>
  <div class="input-field">
    <textarea
      :value="value"
      :id="id"
      class="materialize-textarea"
      @input="$emit('input',$event.target.value)"
    ></textarea>
    <label :for="id" :class="className">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String,
    className: {
      type: String,
      default: "active"
    }
  }
};
</script>