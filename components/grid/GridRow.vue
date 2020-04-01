<template functional>
  <div :class="parent.$clsx(['row', props.className])">
    <slot />
  </div>
</template>
