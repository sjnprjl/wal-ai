<template>
  <div class="login-container d-flex flex-column align-items-center">
    <p class="para">Mobile to Chat with WAL-AI</p>
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
  margin: 8.9rem auto 0;
}

.login-container p {
  margin-top: 1.2rem;
}

@media only screen and (max-width: 440px) {
  .para {
    color: #fff;
  }
}
</style>
