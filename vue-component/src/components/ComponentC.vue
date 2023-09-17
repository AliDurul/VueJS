<template>
  <div>
    <h1>component C</h1>
    <ComponentE />
  </div>
</template>

<script>
import ComponentE from "./ComponentE.vue";
export default {
  name: "ComponentC",
  components: {
    ComponentE,
  },
};
</script>

<style scoped></style>
