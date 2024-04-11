<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Array,
    route: String,
    label: String,
    color: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="back back-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body pt-7 text-center">
      <h3 class="text-white" v-html="title"></h3>
      <p class="text-white opacity-8">
        {{ description }}
      </p>
      <div class="buttons-group">
        <RouterLink to="{{action.route}}">

       test
        </RouterLink>
      </div>
    </div>
  </div>
</template>
