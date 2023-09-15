<template>
  <h2 v-if="num === 1">the number zero</h2>
  <h2 v-else-if="num < 0">the number is negative</h2>
  <h2 v-else>the number is not zero</h2>

  <div v-if="display">
    <h2>Ali</h2>
    <h2> "8" </h2>
    <h2>maral</h2>
  </div>

  <h2 v-show="showElement">using v-show</h2>
  <h2 v-if="showElement">using v-if</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: -5,
      display: false,
      showElement:false
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger {
  color: red;
}
</style>
