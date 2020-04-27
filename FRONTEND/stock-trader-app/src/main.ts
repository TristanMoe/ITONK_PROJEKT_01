import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PortalVue from 'portal-vue';
import VueResource from 'vue-resource';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
