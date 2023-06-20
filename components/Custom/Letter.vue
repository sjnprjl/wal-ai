<template>
  <div class="letter" :style="props.customStyle">{{ props.name }}</div>
</template>

<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "#fdf1f2",
  },
  customStyle: Object,
  name: String,
});
</script>

<style scoped>
.letter {
  width: 34px;
  height: 34px;
  background-color: #fdf1f2;
  color: #000;
  font-weight: 400;
  font-size: 1.2rem;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
