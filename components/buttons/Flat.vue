<template>
  <button :class="classes" @click="$emit('click')">
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
        "btn waves-effect waves-light btn-flat flat-btn",
        this.$props.className
      ]);
    }
  }
};
</script>
<style scoped>
.flat-btn:hover {
  background-color: #3f51b5;
  color: #fff;
}
.flat-btn {
  color: #3f51b5;
  font-weight: 500;
}
</style>
