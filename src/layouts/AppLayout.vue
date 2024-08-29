<template>
  <div>
    <q-layout view="lHr LpR lFf" container style="height: 100vh">
      <q-header reveal elevated bordered class="header"> batyr </q-header>
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

<style scoped></style>
