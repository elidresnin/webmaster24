<script setup>

import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";


</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <header>
    <div class="page-header  min-vh-75 " style="background-color: grey;">
      <div class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block"
        style="background-image: url(https://www.energy.gov/sites/default/files/2019/07/f65/25897.jpg); background-size:cover;"
        loading="lazy"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex justify-content-center flex-column">
            <div class="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
              <h1>Wind</h1>
              <p class="lead pe-5 me-5">Explore the another great Green Energy solution. Use wind to power your home.</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4 row align-items-center">

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 position-relative">
            <div class="position-relative ms-md-5 me-md-n5">
              <div class="blur-shadow-image">
                <img class="image-left border-radius-lg img-fluid position-relative top-0 end-0 bg-cover"
                  src="https://media.wired.com/photos/63227cb600704d14b5ffb891/master/pass/windturbines_Science_GettyImages-1203659530.jpg"
                  alt="merc">
              </div>
            </div>
            <p
              class="blockquote border border-primary rounded w-50 p-3 text-sm text-primary float-md-end mt-4 me-md-n2 mx-auto">
              "The two most abundant forms of power on earth are solar and wind, and they're getting cheaper and cheaper." 
              <br>
              <br>
              <small>-Ed Begley, Jr.</small>
            </p>
            <!-- Second image on the left side of the article -->
            <div class="position-absolute bottom-0 ms-n2 me-3 start-0 end-2 d-md-block d-none">
              <div class="blur-shadow-image">
                <img class="image-container border-radius-lg img-fluid position-relative bg-cover"
                  src="https://www.treehugger.com/thmb/naVuekeUWT-HsmYE1LietPFGCJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wind-turbine-generator-on-house-roof-90967703-b9619befbf954726ae92dfb6154711f2.jpg"
                  alt="steer">
              </div>
            </div>

          </div>
          <div class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div class="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
              <div class="blur-shadow-image">
                <img class="image-right border-radius-lg img-fluid position-relative bg-cover"
                  src="https://paylesspower.com/wp-content/uploads/2023/10/i1_Is-a-Home-Wind-Turbine-Right-for-You.png"
                  alt="biturbo">
              </div>
            </div>
            <h3 class="mb-4">Why Wind?</h3>
            <p>Residential wind power systems have emerged as a viable and sustainable energy solution for environmentally
              conscious homeowners. These systems typically consist of small-scale wind turbines installed on residential
              properties to harness the kinetic energy from the wind and convert it into electricity. While not as
              prevalent as solar power, residential wind power offers an alternative means of generating clean energy.
              These wind turbines, often mounted on towers, capture the wind's energy and convert it into electrical power
              through a generator, contributing to a more diversified and eco-friendly energy mix.
            </p>
            <p>One of the key advantages of residential wind power is its capacity to produce electricity even during
              periods of low sunlight, such as at night or during overcast days. This contrasts with solar power,
              providing homeowners with a more reliable and consistent renewable energy source. As technology continues to
              advance, smaller and more efficient wind turbines are becoming available for residential use, making it
              increasingly feasible for homeowners to incorporate wind power into their energy portfolios. Additionally,
              some regions offer incentives, tax credits, or favorable feed-in tariffs to encourage the adoption of
              residential wind power, further promoting its accessibility and affordability.
            </p>
            <p class="mb-0 ">Apart from its environmental benefits, residential wind power systems can contribute to
              energy independence for homeowners. By generating their own electricity, homeowners may reduce their
              reliance on traditional utility grids and, in some cases, even sell excess power back to the grid. This
              potential for energy self-sufficiency aligns with the broader global shift towards decentralized and
              sustainable energy solutions, empowering individuals to actively participate in the transition to a cleaner
              and more resilient energy future.
            </p>
          </div>
        </div>
      </div>
    </section>


    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-10 ms-auto me-auto text-center">
          <h1 class="mt-7">Popular Wind Solutions</h1>
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
                    <img
                      src="https://static.homeguide.com/assets/images/content/homeguide-home-with-solar-panels-and-wind-turbine.jpg"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Residential Wind Turbines</h2>
                <p class="mb-2">Residential wind turbines offer homeowners a sustainable and independent source of
                  electricity by harnessing the natural power of the wind. These compact turbines, whether mounted on
                  rooftops or standalone towers, function as miniature wind farms, capturing the kinetic energy in the air
                  and converting it into electricity. Suited for a variety of geographical locations, these turbines can
                  operate in a range of wind conditions, providing a consistent and renewable energy source for individual
                  households. While factors such as wind speed, local regulations, and available space influence their
                  efficacy, residential wind turbines contribute to a greener lifestyle, reducing reliance on traditional
                  power sources and potentially allowing homeowners to become energy contributors to the grid.</p>

                <p>As technology evolves, modern residential wind turbines address concerns associated with noise and
                  efficiency, making them increasingly attractive for environmentally conscious homeowners. While initial
                  costs and maintenance considerations exist, government incentives and rebates can enhance the economic
                  viability of these systems, positioning residential wind turbines as a promising option for those
                  looking to take an active role in sustainable energy generation. As the world continues to emphasize the
                  importance of renewable energy, residential wind turbines stand as a tangible and forward-thinking
                  solution for homeowners seeking to integrate clean, wind-powered electricity into their daily lives.</p>


              </div>
            </div>
          </div>
          <hr class="horizontal dark my-sm-6 my-3 mx-7" />
          <div class="col-lg-12 mt-5">
            <div class="row flex-row-reverse">
              <div class="col-lg-6 justify-content-center d-flex flex-column">
                <div class="card border-radius-lg">
                  <div class="blur-shadow-image">
                    <img src="https://www.globalsources.com/STM/wp-content/uploads/IT_SOLARWINDHYBRIDSYSTEM_1200x800.jpg"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Hybrid Wind-Solar System</h2>
                <p class="mb-2">Hybrid wind-solar systems represent a cutting-edge approach to sustainable energy
                  generation, combining the strengths of both wind and solar technologies to create a more reliable and
                  efficient power source. In these integrated systems, solar panels and wind turbines work together to
                  maximize energy production. The complementary nature of wind and solar power enhances overall system
                  performance by capturing energy during different times of the day and seasons.</p>

                <p>During daylight hours or periods of high solar exposure, solar panels generate electricity from
                  sunlight. Simultaneously, wind turbines harness wind energy, which tends to be more prevalent during the
                  evenings and in inclement weather. By combining these two renewable sources, hybrid systems offer a more
                  consistent and dependable energy output, minimizing reliance on external power grids and providing a
                  stable energy supply even when one source experiences fluctuations.</p>

                <p>One of the key advantages of hybrid wind-solar systems is their ability to address the intermittency
                  issues associated with standalone wind or solar installations. Battery storage can be incorporated into
                  these systems to store excess energy generated during peak production times for use during low
                  production periods. This innovative integration not only ensures a more continuous power supply but also
                  enhances the system's overall efficiency and reliability. As technology advances, hybrid wind-solar
                  systems continue to gain popularity as a versatile and sustainable solution for individuals and
                  businesses seeking resilient and eco-friendly energy alternatives.</p>

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
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How does residential wind power work?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Residential wind power involves the use of small-scale wind turbines installed on rooftops or
                      standalone towers. These turbines capture the kinetic energy of the wind, turning it into
                      electricity through the rotation of blades connected to a generator. The generated electricity is
                      then either used directly in the home or stored for future use.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingTwo">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What factors determine the feasibility of residential wind power?

                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Several factors impact the effectiveness of residential wind power, including average wind speed,
                      local regulations, available space, and the height of the installation. A thorough wind resource
                      assessment is essential to determine if a specific location is suitable for residential wind
                      turbines.


                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingThree">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Can residential wind turbines operate in all weather conditions?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Yes, residential wind turbines are designed to operate in a range of weather conditions. They can
                      generate electricity in varying wind speeds, with some models equipped to withstand adverse weather,
                      ensuring a continuous power supply.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFour">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How much energy can a residential wind turbine generate?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      The energy output of a residential wind turbine depends on factors such as wind speed and turbine
                      size. On average, a well-placed residential wind turbine can generate a significant portion of a
                      household's electricity needs.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFifth">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                    What is the lifespan of a residential wind turbine?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFifth" class="accordion-collapse collapse" aria-labelledby="headingFifth"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Residential wind turbines typically have a lifespan of 20 to 25 years, but with proper maintenance,
                      they can continue to function effectively for a more extended period. Regular inspections and upkeep
                      contribute to maximizing their operational life.</p>


                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingsix">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseFifth">
                    Are there government incentives for residential wind power installations?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>Yes, many governments offer incentives, rebates, and tax credits to encourage the adoption of
                      residential wind power. These financial incentives can significantly offset the initial costs of
                      purchasing and installing wind turbines.
                    </p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="heading7">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    Can residential wind power systems be integrated with the grid?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Yes, residential wind power systems can be grid-tied. Excess electricity generated by the wind
                      turbine can be fed back into the grid, allowing homeowners to receive credits or compensation for
                      the surplus energy they contribute. This integration ensures a reliable power supply, especially
                      during periods of low wind activity. </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



</div>

<DefaultFooter /></template>
