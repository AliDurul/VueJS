<template>
  <div>
    <ForM />
  </div>
</template>

<script>
import ForM from "@/components/ForM.vue";
export default {
  name: "App",
  components: {
    ForM,
  },

  data() {
    return {
      name: "",
    };
  },

  methods: {
    
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
