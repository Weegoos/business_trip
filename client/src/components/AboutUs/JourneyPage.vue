<template>
  <div>
    <section class="row q-gutter-md">
      <div class="q-pa-xl col">
        <img
          class="propertiesIcon"
          src="../../assets/indexPage/FeaturedPropertiesIntro.png"
          alt=""
        />
        <p class="textHeadline">Our Journey</p>
        <p class="textDescription">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </p>

        <div class="statsContainer">
          <section
            class="q-gutter-md"
            :class="$q.screen.width < mobileVersion ? 'col' : 'row'"
          >
            <div class="col" v-for="(items, id) in stats" :key="id">
              <q-card class="statsWrapper">
                <p class="text-h6 text-bold">{{ items.number }}+</p>
                <p class="text-body1">{{ items.description }}</p>
              </q-card>
            </div>
          </section>
        </div>
      </div>
      <div class="col">
        <img src="../../assets/about/aboutImage.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  {
    number: 200,
    description: "Happy Customers",
  },
  {
    number: 1000,
    description: "Properties For Clients",
  },
  {
    number: 16,
    description: "Years of Experience",
  },
]);
</script>

<style scoped>
.statsWrapper {
  background-color: #262626;
  padding: 20px;
}
</style>
