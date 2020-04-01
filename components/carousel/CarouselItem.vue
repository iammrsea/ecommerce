<template functional>
  <div class="carousel-item" href="#one!">
    <img :src="props.image.src" :alt="props.image.text" class="carousel-image" />
  </div>
</template>
<style scoped>
.carousel-image {
  width: 100% !important;
  height: 400px;
  object-fit: contain !important;
}
@media only screen and (max-width: 766px) {
  .carousel-image {
    height: auto !important;
  }
}
</style>
