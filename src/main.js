import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';


Vue.config.productionTip = false

Vue.use(VueMaterial);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');


