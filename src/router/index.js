import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/detalhes",
    name: "Detalhes",
    component: () => import("../views/Detalhes.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "Registro",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "*",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // debugger;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(Store.state.userModule.user.isLoggedIn);
    if (!Store.state.userModule.user.isLoggedIn) next({ path: "/login" });
    else next();
  } else next();
});

export default router;
