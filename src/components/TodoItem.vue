<template>
  <div class="card">
    <div>
      <span class="title">
        <router-link :to="`/todos/${todo.id}`">{{ todo.title }}</router-link>
      </span>
      <span class="status" :class="todo.status">{{ todo.status }}</span>
    </div>
    <div class="body">作成日：{{ formatDate }}</div>
    <hr />
    <div class="action">
      <button @click="clickDelete">削除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "@/repositories/TodoRepository/types";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  computed: {
    formatDate(): string {
      const { createdAt } = this.todo;
      return `${createdAt.getFullYear()}/${
        createdAt.getMonth() + 1
      }/${createdAt.getDate()}`;
    },
  },
  methods: {
    clickDelete() {
      this.$emit("delete", this.todo.id);
    },
  },
});
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  border: 1px solid;
  box-shadow: 2px 2px 4px gray;
  width: 250px;
}
.title {
  font-weight: 400;
  font-size: 25px;
  padding: 5px;
}
.status {
  padding: 3px;
}
.waiting {
  background-color: #e53935;
}
.working {
  background-color: #80cbc4;
}
.completed {
  background-color: #42a5f5;
}
.pending {
  background-color: #ffee58;
}
.body {
  margin: 5px;
}
.action {
  margin: 5px;
}
</style>
