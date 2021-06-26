import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WeeklyUpdates from "../views/WeeklyUpdates.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/weeklyupdates/:id",
    name: "weekly-updates",
    component: WeeklyUpdates,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
