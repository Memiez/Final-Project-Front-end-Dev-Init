import Vue from 'vue';
import Router from 'vue-router';
import UserProfile from '@/components/UserProfile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    // อื่นๆ routes...
  ]
});
