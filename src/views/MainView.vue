<template>
  <div id="main-page">
    <div class="main-content">
      <v-row no-gutters>
        <v-col cols="12">
          <v-card class="pa-3 todos-card" max-width="1000">
            <v-row>
              <v-col>
                <font-awesome-icon
                  class="todo-button"
                  icon="fa-solid fa-square-plus"
                  @click="showTextField"
                />
                <v-text-field
                  ref="todoText"
                  placeholder="오늘의 할일은?"
                  v-if="showText"
                  v-on:keyup.enter="addTodo"
                  class="text-field"
                  v-model="todoContent"
                  :success="success"
                  :success-messages="sccuessMessages"
                  :rules="textRules"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <div id="list-box">
              <todo-card
                v-for="todo in getMyTodos"
                :key="todo.id"
                :todo="todo"
                @editTodo="editTodo"
              />
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="achv-rate">
          <v-card class="pa-3 chart-box" max-width="1000">
            <chart-component class="chart-component" :persent="persent" />
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="todo-lists"></div>
  </div>
</template>

<script>
import TodoCard from "@/components/TodoCard.vue";
import ChartComponent from "@/components/ChartComponent.vue";
// import ListBox from "@/components/common/ListBox.vue";
// import TodoLists from "@/components/TodoLists.vue";
export default {
  components: { TodoCard, ChartComponent },
  data() {
    return {
      persent: 0,
      myTodos: [],
      id: 0,
      valid: false,
      success: false,
      sccuessMessages: "",
      showText: false,
      todoContent: "",
      textRules: [
        (v) => !!v || "내용을 입력하세요",
        (v) => !!v.trim() || "내용을 입력하세요",
      ],
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    editTodo(payload) {
      this.$store.dispatch("EDIT_TODO", payload);
    },
    showTextField() {
      this.showText = !this.showText;
    },
    keyPress() {
      if (this.textRules) {
        this.addTodo();
      }
    },
    getTodos() {
      if (this.$store.state.setMe) {
        this.$store.dispatch("LOAD_MY_TODOS");
      }
    },
    addTodo() {
      if (this.$refs.todoText.validate()) {
        this.todayIsDate();
        this.$store
          .dispatch("ADD_TODO", {
            id: this.id,
            todoContent: this.todoContent,
          })
          .then(() => {
            this.success = true;
            this.sccuessMessages = "todo리스트 추가";
            this.todoContent = "";
            this.id += 1;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.success = false;
        this.sccuessMessages = "내용을 입력해주세요";
      }
    },
    // recordTodos() {
    //   this.$store.dispatch("RECORD_TODOS", this.getMyTodos);
    // },
    todayIsDate() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      const day = date.getDate();
      let todayDate = null;
      if (String(month).length < 2) {
        return (todayDate = `${year}'0'${month}${day}`);
      } else {
        todayDate = `${year}${month}${day}`;
        return todayDate;
      }
    },
  },
  computed: {
    getMyTodos() {
      return this.$store.state.todoList;
    },
    getMyExTodos() {
      return this.$store.state.loadMyExTodos;
    },
  },
  watch: {
    getMyTodos(payload) {
      return payload;
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
  background-color: white;
  height: 100vh;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.chart-box {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}
.todos-card {
  max-height: 550px;
  overflow: scroll;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #6fafb8;
}

.todos-card::-webkit-scrollbar {
  display: none;
  width: 5px;
}

@keyframes todos-card {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100px, 0px);
  }
}
.todo-button {
  font-size: 50px;
  cursor: pointer;
  z-index: 1000px;
}
.todo-button:hover {
  color: cornflowerblue;
  animation-name: todos-card;
}
.achv-rate {
  height: 500px;
}
.record-btn {
  left: 40%;
  top: 20px;
}

.todo-lists {
  background: white;
}
</style>
