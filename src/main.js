import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPen,
  faSquarePlus,
  faTrashCan,
  faPenToSquare,
  faCheck,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
// import VueCookie from "vue-cookie";

Vue.config.productionTip = false;

// library.add(faUserSecret);
library.add(
  faPen,
  faSquarePlus,
  faTrashCan,
  faPenToSquare,
  faCheck,
  faPowerOff
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
// Vue.use(VueCookie);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
// Vue.$cookies.config("1d");
