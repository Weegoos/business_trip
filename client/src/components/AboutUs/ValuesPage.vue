<template>
  <div>
    <section
      class="q-gutter-md"
      :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
    >
      <div
        class="col"
        :class="$q.screen.width > mobileWidth ? 'q-pa-xl' : 'q-px-md'"
      >
        <img
          class="propertiesIcon"
          src="../../assets/indexPage/FeaturedPropertiesIntro.png"
          alt=""
        />
        <p class="textHeadline">Our Values</p>
        <p class="textDescription">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div
        class="col"
        :class="$q.screen.width > mobileWidth ? 'q-pa-xl' : 'q-px-md'"
      >
        <q-card class="card">
          <q-card-section>
            <div
              class="q-gutter-md"
              :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
            >
              <div class="col">
                <q-btn
                  fab
                  flat
                  icon="code"
                  style="border: #703bf7 1px solid; color: #a685fa"
                  @click="onClick"
                />
                <span class="text-h6 text-bold q-ml-md">Trust</span>
                <p class="text-body1 q-mt-sm">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>

              <div class="col">
                <q-btn
                  fab
                  flat
                  icon="code"
                  style="border: #703bf7 1px solid; color: #a685fa"
                  @click="onClick"
                />
                <span class="text-h6 text-bold q-ml-md">Excellence</span>
                <p class="text-body1 q-mt-sm">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>
            </div>
            <div
              class="q-gutter-md q-mt-md"
              :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
            >
              <div class="col">
                <q-btn
                  fab
                  flat
                  icon="group"
                  style="border: #703bf7 1px solid; color: #a685fa"
                  @click="onClick"
                />
                <span class="text-h6 text-bold q-ml-md">Client-Centric</span>
                <p class="text-body1 q-mt-sm">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>

              <div class="col">
                <q-btn
                  fab
                  flat
                  icon="group"
                  style="border: #703bf7 1px solid; color: #a685fa"
                  @click="onClick"
                />
                <span class="text-h6 text-bold q-ml-md">Our Commitment</span>
                <p class="text-body1 q-mt-sm">
                  We are dedicated to providing you with the highest level of
                  service, professionalism, and support.
                </p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;
const mobileVersion = proxy.$mobileVersion;
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid #262626 8px;
  border-radius: 7px;
}
</style>
