<template>
  <div>
    <Navbar id="main-header" />

    <Container>
      <Products :categories="categories" :images="productImages" />
      <Services />
    </Container>
  </div>
</template>

<script>
import Navbar from "~/components/navbar/Navbar";
import Products from "~/components/homepage/Products";
import Services from "~/components/homepage/Services";
import Showcase from "~/components/showcase/Showcase";

export default {
  components: {
    Products,
    Showcase,
    Services,
    Navbar
  },
  computed: {
    productImages() {
      return this.$store.getters.productImages;
    }
  },

  data() {
    return {
      categories: [
        { id: 1, name: "Soil Preparation", to: "/products" },
        { id: 2, name: "Seed Sowing", to: "/products" },
        { id: 3, name: "Harvesting", to: "/products" },
        { id: 4, name: "Weed Removal", to: "/products" }
      ]
    };
  }
};
</script>

<style>
.row-container {
  background: red;
  padding: 20px;
  margin-top: 20px;
}
#main-header {
  background: url("/img/wedoyourfarm.jpg");
  background-size: cover;
  min-height: 800px;
  background-position: center;
  position: relative;
}
/* nav ul a {
  text-transform: uppercase;
  font-weight: 500;
} */
#main-header::after {
  content: "Welcome to we do your farm";
  position: absolute;
  top: 50%;
  left: 50%;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  font-size: 40px;
  text-align: center;
  color: #fff;
}
@media screen and (max-width: 670px) {
  #main-header {
    min-height: 500px;
  }
  #main-header::after {
    font-size: 25px;
  }
}
</style>
