<template functional>
  <div :class="parent.$clsx(['collection', props.className])">
    <slot />
  </div>
</template>
