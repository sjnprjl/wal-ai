<template>
  <button type="button" class="btn" @click="clicked"><slot /></button>
</template>

<script setup>
const emit = defineEmits("login");

const clicked = () => {
  emit("login");
};
</script>

<style scoped>
button {
  width: 367px;
  height: 67px;
  background-color: var(--button-bg-color);
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #fff;
}

@media only screen and (max-width: 440px) {
  button {
    width: 100%;
  }
}
</style>
