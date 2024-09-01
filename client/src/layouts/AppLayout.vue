<template>
  <div>
    <q-layout view="lHr LpR lFf" container style="height: 100vh">
      <q-header reveal elevated bordered style="background-color: #1a1a1a">
        <div class="news row q-gutter-sm">
          <div class="col q-mt-md" align="center">
            <span class="q-mr-md"
              >Discover Your Dream Property with Estatein</span
            >
            <q-btn no-caps flat label="Learn More" @click="learnMore" dense />
          </div>
          <q-btn flat icon="close" dense @click="onClick" fab-mini />
        </div>
        <q-toolbar class="bg-black text-white">
          <div class="container row">
            <img class="icon" src="../assets/header/Symbol.png" alt="" />
            <section class="name col">
              <p class="text-h6 q-mt-md">Estatein</p>
            </section>
            <section class="col buttonSection" align="center">
              <q-btn
                flat
                no-caps
                label="Home"
                @click="pushToMainPage"
                class="btn"
                :class="currentPath === '/' ? 'active' : 'unactive'"
              />
              <q-btn
                flat
                no-caps
                label="About Us"
                @click="pushToAboutPage"
                class="btn"
                :class="currentPath === '/about' ? 'active' : 'unactive'"
              />
              <q-btn
                flat
                no-caps
                label="Properties"
                @click="onClick"
                class="btn"
                :class="currentPath === '/properties' ? 'active' : 'unactive'"
              />
              <q-btn
                flat
                no-caps
                label="Services"
                @click="onClick"
                class="btn"
                :class="currentPath === '/services' ? 'active' : 'unactive'"
              />
            </section>
            <section class="col buttonSection" align="right">
              <q-btn
                flat
                no-caps
                label="Contact Us"
                @click="onClick"
                class="btn"
                :class="currentPath === '/contact' ? 'active' : 'unactive'"
              />
            </section>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer
        side="left"
        v-model="drawerLeft"
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
      </q-drawer>
      <q-page-container class="body">
        <q-page class="body">
          <router-view />
          <FooterPage />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import FooterPage from "../pages/FooterPage.vue";
const drawer = ref(true);
const $q = useQuasar();
const button = ref([
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Services",
    link: "/services",
  },
]);

const route = useRoute();
const currentPath = ref(route.path);
console.log(currentPath.value);

watch(
  () => route.path,
  (newVal) => {
    currentPath.value = newVal;
    // $q.notify({
    //   message: `New path: ${currentPath.value}`,
    // });
    console.log(newVal);
  }
);

const router = useRouter();
const pushToMainPage = () => {
  router.push("/");
};

const pushToAboutPage = () => {
  router.push("/about");
};
</script>

<style scoped>
.container {
  width: 100%;
}

.btn {
  font-size: 16px;
}

.header {
  height: 60px;
}

.buttonSection {
  margin-top: 13px;
}

.news {
  background-color: #1a1a1a;
  color: white;
  height: 55px;
  width: 100%;
}

.icon {
  height: 25px;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 10px;
}
</style>
