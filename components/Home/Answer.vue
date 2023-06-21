<template>
  <div class="answer">
    <CustomLetter :customStyle="customStyle" name="W" />
    <p>
      {{ props.answer.content }}
    </p>
    <img src="/images/copy.png" alt="clipboard" @click="copyText" />
  </div>
</template>

<script setup>
const props = defineProps({
  answer: "String",
});

const customStyle = {
  "background-color": "#F32E33",
  width: "3.4rem",
  height: "3.4rem",
  "padding-inline": "1.8rem",
};
</script>

<style scoped>
.answer {
  max-width: 700px;
  width: 90%;
  margin-inline: auto;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;

  padding: 3.2rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  position: relative;
}

img {
  position: absolute;
  cursor: pointer;
  left: 100%;
}
</style>
