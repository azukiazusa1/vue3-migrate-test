<template>
  <label>
    {{ label }}
    <input
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', e.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  compatConfig: {
    COMPONENT_V_MODEL: false,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
});
</script>
