<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Input",
  props: {
    modelValue: String,
  },
};
</script>

<style lang="scss" scoped></style>
