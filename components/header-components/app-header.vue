<template>
  <header class="header">
    <heading/>
    <cart/>
  </header>
</template>
<script>
import Cart from '~/components/header-components/cart';
import Heading from '~/components/header-components/heading';

export default {
  name: 'appHeader',
  components: { Heading, Cart },
};
</script>

<style>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
