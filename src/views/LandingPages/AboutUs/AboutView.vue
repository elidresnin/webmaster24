<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import Featuring from "./Sections/AboutFeaturing.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url('https://www.imf.org/-/media/Images/IMF/FANDD/hero/2022/December/Picture-this-Energy-transition.ashx')` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>Solar</h1>
              <h1>Wind</h1>
              <h1>Geothermal</h1>
              <h1>Hydroelectric</h1>
              <h1>Biomass</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Learn about the movement behind renewable energy.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Information />

    <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>Solar</h1>
              <h1>Wind</h1>
              <h1>Geothermal</h1>
              <h1>Hydroelectric</h1>
              <h1>Biomass</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Learn about the movement behind renewable energy.
            </p>
            
          </div>
        </div>
      </div>

    <AboutTeam />
    <Featuring />
    <Newsletter />

  </div>
  <DefaultFooter />
</template>
