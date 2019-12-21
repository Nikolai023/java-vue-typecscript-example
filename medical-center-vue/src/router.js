import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
// import Service from '@/views/Service';
import ServicePage from '@/components/ServicePage';

Vue.use(Router);

function eblyic(route) {
  return {
    cityid: route.params.pararams,
  };
}

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
      props: eblyic,
    },
  ],
});
