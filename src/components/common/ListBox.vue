<template>
  <div>
    <v-card>
      <v-subheader>2022-10-31</v-subheader>
      <v-list-item-group>
        <v-card outlined class="list-card pa-5">
          <span :style="{ color: checkColor }" class="check-icon">
            <font-awesome-icon icon="fa-solid fa-check" />
          </span>
          봄이 산책시키기
        </v-card>
        <v-card outlined class="list-card pa-5">
          <span :style="{ color: checkColor }" class="check-icon">
            <font-awesome-icon icon="fa-solid fa-check" />
          </span>
          프로젝트 메인페이지 만들기
        </v-card>
      </v-list-item-group>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkColor: "",
    };
  },
};
</script>

<style></style>
