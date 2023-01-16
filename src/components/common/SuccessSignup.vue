<template>
  <div class="background">
    <v-card class="container">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            회원가입 성공!
          </v-list-item-title>
          <v-list-item-subtitle class="mb-1">
            my todos에 오신걸 환영합니다.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="ml-2">
        <v-btn class="border-radius-2" @click="signinBtn()">
          로그인 하러가기
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    signinBtn() {
      // this.$emit("goLogin", true);
      this.$store.dispatch("GO_LOGIN", false);
    },
  },
};
</script>

<style scoped>
.background {
  height: 100vw;
  background-color: rgba(201, 238, 240, 0.5);
}
.container {
  margin-top: 500px;
  width: 500px;
}
</style>
