<template>
  <label>
    {{ label }}
    <input id="input" v-bind="$attrs" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
  },
});
</script>
