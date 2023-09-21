<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <button @click="$emit('close', name)">Close Popup</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Popup',
  data() {
    return {
      name: '',
    }
  },
  emits: {
    close: (name) => {
      if (!name) {
        console.warn('Invalid submit event payload!')
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style scoped>
</style>