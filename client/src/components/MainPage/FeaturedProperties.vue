<template>
  <div class="text-white q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">Featured Properties</p>
    <div class="row" style="align-items: baseline">
      <section class="col">
        <p class="textDescription">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </p>
      </section>
      <q-btn
        no-caps
        class="button"
        label="View All Testimonials"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.propertiesIcon {
  height: 30px;
}

.button {
  border: solid #262626 1px;
  padding: 7px;
}
</style>
