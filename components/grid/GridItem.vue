<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import clsx from "clsx";
export default {
  props: {
    sm: Number,
    md: Number,
    lg: Number,
    smOffset: Number,
    mdOffset: Number,
    lgOffset: Number,
    className: String
  },
  computed: {
    classes() {
      const {
        sm,
        md,
        lg,
        smOffset,
        mdOffset,
        lgOffset,
        className
      } = this.$props;
      const s = `s${sm}`;
      const m = `m${md}`;
      const l = `l${lg}`;
      const sOffset = `offset-s${smOffset}`;
      const mOffset = `offset-m${mdOffset}`;
      const lOffset = `offset-l${lgOffset}`;
      return clsx([
        "col",
        { [s]: sm },
        { [m]: md },
        { [l]: lg },
        { [sOffset]: smOffset },
        { [mOffset]: mdOffset },
        { [lOffset]: lgOffset },
        className
      ]);
    }
  }
};
</script>
