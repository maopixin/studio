// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.min.css';
import App from './App';
import router from './router';
import store from './store/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import {tips} from './methods/index.js';
Vue.prototype.$tips = tips;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
Vue.use(VueAxios,axios);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
