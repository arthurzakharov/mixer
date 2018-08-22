import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Application from '../pages/Application';

const router = new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
      meta: {title: 'Mixer'}
    },
    {
      path: '/application',
      name: 'application',
      component: Application,
      meta: {title: 'Mixer Application'}
    },
  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
