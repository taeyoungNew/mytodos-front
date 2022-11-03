<template>
  <v-card class="ma-auto list-card" tile>
    {{ myExTodos }}
  </v-card>
</template>

<script>
// import ListBox from "./common/ListBox.vue";
export default {
  components: {
    // ListBox,
  },
  props: {
    myExTodos: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      checkColor: "",
      exTodos: [],
      updateAt: [],
      // value: "[[1,2,3,4,],[1,2,3,4,,5,]]",
    };
  },
  methods: {
    async divTodos(payload) {
      console.log("divTodos");
      const myExTodos = payload;
      let set = [];
      let setData = [];
      for (let i = 0; i < myExTodos.length; i++) {
        await set.push(myExTodos[i].updateTime.substring(0, 10));
      }
      setData = new Set(set);
      this.updateAt = [...setData];
      for (let idx = 0; idx < this.updateAt.length; idx++) {
        this.exTodos[idx] = new Array();
        await myExTodos.map((x) => {
          if (
            x.updateTime.substring(0, 10) ===
            this.updateAt[idx].substring(0, 10)
          ) {
            this.exTodos[idx].push(x);
          }
        });
      }
      // this.$store.dispatch("EX_TODOS", this.exTodos);
      console.log("this.exTodos = ", this.exTodos);
      // this.value = 5;
    },
  },
  computed: {
    isMyExTodos() {
      return this.myExTodos;
    },
  },
  watch: {
    isMyExTodos(payload) {
      console.log("isExTodos = ", payload);
      this.divTodos(payload);
      // this.value[3][0] = 1;
    },
  },
};
</script>

<style scoped>
.check-icon {
  padding-right: 15px;
}

span {
  display: inline-block;
}
</style>
