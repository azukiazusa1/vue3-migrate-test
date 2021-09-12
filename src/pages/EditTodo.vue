<template>
  <div>
    <h2>TODOを編集する</h2>
    <todo-form
      @submit="onSubmit"
      v-model:title="title"
      v-model:description="description"
      v-model:status="status"
    />
  </div>
</template>

<script lang="ts">
import TodoForm from "@/components/TodoForm.vue";
import { Status } from "@/repositories/TodoRepository/types";
import Vue from "vue";

type Data = {
  title: string;
  description: string;
  status: Status;
};

export default Vue.extend({
  components: { TodoForm },
  data(): Data {
    return {
      title: "",
      description: "",
      status: "waiting",
    };
  },
  created() {
    if (!this.$store.getters["todos/findById"](this.id)) {
      this.$store.dispatch("todos/findTodo", this.id);
    }

    const { title, description, status } = this.$store.getters[
      "todos/findById"
    ](this.id);
    this.title = title;
    this.description = description;
    this.status = status;
  },
  computed: {
    id() {
      return Number(this.$route.params.id);
    },
  },
  methods: {
    onSubmit(): void {
      this.$store.dispatch("todos/updateTodo", {
        id: this.id,
        params: {
          title: this.title,
          description: this.description,
          status: this.status,
        },
      });

      this.$router.push("/");
    },
  },
});
</script>
