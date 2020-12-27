<template>
  <input v-maska="mask" :placeholder="placeholder" class="app-input" type="text" v-bind:value="value" @input="updateValue">
</template>

<script>
import { maska } from 'maska';

export default {
  name: 'appInput',
  directives: {
    maska,
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    mask: {
      type: String,
      default: '',
    },
    value: String,
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-input {
  height: 50px;
  width: 100%;
  border: none;
  background-color: #F8F8F8;
  padding: 14px;
  color: #1F1F1F;
  border-radius: 8px;

  &::placeholder {
    color: #959DAD;
  }
}
</style>
