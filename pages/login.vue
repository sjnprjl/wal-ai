<template>
  <div class="d-flex flex-column min-vh-100 mobile-bg">
    <img
      src="/images/message-circle.png"
      alt="message-circle"
      class="mobile-message-circle"
      @click="messageCircleClick"
    />
    <CustomContainer
      v-if="messageBoxAppear"
      :customStyle="customContainerStyle ? customContainerStyle : {}"
    >
      <h1 class="DesktopHeading">
        Heading Placeholder to be used for<br />
        more description about the CHAT bot.
      </h1>
      <h1 class="MobileHeading">
        Heading Placeholder to be<br />
        used for more description <br />about the CHAT bot.
      </h1>
      <span class="DesktopLogin"><LoginInputContainer /></span>
      <span class="MobileLogin"><MobileInputContainer /></span>
    </CustomContainer>
    <span class="MobileFooter">
      <Footer />
    </span>
  </div>
</template>

<script setup>
const customContainerStyle = {};
const messageBoxAppear = ref(true);

const messageCircleClick = () => {
  messageBoxAppear.value = !messageBoxAppear.value;
};
</script>

<style scoped>
.mobile-message-circle {
  display: none;
}
.MobileLogin {
  display: none;
}

.MobileHeading {
  display: none;
}
.custom-container h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 3.4rem;
  height: 8.8rem;
  line-height: 4.1rem;
  text-align: center;
  color: #000;
  /* font-family: "Inter"; */
}

@media only screen and (max-width: 440px) {
  .mobile-bg {
    background-color: #2f2a2a;
    position: relative;
  }

  .mobile-message-circle {
    display: block;
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 77px;
    height: 77px;
  }

  .DesktopLogin {
    display: none;
  }

  .MobileLogin {
    display: block;
  }

  .MobileHeading {
    display: block;
  }

  .DesktopHeading {
    display: none;
  }

  .MobileFooter {
    display: none;
  }

  .custom-container h1 {
    height: 113px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.4rem;
    text-align: center;

    color: #fff;
  }
}
</style>
