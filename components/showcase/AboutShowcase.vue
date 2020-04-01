<template>
  <div class="showcase">
    <div id="showcase-image">
      <img :src="src" alt srcset />
    </div>
    <div class="text">
      <span id="main">We Do Your Farm, Inc</span>
      <span id="submain">A Family-run Business Since 1980</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["src"]
};
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
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
}
.text {
  position: absolute;
  top: 40%;
  left: 50%;
  font-weight: 600;

  transform: translate(-50%, -50%);
  text-transform: capitalize; /* z-index: 999999;
*/
}
.text #main {
  display: block;
  font-size: 50px;
  margin-bottom: 10px;
}
.text #submain {
  display: block;
  font-size: 30px;
}
@media only screen and (max-width: 766px) {
  #showcase-image {
    height: 200px;
    font-weight: 400;
  }
}
@media only screen and (max-width: 999px) {
  .text #main {
    font-size: 35px;
  }
  .text #submain {
    font-size: 20px;
    letter-spacing: 0.1rem;
  }
}
@media only screen and (max-width: 691px) {
  .text #main {
    font-size: 25px;
  }
}
@media only screen and (max-width: 512px) {
  .text #main {
    font-size: 22px;
  }
}
@media only screen and (max-width: 454px) {
  .text #main {
    font-size: 21px;
  }
}
@media only screen and (max-width: 435px) {
  .text #main {
    font-size: 18px;
  }
  .text #submain {
    font-size: 15px;
  }
}
</style>
