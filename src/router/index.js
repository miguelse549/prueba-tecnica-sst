import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    redirect: "/characters",
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../views/Characters.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;