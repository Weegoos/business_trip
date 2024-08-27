<template>
  <div class="q-pa-md">
    <section class="data q-pa-md">
      <p class="headline" align="center">Данные по командировке</p>
      <q-card class="card">
        <section class="row q-gutter-md">
          <div class="col">
            <span class="description">Аванс</span>
            <q-input
              v-model="prepaid_expense"
              type="number"
              dense
              class="input"
              filled
            />
            <span class="description">Город А</span>
            <q-input v-model="cityTo" type="text" dense class="input" filled />
            <span class="description">Количество дней (суточные)</span>
            <q-input
              v-model="amountOfDay"
              type="number"
              dense
              class="input"
              filled
            />
          </div>
          <!--  -->
          <div class="col">
            <span class="description">Номер приказа</span>
            <q-input
              v-model="order_number"
              type="text"
              dense
              class="input"
              filled
            />
            <span class="description">Город Б</span>
            <q-input
              v-model="cityFrom"
              type="text"
              dense
              class="input"
              filled
            />
            <span class="description">Количество дней (проживание)</span>
            <q-input
              v-model="amountOfDayResidence"
              type="number"
              dense
              class="input"
              filled
            />
          </div>
        </section>
      </q-card>
      <q-card class="card">
        <section class="row q-gutter-md">
          <p class="headline" align="center">Данные по приезду</p>
        </section>
      </q-card>

      <q-card-actions align="center">
        <q-btn
          no-caps
          color="positive"
          label="Cформировать отчет"
          @click="generateReport"
        />
      </q-card-actions>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
const prepaid_expense = ref("");
const $q = useQuasar();
const generateReport = () => {
  $q.notify({
    message: prepaid_expense.value,
  });
};
</script>

<style scoped>
.data {
  border: solid #000 1px;
}

.headline {
  font-weight: bold;
  font-size: 20px;
  justify-content: center;
}

.card {
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
}
</style>
