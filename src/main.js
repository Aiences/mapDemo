import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from "./store/index";
import validate from "./utils/validate"
import '@/styles/reset.css' // global css
import echarts from 'echarts'


Vue.config.productionTip=false
Vue.prototype.validate=validate;
Vue.prototype.$echarts=echarts


Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
