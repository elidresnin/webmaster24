<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Join the movement.</h2>
          <h2 class="text-gradient text-success mb-3">
            Hear from Real People who made the switch to sustainable energy.
          </h2>
          <p class="lead">
            Hundreds of thousands of Americans have reaped the benefits of going green.
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          name="Penelope Cohen"
          date="1 day ago"
          review='"Residential solar has transformed our energy consumption, resulting in substantial cost savings and a reduced environmental impact. The installation process was seamless, and we now enjoy the dual benefits of lower electricity bills and a cleaner conscience. Embracing residential solar power has proven to be a positive and sustainable choice for our home."'
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="Daniel Taylor"
          date="1 week ago"
          review='"Opting for residential wind power has been a fantastic decision for our household. The installation process was straightforward, and we&#39;re now experiencing the perks of harnessing clean and renewable energy right at home. Not only have our electricity costs decreased, but we also take pride in contributing to a greener planet by utilizing the power of the wind. Making the switch to residential wind has proven to be a reliable and eco-friendly choice for our energy needs."'
          :rating="5.0"
        />

        <DefaultReviewCard
          name="Kevin Wu"
          date="3 weeks ago"
          review='"Choosing geothermal energy for our residence has been a game-changer. The installation was efficient, and we now enjoy a constant and reliable source of clean energy. Our home stays comfortable year-round, and the reduction in utility bills reflects both the environmental and financial benefits of embracing geothermal technology. Opting for residential geothermal has proven to be a sustainable and rewarding investment in the long-term well-being of both our household and the planet."'
          :rating="5.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
    </div>
  </section>
</template>
