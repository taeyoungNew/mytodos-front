<template>
  <div id="main">
    <div class="main-content">
      <v-row no-gutters class="btns">
        <v-col cols="6">
          <v-card class="pa-3 card-btn" @click="formBtn(login)"> login </v-card>
        </v-col>
        <v-col>
          <v-card cols="6" class="pa-3 card-btn" @click="formBtn(singup)">
            signup
          </v-card>
        </v-col>
        <v-col cols="12">
          <login-form v-if="loginBtn" />
        </v-col>
        <v-col cols="12">
          <signup-form v-if="signupBtn" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
// import SuccessSignup from "@/components/common/SuccessSignup.vue";
export default {
  components: { SignupForm, LoginForm },
  data() {
    return {
      login: "login",
      singup: "singup",
      loginBtn: true,
      signupBtn: false,
    };
  },
  methods: {
    formBtn(param) {
      if (param === "login") {
        this.loginBtn = true;
        this.signupBtn = false;
      }
      if (param === "singup") {
        this.loginBtn = false;
        this.signupBtn = true;
      }
    },
  },
  computed: {
    setMe() {
      return this.$store.state.setMe;
    },
    checkSignupMessage() {
      return this.$store.state.signupMessage;
    },
  },
  watch: {
    setMe(value) {
      if (value) {
        this.$router.push({
          path: "/",
        });
      }
    },
    checkSignupMessage(payload) {
      if (payload === false) {
        let login = "login";
        this.formBtn(login);
      }
    },
  },
  middleware: "anonymous",
};
</script>

<style scoped>
#main {
  position: relative;
  background-color: #d6ebee;
  width: 1250px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
.main-content {
  /* margin-top: 10px; */
  background-color: white;
  height: 100vh;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.btns {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.card-btn {
  color: #606a6b;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
}
.success-message {
  position: absolute;
  top: 0%;
  z-index: auto;
}
</style>
