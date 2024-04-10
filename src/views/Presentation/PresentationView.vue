<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";


//Vue Material Kit 2 components
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
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  
  <header>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="page-header min-vh-75"
            style="background-image: url(&#39;https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80&#39;);"
            loading="lazy">
            <span class="mask bg-gradient-dark"></span>
            <div class="container">
              <div class="row">
                <div class="col-lg-6 my-auto">
                  <h4 class="text-white mb-0 fadeIn1 fadeInBottom">Pricing Plans</h4>
                  <h1 class="text-white fadeIn2 fadeInBottom">Work with the rockets</h1>
                  <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Wealth creation is an evolutionarily recent
                    positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just
                    seeking status.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow-lg mt-n5 mx-4 mb-4">
            <div class="card-body">
              <div class="container-fluid px-0">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                    <div class="info-horizontal bg-gradient-primary border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-white">shuffle</i>
                      <div class="description ps-0 ps-md-3">
                        <h5 class="text-white">Netflix&#39;s &#39;Shuffle Play&#39; feature</h5>
                        <p class="text-white pe-0 pe-lg-5">The Arctic Ocean freezes every winter and much of the sea-ice
                          then thaws every summer, and that process will continue whatever.</p>
                        <a href="javascript:;" class="text-white icon-move-right">
                          More about us
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 px-lg-1">
                    <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-gradient text-primary">redeem</i>
                      <div class="description ps-0 ps-md-3">
                        <h5>Landbot closes $8M Series</h5>
                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and
                          that process will continue whatever.</p>
                        <a href="javascript:;" class="text-primary icon-move-right">
                          More about us
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-lg-0 mt-4">
                    <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-gradient text-primary">bookmarks</i>
                      <div class="description ps-0 ps-md-3">
                        <h5>Brave web browser</h5>
                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and
                          that process will continue whatever.</p>
                        <a href="javascript:;" class="text-primary icon-move-right">
                          More about us
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="page-header min-vh-75"
            style="background-image:url(&#39;https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80&#39;);"
            loading="lazy">
            <span class="mask bg-gradient-dark"></span>
            <div class="container">
              <div class="row">
                <div class="col-lg-6 my-auto">
                  <h4 class="text-white mb-0 fadeIn1 fadeInBottom">Our Team</h4>
                  <h1 class="text-white fadeIn2 fadeInBottom">Work with the best</h1>
                  <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">Free people make free choices. Free choices
                    mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can’t have
                    both.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow-lg mt-n5 mx-4 mb-4">
            <div class="card-body">
              <div class="container-fluid px-0">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                    <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-gradient text-info">shuffle_on</i>
                      <div class="description ps-0 ps-md-3">
                        <h5>Netflix&#39;s &#39;Shuffle Play&#39; feature</h5>
                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and
                          that process will continue whatever.</p>
                        <a href="javascript:;" class="text-dark icon-move-right">
                          Learn more
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 px-lg-1">
                    <div
                      class="info-horizontal info-horizontal bg-gradient-info border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-white">beenhere</i>
                      <div class="description ps-0 ps-md-3">
                        <h5 class="text-white">Landbot closes $8M Series</h5>
                        <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                          every summer, and that process will continue whatever.</p>
                        <a href="javascript:;" class="text-white icon-move-right">
                          Learn more
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-lg-0 mt-4">
                    <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-gradient text-info">ballot</i>
                      <div class="description ps-0 ps-md-3">
                        <h5>Brave web browser</h5>
                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and
                          that process will continue whatever.</p>
                        <a href="javascript:;" class="text-dark icon-move-right">
                          Learn more
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="page-header min-vh-75"
            style="background-image: url(&#39;https://images.unsplash.com/photo-1543269866-487350d6fa5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80&#39;);"
            loading="lazy">
            <span class="mask bg-gradient-dark"></span>
            <div class="container">
              <div class="row">
                <div class="col-lg-6 my-auto">
                  <h4 class="text-white mb-0 fadeIn1 fadeInBottom">Office Places</h4>
                  <h1 class="text-white fadeIn2 fadeInBottom">Work from home</h1>
                  <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">You’re spending time to save money when you
                    should be spending money to save time.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow-lg mt-n5 mx-4 mb-4">
            <div class="card-body">
              <div class="container-fluid px-0">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                    <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-gradient text-danger">tune</i>
                      <div class="description ps-0 ps-md-3">
                        <h5>Netflix&#39;s &#39;Shuffle Play&#39; feature</h5>
                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and
                          that process will continue whatever.</p>
                        <a href="javascript:;" class="text-dark icon-move-right">
                          More about us
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 px-lg-1">
                    <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-gradient text-danger">settings_suggest</i>
                      <div class="description ps-0 ps-md-3">
                        <h5>Landbot closes $8M Series</h5>
                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and
                          that process will continue whatever.</p>
                        <a href="javascript:;" class="text-dark icon-move-right">
                          More about us
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-lg-0 mt-4">
                    <div class="info-horizontal bg-gradient-danger border-radius-xl p-4 d-block d-md-flex ">
                      <i class="material-icons text-3xl text-white">compare</i>
                      <div class="description ps-0 ps-md-3">
                        <h5 class="text-white">Brave web browser</h5>
                        <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                          every summer, and that process will continue whatever.</p>
                        <a href="javascript:;" class="text-white icon-move-right">
                          More about us
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="min-vh-75 position-absolute w-100 top-0">
        <a class="carousel-control-prev ms-n5" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon position-absolute bottom-50" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next me-n5" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon position-absolute bottom-50" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </header>



  <div class="card card-body blur shadow-blur mx-3 mx-md-4 ">
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
