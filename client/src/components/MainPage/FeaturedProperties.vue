<template>
  <div class="text-white q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">Featured Properties</p>
    <div class="row" style="align-items: baseline">
      <section class="col">
        <p class="textDescription">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </p>
      </section>
      <q-btn
        no-caps
        class="button"
        label="View All Testimonials"
        @click="onClick"
      />
    </div>
    <div class="q-mt-lg row q-gutter-md">
      <q-card
        class="featuredCard col"
        v-for="(items, id) in featuredProperties"
        :key="id"
      >
        <q-card-section align="center">
          <img :src="items.icon" alt="" />
        </q-card-section>
        <q-card-section class="contentSection">
          <span class="sectionHeadline">{{ items.name }}</span>
          <span class="description">{{ items.description }}</span>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import villa from "../../assets/indexPage/villa.png";
import metropolitan from "../../assets/indexPage/metropolitan.png";
import cottage from "../../assets/indexPage/cottage.png";

const featuredProperties = ref([
  {
    icon: villa,
    name: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
  },
  {
    icon: metropolitan,
    name: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views..",
  },
  {
    icon: cottage,
    name: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
  },
]);
</script>

<style scoped>
.propertiesIcon {
  height: 30px;
}

.button {
  border: solid #262626 1px;
  padding: 7px;
}

.featuredCard {
  background-color: #1a1a1a;
  border: solid #262626 1px;
}

.contentSection {
  margin-left: 50px;
}

.sectionHeadline {
  font-size: 20px;
  font-weight: bold;
}

.description {
  display: block;
  color: #999999;
  font-size: 16px;
}
</style>
