<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Customers"
                description="We give customers the knowledge and resources needed to embrace green energy solutions and create a more sustainable home."
                :count="100000"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Particpating Energy Providors"
                description="We collaborate with forward-thinking energy providers, collectively contributing to a greener grid and advancing the transition towards sustainable and eco-friendly power sources."
                :count="3000"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Innovative Solutions"
                description="We use innovative and practical energy solutions, empowering individuals to adopt sustainable practices and play a vital role in shaping a cleaner and brighter future."
                :count="50"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
