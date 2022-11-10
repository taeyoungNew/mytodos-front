<template>
  <v-form>
    <v-row>
      <v-col>
        <v-card v-if="edit">
          <v-text-field class="edit-area" v-model="editContent"> </v-text-field>
          <font-awesome-icon
            class="edit-icon"
            icon="fa-solid fa-pen"
            @click="editTodo"
          />
        </v-card>
        <v-card v-else class="pa-6 todo-card">
          <span
            :style="{ color: checkColor }"
            class="check-icon"
            @click="checkTodo(todo.id)"
          >
            <font-awesome-icon icon="fa-solid fa-check" />
          </span>
          <div class="content" :style="{ color: check, textDecoration: done }">
            {{ todo.todoContent }}
          </div>
          <font-awesome-icon
            class="edit-icon"
            icon="fa-solid fa-pen"
            @click="editBtn()"
          >
          </font-awesome-icon>
          <font-awesome-icon
            class="remove-icon"
            icon="fa-solid fa-trash-can"
            @click="removeTodo"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      myTodo: [],
      edit: false,
      checkColor: "gray",
      check: "#40666B",
      todoStatus: this.todo.done,
      editContent: "",
      done: "none",
    };
  },
  created() {
    this.checkTodoStatus();
  },
  methods: {
    checkTodoStatus() {
      if (this.todo.done === true) {
        this.checkColor = "#6FAFB8";
        this.check = "gray";
        this.done = "line-through";
      } else if (this.todo.done === false) {
        this.checkColor = "gray";
        this.check = "#40666B";
        this.done = "none";
      }
    },
    editTodo() {
      const payload = {
        todoId: this.todo.id,
        editContent: this.editContent,
        userId: this.$store.state.setMe.id,
      };
      if (payload.editContent !== "") {
        this.$emit("editTodo", payload);
      }
      this.edit = !this.edit;
      this.editContent = "";
    },
    editBtn() {
      this.edit = !this.edit;
      // this.done = !this.done;
    },
    checkTodo(todoId) {
      this.todoStatus = !this.todoStatus;
      let payload = {
        todoId: todoId,
        done: this.todoStatus,
      };
      // console.log("payload=", payload);
      this.$store
        .dispatch("CHECK_TODO", payload)
        .then(() => {
          if (this.todoStatus === true) {
            this.checkColor = "#6FAFB8";
            this.check = "gray";
            this.done = "line-through";
          } else if (this.todoStatus === false) {
            this.checkColor = "gray";
            this.check = "#40666B";
            this.done = "none";
          }
          this.$emit("checkTodo");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeTodo() {
      this.$store.dispatch("REMOVE_TODO", this.todo.id);
    },
  },
  watch: {
    done(payload) {
      console.log("done값 변경감지", payload);
    },
  },
};
</script>

<style scoped>
.todo-card {
  background-color: white;
}
.edit-icon {
  cursor: pointer;
  font-size: 25px;
  position: absolute;
  top: 35%;
  left: 89%;
}
.edit-icon:hover {
  color: rgb(89, 143, 214);
}

.edit-area {
  margin-left: 20px;
  width: 85%;
}
.remove-icon {
  cursor: pointer;
  font-size: 23px;
  position: absolute;
  top: 35%;
  left: 95%;
}
.remove-icon:hover {
  color: rgb(172, 69, 69);
}
.check-icon {
  font-size: 20px;
  padding: 5px;
  padding-right: 10px;
  cursor: pointer;
}

.content {
  display: inline-block;
  font-size: 18px;
}
</style>
