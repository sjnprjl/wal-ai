<template>
  <div class="question">
    <CustomLetter
      :bgColor="letterBGColor"
      :customStyle="customStyle"
      name="D"
    />
    <p>{{ props.question }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  question: "String",
});

const letterBGColor = "#CFCDCD";

const customStyle = {
  backgroundColor: "#CFCDCD",
  width: "3.4rem",
  height: "3.4rem",
  "padding-inline": "1.8rem",
};
</script>

<style scoped>
.question {
  max-width: 700px;
  width: 90%;
  /* width: 100%; */
  margin-inline: auto;
  color: #3e3939;
  font-size: 1.6rem;
  font-weight: 400;

  padding: 3.2rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
}
</style>
