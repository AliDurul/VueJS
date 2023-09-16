<template>
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>

  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile</label>
      <textarea id="profile" v-model.lazy="formValues.profileSummary" />
    </div>
    <div>
      <label for="country">Country</label>
      <select v-model="formValues.country" id="country">
        <option value="">select a country</option>
        <option value="india">india</option>
        <option value="turkey">turkey</option>
        <option value="zambia">zambia</option>
      </select>
    </div>
    <div>
      <label for="joblocation">Job Location</label>
      <select v-model="formValues.jobLocation" multiple id="joblocation">
        <option value="india">india</option>
        <option value="turkey">turkey</option>
        <option value="zambia">zambia</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="remotework"
        v-model="formValues.remoteWork"
        false-value="no"
        true-value="yes"
      />
      <label for="remotework">Open to remote Work?</label>
    </div>
    <div>
      <label for="age">Age</label>
      <input @keyup.enter="submitForm" type="text" id="age" v-model.number="formValues.age" />
    </div>

 <!--    <div>
      <button>Submit</button>
    </div> -->
    
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        age: null,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formValues);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;

  & div {
    display: flex;
    flex-direction: column;
  }
  & input,
  textarea,
  select,
  button {
    padding: 0.7rem;
    margin-top: 0.5rem;
    width: 15rem;
  }

  & label {
    font-size: 1.4rem;
  }
}
</style>
