<template>
  <div class="q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">Navigating the Estatein Experience</p>
    <p class="textDescription">
      At Estatein, we've designed a straightforward process to help you find and
      purchase your dream property with ease. Here's a step-by-step guide to how
      it all works.
    </p>
    <section class="q-mt-md row q-gutter-md">
      <div v-for="(items, index) in 3" :key="index" class="col">
        <q-card class="card col">
          <q-card-section>
            <div class="text-h6">Step {{ index + 1 }}</div>
            <div>{{ items.name }}</div>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navigationStep = ref([
  {
    name: "Discover a World of Possibilities",
  },
  {
    name: "Narrowing Down Your Choices",
  },
]);
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid 1px;
  border-color: #703bf7;
  border-radius: 7px;
}
</style>
