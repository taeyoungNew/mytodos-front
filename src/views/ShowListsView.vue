<template>
  <div id="main">
    <div v-for="list in getLists" :key="list.index" class="todo-lists">
      <todo-lists :list="list" />
    </div>
  </div>
</template>

<script>
import TodoLists from "@/components/TodoLists.vue";
export default {
  components: { TodoLists },
  computed: {
    getLists() {
      return this.$store.state.loadTodos;
    },
  },
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
.todo-lists {
  margin-top: 20px;
}
</style>
