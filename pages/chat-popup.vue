<template>
  <div class="custom-container container-fluid">
    <!-- <PopupLogin class="login" v-if="showHide" /> -->
    <PopupChat class="chat" />
    <img
      src="/images/message-circle.png"
      alt="message-circle"
      class="message-circle"
      @click="chatHandler"
    />
  </div>
</template>

<script setup>
const showHide = ref(false);
const questions = useStoreQuestion();
const answers = useStoreAnswer();

async function getChatHistory(userId, botId) {
  const { data } = await api.get(`chat/${userId}/${botId}/chatHistory`);
  return data.messages;
}

onBeforeMount(() => {
  getChatHistory(
    localStorage.getItem("user_id"),
    localStorage.getItem("bot_id")
  ).then((messages) => {
    messages.forEach((message) => {
      if (message.role === "user") {
        questions.value.push(message);
      } else if (message.role === "assistant") {
        answers.value.push(message);
      }
    });
  });
});

const chatHandler = () => {
  showHide.value = !showHide.value;
};
</script>

<style scoped>
.custom-container {
  max-height: 100vh;
  min-height: 100vh;
  position: relative;
}

.message-circle {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.chat {
  position: absolute;
  bottom: 40px;
  right: 40px;
}
</style>
