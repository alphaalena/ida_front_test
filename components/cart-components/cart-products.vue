<template>
  <div class="cart-products">
    <h3 class="title">Товары в корзине</h3>
    <div class="cart-products-wrapper">
      <cart-product v-for="product in $store.getters.productsInCart" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import CartProduct from '~/components/cart-components/cart-product';

export default {
  name: 'cartProducts',
  components: { CartProduct },
};
</script>

<style lang="scss" scoped>
.cart-products {
  align-self: stretch;

  & .title {
    font-size: 18px;
    line-height: 23px;
    font-weight: 400;
    color: #59606D;
    padding-bottom: 16px;
  }

  &-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}
</style>
