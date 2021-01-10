<template>
  <div id="app">
    <Layout
      :title="title"
      :subtitle="subtitle"
      :changeBackground="changeBackground"
    >
      <!-- Content -->
      <template v-slot:content>
        <div class="h-full flex flex-wrap justify-center">
          <div
            class="w-full py-4 sm:w-1/2 md:w-1/3 lg:w-1/4 px-8"
            v-for="card in cardList"
            :key="card.id"
          >
            <Card
              class=""
              :title="card.title"
              :urlList="card.urlList"
              @mouseenter="changeBackground = true"
              @mouseleave="changeBackground = false"
            />
          </div>
        </div>
      </template>

      <!-- Footer -->
      <template v-slot:footer>
        <div class="flex-row-center h-full justify-items-centercenter">
          <CustomButton class="my-auto" label="All our services" />
        </div>
      </template>
    </Layout>
    <!-- Cards -->
  </div>
</template>

<script>
import Layout from "@/components/layout.vue";
import Card from "@/components/ui/card.vue";
import cardList from "@/data/cardList.json";
import CustomButton from "@/components/ui/customButton.vue";

export default {
  name: "App",
  data: () => ({
    title: "What we do",
    subtitle: "We become your strategic partner - not just a provider.",
    cardList,
    changeBackground: false,
  }),

  components: {
    Card,
    Layout,
    CustomButton,
  },
};
</script>

<style>
* {
  @apply font-canela;
}
</style>
