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
  {
    path: "/character/:id",
    name: "CharactersDetails",
    component: () => import("../views/CharacterDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;