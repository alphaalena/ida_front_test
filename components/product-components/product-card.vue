<template>
  <div class="product-card">
    <rating :rating="product.rating" />
    <add-to-cart :is-active="isProductInCart" @click="addToCart" />
    <product-image :photo="product.photo" />
    <product-content :price="product.price" :title="product.name" />
  </div>
</template>
<script>
import Rating from '~/components/product-components/rating';
import AddToCart from '~/components/product-components/add-to-cart';
import ProductImage from '~/components/product-components/product-image';
import ProductContent from '~/components/product-components/product-content';

export default {
  name: 'productCard',
  components: { ProductContent, ProductImage, AddToCart, Rating },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('addProductToCart', this.product.id);
    },
  },
  computed: {
    isProductInCart() {
      return this.$store.state.cart[this.product.id] === true;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  & .rating {
    position: absolute;
    top: 16px;
    left: 16px;
  }

  & .add-to-cart {
    position: absolute;
    top: 16px;
    right: 16px;
  }
}
</style>
