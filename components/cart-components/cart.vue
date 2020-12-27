<template>
  <div :class="{'is-opened': isOpened}" class="cart-wrapper" @click.prevent.stop="closeCart">
    <div class="side-cart">
      <cart-header />
      <cart-empty v-if="isCartEmpty" />
      <cart-products v-if="!isCartEmpty" />
      <cart-form v-if="!isCartEmpty" />
    </div>
  </div>
</template>

<script>
import CartHeader from '~/components/cart-components/cart-header';
import CartEmpty from '~/components/cart-components/cart-empty';
import CartProducts from '~/components/cart-components/cart-products';
import CartForm from '~/components/cart-components/cart-form';

export default {
  name: 'cart',
  components: { CartForm, CartProducts, CartEmpty, CartHeader },
  props: {
    isOpened: Boolean,
  },
  methods: {
    closeCart(event) {
      if (event.target.classList.contains('cart-wrapper')) {
        this.$store.commit('closeCart');
      }
    },
  },
  computed: {
    isCartEmpty() {
      return this.$store.getters.productsInCartCount === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.side-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 460px;
  z-index: 1;
  background-color: white;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 52px 48px;
}

.cart-wrapper {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);

  &.is-opened {
    display: block;
  }

  .cart-header {
    padding-bottom: 24px;
  }
}

.cart-products {
  margin-bottom: 32px;
}

.cart-form {
  align-self: stretch;
}
</style>
