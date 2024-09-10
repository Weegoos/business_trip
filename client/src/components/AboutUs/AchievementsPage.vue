<template>
  <div class="">
    <section class="q-pa-xl">
      <img
        class="propertiesIcon"
        src="../../assets/indexPage/FeaturedPropertiesIntro.png"
        alt=""
      />
      <p class="textHeadline">Our Achievements</p>
      <p class="textDescription">
        Our story is one of continuous growth and evolution. We started as a
        small team with big dreams, determined to create a real estate platform
        that transcended the ordinary.
      </p>

      <section class="row q-gutter-md">
        <div
          v-for="(content, index) in listOfAchievements"
          :key="index"
          class="col"
        >
          <q-card class="card q-pa-md">
            <q-card-section>
              <div class="headline">{{ content.name }}</div>
              <div class="textDescription">{{ content.description }}</div>
            </q-card-section>
          </q-card>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const listOfAchievements = ref([
  {
    name: "3+ Years of Excellence",
    description: `With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.`,
  },
  {
    name: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    name: "Industry Recognition",
    description: `We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.`,
  },
]);
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid #262626 8px;
  border-radius: 7px;
}

.headline {
  font-size: 35px;
  font-weight: bold;
}
</style>
