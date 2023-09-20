<template>
  <div>
    <input type="checkbox" name="check" id="check" v-model="checked" />
    <p>{{ checked ? "onayliyorum" : "onaylamiyorum" }}</p>
    <input v-model="student" type="text" @keyup.enter="addStudent" />
    <di v-for="student in students" :key="student">
      <p @click="deleteStudent(student)">
        {{ student }}
      </p>
    </di>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      student: "",
      students: ["ali"],
    };
  },
  methods: {
    addStudent() {
      if (this.student) {
        if (!this.students.includes(this.student)) {
          this.students.push(this.student);
        }
        this.student = "";
      }
    },
    deleteStudent(name){
        this.students = this.students.filter(student=> student != name)
    }
  },
};
</script>

<style lang="scss" scoped></style>
