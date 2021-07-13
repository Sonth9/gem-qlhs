import Vue from "vue";
import App from "@/App.vue";
import axios from "axios";
import router from "@/router";
import store from "@/store";
import VueMeta from "vue-meta";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faFileAlt,
  faThLarge,
  faFile,
  faUser,
  faLock,
  faAngleUp,
  faCalendarAlt,
  faPlusSquare,
  faTasks,
  faSearch,
  faCogs,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
library.add(faUserSecret);
library.add(
  faThLarge,
  faAngleDown,
  faAngleRight,
  faBars,
  faFileAlt,
  faFile,
  faUser,
  faLock,
  faAngleUp,
  faCalendarAlt,
  faPlusSquare,
  faTasks,
  faSearch,
  faCogs,
  faSignOutAlt
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});
axios.defaults.headers.post["Content-Type"] = "application/json";

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
