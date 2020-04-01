<template functional>
  <div :class="parent.$clsx(['collection-item', props.className])">
    <slot />
  </div>
</template>
