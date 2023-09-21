<template>
  <div>
    <h1>Students</h1>
    <div v-for="student in students" :key="student.id">
      {{ student.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentsView",
  data() {
    return {
      students: [
        { id: 1, name: "ali", grade: 55 },
        { id: 1, name: "maral", grade: 90 },
        { id: 1, name: "lila", grade: 100 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
