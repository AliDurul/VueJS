<template>
    <div>
      <p>{{ message }}</p>
      <button @click="changeMessage">Change Message</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Initial Message'
      };
    },
    beforeCreate() {
      console.log('beforeCreate: Component is about to be initialized.');
    },
    created() {
      console.log('created: Component has been initialized.');
    },
    beforeMount() {
      console.log('beforeMount: Component is about to be mounted.');
    },
    mounted() {
      console.log('mounted: Component has been mounted to the DOM.');
    },
    beforeUpdate() {
      console.log('beforeUpdate: Component is about to update.');
    },
    updated() {
      console.log('updated: Component has been updated.');
    },
    beforeUnmount() {
      console.log('beforeDestroy: Component is about to be destroyed.');
    },
    unmounted() {
      console.log('destroyed: Component has been destroyed.');
    },
    methods: {
      changeMessage() {
        this.message = 'New Message';
      }
    }
  }
  </script>