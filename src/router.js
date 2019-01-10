import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Drivers from "./views/Drivers.vue";
import Teams from "./views/Teams.vue";
import Seasons from "./views/Seasons.vue";
import Calendar from "./views/Calendar.vue";
import Race from "./views/Race.vue";
import Standings from "./views/Standings.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
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
    },
    {
      path: "/seasons",
      name: "seasons",
      component: Seasons
    },
    {
      path: "/calendar/:year",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/race/:year/:raceNumber",
      name: "race",
      component: Race
    },
    {
      path: "/standings/:year",
      name: "standings",
      component: Standings
    }
  ]
});
