import Vue from "vue";
import vueResource from 'vue-resource';
import VueSweetalert2 from 'vue-sweetalert2';
import VueProgressBar from 'vue-progressbar';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;






// -----------------------------
const options = {
  color: '#ffff00',
  failedColor: '#874b4b',
  thickness: '8px',
  transition: {
    speed: '0.8s',
    opacity: '0.1s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
// -----------------------------
Vue.use(vueResource);
Vue.use(VueProgressBar, options);
Vue.use(VueSweetalert2);
// -----------------------------







new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
