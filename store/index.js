import Alert from "../components/alert/Alert";
export const state = () => ({
  products: [],
  sortedProducts: [],
  meta: {},
  cart: {},
  loading: false
});

export const mutations = {
  addToCart(state, payload) {
    const productName = payload.name;
    const price = payload.price;
    if (state.cart[productName]) {
      const amount = state.cart[productName].amount + price;
      const qty = state.cart[productName].qty + 1;
      state.cart = {
        ...state.cart,
        [productName]: { amount, qty, price }
      };
    } else {
      state.cart = {
        ...state.cart,
        [productName]: { amount: price, qty: 1, price }
      };
    }
  },
  removeFromCart(state, product) {
    const productName = product.name;
    const price = product.price;
    if (state.cart[productName].qty === 0) {
      return;
    }
    const amount = state.cart[productName].amount - price;
    const qty = state.cart[productName].qty - 1;
    state.cart = {
      ...state.cart,
      [productName]: { amount, qty, price }
    };
  },
  setProducts(state, products) {
    if (state.products.length > 0) {
      state.products = [...state.products, ...products];
      state.sortedProducts = [...state.sortedProducts, ...products];
    } else {
      state.products = products;
      state.sortedProducts = products;
    }
  },
  sortProducts(state, searchPayload) {
    if (searchPayload === "" || searchPayload === undefined) {
      state.sortedProducts = state.products;
    } else {
      let searchTerm = searchPayload.toLowerCase();
      let filteredProducts = state.products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
      });
      state.sortedProducts = filteredProducts;
    }
  },
  setMeta(state, meta) {
    state.meta = meta;
  },
  setLoading(state, loadingState) {
    state.loading = loadingState;
  }
};

export const actions = {
  loadMore({ commit, state }) {
    commit("setLoading", true);
    this.$axios
      .$get("products", {
        params: {
          relation: true,
          cursor: state.meta.nextCursor
        }
      })
      .then(res => {
        commit("setLoading", false);
        commit("setProducts", res.data);
        commit("setMeta", res.meta);
      })
      .catch(e => {
        commit("setLoading", false);
        Alert({ message: e.message, color: "red" });
      });
  },
  sendEmail({ commit }, email) {
    commit("setLoading", true);
    this.$axios
      .$post("email", email)
      .then(res => {
        commit("setLoading", false);
        Alert({ message: "Email Successfully Sent", color: "green" });
      })
      .catch(e => {
        commit("setLoading", false);
        Alert({ message: e.message, color: "red" });
      });
  }
};

export const getters = {
  productsByCategories(state) {
    const filteredProducts = {};
    state.sortedProducts.forEach(product => {
      if (filteredProducts[product.category.name]) {
        filteredProducts[product.category.name] = [
          ...filteredProducts[product.category.name],
          product
        ];
      } else {
        filteredProducts[product.category.name] = [product];
      }
    });
    return Object.values(filteredProducts);
  },
  productsCount(state) {
    let count = 0;
    const keys = Object.keys(state.cart);
    if (keys.length === 0) {
      return count;
    }
    keys.forEach(key => {
      count = count + state.cart[key].qty;
    });
    return count;
  },
  totalAmount(state) {
    let amountTotal = 0;
    const keys = Object.keys(state.cart);
    if (keys.length === 0) {
      return amountTotal;
    }
    keys.forEach(key => {
      amountTotal = amountTotal + state.cart[key].amount;
    });
    return amountTotal;
  },
  productsInCart(state) {
    const cart = state.cart;
    const products = [];
    Object.keys(cart).forEach(key => {
      products.push({ name: key, qty: cart[key].qty, price: cart[key].price });
    });
    return products;
  },
  productImages(state) {
    return state.products.map(product => ({
      src: product.imageUrl,
      text: product.name
    }));
  }
};
