<template>
  <Card>
    <CardBody>
      <CardHeader>
        <span id="services" class="green-text" style="font-weight:600">Our Services</span>
      </CardHeader>
      <p
        style="padding:20px; padding-left:0px;font-size:20px"
      >We could help you keep your farms in great shape with our team of experts for a bountiful harvest.</p>

      <GridRow>
        <GridItem :sm="12">
          <Carousel :images="images" />
        </GridItem>
      </GridRow>
    </CardBody>
    <CardAction :className="'right-align shop'">
      <nuxt-link to="/contact">Contact Us...</nuxt-link>
    </CardAction>
  </Card>
</template>
<script>
import Carousel from "~/components/carousel/Carousel";
export default {
  components: {
    Carousel
  },
  data() {
    return {
      images: [
        {
          id: 1,
          src: "/img/services/service1.jpg"
        },
        {
          id: 3,
          src: "/img/services/service3.jpg"
        },
        {
          id: 4,
          src: "/img/services/service4.jpg"
        },
        {
          id: 5,
          src: "/img/services/service5.jpg"
        },
        {
          id: 6,
          src: "/img/services/service6.jpg"
        },
        {
          id: 7,
          src: "/img/services/service7.jpg"
        },
        {
          id: 8,
          src: "/img/services/service8.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.shop a {
  color: blue !important;
  text-transform: capitalize !important;
}
</style>