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
  max-width: 100%;
  margin: 8.9rem auto;
}

.login-container p {
  margin-top: 1.2rem;
  margin-bottom: 3rem;
}

@media only screen and (max-width: 440px) {
  .para {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Inter";
    font-style: normal;
    line-height: 1.9rem;
    text-align: center;
  }

  .register-para {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.7rem;
  }
}
</style>
