<template>
  <footer class="d-flex justify-content-center align-items-center">
    <p>
      © 2023 WAL-AI Pty Ltd.
      <NuxtLink :style="linkUnderline">Terms and Conditions</NuxtLink>
      &
      <NuxtLink :style="linkUnderline">Privacy Policy.</NuxtLink>
    </p>
  </footer>
</template>

<script setup>
const linkUnderline = {
  textDecoration: "underline",
};
</script>

<style scoped>
footer {
  min-height: 52px;
  background-color: #f32e33;
  margin-top: auto;
}
footer p {
  font-weight: 400;
  font-size: 1.4rem;
  color: #fff;
}

.next {
}
</style>
