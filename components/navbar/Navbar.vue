<template>
  <div :id="id">
    <div class="navbar-fixed">
      <nav class="nav-wrapper" :class="[blueNav || !id ? 'indigo' : 'transparent']">
        <div>
          <div class="container">
            <nuxt-link to="/" class="brand-logo hide-on-med-and-down link">
              <!-- <img src="/img/tenlogo.jpg" alt class="logo" /> -->
              WDYF
            </nuxt-link>

            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="fas fa-bars menu"></i>
            </a>

            <ul class="right hide-on-med-and-down">
              <template v-if="shownavItems">
                <li v-for="(route, i) in routes" :key="i">
                  <nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
                </li>
              </template>
            </ul>
            <ul v-show="!shownavItems">
              <li
                class="right tooltipped"
                data-position="left"
                data-tooltip="Checkout"
                style="position:relative"
              >
                <span class="cart" @click="checkout">
                  <FontAwesome :className="'fas fa-shopping-cart'" id="icon">
                    <span id="badge">{{ productsCount }}</span>
                  </FontAwesome>
                </span>
              </li>
              <li class="right">
                <SearchForm />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li @click="closeNav" v-for="(route, i) in routes" :key="i">
        <nuxt-link :to="route.path" class="waves-effect waves-green waves-ripple">
          <FontAwesome :className="route.icon" />
          {{ route.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "~/routes";
import SearchForm from "~/components/homepage/SearchForm";
import Alert from "~/components/alert/Alert";
export default {
  components: {
    SearchForm
  },
  props: ["id"],
  data() {
    return {
      routes: [],
      blueNav: false
    };
  },
  computed: {
    shownavItems() {
      return this.$route.path !== "/products";
    },
    productsCount() {
      return this.$store.getters.productsCount;
    }
  },
  mounted() {
    this.$sideNav = this.$initMaterialize("sidenav");
    this.$tip = this.$initMaterialize("tooltipped");
    document.onscroll = this.setBlueNav;
  },
  methods: {
    closeNav() {
      this.$sideNav.close();
    },
    checkout() {
      console.log("cart ", this.$store.state.cart);
      console.log("total amount ", this.$store.getters.totalAmount);
      if (this.productsCount < 1) {
        Alert({
          message: "You have nothing in your cart to checkout",
          color: "orange"
        });
      } else {
        this.$tip[0].close();
        this.$router.push("/checkout");
        console.log("checking out...");
      }
    },
    setBlueNav(e) {
      const scrollTop = e.target.scrollingElement.scrollTop;
      const scrollWidth = e.target.scrollingElement.scrollWidth;
      if (scrollTop > 400 && scrollWidth < 412) {
        this.blueNav = true;
      } else if (scrollTop > 725 && scrollWidth > 412) {
        this.blueNav = true;
      } else this.blueNav = false;
    }
  },
  created() {
    this.routes = routes;
  }
};
</script>
<style >
#badge {
  color: green;
  font-size: 18px;
  position: absolute;
  top: 30%;
  left: 53%;

  transform: translate(-50%, -50%);
}
#icon::before {
  position: absolute;
  display: inline-block;
  /* border: red solid; */
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}

.cart {
  padding-left: 20px;
  cursor: pointer;
  display: block;

  margin-left: 10px;
}
.sidenav li > a {
  color: #536dfe !important;
}
.sidenav li > a > i {
  color: #536dfe !important;
}
</style>
