<template lang="">
  <div>
    <h1>hello {{ name }} / {{ heroName }}</h1>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Greet",
  props: ["name", "heroName"],
};
</script>
<style scoped></style>
