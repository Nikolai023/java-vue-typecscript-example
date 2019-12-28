import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage';
import ServicePage from '@/components/ServicePage';
import PersonalAccountPage from '@/components/PersonalAccountPage';
import AddServicePage from './components/AddServicePage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/service/:id',
      component: ServicePage,
      name: 'service',
    },
    {
      path: '/account',
      component: PersonalAccountPage,
    },
    {
      path: '/addservice',
      component: AddServicePage,
    },
  ],
});
