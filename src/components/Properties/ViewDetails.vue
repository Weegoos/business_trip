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
                <div ref="chart" style="width: 100%; height: 400px"></div>
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
import { onMounted, ref, watch, nextTick } from "vue";

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

// Hardcoded data
const rawData = [
  { Country: "USA", Year: 1950, Income: 10000 },
  { Country: "USA", Year: 1960, Income: 12000 },
  { Country: "USA", Year: 1970, Income: 14000 },
  { Country: "USA", Year: 1980, Income: 16000 },
  { Country: "USA", Year: 1990, Income: 18000 },
  { Country: "USA", Year: 2000, Income: 20000 },
  { Country: "USA", Year: 2010, Income: 22000 },
  { Country: "USA", Year: 2020, Income: 24000 },
  { Country: "Canada", Year: 1950, Income: 8000 },
  { Country: "Canada", Year: 1960, Income: 10000 },
  { Country: "Canada", Year: 1970, Income: 12000 },
  { Country: "Canada", Year: 1980, Income: 14000 },
  { Country: "Canada", Year: 1990, Income: 16000 },
  { Country: "Canada", Year: 2000, Income: 18000 },
  { Country: "Canada", Year: 2010, Income: 20000 },
  { Country: "Canada", Year: 2020, Income: 22000 },
];

// Initialize the chart
const initChart = () => {
  if (chart.value) {
    // Удаляем существующий экземпляр графика, если он есть
    if (chartInstance.value) {
      chartInstance.value.dispose();
    }
    // Инициализируем экземпляр ECharts
    chartInstance.value = echarts.init(chart.value);

    // Ваш код для настройки графика...
    const datasetWithFilters = [];
    const seriesList = [];
    const countries = ["USA", "Canada"];

    countries.forEach((country) => {
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
      animationDuration: 1000,
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
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        name: "Year",
      },
      yAxis: {
        name: "Income",
      },
      series: seriesList,
    };

    chartInstance.value.setOption(option);
  } else {
    console.error("Chart DOM element is not available.");
  }
};

// Инициализация графика при монтировании компонента
onMounted(() => {
  nextTick(() => {
    initChart();
  });
});
</script>

<style></style>
