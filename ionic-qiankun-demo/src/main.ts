import 'zone.js'; //引入zone解析angular子应用
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { registerMicroApps, start } from 'qiankun'; //引入qiankun
registerMicroApps([
  {
    name: 'angular-qiankun-demo', //子应用名称
    entry: 'http://localhost:4200', //子应用入口路径
    container: '#angularView', //挂载子应用的容器
    activeRule: '/app-angular',//激活子应用的路由匹配规则
    props:{token:localStorage.getItem('token')}
  },
]);
start() //启动qiankun

const app = createApp(App)
  .use(IonicVue)
  .use(router);




router.isReady().then(() => {
  app.mount('#app');
});