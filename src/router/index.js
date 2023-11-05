import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
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
<<<<<<< HEAD
    import("../pages/Courses.vue"),
=======
      import("../pages/Courses.vue"),
>>>>>>> 44b8555e482e3e3c340a8dc1cecca748c8a0408a
  },
  {
    path: "/register",
    name: "register",
    component:() =>
<<<<<<< HEAD
        import("../pages/Register.vue"),
=======
      import("../pages/Register.vue"),
  },
  {
    path: "/information",
    name: "information",
    component:() =>
      import("../pages/Information.vue"),
>>>>>>> 44b8555e482e3e3c340a8dc1cecca748c8a0408a
  },
  {
    path: "/notification",
    name: "notification",
    component:() =>
      import("../pages/Notification.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
