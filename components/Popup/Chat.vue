<template>
  <div class="chat-container text-white">
    <!-- new chat -->
    <header class="chat-header-button">
      <button type="button" class="btn btn-outline btn-class">
        + New Chat
      </button>
      <button type="button" class="btn btn-outline" @click="dateHandler">
        <img src="/images/arrow-down.png" alt="arrow down" />
      </button>
    </header>
    <div class="line"></div>
    <!-- Chat -->
    <div class="chat">
      <div class="msg">
        <HomeMessages />
      </div>
      <div class="chat-input">
        <HomeQuestionInput
          :copyrightVisible="false"
          color="#DADADA"
          :textArea="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const questions = useStoreQuestion();
const answers = useStoreAnswer();

const date = ref(false);

provide("textarea", "textarea");

const dateHandler = () => {
  date.value = !date.value;
};
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  max-height: 560px;
  min-height: 590px;
  background-color: #2f2a2a;
}
.msg {
  overflow-y: scroll;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.msg::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.chat-input {
  margin-top: auto;
  background-color: #2f2a2a;
  padding-bottom: 2.2rem;
}

.chat-container {
  width: 44rem;
  min-height: 66.6rem;
  max-height: 66.6rem;
  position: absolute;
  background-color: #464242;
  /* background-color: #2f2a2a; */
}

.chat-header-button {
  padding: 1.7rem 0rem 2.4rem 2.3rem;
  display: flex;
  gap: 1.1rem;
  width: 100%;
  position: relative;
  background-color: #2f2a2a;
}

.btn {
  height: 3.7rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
}

.btn-class {
  width: 80%;
}

.line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #fff;
  top: 75px;
  padding: 0px;
  right: 0px;
}
</style>
