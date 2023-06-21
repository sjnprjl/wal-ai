<template>
  <div class="login-container d-flex flex-column align-items-center">
    <h1 class="main-heading text-white text-center">
      Heading Placeholder to be<br />
      used for more description <br />about the CHAT bot.
    </h1>
    <p class="para login-para">Login to Chat with WAL-AI</p>
    <CustomInput
      type="text"
      placeholder="Phone Number"
      :marginBottom="marginBottom"
      v-model="phone"
    />
    <CustomInput
      type="password"
      placeholder="Password"
      :marginBottom="marginBottom"
      v-model="password"
    />
    <CustomButton @login="login">Login</CustomButton>
    <p class="para register-para">
      Only registered user can login to WAL-AI. Please <br />contact the
      administrator to get your access.
    </p>
  </div>
</template>

<script setup>
const marginBottom = "17px";

const phone = ref("");
const password = ref("");

const sendRequest = async (phone, password) => {
  const data = {
    phoneNumber: phone.toString(),
    password: password.toString(),
  };

  try {
    const response = await api.post("auth/signin", data);
    const result = response.data;
    localStorage.setItem("token_ramailo", JSON.stringify(result));
    navigateTo("/chat-popup", { replace: true });
  } catch (err) {
    console.log("login failed", err);
  }
};

const login = () => {
  sendRequest(phone.value, password.value);
};
</script>

<style scoped>
.login-container {
  width: 44rem;
  height: 66.6rem;
  background-color: #2f2a2a;
}

.main-heading {
  margin-bottom: 5.6rem;
  margin-top: 3.4rem;
}

.para {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Inter";
  font-style: normal;
  line-height: 1.9rem;
  text-align: center;
  margin-top: 1.2rem;
  margin-bottom: 3rem;
}

.register-para {
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.7rem;
  margin-bottom: 13.3rem;
}
</style>
