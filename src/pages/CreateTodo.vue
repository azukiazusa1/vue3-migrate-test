<template>
  <div>
    <h2>TODOを作成する</h2>
    <todo-form
      @submit="onSubmit"
      v-model:title="title"
      v-model:description="description"
      v-model:status="status"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoForm from "@/components/TodoForm.vue";
import { Status } from "@/repositories/TodoRepository/types";

type Data = {
  title: string;
  description: string;
  status: Status;
};

export default defineComponent({
  components: { TodoForm },
  data(): Data {
    return {
      title: "",
      description: "",
      status: "waiting",
    };
  },
  methods: {
    onSubmit(): void {
      this.$store.dispatch("todos/createTodo", {
        title: this.title,
        description: this.description,
        status: this.status,
      });

      this.$router.push("/");
    },
  },
});
</script>
