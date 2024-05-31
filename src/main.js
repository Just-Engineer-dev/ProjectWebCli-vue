import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import FeedbackForm from './components/FeedbackForm.vue';
import GallerySlider from './components/GallerySlider.vue';
import ChatGPTEdu from './components/ChatGPTEduPage.vue';
import CodestralPage from './components/CodestralPage.vue';
import AssociationPage from './components/AssociationPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/form', component: FeedbackForm },
  { path: '/gallery', component: GallerySlider },
  { path: '/chatgpt-edu', component: ChatGPTEdu },
  { path: '/codestral', component: CodestralPage },
  { path: '/association', component: AssociationPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
