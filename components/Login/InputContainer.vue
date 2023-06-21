<template>
  <div class="login-container d-flex flex-column align-items-center">
    <p class="para">Login to Chat with WAL-AI</p>
    <CustomInput
      type="text"
      placeholder="Phone Number"
      :marginBottom="marginBottom"
      v-model="email"
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
import { api } from "~/composables/api";

const marginBottom = "17px";

const email = ref("");
const password = ref("");

const sendRequest = async (email, password) => {
  const data = {
    phoneNumber: email.toString(),
    password: password.toString(),
  };

  const response = await api.post("auth/signin", data);

  const result = response.data;
  localStorage.setItem("token_ramailo", JSON.stringify(result));
  navigateTo("/", { replace: true });
};

const login = () => {
  sendRequest(email.value, password.value);
};
</script>

<style scoped>
.login-container {
  max-width: 50%;
  margin: 8.9rem auto 0;
}

.para {
  width: 347px;
  height: 40px;
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
  width: 36.7rem;
}
</style>
