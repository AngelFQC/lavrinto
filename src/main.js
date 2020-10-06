import Vue from 'vue'
import App from './App.vue'

import store from "@/store";

import ConstantsPlugin from "@/components/plugin/Constants";

Vue.config.productionTip = false

Vue.use(ConstantsPlugin);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
