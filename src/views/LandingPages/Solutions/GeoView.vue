<script setup>

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";


</script>
<template>
  <div class=" position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <header>
    <div class="page-header min-vh-80"
      style="background-image: url(https://electrek.co/wp-content/uploads/sites/3/2022/11/geothermal-iceland.jpg?quality=82&strip=all&w=1600);"
      loading="lazy">
      <span class="mask bg-gradient-dark opacity-4"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-9 text-center mx-auto">
            <h1 class="text-white mb-4">Geothermal Energy</h1>
            <p class="lead text-white mb-sm-6 mb-4">Explore another great Green Energy solution. Use the heat in the Earth to power your home.</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-5 mt-n6 mb-4 row align-items-center">

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 position-relative">
            <div class="position-relative ms-md-5 me-md-n5">
              <div class="blur-shadow-image">
                <img class="image-left border-radius-lg img-fluid position-relative top-0 end-0 bg-cover"
                  src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733301/190129-geothermal-power-plant-al-1102.jpg"
                  alt="merc">
              </div>
            </div>
            <p
              class="blockquote border border-primary rounded w-50 p-3 text-sm text-primary float-md-end mt-4 me-md-n2 mx-auto">
              “We have this handy fusion reactor in the sky called the sun; you don’t have to do anything, it just
              works.
              It shows up every day.”
              <br>
              <br>
              <small>-Elon Musk</small>
            </p>
            <!-- Second image on the left side of the article -->
            <div class="position-absolute bottom-0 ms-n2 me-3 start-0 end-2 d-md-block d-none">
              <div class="blur-shadow-image">
                <img class="image-container border-radius-lg img-fluid position-relative bg-cover"
                  src="https://www.climatemaster.com/images/18.7cc2eb121759c8cc7ca13148/1607529176517/what%20is%20geothermal%20home.jpg"
                  alt="steer">
              </div>
            </div>

          </div>
          <div class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div class="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
              <div class="blur-shadow-image">
                <img class="image-right border-radius-lg img-fluid position-relative bg-cover"
                  src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F508964ca-fea6-11e6-a451-b5ddf4ba5eec.jpg?crop=2250%2C1500%2C0%2C0"
                  alt="biturbo">
              </div>
            </div>
            <h3 class="mb-4">Why Geothermal?</h3>
            <p>Geothermal energy is energy that originates from the Earth in the form of heat. Water that is at high
              temperatures due to the natural heat of the Earth is drawn from wells, and can then be harnessed to
              provide electricity. Geothermal energy is renewable and clean, unlike fossil fuels. It does not produce
              any greenhouse gasses, and will always be available, as the source of energy is the Earth’s core.
              Geothermal energy can be harnessed at any time, as it doesn’t depend on weather conditions. Because of
              this, geothermal energy sources can be used to produce electricity 24/7. Geothermal energy is simple to be
              incorporated into buildings that are already standing, due to the fact that they require a relatively
              small amount of land per gigawatt-hour of 404 sq. m, compared to other energy sources, including coal
              (3,642 sq. m), wind (1335 sq. m), and solar-power (3237 sq. m).

            </p>
            <p class="lead">
              For property placed in service before January 1, 2033, tax credit equivalent to 30% of the cost of the
              pump can be gained for geothermal heat pumps.

            </p>
            <p class="mb-0 ">
            </p>
          </div>
        </div>
      </div>
    </section>


    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-10 ms-auto me-auto text-center">
          <h1 class="mt-7">Popular Geothermal Solutions</h1>
        </div>
      </div>
    </div>


    <section class="py-5">
      <div class="container">
        <div class="row mt-7 ">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6 justify-content-center d-flex flex-column">
                <div class="card border-radius-lg">
                  <div class="d-block blur-shadow-image">
                    <img src="https://www.energy.gov/sites/default/files/2022-03/shutterstock_1179501688.jpg"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Geothermal Heat Pumps</h2>
                <p class="mb-2">GHPs are an extremely convenient use of geothermal energy. We are able to reach sources
                  of this energy without drilling nearly as deep into the ground as is required by oil and gas wells,
                  and the system is relatively simple. In GHPs, water is cycled through a loop that is partially
                  contained below ground and partially contained in the area that is to be heated. When the water goes
                  below-ground, it is heated by pockets of geothermal energy. Then, when it is cycled aboveground, the
                  heat is released to warm the surrounding area. The same system can be applied to the heating of water.
                </p>

                <p>The exceptional energy efficiency of geothermal heat pumps not only translates into lower utility
                  bills
                  for homeowners but also contributes to a greener and more sustainable living. Despite the initial
                  investment being higher than conventional HVAC systems, the long-term savings, coupled with potential
                  government incentives, make GHPs an economically viable and environmentally responsible choice. As
                  technology advances and awareness of eco-friendly alternatives grows, geothermal heat pumps emerge as
                  a
                  compelling solution for homeowners seeking reliable, energy-efficient, and environmentally conscious
                  climate control solutions.</p>


              </div>
            </div>
          </div>
          <hr class="horizontal dark my-sm-6 my-3 mx-7" />
          <div class="col-lg-12 mt-5">
            <div class="row flex-row-reverse">
              <div class="col-lg-6 justify-content-center d-flex flex-column">
                <div class="card border-radius-lg">
                  <div class="blur-shadow-image">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/ece52de121797642d95e774406e964af155b5067/aba5d/static/106e2cfe4463fabf123843ec339812c8/5338b/geothermal-heat-pump.jpg"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Geothermal Power Plants</h2>
                <p class="mb-2">Dry-Steam: In regions where there are natural sources of steam underground, it can be
                  funneled directly to power plants, where it can fuel turbines to produce electricity. However, these
                  naturally-occurring sources of steam are rare.
                </p>

                <p>
                  Flash-Steam: Flash-steam power plants use hot water from beneath the surface of the Earth to create
                  steam, which can then be used to fuel turbines.
                </p>
                <p>
                  Binary Cycle: These power plants use hot water to create steam from liquids that have lower boiling
                  points than water, meaning that it doesn't require as much heat to produce steam.

                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-4">
      <div class="container">
        <div class="row my-5">
          <div class="col-md-6 mx-auto text-center">
            <h2>Frequently Asked Questions</h2>
            <p>If you have more questions that are not answered below, feel free to contact us. </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="accordion" id="accordionRental">
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingOne">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    What is geothermal energy?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is a renewable and sustainable form of power derived from the Earth's internal
                      heat. This energy source is harnessed through various technologies to generate electricity or
                      provide heating and cooling for residential, commercial, and industrial applications.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingTwo">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    How is geothermal energy generated?

                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is generated by tapping into the Earth's internal heat through the use of
                      geothermal heat pumps or geothermal power plants. The heat from the Earth's interior is
                      transferred to the surface and converted into electricity or used directly for heating and cooling
                      purposes.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingThree">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    What are the environmental benefits of geothermal energy?<i
                      class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is environmentally friendly, producing significantly lower greenhouse gas
                      emissions compared to fossil fuels. It has a minimal impact on air quality and water resources,
                      making it a clean and sustainable alternative that helps combat climate change.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFour">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                    aria-controls="collapseFour">
                    Where is geothermal energy most commonly used?<i
                      class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is utilized globally, with prominent usage in countries situated along tectonic
                      plate boundaries, such as Iceland, the United States, Philippines, and New Zealand. These regions
                      benefit from abundant geothermal resources.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFifth">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false"
                    aria-controls="collapseFifth">
                    Can geothermal energy be used for residential heating and cooling?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFifth" class="accordion-collapse collapse" aria-labelledby="headingFifth"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Yes, geothermal energy is widely used for residential heating and cooling through geothermal heat
                      pump systems. These systems transfer heat to or from the ground to regulate indoor temperatures
                      efficiently and sustainably.
                    </p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingsix">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false"
                    aria-controls="collapseFifth">
                    What is the lifespan of a geothermal power plant?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal power plants have a long lifespan, typically exceeding 25 years. With proper
                      maintenance, these plants can operate efficiently for several decades, providing a reliable and
                      consistent source of electricity.</p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="heading7">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false"
                    aria-controls="collapse7">
                    Are there financial incentives for adopting geothermal energy?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Many governments offer financial incentives, tax credits, and rebates to encourage the adoption of
                      geothermal energy systems. These incentives can offset installation costs, making geothermal
                      technologies more economically attractive for homeowners and businesses. </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>

  <DefaultFooter />
</template>
