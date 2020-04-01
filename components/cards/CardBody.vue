<template functional>
  <div :class="parent.$clsx(['card-content', props.className])">
    <slot />
  </div>
</template>
