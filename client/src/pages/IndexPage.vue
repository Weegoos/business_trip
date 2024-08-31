<template>
  <div class="text-white">
    <section>
      <div>
        <DiscoveryPage />
      </div>
      <div>
        <FeaturedProperties />
      </div>
      <div>
        <FeedBack />
      </div>
    </section>
  </div>
</template>

<script setup>
import DiscoveryPage from "../components/MainPage/DiscoveryPage.vue";
import FeaturedProperties from "../components/MainPage/FeaturedProperties.vue";
import FeedBack from "../components/MainPage/FeedBack.vue";
</script>

<style></style>
