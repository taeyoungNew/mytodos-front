<template>
  <div>
    <v-card class="mx-auto" color="#6fafb8" dark max-width="1000">
      <v-card outlined class="mx-auto" color="#6fafb8" max-width="1000">
        <v-card-title>
          <v-icon large left> mdi-notebook-edit </v-icon>
          {{ exTodo[0].updateTime.substr(0, 10) }}
        </v-card-title>
        <div v-for="(item, index) in exTodo" :key="index">
          <v-card-text class="pa-5 font-weight-bold">
            <v-icon v-if="item.done" left>mdi-check-circle</v-icon>
            <v-icon v-else left>mdi-check-circle-outline</v-icon>
            {{ item.todoContent }}
          </v-card-text>
        </div>
      </v-card>
      <!-- <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar colo="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>민태영</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    exTodo: {
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
