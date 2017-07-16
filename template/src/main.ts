import * as Vue from 'vue';
import VueRouter from 'vue-router';

import { HomeComponent } from './home';
import { AboutComponent } from './components/about';
import { ListComponent } from './components/list';
import { NavbarComponent } from './components/navbar';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'home': HomeComponent
  }
});
