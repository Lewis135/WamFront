<template>
  <transition name="fade">
    <img src="@/assets/svg/icon.svg" />
  </transition>
</template>

<script>
// Si fueran a haber varios iconos, montaria el componente para que se le pasaran los datos del svg by ID.
export default {
  name: "triangleIcon",
  data: () => ({}),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>