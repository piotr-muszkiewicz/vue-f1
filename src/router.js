import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Drivers from "./views/Drivers.vue";
import Teams from "./views/Teams.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/drivers",
      name: "drivers",
      component: Drivers
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams
    }
  ]
});
