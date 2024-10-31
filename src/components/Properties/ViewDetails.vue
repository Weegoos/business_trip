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
                <div class="text-h4 q-mb-md">Prediction with AI</div>
                <div ref="chart" style="width: 100%; height: 500px"></div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
        <q-card-actions align="right">
          <q-btn flat label="Закрыть" @click="closeView" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

import * as echarts from "echarts";
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

const emit = defineEmits(["closeView"]);
const closeView = () => {
  emit("closeView");
};

const chart = ref(null);
const chartInstance = ref(null);

const countries = [
  "Finland",
  "France",
  "Germany",
  "Iceland",
  "Norway",
  "Poland",
  "Russia",
  "United Kingdom",
];

const loadChartData = async () => {
  try {
    const response = await fetch("/data/life-expectancy-table.json"); // Relative path from the public folder
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const rawData = await response.json();
    initChart(rawData);
  } catch (error) {
    console.error("Error loading chart data:", error);
  }
};

const initChart = (rawData) => {
  if (chartInstance.value) {
    chartInstance.value.dispose();
  }
  chartInstance.value = echarts.init(chart.value);

  const datasetWithFilters = [];
  const seriesList = [];

  echarts.util.each(countries, (country) => {
    const datasetId = `dataset_${country}`;
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: "dataset_raw",
      transform: {
        type: "filter",
        config: {
          and: [
            { dimension: "Year", gte: 1950 },
            { dimension: "Country", "=": country },
          ],
        },
      },
    });
    seriesList.push({
      type: "line",
      datasetId: datasetId,
      showSymbol: false,
      name: country,
      endLabel: {
        show: true,
        formatter: (params) => `${params.value[3]}: ${params.value[0]}`,
      },
      labelLayout: {
        moveOverlap: "shiftY",
      },
      emphasis: {
        focus: "series",
      },
      encode: {
        x: "Year",
        y: "Income",
        label: ["Country", "Income"],
        itemName: "Year",
        tooltip: ["Income"],
      },
    });
  });

  const option = {
    animationDuration: 10000,
    dataset: [
      {
        id: "dataset_raw",
        source: rawData,
      },
      ...datasetWithFilters,
    ],
    title: {
      text: "Income of Selected Countries since 1950",
    },
    tooltip: {
      order: "valueDesc",
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      nameLocation: "middle",
    },
    yAxis: {
      name: "Income",
    },
    grid: {
      right: 140,
    },
    series: seriesList,
  };

  chartInstance.value.setOption(option);
};

onMounted(loadChartData);

onBeforeUnmount(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose();
  }
});
</script>

<style></style>
