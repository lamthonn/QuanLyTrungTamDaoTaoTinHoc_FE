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
    path: "/recourses",
    name: "recourses",
    component:() =>
      import("../pages/Courses.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
