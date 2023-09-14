<template>
  <div>{{ greet }} {{ name }}</div>
  <div v-text="channel"></div>
  <div v-html="channel"></div>
  <h2 v-bind:id="headingId">Heading</h2>
  <button v-bind:disabled="isDisabled">Bind</button>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "Durul",
      greet: "Hello",
      channel:"<b>Codecolution</b>",
      headingId:'heading',
      isDisabled:false
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
</style>
