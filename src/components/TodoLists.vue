<template>
  <v-card class="ma-auto list-card" tile max-width="80%">
    <div>
      <v-list>
        <v-list-item-group>
          <list-box />
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
    };
  },
  created() {
    this.divTodos();
  },
  methods: {
    divTodos() {
      // let set = [];
      // for (let i = 0; i < this.getExTodos.length; i++) {
      //   set.unshift(this.getExTodos[i].updateAt.substr(0, 10));
      //   this.updateAt = new Set(set);
      // }
      // this.getExTodos.map((x) => {
      //   console.log(x);
      // });
    },
  },
  computed: {
    getExTodos() {
      return this.$store.state.loadMyExTodos;
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
