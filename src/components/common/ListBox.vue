<template>
  <div>
    <v-card outlined class="mx-auto" color="#26c6da" dark max-width="1000">
      <v-card-title>
        <v-icon large left> mdi-twitter </v-icon>
        2022-11-02
      </v-card-title>
      <v-card-text class="pa-5 font-weight-bold">
        <v-icon left>mdi-check-outline</v-icon>
        봄이 산책시키기
      </v-card-text>
      <v-card-text class="pa-5 font-weight-bold">
        <v-icon left>mdi-check-outline</v-icon>
        투두리스트 공유페이지
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    exTodos: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      checkColor: "",
      // updateTime: this.exTodo[0].updateTime,
    };
  },
  computed: {
    isExTodos() {
      return this.exTodo;
    },
  },
  watch: {
    isExTodos(payload) {
      console.log("listBox props변경감지", payload);
      this.divTodos(payload);
      // this.divTodos(payload);
    },
  },
};
</script>

<style></style>
