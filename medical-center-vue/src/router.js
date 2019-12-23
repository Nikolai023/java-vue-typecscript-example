import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import ServicePage from '@/components/ServicePage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/service/:id',
      component: ServicePage,
      name: 'service',
    },
  ],
});
