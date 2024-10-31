<template>
  <div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">{{ props.homeInfo.name }}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  homeInfo: {
    type: Object,
    required: true,
  },
  openViewPage: {
    type: Boolean,
    required: true,
  },
});

const confirm = ref(props.openViewPage);
watch(
  () => props.openViewPage,
  (newVal) => {
    confirm.value = newVal;
  }
);
</script>

<style></style>
