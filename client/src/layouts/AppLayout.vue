<template>
  <div>
    <q-layout view="hHr LpR lFf" container style="height: 100vh">
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
            <img
              class="icon"
              src="../assets/header/Symbol.png"
              alt=""
              @click="drawer = !drawer"
            />
            <section class="name col" @click="drawer = !drawer">
              <p class="text-h6 q-mt-md">Estatein</p>
            </section>
            <section
              v-if="$q.screen.width > mobileWidth"
              class="col buttonSection"
              align="center"
            >
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
            <section
              v-if="$q.screen.width > mobileWidth"
              class="col buttonSection"
              align="right"
            >
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
        v-model="drawer"
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
        v-if="$q.screen.width < mobileWidth"
      >
        <q-list bordered>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="bluetooth" />
            </q-item-section>
            <q-item-section>Icon as avatar</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
      <q-page-container class="body">
        <q-page class="body">
          <router-view />
          <FooterPage />
        </q-page>
      </q-page-container>
      <q-footer reveal elevated bordered class="footer q-pa-sm">
        <q-toolbar class="footer text-white">
          <section class="row" style="width: 100%">
            <div class="col">
              <div class="row q-gutter-md q-mt-sm">
                <p class="footerContent">
                  @2023 Estatein. All Rights Reserved.
                </p>
                <p class="footerContent">Terms & Conditions</p>
              </div>
            </div>
            <div class="col q-mt-md" align="right">
              <q-avatar size="40px" font-size="32px" icon="fab fa-facebook-f" />
              <q-avatar
                size="40px"
                font-size="32px"
                icon="fab fa-telegram-plane"
              />
              <q-avatar size="40px" font-size="32px" icon="fab fa-twitter" />
              <q-avatar size="40px" font-size="32px" icon="fab fa-instagram" />
            </div>
          </section>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import FooterPage from "../pages/FooterPage.vue";
const drawer = ref(true);
const $q = useQuasar();
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;

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

.footer {
  background-color: #1a1a1a;
}

.footerContent {
  font-size: 16px;
}
</style>
