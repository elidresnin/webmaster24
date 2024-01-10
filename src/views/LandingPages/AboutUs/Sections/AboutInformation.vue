<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Global"
              description="Renewable energy is trusted around the world, contributing to lower carbon emissions."
            />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Cost-cutting"
              description="Renewable energy not only lowers your electric and utility bills, but enables you to claim governmental incentives and tax benefits."
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Integrated"
              description="Renewabele energy sources can integrate with the existing grid, or be totally off grid."
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Community"
              description="Join a commuity of people looking to preserve our planet."
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://www.energy.gov/sites/default/files/2022-03/shutterstock_1179501688.jpg"
            title="Learn about  Geothermal solutions"
            description="Geothermal solutions can replace your boiler, saving you money on both gas and electricty."
          />
        </div>
      </div>
    </div>
  </section>
</template>
