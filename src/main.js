import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import routes from './route/index.js';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router: routes,
})
