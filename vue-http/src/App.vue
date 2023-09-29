<template>
  <img alt="Vue logo" src="./assets/logo.png" />


  <LifeCyle />
  <TeamplatesRef />

  <PostList />
  <CreatePost />
  
</template>

<script>
import PostList from "@/components/PostList.vue";
import CreatePost from "@/components/CreatePost.vue";
import TeamplatesRef from "@/components/TeamplatesRef.vue";
import LifeCyle from "@/components/LifeCyle.vue";

export default {
  components: {
    PostList,
    CreatePost,
    TeamplatesRef,
    LifeCyle
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
