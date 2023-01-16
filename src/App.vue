<template>
  <v-app id="app">
    <app-header class="app-bar" />
    <success-signup v-if="messageStatus" class="success-message" />
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
import SuccessSignup from "@/components/common/SuccessSignup.vue";
export default {
  components: { AppHeader, SuccessSignup },
  name: "App",

  data: () => ({
    messageStatus: false,
  }),
  computed: {
    checkSignupMessage() {
      return this.$store.state.signupMessage;
    },
  },
  watch: {
    checkSignupMessage(value) {
      this.messageStatus = value;
    },
  },
};
</script>

<style>
#app {
  /* width: 2000px; */
  margin-left: auto;
  margin-right: auto;
  background-color: #606a6b;
  height: 100vh;
  overflow: hidden;
}
.app-bar {
  width: 1250px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.success-message {
  position: absolute;
  width: 100%;
  height: 100vw;
  z-index: 1;
}
* {
  font-family: "KOFIHDrLEEJWTTF-B";
  font-weight: 700;
  font-style: normal;
  color: #606a6b;
}
</style>
