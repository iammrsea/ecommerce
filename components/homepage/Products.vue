<template>
  <GridRow>
    <GridItem :sm="12">
      <Card>
        <CardBody>
          <CardHeader>
            <span style="font-weight:600" class="green-text">Products</span>
          </CardHeader>
          <GridRow>
            <GridItem :sm="12" :md="8" v-if="images.length>0">
              <Carousel :images="images" :showIndicators="false" />
            </GridItem>
            <GridItem :sm="12" :md="4" class="categories-grid-item">
              <GridRow>
                <GridItem :sm="12" class="green-text">
                  <span style="font-weight:700">Product Categories</span>
                </GridItem>
                <GridItem
                  :sm="12"
                  v-for="category in categories"
                  :key="category.key"
                  class="category-anchor"
                >
                  <nuxt-link :to="category.to">{{ category.name }}</nuxt-link>
                </GridItem>
              </GridRow>
            </GridItem>
          </GridRow>
        </CardBody>
        <CardAction :className="'right-align shop'">
          <nuxt-link to="/products">Go Shopping...</nuxt-link>
        </CardAction>
      </Card>
    </GridItem>
  </GridRow>
</template>
<script>
import Carousel from "~/components/carousel/Carousel";
export default {
  components: {
    Carousel
  },
  props: {
    categories: Array,
    images: Array
  }
};
</script>

<style scoped>
.categories-grid-item {
  border-left: solid green 3px;
}
.category-anchor a {
  color: green;
}
.shop a {
  color: blue !important;
  text-transform: capitalize !important;
}
@media only screen and (max-width: 600px) {
  .categories-grid-item {
    margin-left: 30px !important;
    margin-top: 20px !important;
  }
}
</style>
