<template>
  <v-card class="ma-auto list-card" tile max-width="80%">
    <div>
      <v-list>
        <v-list-item-group>
          <list-box
            v-for="exTodo in exTodos"
            :key="exTodo.id"
            :exTodo="exTodo"
          />
        </v-list-item-group>
      </v-list>
    </div>
  </v-card>
</template>

<script>
import ListBox from "./common/ListBox.vue";
export default {
  components: { ListBox },
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
      todos: [],
    };
  },
  created() {
    this.divTodos();
  },
  methods: {
    divTodos() {
      let set = [];
      let setData = [];
      for (let i = 0; i < this.myExTodos.length; i++) {
        set.push(this.myExTodos[i].updateTime.substring(0, 10));
      }
      setData = new Set(set);
      this.updateAt = [...setData];
      for (let idx = 0; idx < this.updateAt.length; idx++) {
        this.exTodos[idx] = new Array();
        this.myExTodos.map((x) => {
          if (
            x.updateTime.substring(0, 10) ===
            this.updateAt[idx].substring(0, 10)
          ) {
            console.log("x = ", x);
            this.exTodos[idx].push(x);
          }
        });
      }
      console.log("this.exTodos = ", this.exTodos);
    },
  },
  computed: {
    // getExTodos() {
    //   return this.$store.state.loadMyExTodos;
    // },
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
