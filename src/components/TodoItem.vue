<template>
  <div class="card">
    <div>
      <span class="title">
        <router-link :to="`todos/${todo.id}`">{{ todo.title }}</router-link>
      </span>
      <span class="status" :class="todo.status">{{ todo.status }}</span>
    </div>
    <div class="body">作成日：{{ todo.createdAt | formatDate }}</div>
    <hr />
    <div class="action">
      <button @click="clickDelete">削除</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Todo } from "@/repositories/TodoRepository/types";

export default Vue.extend({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  filters: {
    formatDate(date: Date): string {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
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
