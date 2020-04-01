<template>
  <button :class="classes">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    className: String
  },
  computed: {
    classes() {
      return this.$clsx([
        "btn-floating waves-effect waves-light",
        this.$props.className
      ]);
    }
  }
};
</script>
