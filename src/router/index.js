import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import( "../pages/AboutUs.vue"),
  },
  {
    path: "/login",
    name: "login",
    component:() =>
      import("../pages/Login.vue"),
  },
  {
<<<<<<< HEAD
    path: "/recourses",
    name: "recourses",
    component:() =>
      import("../pages/Courses.vue"),
=======
    path: "/register",
    name: "register",
    component:() =>
      import("../pages/Register.vue"),
>>>>>>> d50de9b3cf6765677c0b522a1337d74d91b91e9f
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
