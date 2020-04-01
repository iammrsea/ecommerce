<template functional>
  <div :class="parent.$clsx(['card-reveal', props.className])">
    <slot />
  </div>
</template>
