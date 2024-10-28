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
      <div>
        <FAQPage />
      </div>
    </section>
  </div>
</template>

<script setup>
import DiscoveryPage from "../components/MainPage/DiscoveryPage.vue";
import FeaturedProperties from "../components/MainPage/FeaturedProperties.vue";
import FeedBack from "../components/MainPage/FeedBack.vue";
import FAQPage from "../components/MainPage/FAQPage.vue";
</script>

<style></style>
