<template>
  <div :justify-center="justifyCenter" :justify-start="justifyStart" :space-between="spaceBetween" class="row">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'row',
  props: {
    justifyStart: Boolean,
    justifyCenter: Boolean,
  },
};
</script>
<style>
.row {
  justify-content: space-between;
  text-align: justify;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 60px;
  background-color: #000;
}

.row[justify-start] {
  justify-content: flex-start;
}

.row[justify-center] {
  justify-content: center;
}

.row[spaceBetween] {
  justify-content: space-between;
}
</style>
