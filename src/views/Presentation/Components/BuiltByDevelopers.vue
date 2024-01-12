<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container mt-sm-5">
    <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
      backgroundImage:
        'url(https://static4.arrow.com/-/media/arrow/images/1400-x-1400/how-a-hydroelectric-dam-works_image-1.jpg)'
    }" loading="lazy">
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">
            <h4 class="text-white">According to environmentalists,</h4>
            <h1 class="text-white">Renewable energy is the best way to cut carbon emissions.</h1>
            <p class="lead text-white opacity-8">
              Renewable energy stands out as the most effective strategy for cutting carbon emissions. Sources such as
              solar and wind power produce electricity without emitting greenhouse gases, offering a sustainable
              alternative to fossil fuels. This transition not only mitigates climate change but also promotes economic
              growth, energy security, and a healthier environment.
            </p>
            <RouterLink class="text-white icon-move-right"  :to="{ name: 'about' }" rel="tooltip" title=""
              data-placement="bottom">
              Learn More
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </RouterLink>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
