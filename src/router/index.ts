import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
