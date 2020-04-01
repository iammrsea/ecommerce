<template>
  <div class="input-field2">
    <input placeholder="Search by name" type="text" id="input" @input="handleChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  watch: {},
  methods: {
    handleChange(event) {
      let searchTerm = event.target.value;
      this.$store.commit("sortProducts", searchTerm);
    }
  }
};
</script>
<style scoped>
.input-field2 {
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: center;
  align-items: center;
}

#input {
  position: relative;
  border-bottom-style: double;
  border-bottom: solid #fff 2px;
  color: #fff;
  padding: 0px;
  /*
background-color: #eee; */
}

.btn-search {
  background-color: inherit;
}
::placeholder {
  color: #fff;
}
#search {
  color: #fff;
  position: relative;
  z-index: 999999;
  left: -20px;
  cursor: pointer;
}
</style>
