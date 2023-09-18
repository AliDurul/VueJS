<template>
  <div>
    <ProductOne />
    <ProductTwo />
  </div>
</template>

<script>
import ProductOne from "./components/ProductOne.vue";
import ProductTwo from "./components/ProductTwo.vue";
export default {
  name: "App",
  components: {
    ProductOne,
    ProductTwo,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
