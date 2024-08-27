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
            <span class="description">Количество дней</span>
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
            <span class="description">Количество дней</span>
            <q-input
              v-model="amountOfDay"
              type="number"
              dense
              class="input"
              filled
            />
          </div>
        </section>
      </q-card>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.data {
  border: solid #000 1px;
}

.headline {
  font-weight: bold;
  font-size: 20px;
}

.card {
  border-radius: 10px;
  padding: 10px;
}
</style>
