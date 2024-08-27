<template>
  <div>
    <q-layout view="lHr LpR lFf" container style="height: 100vh">
      <q-header reveal elevated bordered class="bg-white">
        <q-toolbar class="bg-white text-black">
          <q-btn flat round dense icon="menu" @click="drawer != drawer" />
        </q-toolbar>
        <q-drawer
          side="left"
          v-model="drawer"
          bordered
          :width="200"
          :breakpoint="500"
          content-class="bg-grey-3"
        >
        </q-drawer>
      </q-header>
      <q-page-container>
        <q-page>
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
