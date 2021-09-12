<template>
  <label>
    {{ label }}
    <input id="input" v-bind="$attrs" v-on="inputListeners" />
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
  computed: {
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: (e) => this.$emit("input", e.target.value),
      });
    },
  },
});
</script>
