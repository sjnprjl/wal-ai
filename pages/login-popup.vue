<template>
  <div class="custom-container container-fluid">
    <PopupLogin class="hello" v-if="showHide" />
    <img
      src="/images/message-circle.png"
      alt="message-circle"
      class="message-circle"
      @click="chatHandler"
    />
  </div>
</template>

<script setup>
const showHide = ref(false);

const chatHandler = () => {
  showHide.value = !showHide.value;
};
</script>

<style scoped>
.custom-container {
  max-height: 100vh;
  min-height: 100vh;
  position: relative;
}

.message-circle {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.hello {
  position: absolute;
  bottom: 40px;
  right: 40px;
}
</style>
