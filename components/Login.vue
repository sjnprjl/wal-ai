<template>
  <div class="login-container d-flex flex-column align-items-center">
    <p class="para">Login to Chat with WAL-AI</p>
    <CustomInput
      type="text"
      placeholder="Email Address"
      :marginBottom="marginBottom"
    />
    <CustomInput
      type="text"
      placeholder="First Name"
      :marginBottom="marginBottom"
    />
    <CustomButton>Login</CustomButton>
    <p class="para register-para">
      Only registered user can login to WAL-AI. Please <br />contact the
      administrator to get your access.
    </p>
  </div>
</template>

<script setup>
const marginBottom = "17px";
</script>

<style scoped>
.login-container {
  max-width: 50%;
  margin: 8.9rem auto 0;
}

.para {
  width: 347px;
  height: 40px;
  /* top: 368px; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  color: #000000;
}

.register-para {
  margin-top: 1.2rem;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #afafaf;
  margin-bottom: 32.6rem;
  width: 36.7rem;
}
</style>
