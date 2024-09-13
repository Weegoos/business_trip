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
        <q-card-section class="q-pa-md">
          <q-card class="comments">
            <q-card-section>
              <div class="text-h6" style="color: #999999">
                What They Said 🤗
              </div>
              <div class="text-subtitle2">{{ item.comments }}</div>
            </q-card-section>
          </q-card>
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
    comments: `Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.`,
  },
  {
    coorporation: "GreenTech Enterprises",
    year: 2018,
    domain: "Commercial Real Estate",
    category: "Retail Space",
    comments: `Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.`,
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

.comments {
  background-color: #141414;
  border: solid #262626 1px;
}
</style>
