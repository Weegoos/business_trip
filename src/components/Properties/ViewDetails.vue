<template>
  <div>
    <q-dialog v-model="confirm" persistent>
      <q-card class="my-card" style="width: 800px">
        <q-splitter v-model="splitterModel">
          <template v-slot:before>
            <q-tabs v-model="tab" vertical class="text-teal">
              <q-tab name="details" icon="info" label="Details" />
              <q-tab name="prediction" icon="computer" label="Prediction" />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up"
            >
              <q-tab-panel name="details">
                <div class="text-h4 q-mb-md">Details</div>
                <img :src="props.homeInfo.icon" alt="" />
                <p class="text-h6">{{ props.homeInfo.name }}</p>
                <p class="text-body1">
                  <span class="text-bold">Type</span>: {{ props.homeInfo.type }}
                </p>
                <p class="text-body1">
                  <span class="text-bold">Description</span>:
                  {{ props.homeInfo.description }}
                </p>
              </q-tab-panel>

              <q-tab-panel name="prediction">
                <div class="text-h4 q-mb-md">Prediction</div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
        <q-card-actions align="right">
          <q-btn flat label="Закрыть" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const tab = ref("details");
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
