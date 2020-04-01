<template>
  <div>
    <GridRow>
      <GridItem :sm="12">
        <span
          class="indigo-text"
          style="font-size:30px;display:inline-block;margin: 20px 0px;"
        >{{products.length>0 && products[0].category.name}} Tools</span>
      </GridItem>
      <GridItem :sm="12" :md="6" v-for="product in products" :key="product.id">
        <Product :product="product" />
      </GridItem>
    </GridRow>
  </div>
</template>

<script>
import Product from "./Product";
export default {
  components: {
    Product
  },
  props: {
    products: Array
  }
};
</script>