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
    <section
      class="q-mt-md q-gutter-md"
      :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
    >
      <div v-for="(items, index) in navigationStep" :key="index" class="col">
        <q-card class="card col">
          <q-card-section>
            <div class="text-body1">Step {{ index + 1 }}</div>
            <div class="text-h5 text-bold">{{ items.name }}</div>
            <div class="text text-body1 q-mt-md">{{ items.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section
      class="q-mt-md q-gutter-md"
      :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
    >
      <div v-for="(items, index) in navigationStep" :key="index" class="col">
        <q-card class="card col">
          <q-card-section>
            <div class="text-body1">Step {{ index + 4 }}</div>
            <div class="text-h5 text-bold">{{ items.name }}</div>
            <div class="text text-body1 q-mt-md">{{ items.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;
const mobileVersion = proxy.$mobileVersion;
const navigationStep = ref([
  {
    name: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    name: "Narrowing Down Your Choices",
    description: `Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.`,
  },
  {
    name: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
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

.text {
  color: #999999;
  font-size: 16px;
}
</style>
