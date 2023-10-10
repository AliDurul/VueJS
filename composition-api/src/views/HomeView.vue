<template>
  <div class="home">
<input type="text" v-model="search">
   <div v-for="(day,i) in finded" :key="i">
    {{ day }}
   </div>

  </div>
</template>

<script>
import { ref, computed,watch } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
  const days = ref(['pzrtesi','sali','crmbs','prsmbe','cuma'])

 const search = ref('')

 const finded = computed(() => {
   return days.value.filter(day => day.includes(search.value))
 })
watch(search, () => {
  console.log('watch clisti');
})








    return { days,search,finded };
  },
};
</script>
