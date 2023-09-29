<template>
  <div>
    <!-- <button @click="getPosts">fetch the data</button> -->
    <p v-if="loading">loading...</p>
    <div v-for="post in posts" :key="post.id">
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "postList",
  created () {
    this.getPosts() ;
  },
  data() {
    return {
      posts: [],
      loading:false
    };
  },
  methods: {
    async getPosts() {
        this.loading = true
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.loading = false
        this.posts = data;
      } catch (error) {
        alert("something went wrong ! Try again ..");
        this.loading = false
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
