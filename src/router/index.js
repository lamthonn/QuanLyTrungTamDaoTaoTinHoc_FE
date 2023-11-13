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
    import("../pages/Courses.vue"),
  },
  {
    path: "/register",
    name: "register",
    component:() =>
        import("../pages/Register.vue"),
  },
  {
    path: "/information",
    name: "information",
    component:() =>
      import("../pages/Information.vue"),
  },
  //SocialMedia
  {
    path: "/notification",
    name: "notification",
    component:() =>
      import("../pages/Notification.vue"),
  },
  {
    path: "/socialMedia",
    name: "socialMedia",
    component:() =>
      import("../pages/SocialMedia.vue"),
  },
  {
    path: "/addNews",
    name: "addNews",
    component:() =>
      import("../components/socialMedia/addNews.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
