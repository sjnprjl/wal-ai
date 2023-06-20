<template>
  <div class="home-container">
    <HomeSidebar />
    <HomeMain />
  </div>
</template>

<script setup>
const namedLetter = "D";
provide("name", namedLetter);

onBeforeMount(() => {
  let token = localStorage.getItem("token_ramailo");
  if (token) {
    token = JSON.parse(token);
  }
  if (!token) {
    return navigateTo("/login", { replace: true });
  }
});
</script>

<style scoped>
.home-container {
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
}
</style>
