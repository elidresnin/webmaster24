import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";

import SolarView from "../views/LandingPages/Solutions/SolarView.vue";
import GeoView from "../views/LandingPages/Solutions/GeoView.vue";
import WindView from "../views/LandingPages/Solutions/WindView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/solutions/solar",
      name: "solar",
      component: SolarView,
    },
    {
      path: "/pages/solutions/wind",
      name: "wind",
      component: WindView,
    },
    {
      path: "/pages/solutions/geothermal",
      name: "geothermal",
      component: GeoView,
    },
  
  ],
});

export default router;
