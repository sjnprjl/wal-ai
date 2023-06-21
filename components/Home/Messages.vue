<template>
  <div class="scroll">
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
  </div>
</template>

<script setup>
const questions = useStoreQuestion();
const answers = useStoreAnswer();
</script>

<style scoped>
.question-answer-container {
  background-color: #fff;
  width: 100%;
}

.scroll {
  width: 100%;
  height: 78%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll::-webkit-scrollbar {
  display: none;
}
</style>
