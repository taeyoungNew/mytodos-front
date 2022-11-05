import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { getDate } from "@/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    setMe: null,
    todoList: [],
    loadTodos: [],
    loadMyExTodos: [],
    exTodos: [],
    persent: 0,
  },
  getters: {
    GETTERS_MY_TODOS(state) {
      return state.todoList;
    },
    GET_MY_EXTODOS(state) {
      return state.loadMyExTodos;
    },
  },
  mutations: {
    EX_TODOS(state, payload) {
      console.log("mutation = ", payload);
      state.exTodos = [...payload];
    },
    ADD_TODO(state, payload) {
      state.todoList.unshift(payload);
    },
    RECORD_TODOS(state, payload) {
      if (payload) {
        state.loadTodos.unshift(payload);
      }
    },
    ON_LOGIN(state, payload) {
      state.setMe = payload.data;
    },
    ON_LOGOUT(state) {
      state.setMe = null;
      state.todoList = [];
      state.loadTodos = [];
      state.loadMyExTodos = [];
    },
    LOAD_MY_TODOS(state, payload) {
      state.todoList = payload;
    },
    LOAD_MY_EXTODOS(state, payload) {
      state.loadMyExTodos = payload;
    },
    REMOVE_TODO(state, payload) {
      const index = state.todoList.findIndex((v) => v.id === payload);
      state.todoList.splice(index, 1);
      // console.log("REMOVE_TODO = ", index);
    },
    CHECK_TODO(state, payload) {
      state.todoList.map((x) => {
        if (x.id === payload.todoId) {
          x.done = payload.done;
        }
      });
    },
    EDIT_TODO(state, payload) {
      console.log(payload);
      const index = state.todoList.findIndex((x) => x.id === payload.id);
      state.todoList[index].todoContent = payload.todoContent;
    },
  },
  actions: {
    EX_TODOS(context, payload) {
      // console.log("EX_TODOS = ", payload);
      context.dispatch("EX_TODOS", payload);
    },
    ADD_TODO(context, payload) {
      // console.log(getDate());
      const userInfo = context.state.setMe;
      axios
        .post("http://localhost:3010/todo/add", {
          todo: payload,
          userInfo: userInfo,
          updateTime: getDate(),
        })
        .then((res) => {
          console.log(res);
          context.commit("ADD_TODO", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    ON_SIGNUP(context, payload) {
      axios
        .post("http://localhost:3010/user/signup", {
          email: payload.email,
          nickname: payload.nickname,
          password: payload.password,
        })
        .then((res) => {
          context.commit("ON_SIGNUP", payload);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ON_LOGIN(context, payload) {
      axios
        .post(
          "http://localhost:3010/user/login",
          {
            email: payload.email,
            password: payload.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          context.commit("ON_LOGIN", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ON_LOGOUT(context) {
      axios
        .post(
          "http://localhost:3010/user/logout",
          {},
          {
            withCredentials: true,
          }
        )
        .then(() => {
          context.commit("ON_LOGOUT");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    LOAD_MY_TODOS(context) {
      axios
        .post(
          "http://localhost:3010/todo/gettodo",
          {
            userId: context.state.setMe.id,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          const myTodos = res.data;
          let today = getDate();
          let todos = [];
          let exTodos = [];
          myTodos.map((x) => {
            if (x.updateTime.substr(0, 10) == today.substring(0, 10)) {
              todos.unshift(x);
              context.commit("LOAD_MY_TODOS", todos);
            } else if (x.updateTime.substr(0, 10) !== today.substring(0, 10)) {
              exTodos.unshift(x);
              context.commit("LOAD_MY_EXTODOS", exTodos);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    CHECK_TODO(context, payload) {
      // console.log("CHECK_TODO", payload);
      axios
        .patch(
          "http://localhost:3010/todo/done",
          {
            todoId: payload.todoId,
            done: payload.done,
          },
          {
            withCredentials: true,
          }
        )
        .then(() => {
          context.commit("CHECK_TODO", payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    EDIT_TODO(context, payload) {
      // console.log("EDIT_TODO = ", payload);
      axios
        .patch(
          "http://localhost:3010/todo/editContent",
          {
            todoId: payload.todoId,
            userId: payload.userId,
            editContent: payload.editContent,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          context.commit("EDIT_TODO", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // LOAD_EX_TODOS(context, userId) {
    //   console.log("LOAD_EX_TODOS");
    //   axios
    //     .get(`http://localhost:3030/todo/exmytodos/${userId}`, {
    //       withCredentials: true,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    REMOVE_TODO(context, payload) {
      console.log("REMOVE_TODO", payload);
      axios
        .delete(`http://localhost:3010/todo/remove/${payload}`, {
          withCredentials: true,
        })
        .then((res) => {
          context.commit("REMOVE_TODO", payload);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
