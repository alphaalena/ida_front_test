<template>
  <div :justify-end="justifyEnd" class="column">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'column',
  props: {
    justifyEnd: Boolean,
  },
};
</script>
<style>
.column {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.column[justify-end] {
  height: 100%;
  justify-content: flex-end;
  text-align: left;
}
</style>
