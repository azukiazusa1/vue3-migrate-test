<template>
  <label>
    {{ label }}
    <input id="input" v-bind="$attrs" v-on="inputListeners" />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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
