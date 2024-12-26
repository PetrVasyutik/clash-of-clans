import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import homePage from "./pages/homePage.vue"
import aboutPage from "./pages/aboutPage.vue"
import notFoundPage from "./pages/notFound.vue"

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: "home",
      component: homePage,
    },
    {
      path: '/about',
      name: "about",
      component: aboutPage,
    },
    {
      // path: '/:PathMatch(.*)*',
      path: '/:CatchAll(.*)',
      name: "404",
      component: notFoundPage,
    },
  ],
});

export default routers;