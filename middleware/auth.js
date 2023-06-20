export default defineNuxtRouteMiddleware((to, from) => {
  const token = JSON.parse(localStorage.getItem("token_ramailo"));
  if (!token) {
    return navigateTo("/login");
  }
});
