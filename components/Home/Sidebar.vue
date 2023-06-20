<template>
  <div class="sidebar">
    <div class="sidebar-pad">
      <button type="button" class="btn btn-outline w-100">+ New Chat</button>
      <!-- Dates -->
      <div class="dates">
        <HomeDates
          v-for="(date, index) in dates"
          :key="index"
          :month="date.month"
          :dateTime="date.dateTime"
        />
      </div>
      <!-- Logout  -->
    </div>
    <div class="home-logout">
      <HomeLogout />
    </div>
  </div>
</template>

<script setup>
const dates = [
  {
    month: "June 2023",
    dateTime: ["23rd, June 2023,13:44", "20th, June 2023, 13:44"],
  },
  {
    month: "May 2023",
    dateTime: ["03rd, May 2023,13:44", "1st, May 2023, 13:44"],
  },
];
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2f2a2a;

  display: flex;
  flex-direction: column;
}

.sidebar-pad {
  padding: 1.6rem 1.3rem;
}

.home-logout {
  position: relative;
  margin-top: auto;
}

.btn {
  height: 3.7rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
}
.dates {
  margin-top: 1.2rem;
}
</style>
