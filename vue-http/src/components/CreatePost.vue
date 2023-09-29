<template>
  <div class="formContent">
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post User id</label>
        <input
          type="text"
          name="userId"
          id="userId"
          v-model="formData.userId"
        />
      </div>
      <div>
        <label for="title">Post title</label>
        <input type="text" name="title" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post body</label>
        <input type="text" name="body" id="body" v-model="formData.body" />
      </div>
      <button type="submit">Create post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async createPost() {
      try {
       const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", this.formData);
       console.log(data);
      } catch (error) {
        alert("soemthing went wrong");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.formContent{
margin-top: 1rem;
}
</style>
