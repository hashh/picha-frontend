import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify';
import Vs from 'd3-vs';

Vue.config.productionTip = false;

Vue.use(Vs);

new Vue({
  vuetify,
  router,
  Vs,
  render: h => h(App),
}).$mount('#app');