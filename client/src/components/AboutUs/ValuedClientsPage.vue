<template>
  <div class="q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">Our Valued Clients</p>
    <p class="textDescription">
      At Estatein, we have had the privilege of working with a diverse range of
      clients across various industries. Here are some of the clients we've had
      the pleasure of serving
    </p>
    <div class="row q-gutter-md">
      <q-card class="card col" v-for="(item, index) in client" :key="index">
        <q-card-section>
          <div class="row q-gutter-md">
            <section class="col">
              <p style="color: #999999" class="text-body1">
                Since {{ item.year }}
              </p>
              <span class="text-bold text-h6">{{ item.coorporation }}</span>
            </section>
            <section class="col" align="right">
              <q-btn
                class="visitButton q-pa-md"
                no-caps
                label="Visit Website"
                @click="visit"
              />
            </section>
          </div>

          <div class="row q-gutter-md q-mt-md">
            <section class="col">
              <p style="color: #999999" class="text-body1">Domain</p>
              <span class="text-body1">{{ item.domain }}</span>
            </section>
            <section class="col">
              <p style="color: #999999" class="text-body1">Category</p>
              <span class="text-body1">{{ item.category }}</span>
            </section>
          </div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const client = ref([
  {
    coorporation: "ABC Corporation",
    year: 2019,
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
  },
  {
    coorporation: "GreenTech Enterprises",
    year: 2018,
    domain: "Commercial Real Estate",
    category: "Retail Space",
  },
]);

const $q = useQuasar();
const visit = () => {
  $q.notify({
    message: "Visit Button has been clicked by User",
  });
};
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid #262626 8px;
  border-radius: 7px;
}

.visitButton {
  background-color: #141414;
  border: solid #262626 1px;
}
</style>
