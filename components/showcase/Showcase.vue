<template>
  <div class="showcase">
    <div id="showcase-image">
      <img src="~/assets/images/wedoyourfarm.jpg" alt="" srcset="" />
    </div>
    <div class="text">
      <h5>
        Welcome to We Do Your Farm
      </h5>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.showcase {
  position: relative;
  text-align: center;
  color: #fff; /* color:
#fff; */ /* color: #2196f3; */
}
#showcase-image img {
  width: 100%;
  height: 100%;
}
#showcase-image {
  width: 100%;
  height: 500px;
  object-fit: contain;
  margin-bottom: 20px;
}
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase; /* z-index: 999999;
*/
}
@media only screen and (max-width: 766px) {
  #showcase-image {
    height: 400px;
  }
}
</style>
