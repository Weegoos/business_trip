<template>
  <div>
    <q-layout view="lHr LpR lFf" container style="height: 100vh">
      <q-header reveal elevated bordered class="header">
        <q-toolbar class="header text-white">
          <q-btn flat label="OK" @click="onClick" />
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
</script>

<style scoped></style>
