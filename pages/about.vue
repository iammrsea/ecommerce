<template>
  <div>
    <Navbar />
    <AboutShowcase src="/img/about.jpg" />
    <Container>
      <GridRow>
        <GridItem :sm="12">
          <h5>Quality Farming, Bountiful Harvest</h5>
          <Divider />
        </GridItem>
        <GridItem :sm="12">
          <h6>Our Orgins</h6>
          <p>Founded by Petterson Farmer in 1980</p>
        </GridItem>
      </GridRow>
    </Container>
  </div>
</template>
<script>
import AboutShowcase from "~/components/showcase/AboutShowcase";
import Navbar from "~/components/navbar/Navbar";
export default {
  components: {
    AboutShowcase,
    Navbar
  }
};
</script>

<style></style>
