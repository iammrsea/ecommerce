<template>
  <div class="carousel carousel-slider center">
    <CarouselItem v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
export default {
  components: {
    CarouselItem
  },
  props: {
    images: Array,
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log("indicators?", this.$props.showIndicators);
    this.$slider = this.$initMaterialize("carousel", {
      fullWidth: true,
      indicators: !!this.$props.showIndicators
    });
    this.$sliderInterval = setInterval(() => {
      this.$slider.forEach(slider => {
        slider.next();
      });
    }, 5000);
  },
  destroyed() {
    delete this.$slider;
    clearInterval(this.$sliderInterval);
  }
};
</script>
