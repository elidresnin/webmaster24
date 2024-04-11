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
      style="background-image: url(https://www.jups.co.za/wp-content/uploads/2021/10/GettyImages-1278948452-e1fdce3baef44af28f449ab36d6717f3.jpeg);"
      loading="lazy">
      <span class="mask bg-gradient-dark opacity-4"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-9 text-center mx-auto">
            <h1 class="text-white mb-4">Solar Energy</h1>
            <p class="lead text-white mb-sm-6 mb-4">Explore the most common Green Energy solution. Use the sun to power
              your home.</p>
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
                  src="https://i.guim.co.uk/img/media/a654108994e271738df8e26b0318a9541efc3bd1/0_243_5000_3001/master/5000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a44460337a02ed5da45f8561fd1e880c"
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
                  src="https://www.investopedia.com/thmb/eXmLbIiWNUDfZoAsOaLsKDDh6-o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/house-with-solar-panels-181062267-7f895543fc8646e8b0807804f2054b32.jpg"
                  alt="steer">
              </div>
            </div>

          </div>
          <div class="col-md-5">
            <!-- First image on the right side, above the article -->
            <div class="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
              <div class="blur-shadow-image">
                <img class="image-right border-radius-lg img-fluid position-relative bg-cover"
                  src="https://images.newscientist.com/wp-content/uploads/2023/08/03153215/SEI_166411202.jpg"
                  alt="biturbo">
              </div>
            </div>
            <h3 class="mb-4">Why go Solar?</h3>
            <p>Solar power is the process of photovoltaic (PV) cells capturing and converting light to usable energy.
              Individual cells are put together to form solar panels, and can be anywhere that has exposure to sunlight.
              They work in a number of
              climates as long as they are exposed to sunlight during most of the day. They can be placed on roofs that
              are sturdy and in good shape
              or open fields. The best placement for a solar panel is angled south if in the northern hemisphere and
              angled north in the southern hemisphere.

            </p>
            <p>Solar panels work by converting energy from the sun into power. This can come in two forms, electricity
              and heat. Solar panels are usually made from silicon, or another semiconductor material installed in a
              metal panel frame with a glass casing. When this material is exposed to photons of sunlight it releases
              electrons and produces an electric charge. This photovoltaic effect (PV) charge creates an electric
              current, which is captured by the wiring in solar panels. It is then converted into an alternating current
              by an inverter.

            </p>
            <p class="mb-0 ">Beyond the environmental benefits, residential solar installations also
              enhance
              the value of a property. Homes equipped with solar panels are often viewed as more attractive to potential
              buyers, and studies have shown that solar-equipped homes tend to sell faster and at higher prices than
              their
              non-solar counterparts. One study by Lawrence Berkeley National Laboratory showed that on average, solar increased the value of a home by about $15,000. 

            </p>
          </div>
        </div>
      </div>
    </section>


    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-10 ms-auto me-auto text-center">
          <h1 class="mt-7">Popular Solar Solutions</h1>
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
                      src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/10/Screen_Shot_2022-10-14_at_11.14.34_AM.png"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Hybrid Solar Systems </h2>
                <p class="mb-2">As the name suggests, a hybrid solar system is simply a combination of on-grid and
                  off-grid systems. Similar to an on-grid solar system, a hybrid solar power system is connected to the
                  utility power grid. </p>

                <p>What makes it more flexible is, if you choose to go with this option, your house can draw energy both
                  from the grid and battery when needed.</p>

                <p>A hybrid solar system sends solar power to your inverter, which then sends energy to power your home.
                  The extra energy that is not used to power your home goes to the battery for storage. That is why the
                  battery can provide power to your home when your solar panels are not producing energy.

                </p>
                <p>If there is not enough energy in the battery, the house will then take electricity from the grid.
                </p>
                <p>
                  Keep in mind that hybrid systems are more expensive than grid-tied systems due to the added battery
                  and
                  installation costs. On the other hand, they are much cheaper than off-grid solar systems. The main
                  benefit of a hybrid solar system is that you will have power in any situation.
                </p>
              </div>
            </div>
          </div>
          <hr class="horizontal dark my-sm-6 my-3 mx-7" />
          <div class="col-lg-12 mt-5">
            <div class="row flex-row-reverse">
              <div class="col-lg-6 justify-content-center d-flex flex-column">
                <div class="card border-radius-lg">
                  <div class="blur-shadow-image">
                    <img src="https://image.made-in-china.com/2f0j00AjqRdaOnpLkZ/Split-Pressurized-Solar-Boiler.jpg"
                      alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg">
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <h2 class="mb-4">Solar Water Heating</h2>
                <p class="mb-2">Solar water heating systems, designed to harness the sun's energy for domestic hot water
                  needs, offer an efficient and eco-friendly alternative. Operating on a similar principle to solar
                  photovoltaic systems, solar water heaters utilize sunlight to heat a fluid within solar collectors. .
                </p>

                <p>Solar Water Heaters are known for their reliability and energy-saving capabilities, and they come in various
                  types,
                  with the most common being passive and active systems. Passive systems rely on natural convection to
                  circulate the heated water, while active systems use pumps to facilitate fluid movement.</p>

                <p>A significant advantage of solar water heating lies in its ability to function in conjunction with
                  traditional water heating systems, offering a hybrid solution. In this setup, the solar water heating
                  system is integrated with the existing water heater. When solar energy is available, the system heats
                  the water directly. However, during periods of insufficient sunlight, the conventional water heater
                  takes over to ensure a continuous and reliable hot water supply.
                </p>
                <p>
                  This flexibility ensures that homeowners benefit from solar energy whenever possible, reducing
                  reliance
                  on conventional energy sources.
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
                    How do residential solar panels work?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Residential solar panels convert sunlight into electricity through the photovoltaic effect. Solar
                      cells within the panels absorb sunlight, generating direct current (DC) electricity, which is then
                      converted into alternating current (AC) by an inverter for use in homes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingTwo">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    What factors determine the efficiency of a residential solar system?

                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      The efficiency of a residential solar system is influenced by factors such as sunlight exposure,
                      panel orientation, shading, and the quality of solar panels and inverters. Proper installation and
                      regular maintenance also contribute to overall efficiency.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingThree">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    How much space do I need for residential solar panels? <i
                      class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      The space required for residential solar panels depends on factors like energy consumption, panel
                      efficiency, and local sunlight conditions. On average, a 1 kW solar system may need about 100
                      square
                      feet of roof space.

                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFour">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                    aria-controls="collapseFour">
                    What is net metering, and how does it benefit residential solar users? <i
                      class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Net metering allows residential solar users to send excess electricity generated back to the grid.
                      In return, users receive credits on their utility bills. This ensures efficient use of solar power
                      and cost savings when energy production exceeds consumption.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingFifth">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false"
                    aria-controls="collapseFifth">
                    What is the lifespan of residential solar panels?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapseFifth" class="accordion-collapse collapse" aria-labelledby="headingFifth"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Most residential solar panels come with warranties ranging from 25 to 30 years. While panels may
                      continue to produce energy well beyond this period, their efficiency gradually decreases over
                      time.
                    </p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="headingsix">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false"
                    aria-controls="collapseFifth">
                    How do I finance a residential solar installation?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Financing options for residential solar installations include cash purchases, loans, leases, or
                      power purchase agreements (PPAs). Many homeowners also take advantage of government incentives and
                      tax credits to offset installation costs. </p>
                  </div>
                </div>

              </div>
              <div class="accordion-item mb-3">
                <h5 class="accordion-header" id="heading7">
                  <button class="accordion-button border-bottom font-weight-bold" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false"
                    aria-controls="collapse7">
                    Can residential solar panels function during power outages?
                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                  </button>
                </h5>
                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7"
                  data-bs-parent="#accordionRental">
                  <div class=" text-sm text-dark mt-1">
                    <p>
                      Typically, grid-tied solar systems shut down during power outages to prevent backfeeding
                      electricity
                      into the grid. However, with the addition of battery storage systems, some setups can provide
                      backup
                      power to essential appliances, ensuring continuity during outages. </p>
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
