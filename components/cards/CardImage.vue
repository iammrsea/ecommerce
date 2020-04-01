<template functional>
  <div :class="parent.$clsx(['card-image', props.className])">
    <img :src="props.src" :alt="props.text" />
    <slot />
  </div>
</template>
