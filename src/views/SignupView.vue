<template>
  <div id="main">
    <template>
      <v-row no-gutters class="btns">
        <v-col>
          <v-card class="pa-3 card-btn" @click="formBtn(login)"> login </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3 card-btn" @click="formBtn(singup)">
            signup
          </v-card>
        </v-col>
      </v-row>
      <login-form v-if="loginBtn" />
      <signup-form v-if="signupBtn" />
    </template>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
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
  },
  watch: {
    setMe(value) {
      if (value) {
        this.$router.push({
          path: "/",
        });
      }
    },
  },
  middleware: "anonymous",
};
</script>

<style scoped>
#main {
  background-color: antiquewhite;
  width: 1250px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
.btns {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.card-btn {
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
}
</style>
