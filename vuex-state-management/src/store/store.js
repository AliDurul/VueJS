import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
      { name: "banana skin", price: 20 },
      { name: "shiny star", price: 30 },
      { name: "Green Sheels", price: 40 },
      { name: "Red shells", price: 50 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations:{
    reducePrice: (state,payload) => {
      state.products.forEach((product) => {
        product.price -= payload
      })
    }
  },
  actions:{
    reducePrice:(context,payload) =>{
      setTimeout(() => {
        context.commit('reducePrice',payload)
      }, 2000);
    }
  }
});
export default store;
