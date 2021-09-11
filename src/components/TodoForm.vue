<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="titleValue" />
    </div>
    <div>
      <label for="description">説明</label>
      <textarea id="description" v-model="descriptionValue" />
    </div>
    <div>
      <label for="status">ステータス</label>
      <select id="status" v-model="statusValue">
        <option value="waiting">waiting</option>
        <option value="working">working</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </div>
    <button @click="onSubmit">更新する</button>
  </form>
</template>

<script lang="ts">
import { Status } from "@/repositories/TodoRepository/types";
import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: String as PropType<Status>,
      default: "waiting",
    },
  },
  computed: {
    titleValue: {
      get(): string {
        return this.title;
      },
      set(v: string): void {
        this.$emit("update:title", v);
      },
    },
    descriptionValue: {
      get(): string {
        return this.description;
      },
      set(v: string): void {
        this.$emit("update:description", v);
      },
    },
    statusValue: {
      get(): string {
        return this.status;
      },
      set(v: Status): void {
        this.$emit("update:status", v);
      },
    },
  },
  methods: {
    onSubmit(): void {
      this.$emit("submit");
    },
  },
});
</script>
