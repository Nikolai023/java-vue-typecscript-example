import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import ServicePage from '@/components/ServicePage';
import PrivateAccount from '@/components/PrivateAccount';

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
    {
      path: '/account',
      component: PrivateAccount,
    },
  ],
});
