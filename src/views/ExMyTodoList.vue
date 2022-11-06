<template>
  <div id="main-page">
    <div class="main-content">
      <v-row>
        <v-col cols="12" v-if="this.$store.state.loadMyExTodos.length === 0">
          <v-card class="pa-3"> 예전 Todo리스트가 없어요. </v-card>
        </v-col>
        <v-col V-else>
          <list-box
            class="list-box"
            v-for="(exTodo, index) in exTodos"
            :key="index"
            :exTodo="exTodo"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ListBox from "@/components/common/ListBox.vue";
export default {
  components: { ListBox },
  created() {
    this.getExTodos();
  },
  data() {
    return {
      exTodos: [],
    };
  },
  methods: {
    async getExTodos() {
      let set = [];
      let datas = [];
      let updateTimes = [];
      let exTodos = [[]];
      const getExTodos = this.$store.getters.GET_MY_EXTODOS;
      getExTodos.map((x) => {
        datas.push(x.updateTime.substr(0, 10));
      });
      set = new Set(datas);
      updateTimes = [...set];
      // console.log("exTodos = ", updateTimes[0]);
      for (let idx = 0; idx < updateTimes.length; idx++) {
        exTodos[idx] = new Array();
        for (let i = 0; i < getExTodos.length; i++) {
          if (updateTimes[idx] == getExTodos[i].updateTime.substr(0, 10)) {
            // console.log(getExTodos[i]);
            exTodos[idx].push(getExTodos[i]);
          }
        }
      }
      this.exTodos = exTodos;
      // console.log("this.exTodos  = ", this.exTodos);
    },
  },

  watch: {
    exTodos: {
      deep: true,
      async handler(payload) {
        // console.log("exTodos = ", payload);
        return payload;
      },
    },
  },
};
</script>

<style scoped>
#main-page {
  background-color: #d6ebee;
  width: 1250px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
.main-content {
  /* margin-top: 10px; */
  overflow: scroll;
  background-color: white;
  height: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.main-content::-webkit-scrollbar {
  display: none;
  /* width: 10px; */
  /* background-color: black; */
}
/* .main-content::-webkit-scrollbar-thumb {
  height: 10px;
  background: #217af4;
} */
.list-box {
  margin-top: 10px;
}
</style>
