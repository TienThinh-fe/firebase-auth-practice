import { createRouter, createWebHistory } from "vue-router";

import GoogleAuth from "../views/GoogleAuth.vue";
import EmailAuth from "../views/EmailAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/google", component: GoogleAuth },
    { path: "/email", component: EmailAuth },
    { path: "/", redirect: "/google" },
  ],
});

export default router;
