import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/pages/SignIn.vue';
import SignUp from '@/pages/SignUp.vue';
import ResetPassword from '@/pages/ResetPassword.vue';
import CreatePassword from '@/pages/CreatePassword.vue';

const routes = [
    { path: '/', component: SignIn },
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
    { path: '/reset-password', component: ResetPassword },
    { path: '/create-password', component: CreatePassword },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
