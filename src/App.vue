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

<style scoped>
#app {
  width: 2000px;
  margin-left: auto;
  margin-right: auto;
}
.app-bar {
  width: 1250px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1000;
}
</style>
