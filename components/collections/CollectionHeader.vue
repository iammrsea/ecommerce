<template functional>
  <div :class="parent.$clsx(['collection-header', props.className])">
    <slot />
  </div>
</template>
