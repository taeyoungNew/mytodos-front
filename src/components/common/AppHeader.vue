<template>
  <div>
    <v-app-bar class="app-bar" color="#D6EBEE">
      <v-card class="navi-card" v-if="drawer">
        <v-navigation-drawer permanent>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg">
                </v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ setMe.nickname }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ setMe.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item link>
              <v-list-item-icon>
                <font-awesome-icon icon="fa-solid fa-pen" style="color: gray" />
              </v-list-item-icon>
              <v-list-item-title @click="showLists">
                TodoList확인!
              </v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="sharePage">
                다른 사람들 보러가기
              </v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="showExLists">
                지금까지 리스트 보기
              </v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-off</v-icon>
              </v-list-item-icon>
              <v-list-item @click="onLogout">
                <v-list-item-title> 로그아웃 </v-list-item-title>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <v-row>
        <v-col>
          <div>
            <router-link class="home-button" to="/MainView">HOME</router-link>
          </div>
        </v-col>
      </v-row>
      <template>
        <v-row class="login-signup" no-gutters justify="end">
          <v-col cols="2" v-if="setMe !== null">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#606A6B">
            </v-app-bar-nav-icon>
          </v-col>
          <v-col cols="3" v-else>
            <v-list-item style="color: #606a6b" link @click="loginLogout">
              로그인/회원가입
            </v-list-item>
          </v-col>
        </v-row>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    setMe() {
      return this.$store.state.setMe;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    loginLogout() {
      this.$router.push("/SignupView").catch(() => {});
    },
    showLists() {
      this.$router.push("/MainView").catch(() => {});
    },
    async onLogout() {
      localStorage.clear();
      await this.$store.dispatch("ON_LOGOUT");
      this.$router.push("/").catch(() => {});
      this.drawer = false;
    },
    showExLists() {
      this.$router.push("/ExTodoMyList").catch(() => {});
    },
    sharePage() {
      alert("준비중입니다.");
    },
  },
};
</script>

<style scoped>
.app-bar {
  background-color: #6fafb8;
}
.navi-card {
  position: absolute;
  top: 64px;
  left: 995px;
}
/* .hover-navi {
  position: ;
} */
.home-button {
  margin: 20px;
  color: #606a6b;
  /* text-decoration-color: ; */
}
/* .logoutBtn {
  cursor: pointer;
} */
.login-signup {
  margin-left: 30px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
