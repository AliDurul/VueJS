<template>
  <h2>volume tracker (0-20)</h2>
  <h3>current value = {{ volume }}</h3>
  <div>
    <button @click="volume += 2">increment</button>
    <button @click="volume -= 2">decrease</button>
  </div>
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />

  <div>
    <button @click="movieList.push('Wonder Women')">Add Movie</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
      movie: "batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["batman", "Superman"],
    };
  },
  methods: {},
  computed: {},
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue === 16) {
        alert("it is too much");
      }
    },
    movie: {
      handler(newValue) {
        console.log(`calling api woth movie name = ${newValue}`);
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `calling api with movie title = ${newValue.title} and actor = ${newValue.actor}`
        );
      },
      deep: true,
    },

    movieList: {
      handler(newValue) {
        console.log(`updated list ${newValue}`);
      },
      deep: true,
    },
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

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;

  & div {
    display: flex;
    flex-direction: column;
  }
  & input,
  textarea,
  select,
  button {
    padding: 0.7rem;
    margin-top: 0.5rem;
    width: 15rem;
  }

  & label {
    font-size: 1.4rem;
  }
}
</style>
