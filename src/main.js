import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueI18n from "vue-i18n";
import messages from "@/translations/translations";

axios.defaults.baseURL = "http://ergast.com/api/f1";

Vue.config.productionTip = false;

require("./assets/sass/_main.scss");

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "pl", 
  messages
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
