<template>
  <div class="dates">
    <div class="month">{{ dates.month }}</div>
    <div
      class="date-time"
      v-for="(dateTime, index) in dates.dateTime"
      :key="index"
    >
      <img src="/images/date-chat.png" alt="date-chat-icon" />
      {{ dateTime }}
    </div>
  </div>
</template>

<script setup>
const dates = defineProps({
  month: String,
  dateTime: Array,
});
</script>

<style scoped>
.dates {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;
}

.month {
  font-size: 1.2rem;
}

.date-time:not(:last-of-type) {
  padding: 1rem 0;
}

.date-time img {
  margin-right: 1.1rem;
}
</style>
