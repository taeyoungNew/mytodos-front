<template>
  <div>
    <v-card>
      <v-subheader>{{ updateTime }}</v-subheader>
      <div v-for="todo in exTodo" :key="todo.id">
        <v-list-item-group>
          <v-card outlined class="list-card pa-5">
            <span :style="{ color: checkColor }" class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </span>
            {{ todo.todoContent }}
          </v-card>
        </v-list-item-group>
      </div>
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
      updateTime: this.exTodo[0].updateTime,
    };
  },
};
</script>

<style></style>
