<template>
  <!-- <Greet name="ali and maral" heroName="batman" />
  <Greet :name="name" :heroName="channel" />
  <Article title="Article"  :likes="10" :ispublished="true"/> -->
  <h1>app component username {{ username }}</h1>
  <ComponentC />
</template>

<script>
// import Greet from "./components/Greet.vue";
// import Article from "./components/Article.vue";
import ComponentC from "./components/ComponentC.vue";

export default {
  name: "App",
  components: {
    // Greet,
    // Article,
    ComponentC,
  },
  data() {
    return {
      name: "ali",
      channel: "codevoliton",
      username: "maral",
    };
  },
  provide() {
    return {
      username: this.name,
      channel: this.channel,
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
