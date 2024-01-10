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
                title="of home in the US are powered by renewable sources."
                description="in 2024, according to the USEIA"
                :count="21"
                suffix="%"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Homes powered by renewable sources"
                description="in 2024, according to the USEIA"
                :count="64"
                suffix=" Million"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Renewable Sources used in the US"
                description="Solar, Wind, Hydroelectric, Biomass, Geothermal"
                :count="5"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
