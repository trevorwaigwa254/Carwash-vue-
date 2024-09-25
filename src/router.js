import { createRouter, createWebHistory } from 'vue-router';
import Booking from './components/BookingComponent.vue';
import Footer from './components/FooterComponent.vue';
import Header from './components/HeaderComponent.vue';
import Services from './components/ServicesComponent.vue';
import About from './components/AboutComponent.vue';
import Contact from './components/ContactComponent.vue';

const routes = [
  { path: '/', component: Header },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/booking', component: Booking },
  { path: '/contact', component: Contact },
  { path: '/footer', component: Footer }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;