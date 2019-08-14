// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
