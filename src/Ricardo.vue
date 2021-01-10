<template>
  <div id="app">
    <Layout class="bgGradient">
      <template v-slot:header>
        <h1 class="text-darkRed">{{ title }}</h1>
        <div class="text-white">
          <span class="text-lg font-fort">
            Senior Frontend Developer at WAM
          </span>
          <span class="text-xs font-fort"> (A que suena bien) </span>
        </div>
      </template>
      <template v-slot:content>
        <div class="w-1/2 px-8">
          <p>
            Os presento a Frank, un pequeño asistente que acaba de nacer. Es un
            proyecto que empecé el otro dia y pretendo que se convierta en una
            interfaz entre el usuario final y el sistema... <br />Navegacion por
            voz, acciones en backend, FAQ, preguntas tipicas de entrevista...
          </p>
          <p>
            Ahora mismo esta en pañales y unicamente es un chatbot de
            entrevistas...
            <br />
            Aun asi vais a ser los primeros en utilizarlo asi que por ello,
          </p>
          <p>Muchas gracias :D</p>
          <FrankFlow />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/layout.vue";
import FrankFlow from "./components/chatWithMe/FrankFlow.vue";

export default {
  name: "RicardoMont",
  data: () => ({
    title: "Ricardo Montaner Lopez",
  }),

  components: {
    Layout,
    FrankFlow,
  },
};
</script>

<style>
.bgGradient {
  background: rgb(197, 33, 50);
  background: linear-gradient(
    45deg,
    rgba(197, 33, 50, 1) 0%,
    rgba(197, 33, 50, 1) 10%,
    rgba(54, 54, 54, 1) 10%
  );
}
div p {
  @apply my-4 text-white font-fort;
}
</style>
