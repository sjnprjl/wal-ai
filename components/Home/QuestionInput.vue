<template>
  <div class="question-input">
    <div class="input-container">
      <CustomInput
        type="text"
        placeholder="Ask a question..."
        :customStyle="customStyle"
        v-model="question"
        @keyup.enter="sendQuestion"
        :disabled="disabled"
      />
      <img
        src="/images/message-send.png"
        alt="message-send-button"
        @click="sendQuestion"
      />
    </div>
    <p class="helper">
      Sample text area with a <NuxtLink :style="linkUnderline">link</NuxtLink>,
      which can be used to redirect the user to helpful section or other content
      of the chat bot.
    </p>
    <p class="copyright">
      © 2023 WAL-AI Pty Ltd.
      <NuxtLink :style="linkUnderline">Terms and Conditions</NuxtLink> &
      <NuxtLink :style="linkUnderline">Privacy Policy.</NuxtLink>
    </p>
  </div>
</template>

<script setup>
const question = ref("");
const disabled = ref(false);

const questionInput = useStoreQuestion();
const answerInput = useStoreAnswer();

const sendQuestion = () => {
  if (question.value !== "") {
    disabled.value = true;
    questionInput.value.push(question.value);
    question.value = "";
    answerInput.value.push(`Generating Answer...`);
    setTimeout(() => {
      answerInput.value.pop();
      answerInput.value.push(`This is my latest answer ${Math.random()}`);
      disabled.value = false;
    }, 4000);
  }
};

const customStyle = {
  width: "100%",
  backgroundColor: "#D9D9D9",
};

const linkUnderline = {
  textDecoration: "underline",
};
</script>

<style scoped>
.question-input {
  max-width: 700px;
  width: 90%;
  margin-inline: auto;
  height: auto;
  margin-top: 2rem;
}

.input-container {
  position: relative;
}

.input-container img {
  position: absolute;
  top: 32%;
  left: 92%;
  cursor: pointer;
}

.helper {
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 135.02%;
  color: #000000;
  text-align: left;
  margin-left: 1rem;
  margin-top: 0.8rem;
}

.copyright {
  height: 21px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7rem;
  text-align: center;
  color: #464242;
}
</style>
