<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Leadership Team
          </h3>
          <p class="text-white opacity-8 mb-0">
            Our leadership team is made up of industry professional and visionarys.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4"
            :image="emma"
            :profile="{ name: 'Emma Roberts', link: 'javascript:;' }"
            :position="{ label: 'Chief Executive Officer', color: 'success' }"
            description="Emma studied at Harvard and MIT, and is committed to enabling all people to live greener lives."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5"
            :image="william"
            :profile="{ name: 'William Pearce', link: 'javascript:;' }"
            :position="{ label: 'Chief Financial Officer', color: 'success' }"
            description="Willam spent 25 year working for Goldmann Sachs before joining Greenify."
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-4 z-index-2"
            :image="ivana"
            :profile="{ name: 'Ivana Flow', link: 'javascript:;' }"
            :position="{ label: 'Athlete', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard
            class="mt-lg-4 mt-5 z-index-2"
            :image="marquez"
            :profile="{ name: 'Marquez Garcia', link: 'javascript:;' }"
            :position="{ label: 'JS Developer', color: 'success' }"
            description="Artist is a term applied to a person who engages in an
                    activity deemed to be an art."
          />
        </div>
      </div>
    </div>
  </section>
</template>
