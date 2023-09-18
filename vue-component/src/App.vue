<template>


  <Card>
    <template v-slot:header>
      <img src="https://picsum.photos/205" alt="" />
    </template>
    <template v-slot:footer><h2>card footer</h2></template>
    <template v-slot:default>this is content</template>
  </Card>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,
  },

  data() {
    return {
      name: "",
    };
  },

  methods: {},
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
