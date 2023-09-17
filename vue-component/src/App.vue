<template>
  <Greet name="ali and maral" heroName="batman" />
  <Greet :name="name" :heroName="channel" />
  <Article title="Article"  :likes="10" :ispublished="true"/>
</template>

<script>
import Greet from "./components/Greet.vue";
import Article from "./components/Article.vue";

export default {
  name: "App",
  components: {
    Greet,
    Article
  },
  data() {
    return {
      name:'ali',
      channel:'codevoliton'
    }
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
