<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    class="form-control"
    :style="{
      marginBottom: props.marginBottom,
    }"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  marginBottom: String,
});
</script>

<style scoped>
input {
  width: 367px;
  height: 65px;
  background: #ecebeb;
  border-radius: 4px;
  border: none;
  font-size: 1.6rem;
  font-weight: 400;
  text-indent: 2rem;
}
</style>
