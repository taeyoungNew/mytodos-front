<template>
  <v-app id="app">
    <app-header class="app-bar" />
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "App",

  data: () => ({}),
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
  z-index: 1000;
}
* {
  font-family: "KOFIHDrLEEJWTTF-B";
  font-weight: 700;
  font-style: normal;
  color: #606a6b;
}
</style>
