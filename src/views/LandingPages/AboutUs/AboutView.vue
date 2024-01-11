<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import TransparentBlogCard from "../../../examples/cards/blogCards/TransparentBlogCard.vue"

//image
import bg0 from "@/assets/img/bg9.jpg";
import pollution from "@/assets/img/pollution.jpg";
import warming from "@/assets/img/windmill.jpg";
import windsolar from "@/assets/img/wind-solar.jpg";



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
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-75"
      :style="{ backgroundImage: `url('https://www.imf.org/-/media/Images/IMF/FANDD/hero/2022/December/Picture-this-Energy-transition.ashx')` }">
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
    <section class="py-7">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-10 ms-auto me-auto text-center">
            <h3 class="mt-4">We recognize that the shift to renewable energy is not just a choice but a crucial step in ensuring the
              well-being of our planet and future generations.</h3>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4 ms-auto my-auto">
            <div class="card-header p-0 position-relative">
              <a class="d-block blur-shadow-image">
                <img :src="pollution" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" />
              </a>
            </div>
          </div>
          <div class="col-md-5 me-auto my-auto ms-md-5">
            <p class="lead mb-0">
              The urgency for renewable energy stems from the environmental challenges posed by traditional fossil fuels, such as air pollution, climate change, and finite resource depletion. By harnessing the power of sources like solar, wind, and geothermal, we can reduce our carbon footprint, decrease reliance on non-renewable resources, and mitigate the impacts of climate change.
            </p>
          </div>
        </div>
        <hr class="horizontal dark my-sm-6 my-3 mx-7" />
        <div class="row">
          <div class="col-md-5 ms-auto my-auto">
            <p class="lead mb-0">
              The history of renewable energy is a testament to human ingenuity and our quest for sustainable solutions. From ancient civilizations utilizing wind power for grain milling to the development of solar technology in the 19th century, the journey towards renewable energy has been marked by innovation and a growing understanding of the need for cleaner alternatives.
            </p>
          </div>
          <div class="col-md-4 me-auto my-auto ms-md-5">
            <div class="card-header p-0 position-relative">
              <a class="d-block blur-shadow-image">
                <img :src="warming" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
        <hr class="horizontal dark my-sm-6 my-3 mx-7" />
        <div class="row mt-5">
          <div class="col-md-4 ms-auto my-auto">
            <div class="card-header p-0 position-relative">
              <a class="d-block blur-shadow-image">
                <img :src="windsolar" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" />
              </a>
            </div>
          </div>
          <div class="col-md-5 me-auto my-auto ms-md-5">
            <p class="lead mb-0">
              As we navigate the challenges of the 21st century, our commitment to renewable energy is grounded in this historical context. We aim to provide a comprehensive understanding of the evolution of renewable energy, its current significance, and the role each of us can play in shaping a more sustainable future. Join us on this enlightening journey as we explore the past, present, and future of renewable energy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </div>
  <DefaultFooter />
</template>
