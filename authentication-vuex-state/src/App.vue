<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
