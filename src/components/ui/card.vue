<template>
  <div
    class="cardStyle h-full py-8 px-8 transform hover:scale-110"
    @mouseenter="
      cardHover = true;
      $emit('mouseenter');
    "
    @mouseleave="
      cardHover = false;
      $emit('mouseleave');
    "
  >
    <div class="h-4 w-4 ml-auto mt-2 mb-6">
      <TriangleIcon v-show="cardHover" />
    </div>

    <div class="text-center">
      <!-- Title -->
      <h2 class="linkWrapper">{{ title }}</h2>
      <!-- Links -->
      <div>
        <div
          v-for="(url, index) in urlList"
          :key="index"
          class="my-4 linkWrapper"
        >
          <a class="font-fort font-medium underline" :href="url.value">
            {{ url.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleIcon from "@/components/ui/triangleIcon.vue";

export default {
  name: "Card",
  data: () => ({
    cardHover: false,
  }),
  props: {
    title: { required: false, type: String, default: "" },
    urlList: { required: false, type: Array, default: new Array() },
  },
  components: {
    TriangleIcon,
  },
};
</script>

<style>
.cardStyle {
  transition-property: opacity, transform;
  transition-duration: 200ms;

  @apply bg-darkGray opacity-50;
}
.cardStyle:hover {
  @apply opacity-100;
}
</style>