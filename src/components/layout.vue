<template>
  <div
    id="Layout"
    class="bg-black min-h-screen bg-cover"
    :style="backgroundStyle"
  >
    <div class="max-w-screen-xl flex flex-col space-beetween mx-auto">
      <!-- Header -->
      <div class="m-8 mb-6 flex-col-center">
        <slot name="header">
          <h1 class="pb-6">{{ title }}</h1>
          <h3 v-if="subtitle" class="font-fort text-lg">{{ subtitle }}</h3>
        </slot>
      </div>

      <!-- Slot Content -->
      <div class="">
        <slot name="content" />
      </div>

      <!-- Slot footer -->
      <div class="my-6">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    title: { required: false, type: String, default: null },
    subtitle: { required: false, type: String, default: null },
    changeBackground: { required: false, type: Boolean, default: null },
  },
  data: () => ({
    backgroundStyle: "",
  }),
  watch: {
    changeBackground(value) {
      if (value && window.screen.width > 800) {
        let aux = Math.random(); //Fuerza que se cambie la imagen
        this.backgroundStyle = `background-image: url(https://picsum.photos/800/600?grayscale&r=${aux})`;
      } else {
        this.backgroundStyle = "";
      }
    },
  },
  methods: {},
};
</script>

<style>
</style>