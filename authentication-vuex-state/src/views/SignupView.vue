<template>
  <div class="row mt-5">
    <div class="col-md-6 offset-md-3">
      <div>
        <h3>Signup</h3>
        <hr />
      </div>
      <form action="">
        <div class="form-group">
          <label for="">Email</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control" />
        </div>
        <div class="my-3">
          <button type="submit" class="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Signup",
  components: {},
};
</script>
