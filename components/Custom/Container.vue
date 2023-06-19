<template>
  <div class="custom-container" style="props.customStyle">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  customStyle: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.custom-container {
  max-width: 67.3rem;
  margin: auto;
}

@media only screen and (max-width: 440px) {
  .custom-container {
    width: 85%;
    margin: 2rem auto;
  }

  .custom-container h1 {
    color: #fff;
  }
}
</style>
