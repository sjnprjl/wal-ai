<template>
  <div class="d-flex flex-column min-vh-100">
    <slot />
    <footer class="d-flex justify-content-center align-items-center">
      <p>
        © 2023 WAL-AI Pty Ltd. <NuxtLink>Terms and Conditions</NuxtLink> &
        <NuxtLink>Privacy Policy.</NuxtLink>
      </p>
    </footer>
  </div>
</template>

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
</style>
