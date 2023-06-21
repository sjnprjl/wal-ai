<template>
  <div class="logout">
    <div class="named-letter">
      <CustomLetter name="D" />
      <p>Deep Sherchan</p>
    </div>
    <img src="/images/log-out-btn.png" alt="logout-button" @click="logout" />
  </div>
  <div class="line"></div>
</template>

<script setup>
const logout = () => {
  localStorage.setItem("token_ramailo", "");
  navigateTo("/login", { replace: true });
};
</script>

<style scoped>
p {
  margin: 0;
}

.line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #fff;
  top: -5px;
  padding: 0px;
  right: 0px;
}
.logout {
  padding: 1.6rem 1.3rem;
  margin-top: auto;
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.named-letter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

img {
  cursor: pointer;
}
</style>
