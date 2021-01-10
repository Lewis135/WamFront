<template>
  <div class="FrankFlow">
    <df-messenger
      intent="WELCOME"
      chat-title="Frank - Asistente de Entrevistas"
      :agent-id="agentId"
      language-code="es"
      expand
      @df-response-received="eventResponse"
    />
  </div>
</template>

<script>
export default {
  name: "FrankFlow",
  data: () => ({
    agentId: "c9b94231-fdf4-4b94-b6a3-e9dc441c1478",
  }),
  created() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
    );
    document.head.appendChild(externalScript);
  },
  methods: {
    eventResponse(event) {
      let payload = {};
      payload.action = event.detail.response.queryResult.action;
      payload.parameters = event.detail.response.queryResult.parameters;
      this.$emit("newAction", payload);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
df-messenger {
  --df-messenger-bot-message: #c52132;
  --df-messenger-button-titlebar-color: #111;
  --df-messenger-chat-background-color: #fafafa;
  --df-messenger-font-color: white;
  --df-messenger-send-icon: #363636;
  --df-messenger-user-message: #479b3d;
}
</style>
