import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Task from "./pages/Task.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/task", component: Task },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
