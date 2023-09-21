<template>
  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> | 
    <router-link :to="{name:'students'}">Students</router-link> 
  </nav>
  <div >
    <span @click="home">Anasayfa</span>
    <span @click="back">Geri</span>
    <span @click="next">Ileri</span>
  </div>


  <router-view/>
</template>


<script>
export default {
  methods: {
    home() {
      this.$router.push({name:'home'})
    },
    back(){
      this.$router.go(-1)
    },
    next(){
      this.$router.go(1)

},
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
span{
  margin-left: 10px;
  font-weight: 200;
  cursor: pointer;
}

</style>
