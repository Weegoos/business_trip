<template>
  <div class="text-white">
    <section class="q-pa-xl">
      <p class="textHeadline">Find Your Dream Property</p>
      <p class="textDescription">
        Welcome to Estatein, where your dream property awaits in every corner of
        our beautiful world. Explore our curated selection of properties, each
        offering a unique story and a chance to redefine your life. With
        categories to suit every dreamer, your journey
      </p>
    </section>
    <section class="">
      <div class="q-pa-xl bg-black">
        <q-input
          v-model="text"
          type="text"
          class="propertiesInputClass text-white"
          dense
          label-color="white"
          label="Search For A Property"
          standout="bg-black text-white"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
</script>

<style scoped>
.propertiesInputClass {
  border: solid white 1px;
  color: white;
  border-radius: 5px;
}
</style>
