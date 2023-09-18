<template>
  
<ProductOne :products="products"/>
<ProductTwo :products="products"/>
</template>

<script>

import ProductOne from './components/ProductOne.vue'
import ProductTwo from './components/ProductTwo.vue'
export default {
  name: "App",
  components:{
    ProductOne,
    ProductTwo
  },
  data() {
    return {
      products:[
        {name:'banana skin', price:20},
        {name:'shiny star', price:30},
        {name:'Green Sheels', price:40},
        {name:'Red shells', price:50},
      ]
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
