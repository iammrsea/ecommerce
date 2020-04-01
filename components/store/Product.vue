<template>
  <Card>
    <CardBody :className="'product-card-content'">
      <CardHeader :className="'indigo-text'">{{product.name}}</CardHeader>
      <CardImage :src="product.imageUrl" :className="'product-card-image'" />
      <p>{{product.description}}</p>
    </CardBody>
    <CardAction>
      <div style="display:flex;justify-content:space-between">
        ${{ product.price }}
        <Flat @click="addToCart">Add To Cart</Flat>
      </div>
    </CardAction>
  </Card>
</template>
<script>
export default {
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.$props.product);
    }
  }
};
</script>
<style >
.product-card-image img {
  width: 100% !important;
  height: 100px;
  object-fit: contain !important;
}
.product-card-content {
  height: 325px;
}
@media only screen and (max-width: 790px) {
  .product-card-content {
    height: 280px;
  }
}
</style>