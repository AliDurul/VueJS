<template>
<h2>{{ name }}</h2>
<button @click="changeName('maral',$event), increment(1)">change name</button>

<h2>{{count}}</h2>
<button @click="increment(5)">Increment</button>
<button @click="decrement(5)">Decrement</button>



</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name:'ali',
      count:0
    };
  },
  methods: {
   increment(num){
    this.count += num
   },
   decrement(num){
    this.count -= num
   },
   changeName(nname,event){
    this.name = nname
    console.log(event);
   }
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
.danger {
  color: red;
}
</style>
