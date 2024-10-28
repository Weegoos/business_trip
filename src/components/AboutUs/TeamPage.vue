<template>
  <div class="q-pa-xl">
    <img
      class="propertiesIcon"
      src="../../assets/indexPage/FeaturedPropertiesIntro.png"
      alt=""
    />
    <p class="textHeadline">Meet the Estatein Team</p>
    <span class="textDescription"
      >At Estatein, our success is driven by the dedication and expertise of our
      team. Get to know the people behind our mission to make your real estate
      dreams a reality.</span
    >
    <section
      class="q-gutter-md"
      :class="$q.screen.width < mobileWidth ? 'col' : 'row'"
    >
      <div v-for="(items, index) in teamArray" :key="index" class="col">
        <q-card class="card q-mt-md">
          <q-card-section align="center">
            <q-img
              style="width: 50%; border-radius: 5px"
              :src="`https://cdn.quasar.dev/img/avatar${index + 1}.jpg`"
            >
              <div
                class="bg-transparent absolute-bottom text-body1"
                style="margin-top: 75px"
              >
                <i class="fab fa-twitter icon"></i>
              </div>
            </q-img>
            <p class="text-bold text-body1 q-my-md">{{ items.name }}</p>
            <p style="color: #999999">{{ items.post }}</p>
          </q-card-section>
          <q-card-section>
            <div
              class="msgSection text-bold"
              :clas="$q.screen.width < mobileVersion ? 'col' : 'row'"
              align="left"
              style="align-items: stretch"
            >
              <section class="col text-h6">
                Say Hello <i class="fas fa-hand-paper"></i>
              </section>
              <section class="col" align="right">
                <q-btn
                  fab-mini
                  icon="send"
                  class="sendButtonStyle"
                  @click="onClick"
                />
              </section>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const mobileWidth = proxy.$mobileWidth;
const mobileVersion = proxy.$mobileVersion;

const teamArray = ref([
  {
    name: "Max Mitchell",
    post: "Founder",
  },
  {
    name: "Sarah Johnson",
    post: "Chief Real Estate Officer",
  },
  {
    name: "David Brown",
    post: "Head of Property Management",
  },
  {
    name: "Michael Turner",
    post: "Legal Counsel",
  },
]);
</script>

<style scoped>
.card {
  background-color: #141414;
  border: solid #262626 1px;
  border-radius: 7px;
}

.icon {
  background-color: #703bf7;
  border-radius: 1000px;
  padding: 15px;
}

.msgSection {
  background-color: #1a1a1a;
  border: solid #262626 1px;
  padding: 20px;
  border-radius: 70px;
}

.sendButtonStyle {
  background-color: #703bf7;
}
</style>
