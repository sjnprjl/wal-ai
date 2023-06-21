<template>
  <div class="main-container">
    <!-- <div class="scroll">
      <div
        class="question-answer-container"
        v-for="(question, index) in questions"
        :key="index"
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
const questions = useStoreQuestion();
const answers = useStoreAnswer();
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
