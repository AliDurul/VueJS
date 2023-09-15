<template>
  <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>

  <h2 v-for="(fullname, index) in fullNames" :key="index">
    {{ fullname.first }}
    {{ fullname.surname }}
    {{ fullname.age }}
  </h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      names: ["ali", "maral", "lila"],
      fullNames: [
        { first: "ali", surname: "durul", age: 25 },
        { first: "maral", surname: "durul", age: 26 },
        { first: "lila", surname: "durul", age: -10 },
      ],
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
