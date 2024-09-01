<template>
  <div class="text-white">
    <section class="row container">
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
</script>

<style scoped>
.container {
  padding: 50px;
}
.icon {
  height: 10px;
}
</style>
