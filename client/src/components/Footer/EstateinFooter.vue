<template>
  <div class="text-white">
    <section
      class="container q-gutter-lg"
      :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
    >
      <div class="col-4">
        <section class="q-gutter-sm row">
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
        <section class="row q-gutter-xl">
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
          <div class="services">
            <q-btn
              no-caps
              flat
              class="sectionButton"
              label="Services"
              @click="onClick"
            />
            <div v-for="(items, id) in servicesButton" :key="id">
              <q-btn
                class="button"
                flat
                no-caps
                :label="items.name"
                @click="onClick"
              />
            </div>
          </div>
          <div class="contact">
            <q-btn
              no-caps
              flat
              class="sectionButton"
              label="Contact us"
              @click="onClick"
            />
            <div v-for="(items, id) in contactButton" :key="id">
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
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;
const mobileVersion = proxy.$mobileVersion;

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

const servicesButton = ref([
  {
    name: "Valuation Mastery",
  },
  {
    name: "Strategic Marketing",
  },
  {
    name: "Negotiation Wizardry",
  },
  {
    name: "Closing Success",
  },
  {
    name: "Property Management",
  },
]);

const contactButton = ref([
  {
    name: "Contact Form",
  },
  {
    name: "Our Offices",
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
