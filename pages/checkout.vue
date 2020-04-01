<template>
  <div>
    <Navbar />
    <Container v-if="shouldDisplay">
      <GridRow>
        <GridItem :sm="12" style="margin-top:40px">
          <Card>
            <CardBody>
              <CardHeader :className="'center-align indigo-text checkout'">
                <span>Checkout</span>
              </CardHeader>
              <Collection>
                <CollectionItem
                  v-for="(product, i) in products"
                  :key="product.name + i"
                >
                  {{ product.name }}
                  <span class="right">
                    <Flat @click="decreaseQty(product)">-</Flat>
                    {{ product.qty }}
                    <Flat @click="increaseQty(product)">+</Flat>
                  </span>
                </CollectionItem>
                <CollectionItem>
                  Total Amount
                  <span class="right total-amount">${{ totalAmount }}</span>
                </CollectionItem>
              </Collection>
            </CardBody>
            <CardAction :className="'right-align'">
              <Flat class="right-align" @click="handleProceed">Proceed</Flat>
            </CardAction>
          </Card>
        </GridItem>
      </GridRow>
    </Container>
  </div>
</template>

<script>
import Navbar from "~/components/navbar/Navbar";
export default {
  components: {
    Navbar
  },
  asyncData({ store }) {
    return { products: store.getters.productsInCart };
  },

  created() {
    if (this.productsCount < 1) {
      this.$router.go(-1);
    }
  },
  computed: {
    shouldDisplay() {
      return this.productsCount > 0;
    },
    productsCount() {
      return this.$store.getters.productsCount;
    },
    totalAmount() {
      return this.$store.getters.totalAmount;
    }
  },
  watch: {
    shouldDisplay(newVal, oldVal) {
      if (!newVal) {
        this.$router.go(-1);
      }
    }
  },
  methods: {
    increaseQty(product) {
      product.qty = product.qty + 1;
      this.$store.commit("addToCart", product);
    },
    decreaseQty(product) {
      if (product.qty === 0) return;
      product.qty = product.qty - 1;
      this.$store.commit("removeFromCart", product);
    },
    handleProceed() {
      const cart = this.$store.state.cart;
      localStorage.setItem("loggedIn_user_cart", JSON.stringify(cart));
      localStorage.setItem("user_from_store", JSON.stringify(cart));
      window.location = "/dashboard";
      //   this.$router.push("/admin");
    }
  }
};
</script>
<style scoped>
.total-amount {
  display: inline-block;
  margin-right: 20px;
}
.checkout {
  font-weight: 600;
}
</style>
