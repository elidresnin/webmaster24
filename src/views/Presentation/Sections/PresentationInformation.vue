<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">


            <h2 class="text-dark mb-0">Explore our Solutions</h2>
            <p class="lead">
              We make it easier to cut your electric bill while saving the planet at the same time.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://www.cnet.com/a/img/resize/bbcdbdb37048b08b6a0b14975c9ea5fc4041b7f5/hub/2022/10/10/f2ff9ef7-f016-459d-b88a-a8a68270c315/solar-gettyimages-525206743.jpg?auto=webp&fit=crop&height=1200&width=1200"
              icon="touch_app"
              title="Solar <br /> Energy"
              description="Our most popular sustainable option for urban areas."
            />

            <RotatingCardBack
              image="https://www.cnet.com/a/img/resize/bbcdbdb37048b08b6a0b14975c9ea5fc4041b7f5/hub/2022/10/10/f2ff9ef7-f016-459d-b88a-a8a68270c315/solar-gettyimages-525206743.jpg?auto=webp&fit=crop&height=1200&width=1200"
              
              title="Solar"
              description="Learn how we provide homeowners with the knowledge and resources to embrace a cleaner, more sustainable energy source. Take the first step toward a brighter future – harness the sun's power and transform your home into a beacon of renewable energy"
              :action="[
                {
                  route: 'pages/solutions/solar',
                  label: 'Learn More',
                },
              ]"
            />
          </RotatingCard>
        </div>
        
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://upload.wikimedia.org/wikipedia/commons/b/ba/Windmills_D1-D4_%28Thornton_Bank%29.jpg"
              icon="touch_app"
              title="Wind <br /> Energy"
              description="Use the power of the wind to transform your life and protect the earth"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Wind"
              description="We guide homeowners through the exciting realm of wind power, offering insights and resources to seamlessly integrate this renewable energy source into their lives. Take a step towards sustainability – let the winds of change fuel your home's energy transformation for a greener tomorrow."
              :action="[
                {
                  route: 'pages/solutions/wind',
                  label: 'Learn More',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://www.thecooldown.com/wp-content/uploads/2022/09/AQZw0Us0FzycQ941sZ5n-GeFjqY7ZWOik6DRAZr2sI8-1.jpg"
              icon="touch_app"
              title="Geothermal <br /> Energy"
              description="Take advantage of the heat buried beneath the Earth's surface to lead a sustainable life."
            />

            <RotatingCardBack
              image="https://www.thecooldown.com/wp-content/uploads/2022/09/AQZw0Us0FzycQ941sZ5n-GeFjqY7ZWOik6DRAZr2sI8-1.jpg"
              title="Geothermal"
              description="We delve into the possibilities of harnessing the Earth's natural warmth, providing homeowners with insights and resources to embrace an eco-friendly and efficient geothermal energy system. Take a step towards a sustainable home – discover the power beneath your feet and join the geothermal revolution for a greener future."
              :action="[
                {
                  route: 'pages/solutions/geothermal',
                  label: 'Learn More',
                },
              ]"
            />
          </RotatingCard>
        </div>
      </div>
    </div>
  </section>
</template>
