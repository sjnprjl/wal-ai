<template>
  <div class="question-input">
    <div class="input-container">
      <textarea
        v-if="props.textArea"
        class="form-control scroll"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Ask a question..."
        v-model="question"
        @keyup.enter="sendQuestion"
      ></textarea>
      <CustomInput
        v-else
        type="textarea"
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
    <p class="helper" :style="style">
      Sample text area with a <NuxtLink :style="linkUnderline">link</NuxtLink>,
      which can be used to redirect the user to helpful section or other content
      of the chat bot.
    </p>
    <p class="copyright" v-if="props.copyrightVisible">
      © 2023 WAL-AI Pty Ltd.
      <NuxtLink :style="linkUnderline">Terms and Conditions</NuxtLink> &
      <NuxtLink :style="linkUnderline">Privacy Policy.</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { api } from "~/composables/api";
const props = defineProps({
  copyrightVisible: {
    type: Boolean,
    default: true,
  },
  color: String,
  textArea: {
    type: Boolean,
    default: false,
  },
});

const style = {
  color: props.color ? props.color : "#000",
};

const question = ref("");
const disabled = ref(false);

const questionInput = useStoreQuestion();
const answerInput = useStoreAnswer();

const sendQuestion = () => {
  const safeText = question.value.trim();
  const chatBotId = localStorage.getItem("bot_id");
  const userId = localStorage.getItem("user_id");
  const url = `/chat/${userId}/chatbots/${chatBotId}/send-message`;

  if (safeText !== "") {
    disabled.value = true;
    questionInput.value.push({
      id: Date.now(),
      content: safeText,
      role: "user",
    });
    question.value = "";
    answerInput.value.push({
      content: `Please wait...`,
      id: Date.now(),
      role: "assistant",
    });
    api
      .post(url, { content: safeText, role: "user" })
      .then((data) => {
        answerInput.value.pop();
        console.log(data);
        answerInput.value.push(data.data);
      })
      .catch((err) => {
        answerInput.value.pop();
        answerInput.value.push({
          id: Date.now(),
          content: "Something went wrong.",
          role: "assistant",
        });
      })
      .finally(() => {
        disabled.value = false;
      });
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
.scroll {
  font-size: 1.6rem;
  padding-right: 12%;
  height: 65px;
  background-color: #d9d9d9;
  resize: none;
}
.scroll::-webkit-scrollbar {
  display: none;
}

.scroll::placeholder {
  text-align: left;
}

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
