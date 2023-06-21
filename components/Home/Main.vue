<template>
  <div class="main-container">
    <!-- <div class="scroll">
      <div
        class="question-answer-container"
        v-for="(question, index) in questions"
        :key="question.id"
      >
        <HomeQuestion :question="question" />
        <div style="background-color: #464242">
          <HomeAnswer :answer="answers[index]" />
        </div>
      </div>
    </div> -->
    <HomeMessages />
    <div class="question-input-container">
      <HomeQuestionInput />
    </div>
  </div>
</template>

<script setup>
import { api } from "~/composables/api";

const questions = useStoreQuestion();
const answers = useStoreAnswer();
async function getUserInfo() {
  const { data } = await api.get("users/me");
  if (data) {
    localStorage.setItem("user_id", data.id);
    const chatBotId = data.chatbots[0].id;
    localStorage.setItem("bot_id", chatBotId);
  }
  return data;
}

async function getChatHistory(userId, botId) {
  const { data } = await api.get(`chat/${userId}/${botId}/chatHistory`);
  return data.messages;
}

onBeforeMount(() => {
  getUserInfo().then((data) => {
    getChatHistory(data.id, localStorage.getItem("bot_id")).then((messages) => {
      messages.forEach((message) => {
        if (message.role === "user") {
          questions.value.push(message);
        } else if (message.role === "assistant") {
          answers.value.push(message);
        }
      });
    });
  });
});
</script>

<style scoped>
.main-container {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.question-answer-container {
  background-color: #fff;
  width: 100%;
}

.scroll {
  width: 100%;
  height: 78%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.scroll::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.question-input-container {
  margin-top: auto;
  height: 160px;
  background-color: #fff;
}
</style>
