import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/SignupView",
    // meta: { auth: true },
  },
  {
    path: "/MainView",
    component: () => import("@/views/MainView.vue"),
    meta: { auth: true },
  },
  {
    path: "/SignupView",
    component: () => import("@/views/SignupView.vue"),
  },
  {
    path: "/ShareTodos",
    component: () => import("@/views/ShowListsView.vue"),
    meta: { auth: true },
  },
  {
    path: "/ExTodoMyList",
    component: () => import("@/views/ExMyTodoList.vue"),
    meta: { auth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  if (to.meta.auth && !store.state.setMe) {
    next("/");
    return;
  }
  next();
  // next();
});
export default router;
