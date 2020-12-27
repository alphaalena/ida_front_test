<template>
  <main class="products-wrapper">
    <div v-if="products.length === 0" class="empty-products">
      Товаров нет
    </div>
    <div v-if="$store.state.isProductsLoading" class="is-loading">
      Загрузка товаров...
    </div>
    <div class="products-list">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </main>
</template>
<script>
import ProductCard from '~/components/product-components/product-card';

export default {
  name: 'categoryProducts',
  components: { ProductCard },
  props: {
    products: Array,
  },
};
</script>

<style lang="scss" scoped>
.products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 272px;
  grid-gap: 16px;
  padding-bottom: 16px;
}
</style>
