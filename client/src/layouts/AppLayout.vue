<template>
  <div>
    <q-layout view="lHr LpR lFf" container style="height: 100vh">
      <q-header reveal elevated bordered class="header">
        <div class="news row q-gutter-sm">
          <section class="col q-mt-lg" align="right">
            <p>Discover Your Dream Property with Estatein</p>
          </section>
          <section class="col q-mt-md">
            <q-btn no-caps flat label="Learn More" @click="onClick" />
          </section>
        </div>
        <q-toolbar class="bg-black text-white header">
          <div class="container row">
            <section class="name col">
              <p class="text-h6 q-mt-md">Estatiin</p>
            </section>
            <section class="col buttonSection" align="center">
              <q-btn flat no-caps label="Home" @click="onClick" class="btn" />
              <q-btn
                flat
                no-caps
                label="About Us"
                @click="onClick"
                class="btn"
              />
              <q-btn
                flat
                no-caps
                label="Properties"
                @click="onClick"
                class="btn"
              />
              <q-btn
                flat
                no-caps
                label="Services"
                @click="onClick"
                class="btn"
              />
            </section>
            <section class="col buttonSection" align="right">
              <q-btn
                flat
                no-caps
                label="Contact Us"
                @click="onClick"
                class="btn"
              />
            </section>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="body">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
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
</style>
