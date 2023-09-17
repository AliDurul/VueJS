<template>
  <div>
    <h1>{{ title }} component</h1>
    <h1>{{ likes }} number of likes</h1>
    <h1>Published - {{ ispublished ? "yes" : "no" }}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Article",
  props: {
    title: {
      type: String,
      required: true,
      default:'article default title'
    },
    likes: Number,
    ispublished: Boolean,
  },
};
</script>

<style scoped></style>
