<template>
    <div>
      <h1>Info about Students</h1>
      <p>Student ID : {{studentId}} </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "StudentInfoView",
    data() {
      return {
       studentId: this.$route.params.id
      };
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  