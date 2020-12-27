<template>
  <div>
    <h1 class="type">TestList</h1>
  </div>

</template>
<script>
export default {
  name: 'heading',
  props: {
    type: {
      type: String,
      default: 'light',
    },
  },
};
</script>
<style scoped>
.type {
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;

  color: #59606D;
}

</style>
