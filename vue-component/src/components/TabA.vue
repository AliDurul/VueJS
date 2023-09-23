<template>
  <div @click="this.count++">Tab A Content</div>
  <p>{{ count }}</p>
</template>

<script>
export default {
  name: "TabA",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
div{
cursor: pointer;
}
</style>
