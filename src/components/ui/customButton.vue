<template>
  <div>
    <a class="buttonStyle bounce-to-bottom">
      {{ label }}
    </a>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    label: { required: false, type: String, default: "Services" },
  },
};
</script>

<style>
/* .buttonStyle {
  @apply w-full  bg-red text-white font-fort font-bold uppercase px-12 py-4 cursor-pointer;
} */

.bounce-to-bottom {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;

  @apply w-full bg-red text-white font-fort font-bold uppercase px-12 py-4 cursor-pointer;
}
.bounce-to-bottom:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  @apply bg-darkRed;
}
.bounce-to-bottom:hover {
  color: white;
}
.bounce-to-bottom:hover:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}
</style>