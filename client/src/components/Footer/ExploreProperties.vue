<template>
  <div class="text-white container">
    <div class="q-mt-lg q-ml-lg">
      <p class="textHeadline">Start Your Real Estate Journey Today</p>
      <section class="row q-gutter-md">
        <div class="col-8">
          <p class="textDescription">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <div class="col" align="center">
          <q-btn
            no-caps
            class="button"
            label="Explore Properties"
            @click="onClick"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;
const mobileVersion = proxy.$mobileVersion;
</script>

<style scoped>
.container {
  background-color: #262626;
  padding: 45px;
}

.button {
  color: #ffffff;
  background-color: #703bf7;
  padding: 15px;
}
</style>
