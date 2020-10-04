import Vue from 'vue'
import App from './App.vue'

import ConstantsPlugin from "@/components/plugin/Constants";

Vue.config.productionTip = false

Vue.use(ConstantsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
