<template>
  <!-- Props -->
  <Greet :name="name" :hero-name="channel" />
  <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />

  <Article id="my-article" :likes="50" :isPublished="true" />
  <hr />
  <!-- Provide/ Inject -->
  <h3>App component {{ name }}</h3>
  <ComponentC />
  <hr />

  <!-- Events -->
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup" />
  <Input v-model="username" />
  <hr />

  <!-- Slots -->
  <Card></Card>
  <Card>Card Content</Card>
  <Card><img src="https://picsum.photos/200" /></Card>
  <Card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </Card>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }}, {{ slotProps.firstName }}
    </template>
  </NameList>

  <h4>App component Text</h4>
  <ChildStyles>
    <h4>ChildStyles component Text</h4>
  </ChildStyles>
  <hr />

  <!-- Dynamic Components -->
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>

  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
  <hr />

  <!-- Teleport Component -->
  <teleport to="#portal-root">
    <Portal />
  </teleport>

  <EmitTest @customChange="LogChange" />

  <p ref="myElement" v-for="item in items" :key="item.id">
    {{ item }}
  </p>
  <input type="text" ref="myInput" />
  <button @click="console.log(this.$refs.myInput.value)">
  get value with ref
  </button>
</template>

<script>
import Article from "./components/Article.vue";
import Greet from "./components/Greet.vue";
import ComponentC from "./components/ComponentC.vue";
import Popup from "./components/Popup.vue";
import Input from "./components/Input.vue";
import Card from "./components/Card.vue";
import NameList from "./components/NameList.vue";
import ChildStyles from "./components/ChildStyles.vue";
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";
import Portal from "./components/Portal.vue";
import EmitTest from "./components/EmitTest.vue";

export default {
  name: "App",
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
    Input,
    Card,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    Portal,
    EmitTest,
  },
  mounted() {
    this.$refs.myElement[0].style.backgroundColor = "blue";
    this.$refs.myElement[0].style.color = "white";
  },
  data() {
    return {
      items: [1, 2, 3, 4],
      name: "Vishwas",
      channel: "Codevolution",
      showPopup: false,
      username: "",
      friends: ["Chandler", "Joey", "Monica"],
      activeTab: "TabB",
    };
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log("name", name);
    },
    LogChange(e) {
      console.log(e);
    },
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>
