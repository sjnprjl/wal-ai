<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    class="form-control"
    :style="[marginBottomStyle, props.customStyle]"
    :value="modelValue"
    @input="updateValue"
    :disabled="props.disabled"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  marginBottom: String,
  customStyle: Object,
  modelValue: String,
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
const marginBottomStyle = {
  marginBottom: props.marginBottom,
};

const store = ref("");
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

@media only screen and (max-width: 440px) {
  input {
    max-width: 363px;
    width: 100%;
  }
}
</style>
