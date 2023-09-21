<template>
  <div>
    <h1>custom text input</h1>
    <input type="text" placeholder="custom text input" @change="$emit('customChange', $event.target.value)"/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
