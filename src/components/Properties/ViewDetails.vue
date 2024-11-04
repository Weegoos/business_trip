<template>
  <div>
    <q-dialog v-model="confirm" persistent :full-width="isFullWidth">
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
                <q-btn
                  color="primary"
                  icon="check"
                  label="Start forecasting"
                  @click="start"
                />

                <section class="row q-gutter-md">
                  <div class="col" v-if="isAIGenerated == true">
                    <div ref="lineChart" class="linearChart"></div>
                    <p class="description" align="center">
                      Цены с 2024 по 2029 год
                    </p>
                    <q-btn
                      @click="updateLineChartData"
                      label="Обновить данные"
                      color="positive"
                    />
                  </div>
                </section>
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
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from "vue";
import * as echarts from "echarts/core";
import { PieChart, LineChart } from "echarts/charts";
import {
  TooltipComponent,
  ToolboxComponent,
  TitleComponent,
  DataZoomComponent,
  GridComponent,
  AxisPointerComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useQuasar } from "quasar";

// Регистрация необходимых компонентов
echarts.use([
  PieChart,
  LineChart,
  TooltipComponent,
  ToolboxComponent,
  TitleComponent,
  DataZoomComponent,
  GridComponent,
  AxisPointerComponent,
  LegendComponent,
  CanvasRenderer,
]);

const power = ref(null);
const lineChart = ref(null);
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

// Используем confirm как реактивное значение для диалога
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

// Функция для создания графика
const createChart = (
  item,
  itemName,
  mainColor,
  remainColor,
  mainValue,
  remainValue
) => {
  if (!item) {
    console.error("Chart container is not available");
    return;
  }

  const myChart = echarts.getInstanceByDom(item) || echarts.init(item);

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: itemName,
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          color: mainColor,
        },
        label: {
          show: true,
          position: "center",
          formatter: "{d}%",
          fontSize: 40,
          fontWeight: "bold",
          color: "#4A4A4A",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
            color: "#4A4A4A",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: mainValue, name: itemName },
          {
            value: remainValue,
            name: "Invisible",
            itemStyle: { color: remainColor },
            label: { show: false },
            tooltip: { show: false },
          },
        ],
      },
    ],
  };

  myChart.setOption(option);
};

// Функция для создания линейного графика
const createLineChart = (item, years, prices) => {
  if (!item) {
    console.error("Line chart container is not available");
    return;
  }

  const myChart = echarts.getInstanceByDom(item) || echarts.init(item);

  const option = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: years,
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Цены",
        type: "line",
        data: prices,
        smooth: true,
        lineStyle: {
          color: "#FF5B5B",
          width: 2,
        },
      },
    ],
  };

  myChart.setOption(option);
};

let years = ["2024", "2025", "2026", "2027", "2028", "2029"];
let prices = [540000, 500000, 600000, 800000, 900000, 655000];

// Функция для обновления данных линейного графика
const isFullWidth = ref(false);
const updateLineChartData = () => {
  // Пример изменения данных, вы можете изменить эту логику для получения данных
  prices = prices.map((price) => price + Math.floor(Math.random() * 50 - 25)); // Случайные изменения цен
  createLineChart(lineChart.value, years, prices);
};

// Наблюдаем за открытием диалога
watch(
  () => confirm.value,
  async (isOpen) => {
    if (isOpen) {
      await nextTick(); // Ждем, пока DOM обновится
      if (power.value) {
        createChart(power.value, "Сила", "#FF5B5B", "#FFE4E4", 5, 95);
      }
      if (lineChart.value) {
        createLineChart(lineChart.value, years, prices);
      }
    }
  }
);
const $q = useQuasar();
let timer;
const isAIGenerated = ref(false);
onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});

const start = () => {
  const first = $q.loading.show({
    group: "first",
    message: "The data is being processed",
    spinnerColor: "amber",
    messageColor: "amber",
  });

  // hiding in 2s
  timer = setTimeout(() => {
    const second = $q.loading.show({
      group: "second",
      message: "The data is transmitted to the interface",
    });

    timer = setTimeout(() => {
      // we hide second one (only); but we will still have the first one active
      second();

      first({
        message: "We hid the second group and updated the first group message",
      });

      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0;
        $q.notify({
          message: "Clicked",
        });
        isAIGenerated.value = true;
        prices = prices.map(
          (price) => price + Math.floor(Math.random() * 50 - 25)
        );
        createLineChart(lineChart.value, years, prices);
      }, 2000);
    }, 2000);
  }, 1500);
};
</script>

<style scoped>
.description {
  color: #464255;
  font-size: 20px;
}

.chart {
  height: 210px;
}

.linearChart {
  height: 255px;
}
</style>
