<template>
  <div class="text-white q-pa-xl">
    <img
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
      class="propertiesIcon"
    />
    <p class="textHeadline">Frequently Asked Questions</p>
    <div class="row">
      <section class="col">
        <p class="textDescription">
          Find answers to common questions about Estatein's services, property
          listings, and the real estate process. We're here to provide clarity
          and assist you every step of the way.
        </p>
      </section>
      <q-btn
        no-caps
        class="button"
        label="View All Testimonials"
        @click="onClick"
      />
    </div>

    <div class="q-my-lg row q-gutter-md">
      <q-card
        class="my-card q-pa-lg col"
        v-for="(items, id) in faqArray"
        :key="id"
      >
        <q-card-section>
          <p class="sectionHeadline">{{ items.name }}</p>
          <p class="sectionDescription">{{ items.description }}</p>
        </q-card-section>
        <q-card-actions align="left">
          <q-btn no-caps class="button" label="Read more" @click="onClick" />
        </q-card-actions>
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqArray = ref([
  {
    name: "How do I search for properties on Estatein?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    name: "What documents do I need to sell my property through Estatein?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    name: "How can I contact an Estatein agent?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
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

.sectionHeadline {
  font-size: 18px;
  font-weight: bold;
}

.sectionDescription {
  color: #999999;
  font-size: 16px;
}

.button {
  padding: 10px;
  border: solid 1px #262626;
}
</style>
