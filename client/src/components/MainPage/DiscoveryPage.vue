<template>
  <div>
    <section class="row">
      <div class="col q-pa-xl">
        <div>
          <p class="text-h3 text-bold headline">
            Discover Your Dream Property with Estatein
          </p>
          <p class="description">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div class="q-my-xl">
          <section class="row q-gutter-md">
            <div v-for="(items, id) in button" :key="id">
              <q-btn
                no-caps
                class="button"
                :id="items.style"
                :label="items.name"
                @click="navigation(items.link)"
              />
            </div>
          </section>
        </div>
        <div class="statsContainer">
          <section class="row q-gutter-md">
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
        <q-img
          src="../../assets/indexPage/Image.png"
          :ratio="18 / 10"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </section>
    <section>
      <div class="row">
        <section
          class="col bg-black q-pa-sm"
          v-for="(items, id) in links"
          :key="id"
        >
          <q-card class="statsWrapper">
            <div align="center">
              <q-avatar
                size="50px"
                font-size="25px"
                color="black"
                text-color="white"
                :icon="items.icon"
                class="q-mb-sm"
              />
              <p>{{ items.name }}</p>
            </div>
          </q-card>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Container1 from "../../assets/indexPage/Image.png";
const button = ref([
  {
    name: "Learn More",
    style: "learnMoreButton",
    link: "/learnMoreAboutDiscovery",
  },
  {
    name: "Browse Properties",
    style: "browseProperties",
    link: "/linkBrowseProperties",
  },
]);
const router = useRouter();
const navigation = (route) => {
  router.push(route);
};

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

const links = ref([
  {
    icon: Container1,
    name: "Find Your Dream Home",
  },
  {
    name: "Unlock Property Value",
  },
  {
    name: "Effortless Property Management",
  },
  {
    name: "Smart Investments, Informed Decisions",
  },
]);
</script>

<style scoped>
.headline {
  width: 80%;
}

.description {
  color: #999999;
}

.button {
  padding: 10px;
  width: 150px;
  border-radius: 5px;
}

#learnMoreButton {
  background-color: #000;
  border: solid #262626 1px;
}

#browseProperties {
  background-color: #703bf7;
}

.statsWrapper {
  background-color: #262626;
  padding: 20px;
}
</style>
