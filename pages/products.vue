<template>
  <div>
    <Navbar />
    <Container>
      <div v-if="productsByCategories && productsByCategories.length > 0">
        <ProductsByCategory
          v-for="(products, i) in productsByCategories"
          :key="i"
          :products="products"
        />
      </div>
      <LinearProgress v-if="loading" />
      <div v-if="hasMore" class="right-align" style="margin-bottom:20px">
        <Flat @click="loadMore">Load More...</Flat>
      </div>
    </Container>
  </div>
</template>

<script>
import Navbar from "~/components/navbar/Navbar";
import ProductsByCategory from "~/components/store/ProductsByCategory";
export default {
  components: {
    ProductsByCategory,
    Navbar
  },
  computed: {
    productsByCategories() {
      return this.$store.getters.productsByCategories;
    },
    hasMore() {
      return this.$store.state.meta.hasNext;
    },
    loading() {
      return this.$store.state.loading;
    },
    error() {
      this.$store.state.error;
    }
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadMore");
    }
  }
};
</script>
