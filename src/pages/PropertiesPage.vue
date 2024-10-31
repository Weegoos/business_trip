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
      <div v-for="(item, index) in filteredProducts" :key="index">
        <q-card class="my-card bg-grey">
          <q-card-section>
            {{ item.name }}
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const propertyList = ref([
  {
    name: "Batyr",
  },
  {
    name: "Aibar",
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
</style>
