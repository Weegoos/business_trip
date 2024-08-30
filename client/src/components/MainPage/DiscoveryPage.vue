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
        <div class="q-mt-lg">
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
      </div>
      <div class="col"></div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
</style>
