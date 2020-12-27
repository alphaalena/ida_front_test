<template>
  <div :class="{'fixed': isCartOpened}" class="shop">
    <div class="header-wrapper" />
    <div class="header-content">
      <app-header />
    </div>
    <div class="sidebar">
      <sidebar />
    </div>
    <div class="products-wrapper">
      <Nuxt />
    </div>
    <cart :is-opened="isCartOpened" />
  </div>
</template>

<script>
import AppHeader from '~/components/header-components/app-header';
import Sidebar from '~/components/sidebar-components/sidebar';
import Cart from '~/components/cart-components/cart';

export default {
  components: { Cart, Sidebar, AppHeader },
  computed: {
    isCartOpened() {
      return this.$store.state.isCartOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 161px 1104px 1fr;
  grid-template-rows: 66px 1fr;

  &.fixed {
    overflow: hidden;
  }
}

.header {
  &-wrapper {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
    border-radius: 2px;
    background-color: #FFF;
    box-shadow: 0 0 10px rgba(24, 24, 24, 0.1);
  }

  &-content {
    grid-column: 2 / span 2;
    grid-row: 1/ span 1;
  }
}

.sidebar {
  grid-row: 2 / -1;
  grid-column: 2 / span 1;
}

.products-wrapper {
  grid-row: 2 / -1;
  grid-column: 3 / span 1;
}
</style>
