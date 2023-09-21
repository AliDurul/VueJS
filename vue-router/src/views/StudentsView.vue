<template>
  <div>
    <h1>Students</h1>
    <div v-for="student in students" :key="student.id">
      <RouterLink :to="{path:`/students/${student.id}`}"> {{ student.name }} </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "studentsView",
  data() {
    return {
      students: [
        { id: 1, name: "ali", grade: 55 },
        { id: 2, name: "maral", grade: 90 },
        { id: 3, name: "lila", grade: 100 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
