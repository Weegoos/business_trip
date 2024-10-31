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
      <div class="q-pa-xl bg-black row q-gutter-sm">
        <div class="col-10">
          <q-input
            v-model="searchQuery"
            type="text"
            class="propertiesInputClass text-white"
            dense
            label-color="white"
            label="Search For A Property"
            standout="bg-black text-white"
          />
        </div>
        <div class="col" align="center">
          <q-btn
            class="button"
            icon="search"
            no-caps
            label="Find Property"
            @click="findProperty"
          />
        </div>
      </div>
      <div
        class="q-my-lg q-gutter-md"
        :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
      >
        <q-card
          class="featuredCard col"
          v-for="(items, id) in filteredProducts"
          :key="id"
        >
          <q-card-section align="center">
            <img :src="items.icon" alt="" style="width: 100%" />
          </q-card-section>
          <q-card-section class="contentSection">
            <span class="sectionHeadline text-h6">{{ items.name }}</span>
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
                  src="../assets/indexPage/type.png"
                  alt=""
                />
                <span class="chipText">{{ items.type }}</span>
              </template>
            </q-chip>
          </q-card-section>
          <div :class="$q.screen.width < mobileVersion ? 'col' : 'row'">
            <q-card-section class="col">
              <span class="price" style="color: #999999">Price</span>
              <span class="price" style="font-size: 24px"
                >${{ items.price }}</span
              >
            </q-card-section>
            <q-card-actions align="right" class="col">
              <q-btn
                class="moreDetailsButton"
                flat
                no-caps
                label="View Property Details"
                @click="viewProperty(items)"
              />
            </q-card-actions>
          </div>
        </q-card>
      </div>
    </section>
    <ViewDetails :homeInfo="homeInfo" :openViewPage="openViewPage" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import villa from "../assets/indexPage/villa.png";
import metropolitan from "../assets/indexPage/metropolitan.png";
import cottage from "../assets/indexPage/cottage.png";
import bathroom from "../assets/indexPage/bathroom.png";
import bedroom from "../assets/indexPage/bedroom.png";
import ViewDetails from "../components/Properties/ViewDetails.vue";

const propertyList = ref([
  {
    icon: villa,
    name: "Seaside Serenity Villa",
    description:
      "A magnificent 4-bedroom, 3-bathroom villa located in a peaceful suburban neighborhood, ideal for a large family or group of friends. This home combines luxury with comfort, offering spacious, bright rooms, modern design, and a private garden. It’s close to the coast, providing easy access to beaches and scenic walking paths.",
    bedroom: "4-Bedroom",
    bathroom: "3-Bathroom",
    type: "Villa",
    price: 540000,
  },
  {
    icon: metropolitan,
    name: "Metropolitan Haven",
    description:
      "A chic, fully-furnished 2-bedroom apartment with breathtaking city views. This apartment offers a modern lifestyle with premium amenities, including a fitness center and rooftop lounge. Situated in the heart of the city, it’s perfect for those who enjoy an urban lifestyle with easy access to shopping, dining, and entertainment.",
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    type: "Apartment",
    price: 500000,
  },
  {
    icon: cottage,
    name: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom cottage in a gated community, combining rustic charm with modern comfort. This property features a cozy living area with a fireplace, spacious bedrooms, and a beautiful garden. Ideal for those who love tranquility but want to stay close to local amenities and community facilities.",
    bedroom: "3-Bedroom",
    bathroom: "2.5-Bathroom",
    type: "Cottage",
    price: 450000,
  },
]);

const searchQuery = ref("");
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return propertyList.value;
  }

  const query = searchQuery.value.toLowerCase();
  return propertyList.value.filter((property) =>
    property.name.toLowerCase().includes(query)
  );
});

const openViewPage = ref(false);
const homeInfo = ref("");
const viewProperty = (itemInfo) => {
  openViewPage.value = true;
  homeInfo.value = itemInfo;
};
</script>

<style scoped>
.propertiesInputClass {
  border: solid white 1px;
  color: white;
  border-radius: 5px;
}

.button {
  background-color: #703bf7;
}

.featuredCard {
  background-color: #1a1a1a;
  border: solid #262626 1px;
}

.featuredCardActions {
  background-color: transparent;
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

.price {
  line-height: 1.2;
  display: block;
}

.moreDetailsButton {
  background-color: #703bf7;
  padding: 15px;
  border-radius: 10px;
}
</style>
