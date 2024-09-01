<template>
  <div class="text-white">
    <section class="row container q-gutter-lg">
      <div class="col-4">
        <section class="row q-gutter-sm">
          <div class="q-mt-md">
            <img icon="icon" src="../../assets/header/Symbol.png" alt="" />
          </div>
          <p class="textHeadline">Estatein</p>
        </section>
        <q-input
          color="black"
          bottom-slots
          v-model="email"
          label="Enter your email"
          dark
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
          <template v-slot:append>
            <q-icon
              name="send"
              style="transform: rotate(-40deg)"
              @click="sendMessage"
            />
          </template>
        </q-input>
      </div>
      <div class="col">
        <section class="row q-gutter-md">
          <div class="home">
            <q-btn
              no-caps
              flat
              class="sectionButton"
              label="Home"
              @click="onClick"
            />
            <div v-for="(items, id) in homeButton" :key="id">
              <q-btn
                class="button"
                flat
                no-caps
                :label="items.name"
                @click="onClick"
              />
            </div>
          </div>
          <div class="home">
            <q-btn
              no-caps
              flat
              class="sectionButton"
              label="About us"
              @click="onClick"
            />
            <div v-for="(items, id) in aboutButton" :key="id">
              <q-btn
                class="button"
                flat
                no-caps
                :label="items.name"
                @click="onClick"
              />
            </div>
          </div>
          <div class="properties">
            <q-btn
              no-caps
              flat
              class="sectionButton"
              label="Properties"
              @click="onClick"
            />
            <div v-for="(items, id) in properties" :key="id">
              <q-btn
                class="button"
                flat
                no-caps
                :label="items.name"
                @click="onClick"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const email = ref("");
const $q = useQuasar();
const sendMessage = () => {
  $q.notify({
    message: "Clicked",
  });
};

const homeButton = ref([
  {
    name: "Hero Section",
  },
  {
    name: "Features",
  },
  {
    name: "Properties",
  },
  {
    name: "Testimonials",
  },
  {
    name: "FAQs",
  },
]);

const aboutButton = ref([
  {
    name: "Our Story",
  },
  {
    name: "Our Works",
  },
  {
    name: "How It Works",
  },
  {
    name: "Our Team",
  },
  {
    name: "Our Clients",
  },
]);

const properties = ref([
  {
    name: "Portfolio",
  },
  {
    name: "Categories",
  },
]);
</script>

<style scoped>
.container {
  padding: 50px;
}
.icon {
  height: 10px;
}

.button {
  font-size: 16px;
}

.sectionButton {
  color: #999999;
  font-size: 16px;
}
</style>
