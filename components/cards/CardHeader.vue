<template functional>
  <div :class="parent.$clsx(['card-title', props.className])">
    <slot />
  </div>
</template>
