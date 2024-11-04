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
                <section class="row q-gutter-md">
                  <div class="col">
                    <q-card class="my-card row">
                      <div class="col">
                        <div refs="power" class="chart"></div>
                        <p class="description" align="center">Сила</p>
                      </div>
                      <!-- <div class="col">
                        <div ref="endurance" class="chart"></div>
                        <p class="description" align="center">Выносливость</p>
                      </div>
                      <div class="col">
                        <div ref="speed" class="chart"></div>
                        <p class="description" align="center">Скорость</p>
                      </div> -->
                    </q-card>
                  </div>
                  <!-- <div class="col">
                    <q-card class="my-card">
                      <div ref="chartContainer" class="linearChart"></div>
                    </q-card>
                  </div> -->
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
import { onMounted, ref, watch, nextTick } from "vue";

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
const endurance = ref(null);
const speed = ref(null);
const chartContainer = ref(null);

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

watch(
  () => confirm.value,
  async (isOpen) => {
    if (isOpen) {
      await nextTick(); // Дождитесь обновления DOM
      createChart(power.value, "Сила", "#FF5B5B", "#FFE4E4", 5, 95);
      // Проверьте, инициализирован ли power.value
      if (power.value) {
        createChart(power.value, "Сила", "#FF5B5B", "#FFE4E4", 5, 95);
      }
      // Здесь также проверяйте endurance.value и speed.value
      createLinearChart();
    }
  }
);

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
  const myChart = echarts.init(item);
  echarts.dispose(item);

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

  window.addEventListener("resize", () => {
    myChart.resize();
  });
};

const createLinearChart = () => {
  let base = +new Date(2020, 0, 1);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 365 * 2; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }

  const lineChart = echarts.init(chartContainer.value);

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "График прогресса",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
          title: "Масштабирование",
        },
        restore: {
          title: "Сброс",
        },
        saveAsImage: {
          title: "Сохранить как изображение",
        },
      },
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
      axisLabel: {
        formatter: function (value) {
          let date = new Date(value);
          return `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`;
        },
        interval: 1000 * 60 * 60 * 24 * 7, // Показать метки каждую неделю
      },
      axisPointer: {
        show: true,
        type: "line",
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    series: [
      {
        name: "Данные",
        type: "line",
        smooth: true,
        symbol: "none",
        areaStyle: {},
        data: data,
      },
    ],
  };

  lineChart.setOption(option);

  window.addEventListener("resize", () => {
    lineChart.resize();
    [power.value, endurance.value, speed.value].forEach((chartEl) => {
      if (chartEl) echarts.getInstanceByDom(chartEl)?.resize();
    });
  });
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
