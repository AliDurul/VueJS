<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TeamplatesRef />

  <PostList />
  <CreatePost />
  
</template>

<script>
import PostList from "@/components/PostList.vue";
import CreatePost from "@/components/CreatePost.vue";
import TeamplatesRef from "@/components/TeamplatesRef.vue";

export default {
  components: {
    PostList,
    CreatePost,
    TeamplatesRef
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
