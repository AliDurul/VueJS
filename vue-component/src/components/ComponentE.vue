<template>
  <div>
    <h1>component E</h1>
    <ComponentF />
  </div>
</template>

<script>
import ComponentF from "./Component.F.vue";
export default {
  name: "ComponentE",
  components: {
    ComponentF,
  },
};
</script>

<style lang="scss" scoped></style>
