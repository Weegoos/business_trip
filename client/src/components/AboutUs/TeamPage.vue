<template>
  <div class="q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">Meet the Estatein Team</p>
    <span class="textDescription"
      >At Estatein, our success is driven by the dedication and expertise of our
      team. Get to know the people behind our mission to make your real estate
      dreams a reality.</span
    >
    <section class="row q-gutter-md">
      <div v-for="(items, index) in teamArray" :key="index" class="col">
        <q-card class="card q-mt-md">
          <q-card-section align="center">
            <q-img
              style="width: 50%; border-radius: 5px"
              :src="`https://cdn.quasar.dev/img/avatar${index + 1}.jpg`"
            >
              <div class="bg-transparent absolute-bottom text-body1">
                <i class="fab fa-twitter icon"></i>
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const teamArray = ref([
  {
    name: "Max Mitchell",
  },
  {
    name: "Sarah Johnson",
  },
  {
    name: "David Brown",
  },
  {
    name: "Michael Turner",
  },
]);
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid #262626 1px;
  border-radius: 7px;
}

.icon {
  background-color: #703bf7;
  border-radius: 70px;
  padding: 15px;
}
</style>
