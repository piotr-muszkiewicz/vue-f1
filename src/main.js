import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "http://ergast.com/api/f1";

Vue.config.productionTip = false;

require("./assets/sass/_main.scss");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
