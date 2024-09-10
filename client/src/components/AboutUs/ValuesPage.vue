<template>
  <div>
    <section class="row q-gutter-md">
      <div class="q-pa-xl col">
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
      <div class="col q-pa-xl">
        <q-card class="card">
          <q-card-section>
            <div class="row q-gutter-md">
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
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid #262626 8px;
  border-radius: 7px;
}
</style>
