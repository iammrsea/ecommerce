<template functional>
  <i :class="parent.$clsx(['material-icons', props.className])" :id="props.id">
    <slot />
  </i>
</template>
