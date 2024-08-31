<template>
  <div class="text-white q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">What Our Clients Say</p>
    <div class="row" style="align-items: baseline">
      <section class="col">
        <p class="textDescription">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
      </section>
      <q-btn
        no-caps
        class="button"
        label="View All Testimonials"
        @click="onClick"
      />
    </div>
    <section>
      <div class="row q-gutter-md q-py-xl">
        <q-card
          class="my-card col q-pa-xl"
          v-for="(items, id) in feedbackArray"
          :key="id"
        >
          <q-rating
            v-model="ratingModel"
            size="2em"
            icon="stars"
            color="yellow"
          />
          <p class="q-mt-md text-h6 text-bold">{{ items.feedback }}</p>
          <p>{{ items.description }}</p>
          <div class="row q-mt-lg">
            <section class="col-2">
              <q-avatar>
                <img :src="`https://cdn.quasar.dev/img/avatar${id + 1}.jpg`" />
              </q-avatar>
            </section>
            <section class="col">
              <span class="feedbackAuthorInfo">{{ items.author }}</span>
              <span class="feedbackAuthorInfo">{{ items.location }}</span>
            </section>
          </div>
        </q-card>
      </div>
      <q-separator spaced inset dark style="width: 100%" />
      <q-card class="my-card row">
        <q-card-section class="col">
          <span class="pages">01</span
          ><span class="pages" style="color: #999999"> of 60</span>
        </q-card-section>
        <q-card-actions class="col" align="right">
          <q-btn flat fab-mini icon="keyboard_arrow_left" />
          <q-btn flat fab-mini icon="keyboard_arrow_right" />
        </q-card-actions>
      </q-card>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ratingModel = ref(5);

const feedbackArray = ref([
  {
    feedback: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    author: "Wade Warren",
    location: "USA, California",
  },
  {
    feedback: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    author: "Emelie Thomson",
    location: "USA, Florida",
  },
  {
    feedback: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    author: "John Mans",
    location: "USA, Nevada",
  },
]);
</script>

<style scoped>
.button {
  border: solid #262626 1px;
  padding: 7px;
}

.my-card {
  background-color: #1a1a1a;
  border: solid #262626 1px;
}

.feedbackAuthorInfo {
  display: block;
}

.pages {
  font-size: 18px;
}
</style>
