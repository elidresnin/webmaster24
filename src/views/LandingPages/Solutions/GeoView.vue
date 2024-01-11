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
        style="background-image: url(https://electrek.co/wp-content/uploads/sites/3/2022/11/geothermal-iceland.jpg?quality=82&strip=all&w=1600); background-size:cover;"
        loading="lazy"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex justify-content-center flex-column">
            <div class="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
              <h1>Geothermal</h1>
              <p class="lead pe-5 me-5">Explore another great Green Energy solution. Use the heat in the Earth to power
                your home.</p>
              
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
                  src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_05/2733301/190129-geothermal-power-plant-al-1102.jpg"
                  alt="merc">
              </div>
            </div>
            <p
              class="blockquote border border-primary rounded w-50 p-3 text-sm text-primary float-md-end mt-4 me-md-n2 mx-auto">
              “We have this handy fusion reactor in the sky called the sun; you don’t have to do anything, it just works.
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
            <p>Residential geothermal solutions harness the Earth's natural heat to provide an efficient, sustainable, and
              eco-friendly source of heating, cooling, and hot water for homes. Unlike traditional heating and cooling
              systems that rely on burning fossil fuels or electricity, geothermal systems tap into the consistent
              temperature of the Earth's subsurface. These systems use a network of pipes, known as a ground loop, buried
              in the ground to transfer heat to or from the Earth, depending on the season.
            </p>
            <p>During the winter, the geothermal system absorbs heat from the ground and transfers it into the home,
              providing warmth. In the summer, the process is reversed, with the system pulling heat from the home and
              depositing it into the cooler ground, effectively providing air conditioning. This geothermal exchange
              allows for a highly efficient and constant source of temperature control throughout the year, reducing the
              reliance on external energy sources.
            </p>
            <p class="mb-0 ">Residential geothermal solutions offer numerous benefits, including lower energy bills,
              reduced greenhouse gas emissions, and increased home comfort. While the initial installation costs may be
              higher compared to traditional systems, these are often offset by long-term energy savings and potential
              government incentives. With advancements in technology and growing environmental awareness, geothermal
              solutions continue to gain popularity as an effective and sustainable alternative for homeowners seeking
              reliable and energy-efficient heating and cooling solutions.
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
                <p class="mb-2">Geothermal heat pumps (GHPs) exemplify a forward-thinking approach to residential climate
                  control, utilizing the Earth's natural thermal energy for efficient heating and cooling. The heart of a
                  GHP system lies in its ground loop, a network of pipes buried underground that capitalizes on the
                  Earth's consistent temperature. In winter, the system extracts heat from the ground to warm the home,
                  while in summer, it expels excess heat back into the ground to provide cooling. This renewable and
                  constant heat source allows GHPs to achieve impressive energy efficiencies, significantly reducing
                  reliance on traditional heating and cooling methods and minimizing environmental impact.</p>

                <p>The exceptional energy efficiency of geothermal heat pumps not only translates into lower utility bills
                  for homeowners but also contributes to a greener and more sustainable living. Despite the initial
                  investment being higher than conventional HVAC systems, the long-term savings, coupled with potential
                  government incentives, make GHPs an economically viable and environmentally responsible choice. As
                  technology advances and awareness of eco-friendly alternatives grows, geothermal heat pumps emerge as a
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
                    <img src="https://d33wubrfki0l68.cloudfront.net/ece52de121797642d95e774406e964af155b5067/aba5d/static/106e2cfe4463fabf123843ec339812c8/5338b/geothermal-heat-pump.jpg"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Geothermal Hot Water Systems</h2>
                <p class="mb-2">Geothermal water heating harnesses the Earth's internal heat to provide a reliable and
                  energy-efficient source for residential hot water needs. In this system, a geothermal heat pump extracts
                  heat from the ground or a water source and transfers it to a water heater for domestic use. This process
                  is remarkably efficient, as the Earth's consistent subsurface temperature allows for consistent water
                  heating throughout the year. Unlike traditional water heaters that rely on electricity or gas,
                  geothermal water heating systems significantly reduce energy consumption and contribute to lowering
                  overall carbon footprints.
                </p>

                <p>One of the standout features of geothermal water heating is its versatility. Whether integrated with a
                  geothermal heat pump for comprehensive home climate control or employed as a standalone system dedicated
                  to water heating, this technology offers a sustainable alternative to conventional methods. Homeowners
                  opting for geothermal water heating not only benefit from reduced energy bills but also align with the
                  global shift towards environmentally friendly and energy-efficient solutions. As interest in renewable
                  technologies grows, geothermal water heating stands out as a reliable and eco-conscious choice for
                  households seeking a sustainable and cost-effective approach to meeting their hot water needs.
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
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is geothermal energy?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is a renewable and sustainable form of power derived from the Earth's internal heat. This energy source is harnessed through various technologies to generate electricity or provide heating and cooling for residential, commercial, and industrial applications.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingTwo">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How is geothermal energy generated?

                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is generated by tapping into the Earth's internal heat through the use of geothermal heat pumps or geothermal power plants. The heat from the Earth's interior is transferred to the surface and converted into electricity or used directly for heating and cooling purposes.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingThree">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What are the environmental benefits of geothermal energy?<i
                      class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is environmentally friendly, producing significantly lower greenhouse gas emissions compared to fossil fuels. It has a minimal impact on air quality and water resources, making it a clean and sustainable alternative that helps combat climate change.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFour">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Where is geothermal energy most commonly used?<i
                      class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal energy is utilized globally, with prominent usage in countries situated along tectonic plate boundaries, such as Iceland, the United States, Philippines, and New Zealand. These regions benefit from abundant geothermal resources.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFifth">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                    Can geothermal energy be used for residential heating and cooling?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFifth" class="accordion-collapse collapse" aria-labelledby="headingFifth"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Yes, geothermal energy is widely used for residential heating and cooling through geothermal heat pump systems. These systems transfer heat to or from the ground to regulate indoor temperatures efficiently and sustainably.
                    </p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingsix">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseFifth">
                    What is the lifespan of a geothermal power plant?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Geothermal power plants have a long lifespan, typically exceeding 25 years. With proper maintenance, these plants can operate efficiently for several decades, providing a reliable and consistent source of electricity.</p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="heading7">
                  <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    Are there financial incentives for adopting geothermal energy?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Many governments offer financial incentives, tax credits, and rebates to encourage the adoption of geothermal energy systems. These incentives can offset installation costs, making geothermal technologies more economically attractive for homeowners and businesses. </p>
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
