<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Trusted by over</h2>
          <h2 class="text-gradient text-success mb-3">
            100,000 Real People
          </h2>
          <p class="lead">
            Many Fortune 500 companies, startups, universities and governmental
            institutions love Creative Tim's products.
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          name="Nick Willever"
          date="1 day ago"
          review='"Thanks to Greenify, our home has become a beacon of sustainability, with their insightful guides and recommendations making our transition to clean energy a seamless and rewarding experience."'
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="Ethan Quan"
          date="1 week ago"
          review='"Choosing Greenify was a game-changer for our household; their expertise in solar solutions not only saved us money but also fueled our commitment to a greener, more environmentally conscious lifestyle."'
          :rating="5.0"
        />

        <DefaultReviewCard
          name="Samuel Kamuli"
          date="3 weeks ago"
          review='"With the invaluable guidance from Greenify, we transformed our house into an eco-friendly haven, embracing solar solutions that not only reduced our carbon footprint but also significantly lowered our energy bills."'
          :rating="5.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
    </div>
  </section>
</template>
