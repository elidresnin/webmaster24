<script setup>
import SimpleBlogCard from "@/examples/cards/blogCards/SimpleBlogCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
                <SimpleBlogCard
                    image="https://bit.ly/3Hlw1MQ"
                    title="Virtual Office"
                    description="If you’re more passionate about founding a business than the business itself, you can fall into."
                />
            </div>
            <div class="col-md-4 position-relative">
                <SimpleBlogCard
                    image="https://bit.ly/3Hlw1MQ"
                    title="Virtual Office"
                    description="If you’re more passionate about founding a business than the business itself, you can fall into."
                />
            </div>
            <div class="col-md-4">
                <SimpleBlogCard
                    image="https://bit.ly/3Hlw1MQ"
                    title="Virtual Office"
                    description="If you’re more passionate about founding a business than the business itself, you can fall into."
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
