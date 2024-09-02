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
        v-show="isMobile"
      />
    </div>
    <div
      class="q-my-lg q-gutter-md"
      :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
    >
      <q-card
        class="featuredCard col"
        v-for="(items, id) in featuredProperties"
        :key="id"
      >
        <q-card-section align="center">
          <img :src="items.icon" alt="" style="width: 100%" />
        </q-card-section>
        <q-card-section class="contentSection">
          <span class="sectionHeadline">{{ items.name }}</span>
          <span class="description">{{ items.description }}</span>
        </q-card-section>
        <q-card-section class="contentSection">
          <q-chip clickable class="chip">
            <template v-slot="">
              <img class="chipIcon" :src="bedroom" alt="" />
              <span class="chipText">{{ items.bedroom }}</span>
            </template>
          </q-chip>
          <q-chip clickable class="chip">
            <template v-slot="">
              <img class="chipIcon" :src="bathroom" alt="" />
              <span class="chipText">{{ items.bathroom }}</span>
            </template>
          </q-chip>
          <q-chip clickable class="chip">
            <template v-slot="">
              <img
                class="chipIcon"
                src="../../assets/indexPage/type.png"
                alt=""
              />
              <span class="chipText">{{ items.type }}</span>
            </template>
          </q-chip>
        </q-card-section>
        <div :class="$q.screen.width < mobileVersion ? 'col' : 'row'">
          <q-card-section class="col">
            <span class="price" style="color: #999999">Price</span>
            <span class="price" style="font-size: 24px">$550.000</span>
          </q-card-section>
          <q-card-actions align="right" class="col">
            <q-btn
              class="moreDetailsButton"
              flat
              no-caps
              label="View Property Details"
            />
          </q-card-actions>
        </div>
      </q-card>
    </div>
    <q-separator spaced inset dark style="width: 100%" />
    <q-card class="featuredCardActions row" v-show="isShowPagesSection">
      <q-card-section class="col">
        <span class="pages">01</span
        ><span class="pages" style="color: #999999"> of 60</span>
      </q-card-section>
      <q-card-actions class="col" align="right">
        <q-btn flat fab-mini icon="keyboard_arrow_left" />
        <q-btn flat fab-mini icon="keyboard_arrow_right" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import villa from "../../assets/indexPage/villa.png";
import metropolitan from "../../assets/indexPage/metropolitan.png";
import cottage from "../../assets/indexPage/cottage.png";
import bathroom from "../../assets/indexPage/bathroom.png";
import bedroom from "../../assets/indexPage/bedroom.png";
// import bedroom from "../../assets/indexPage/bedroom.png";

import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;
const mobileVersion = proxy.$mobileVersion;

const featuredProperties = ref([
  {
    icon: villa,
    name: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    bedroom: "4-Bedroom",
    bathroom: "3-Bathroom",
    type: "Villa",
  },
  {
    icon: metropolitan,
    name: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views..",
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    type: "Villa",
  },
  {
    icon: cottage,
    name: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community..",
    bedroom: "3-Bedroom",
    bathroom: "3-Bathroom",
    type: "Villa",
  },
]);

const isMobile = ref("");
const isShowPagesSection = ref("");
const width = ref(window.innerWidth);
const updateWidth = () => {
  width.value = window.innerWidth;
  isMobile.value < mobileVersion;
  isShowPagesSection.value < mobileVersion;
};

updateWidth();

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<style scoped>
.button {
  border: solid #262626 1px;
  padding: 7px;
}

.featuredCard {
  background-color: #1a1a1a;
  border: solid #262626 1px;
}

.featuredCardActions {
  background-color: transparent;
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

.chip {
  background-color: #1a1a1a;
  border: solid #262626 1px;
  color: white;
  padding: 15px;
  align-items: center;
}

.chipIcon {
  height: 18px;
  margin-right: 10px;
}

.chipText {
  margin-top: 3px;
}

.moreDetailsButton {
  background-color: #703bf7;
  padding: 15px;
  border-radius: 10px;
}

.price {
  line-height: 1.2;
  display: block;
}

.pages {
  font-size: 18px;
}
</style>
