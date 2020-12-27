<template>
  <div class="products-page">
    <products-filter class="filters" />
    <category-products :products="products" class="products" />
  </div>
</template>

<script>
import CategoryProducts from '~/components/product-components/category-products';
import ProductsFilter from '~/components/product-components/products-filter';
import { productsRoutingMixin } from '~/components/product-components/products-routing-mixin';

export default {
  name: 'products',
  mixins: [
    productsRoutingMixin,
  ],
  components: { ProductsFilter, CategoryProducts },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.$store.dispatch('loadProducts', this.currentCategoryId);
    },
  },
};
</script>

<style lang="scss" scoped>
.products-page {
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-template-rows: 97px 1fr;

  & .filters {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  & .products {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
}
</style>

