<template>
  <h2>volume tracker (0-20)</h2>
  <h3>current value = {{ volume }}</h3>
  <div>
    <button @click="volume += 2">increment</button>
    <button @click="volume -= 2">decrease</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0,
     
    };
  },
  methods: {

  },
  computed: {
   
  },
  watch:{
    volume(newValue, oldValue){
      if(newValue > oldValue && newValue===16){
        alert('it is too much')
      }
    }
  }
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
