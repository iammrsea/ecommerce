<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/homepage/Footer";
// import data from "../data.json";

export default {
  components: {
    Footer
  },
  created() {
    this.$axios
      .$get("products", {
        params: {
          relation: true
        }
      })
      .then(res => {
        this.$store.commit("setProducts", res.data);
        this.$store.commit("setMeta", res.meta);
      })
      .catch(e => console.log("error", e));
  }
  // created() {

  //   // this.$store.commit("setProducts", data.products);
  // }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  padding: 0px;
}
</style>
