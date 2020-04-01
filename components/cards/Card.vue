<template functional>
  <div :class="parent.$clsx(['card', props.className])">
    <slot />
  </div>
</template>
