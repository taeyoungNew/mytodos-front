<template>
  <div>
    <v-container>
      <v-card class="pa-3 signup-card">
        <v-subheader></v-subheader>
        <v-form
          class="signup-form"
          @submit.prevent="signupForm"
          v-model="valid"
        >
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
          <v-text-field
            class="mt-3"
            v-model="passwordCheck"
            label="비밀번호확인"
            type="password"
            :rules="passwordCheckRules"
            required
          />
          <v-text-field
            class="mt-3"
            v-model="nickname"
            label="닉네임"
            type="email"
            :rules="nicknameRules"
            required
          />
          <v-btn class="mt-3 signup-btn" type="submit" :disabled="!valid">
            가입하기
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
      email: "",
      password: "",
      passwordCheck: "",
      nickname: "",
      emailRules: [
        // 이메일칸에 값이 있는지
        (v) => !!v || "이메일은 필수입니다.",
        // 이메일 정규 표현식
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      passwordRules: [(v) => !!v || "비밀번호는 필수 입니다."],
      passwordCheckRules: [
        (v) => !!v || "비밀번호 확인은 필수 입니다.",
        (v) => v === this.password || "비밀번호가 같지 않습니다.",
      ],
      nicknameRules: [(v) => !!v || "닉네임은 필수 입니다."],
    };
  },
  methods: {
    signupForm() {
      this.$store.dispatch("ON_SIGNUP", {
        email: this.email,
        password: this.password,
        nickname: this.nickname,
      });
    },
  },
};
</script>

<style scoped>
.signup-card {
  width: 100%;
  min-height: 40vh;
  margin: 0 auto 0 auto;
}
.signup-form {
  width: 460px;
  margin: 0 auto 0 auto;
}
.signup-btn {
  width: 460px;
  /* margin: 0 auto 0 auto; */
}
</style>
