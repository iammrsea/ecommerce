<template functional>
  <div :class="parent.$clsx(['card-action', props.className])">
    <slot />
  </div>
</template>
