<template>
  <div class="card">
    <header> <slot name="header"></slot></header>
    <section><slot></slot></section>
    <footer> <slot name="footer"></slot></footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Car",
  props: ["content"],
};
</script>

<style  scoped>
.card{
    border: 5px solid black;
    background-color: aqua;
    padding: 10px;
}
</style>
