<template>
  <div class="row mt-5">
    <div class="col-md-6 offset-md-3">
      <div>
        <h3>Login {{ firstName }}</h3>
        <hr />
      </div>
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <label for="">Email</label>
          <input type="email" class="form-control" v-model="email"/>
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control"  v-model="password" />
        </div>
        <div class="my-3">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ''
    }
  },
  methods: {
    onLogin() {
      
    }
  },


  computed: {
    ...mapState("auth", {
      firstName: (state) => state.name,
    }),
  },
};
</script>
