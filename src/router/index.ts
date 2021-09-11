import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "TodoList",
    component: () =>
      import(/* webpackChunkName: "TodoList" */ "../pages/TodoList.vue"),
  },
  {
    path: "/todos/",
    name: "CreateTodo",
    component: () =>
      import(/* webpackChunkName: "TodoList" */ "../pages/CreateTodo.vue"),
  },
  {
    path: "/todos/:id",
    name: "EditTodo",
    component: () =>
      import(/* webpackChunkName: "TodoList" */ "../pages/EditTodo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
