<template>
  <h2>{{ fullName }}</h2>
  <button @click="changeFullName">change full name</button>
  <button @click="items.push({ id: 4, title: 'keyboard', price: 55 })">
    Add item
  </button>
  <h2>Total = {{ totalPrice }}</h2>
  <h2>method Total = {{ getTotal() }}</h2>
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
  </template>
  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} is {{ item.price }}
  </h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "maral",
      surName: "durul",
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phone",
          price: 200,
        },
        {
          id: 3,
          title: "Laptop",
          price: 300,
        },
      ],
    };
  },
  methods: {
    getTotal() {
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
    changeFullName(){
      this.fullName = 'ali durul'
    }
  },
  computed: {
    fullName: {
      get() {
        return `${this.name} ${this.surName}`;
      },
      set(value){
        const names = value.split(" ")
        this.name = names[0]
        this.surName = names[1]
      }
    },
    totalPrice() {
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
    },
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
