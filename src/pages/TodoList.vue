<template>
  <div>
    <template v-for="(todo, index) in todos" :key="todo.id">
      <span>{{ index + 1 }}</span>
      <todo-item :todo="todo" @delete="deleteTodo" />
    </template>
    <router-link to="/todos">追加</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "@/components/TodoItem.vue";
import { Todo } from "@/repositories/TodoRepository/types";

export default defineComponent({
  components: {
    TodoItem,
  },
  created(): void {
    this.$store.dispatch("todos/fetchTodo");
  },
  computed: {
    todos(): Todo[] {
      return this.$store.getters["todos/getTodos"];
    },
  },
  methods: {
    deleteTodo(id: number) {
      this.$store.dispatch("todos/deleteTodo", id);
    },
  },
});
</script>
