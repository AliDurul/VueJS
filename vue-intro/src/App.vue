<template>
  <h2>{{ fullName }}</h2>
  <button @click="items.push({id:4, title:'keyboard', price:55})">Add item</button>
  <h2>
    Totoal = {{ totalPrice }}
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
          price: 600,
        },
      ],
    };
  },
  methods: {},
  computed: {
    fullName() {
      return `${this.name} ${this.surName}`;
    },
    totalPrice(){
      return this.items.reduce((total, curr) => (total = total +curr.price), 0)
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
