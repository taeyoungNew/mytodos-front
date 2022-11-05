<template>
  <div>
    <v-container>
      <v-card class="pa-3 login-card">
        <v-subheader>로그인</v-subheader>
        <v-form v-model="valid" class="signup-form" @submit.prevent="onLogin">
          <v-text-field
            class="mt-3"
            v-model="email"
            label="이메일"
            type="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            class="mt-3"
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-btn :disabled="!valid" type="submit" class="mt-3 signup-btn">
            로그인
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      emailRules: [
        (v) => !!v || "이메일을 입력해주세요", // 이메일 정규 표현식
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      passwordRules: [(v) => !!v || "패스워드를 입력해주세요"],
      email: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch("ON_LOGIN", {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    setMe() {
      return this.$store.state.setMe;
    },
  },
  watch: {
    setMe() {
      this.$router.push("/MainView");
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 1000px;
  min-height: 30vh;
  margin: 0 auto 0 auto;
}
.signup-form {
  width: 460px;
  margin: 0 auto 0 auto;
}
.signup-btn {
  width: 460px;
}
</style>
