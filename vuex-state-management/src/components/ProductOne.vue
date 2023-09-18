<template>
  <div>
    <h2>productOne</h2>
    <ul>
      <li v-for="product in saleProduts" :key="product">
        <span class="name">{{ product.name }}</span>
        <span class="price"> ${{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice">reduce Price </button>
  </div>
</template>

<script>
export default {
  name: "ProductTwo",
  computed:{
    products(){
        return this.$store.state.products
    },
    saleProduts(){
      return this.$store.getters.saleProducts
    }
  },
  methods:{
    reducePrice(){
      this.$store.state.products.forEach((product) => {
        product.price -= 1
      })
    }
  }
};
</script>

<style scoped>
div{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
ul{
    padding: 0;
}
li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
