<script setup>
import { onMounted, onUnmounted } from "vue";

import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";


import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";


//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpeg";
import wavesWhite from "@/assets/img/waves-white.svg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class=" position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>

  <header>
    <div class="page-header min-vh-85" :style="`background-image: url(${vueMkHeader})`" loading="lazy">
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 class="text-white mb-4">Greenify</h1>
            <h3 class="text-white opacity-8 lead pe-5 me-5">Save money while saving the planet.</h3>
            
          </div>
        </div>
      </div>
    </div>
  </header>



  <div class="card card-body blur shadow-blur mx-3 mx-md-5 mt-n6">
    <PresentationCounter />
    <BuiltByDevelopers />
    <PresentationInformation />
    <PresentationTestimonials />
    <div class="container-fluid mt-sm-5 border-radius-xl" :style="{
      background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
    }">
      <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
        backgroundImage: `url(${wavesWhite})`
      }" loading="lazy">
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Are you ready to go Green?
                </h3>
                <p class="text-white text-md">
                  Embark on a sustainable journey with Greenify today. Contact us to find the perfect green energy
                  solutions for your home, and join a community committed to making a positive impact on the
                  environment.
                  Are you ready to go green? Let's make a difference together.
                </p>

                <a href="/pages/landing-pages/contact-us"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Thank you for your support!</h4>
            <p class="lead mb-0">We deliver the best sustainable energy solutions.</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton route="#" component="twitter" color="twitter" label="Tweet" />
            <MaterialSocialButton route="#" component="facebook-square" color="facebook" label="Share" />
            <MaterialSocialButton route="#" component="pinterest" color="pinterest" label="Pin it" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
